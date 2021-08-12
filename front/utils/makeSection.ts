import { IDM } from '@typings/db';
import dayjs from 'dayjs';

const makeSection = (chatList: IDM[]) => {
  const sections: { [key: string]: IDM[] } = {};
  chatList.forEach((chat: IDM) => {
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
