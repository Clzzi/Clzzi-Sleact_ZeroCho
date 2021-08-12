import dayjs from 'dayjs';
import gravatar from 'gravatar';
import { ChatWrapper } from './styles';
import { IChat, IDM } from '@typings/db';
import regexifyString from 'regexify-string';
import React, { memo, VFC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Props {
  data: IDM | IChat;
}

const Chat: VFC<Props> = ({ data }) => {
  const { workspace } = useParams<{ workspace: string }>();
  const user = 'Sender' in data ? data.Sender : data.User;
  const result = useMemo(
    () =>
      data.content.startsWith('uploads\\') ? (
        <img src={`http://localhost:3095/${data.content}`} style={{ maxHeight: 200 }} />
      ) : (
        regexifyString({
          input: data.content,
          pattern: /@\[(.+?)\]\((\d+?)\)|\n]/g,
          decorator(match, index) {
            const arr: string[] | null = match.match(/@\[(.+?)\]\((\d+?)\)/)!;
            if (arr) {
              return (
                <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                  @{arr[1]}
                </Link>
              );
            }
            return <br key={index} />;
          },
        })
      ),
    [data.content],
  );

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
