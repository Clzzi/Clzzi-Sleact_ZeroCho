import axios, { AxiosResponse } from 'axios';

const fetcher = (url: string): void => {
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((res: AxiosResponse<any>) => res.data)
    .catch();
};

export default fetcher;
