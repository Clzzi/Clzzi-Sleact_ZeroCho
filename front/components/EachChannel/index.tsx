import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { NavLink } from 'react-router-dom';
import React, { useEffect, VFC } from 'react';
import { IChannel, IUser } from '@typings/db';
import { useLocation, useParams } from 'react-router';

interface Props {
  channel: IChannel;
}

const EachChannel: VFC<Props> = ({ channel }) => {
  const { workspace } = useParams<{ workspace?: string }>();
  const location = useLocation();
  const date = localStorage.getItem(`${workspace}-${channel.name}`) || 0;

  const { data: userData } = useSWR<IUser>(`/api/users`, fetcher, {
    dedupingInterval: 2000,
  });
  const { data: count, mutate } = useSWR<number>(
    userData ? `/api/workspaces/${workspace}/channels/${channel.name}/unreads?after=${date}` : null,
    fetcher,
  );

  useEffect(() => {
    if (location.pathname === `/workspaces/${workspace}/channel/${channel.name}`) {
      mutate(0);
    }
  }, [mutate, location.pathname, workspace, channel]);

  return (
    <NavLink key={channel.name} activeClassName="selected" to={`/workspace/${workspace}/channel/${channel.name}`}>
      <span className={count !== undefined && count > 0 ? 'bold' : undefined}># {channel.name}</span>
      {count !== undefined && count > 0 && <span className="count">{count}</span>}
    </NavLink>
  );
};

export default EachChannel;
