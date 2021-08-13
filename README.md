## 📢 Sleact [Slack Clone Coding With ZeroCho]
인프런 강의인 [<Sleact 클론 코딩>](https://www.inflearn.com/course/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%B1%84%ED%8C%85/dashboard)을 보고 배운점 및 소스코드를 올렸습니다.

### 느낀점 바로가기

<details open>
  <summary><strong>프로젝트 결과물</strong></summary>
  
  - **로그인 / 회원가입**
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129292893-ed9c9e13-a485-4fd4-afb2-bb170c4b3bb5.png" alt="login" />
    <img src="https://user-images.githubusercontent.com/62810965/129292924-12e3bcdc-0167-46fb-8d89-10ecc53bd753.png" alt="register" />
  </p>
  
  - **메인화면**
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129293598-86bc5eee-af38-47b6-a82a-5bfc6e6c0878.png" alt="Main" />
  </p>
  
  - **Channel**: 그룹채팅
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129293713-b5e6792b-e757-4e3e-8b4e-294714d7df6e.png" alt="Channel" />
  </p>
  
  - **Direct Message**: 개인채팅
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129293767-0abf707f-38c7-4480-9acb-1ceeef6fd62c.png" alt="DM" />
  </p>  
  
  - **각종 메뉴**: Profile, Workspace
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129293889-5f301868-1ee8-4047-a72f-89512ace81f3.png" alt="workspace" />
    <img src="https://user-images.githubusercontent.com/62810965/129293907-423cff38-51bc-4662-a33f-33f33e1101f5.png" alt="profile" />
  </p>
  
  - **각종 모달**: Workspace, Invite
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129293987-9c281fd6-f010-4e6c-9f69-ff4daead6fda.png" alt="workspace" />
    <img src="https://user-images.githubusercontent.com/62810965/129293996-33be14ff-7885-4307-a324-5b9767e76766.png" alt="profile" />
  </p>
  
  - **그 외**: Image, onLine, unRead
  <p align="center">
    <img src="https://user-images.githubusercontent.com/62810965/129294250-fa6ba1b7-1593-4ee5-9459-19d7708b99b9.png" alt="onLine" />
    <img src="https://user-images.githubusercontent.com/62810965/129294286-eb93ec20-a287-4dd0-9e14-bf00f9736e78.png" alt="unRead" />
    <img src="https://user-images.githubusercontent.com/62810965/129294357-3c6cf07f-af72-448d-ae3b-fb4daaecc537.png" alt="image" />
  </p>
  
</details>

### 사용기술
- **```React```** : Framework
- **```TypeScript```**: Language
- **```SWR```**: State Management
- **```Emotion```**: Styling Lib

<details>
  <summary>package.json</summary>
  
  ```
    "dependencies": {
        "@emotion/babel-plugin": "^11.3.0",
        "@emotion/react": "^11.4.1",
        "@emotion/styled": "^11.3.0",
        "@loadable/component": "^5.15.0",
        "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
        "@types/autosize": "^4.0.0",
        "@types/gravatar": "^1.8.3",
        "@types/react": "^17.0.16",
        "@types/react-dom": "^17.0.9",
        "autosize": "^5.0.1",
        "axios": "^0.21.1",
        "cross-env": "^7.0.3",
        "css-loader": "^6.2.0",
        "gravatar": "^1.8.1",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router": "^5.2.0",
        "react-router-dom": "^5.2.0",
        "react-toastify": "^7.0.4",
        "socket.io-client": "^2.4.0",
        "style-loader": "^3.2.1",
        "swr": "^0.5.6",
        "ts-node": "^10.2.0",
        "typescript": "^4.3.5"
      },
      "devDependencies": {
        "@babel/core": "^7.15.0",
        "@babel/preset-env": "^7.15.0",
        "@babel/preset-react": "^7.14.5",
        "@babel/preset-typescript": "^7.15.0",
        "@jjordy/swr-devtools": "^1.0.6",
        "@types/loadable__component": "^5.13.4",
        "@types/node": "^16.4.13",
        "@types/react-custom-scrollbars": "^4.0.8",
        "@types/react-mentions": "^4.1.3",
        "@types/react-router": "^5.1.16",
        "@types/react-router-dom": "^5.1.8",
        "@types/socket.io-client": "^1.4.35",
        "@types/webpack": "^5.28.0",
        "@types/webpack-bundle-analyzer": "^4.4.1",
        "@types/webpack-dev-server": "^3.11.5",
        "babel-loader": "^8.2.2",
        "dayjs": "^1.10.6",
        "eslint": "^7.32.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-config-react-app": "^6.0.0",
        "eslint-plugin-flowtype": "^5.9.0",
        "eslint-plugin-import": "^2.24.0",
        "eslint-plugin-jsx-a11y": "^6.4.1",
        "eslint-plugin-prettier": "^3.4.0",
        "eslint-plugin-react": "^7.24.0",
        "fork-ts-checker-webpack-plugin": "^6.3.2",
        "prettier": "^2.3.2",
        "react-custom-scrollbars": "^4.2.1",
        "react-mentions": "^4.3.0",
        "react-refresh": "^0.10.0",
        "regexify-string": "^1.0.16",
        "webpack": "^5.49.0",
        "webpack-bundle-analyzer": "^4.4.2",
        "webpack-cli": "^4.7.2",
        "webpack-dev-server": "^3.11.2"
      }
  ```
</details>


