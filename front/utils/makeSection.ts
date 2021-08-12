import dayjs from 'dayjs';
import { IChat, IDM } from '@typings/db';

const makeSection = (chatList: (IDM | IChat)[]) => {
  const sections: { [key: string]: (IDM | IChat)[] } = {};
  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
};

export default makeSection;
