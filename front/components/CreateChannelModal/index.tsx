import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import Modal from '@components/Modal';
import { toast } from 'react-toastify';
import useInput from '@hooks/useInput';
import { useParams } from 'react-router';
import { IChannel, IUser } from '@typings/db';
import React, { useCallback, VFC } from 'react';
import { Button, Input, Label } from '@pages/SignUp/styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowCreateChannelModal: (flag: boolean) => void;
}

const CreateChannelModal: VFC<Props> = ({ show, onCloseModal, setShowCreateChannelModal }) => {
  const [newChannel, onChangeNewChannel, setNewChannel] = useInput('');
  const { workspace } = useParams<{ workspace: string }>();
  const { data: userData } = useSWR<IUser | false>(`/api/users`, fetcher, { dedupingInterval: 2000 });
  const { revalidate: revalidateChannel } = useSWR<IChannel[]>(
    userData ? `/api/workspaces/${workspace}/channels` : null,
    fetcher,
  );

  const onCreateChannel = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post(
          `/api/workspaces/${workspace}/channels`,
          {
            name: newChannel,
          },
          {
            withCredentials: true,
          },
        )
        .then(() => {
          setShowCreateChannelModal(false);
          revalidateChannel();
          setNewChannel('');
        })
        .catch((e) => {
          toast.error(e.response?.data, { position: 'bottom-center' });
        });
    },
    [newChannel],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span>채널</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </Label>
        <Button type="submit">생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
