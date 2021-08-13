## 🙇‍♂️ 느낀점
> **[Sleact 클론 코딩]** 강의를 대략 3일에 걸쳐 완강하고 배운점 및 느낀점을 적었습니다.

<details open>
  <summary><strong>배운점</strong></summary>
  
  - **package.lock.json**    
package.json에 깔려있는 dependencies 및 devDependencies는 해당 프로젝트가 어떤 라이브러리들을 다운로드해야 하고 또 의존하고 있는지를 알려주는 파일입니다. 그런데 그 dependencies 및 devDependencies에 있는 lib들조차 다른 lib 내지 파일들을 의존하고 있습니다. 즉, 프로젝트 → lib → 다른 lib 또는 파일들, 이렇게 의존되고 있다는 말인데 중간지점에서의 lib 들과 하위의 의존되는 lib 또는 파일의 버전이 다르게 되면 오류가 자주 일어나게 됩니다. 그 오류를 막기 위해서 하위 의존 lib 또는 파일들의 버전까지 명시 해 주는 게 package-lock.json입니다.
  
  - **babel의 사용이유?**    
개발할 때 Typescript만 쓰면 babel을 거치지 않고 모두 js로 변환할 수 있지만 html, css, img 등 여러 요소들이 다 있기 때문에 이것들을 모두 js로 바꿔주는 babel을 사용해야 편합니다.
  
  - **@emotion/babel-plugin**    
emotion을 사용할 때 @emotion/babel-plugin이라는 걸 설치하게 되면 특정 emotion component 내부에 있는 emtoion component에 대해 스타일을 먹일 수 있습니다. 이 외에도 압축 등 여러 가지 기능이 포함되어 있습니다.
  
  - **CORS와 2가지 해결방법**   
프론트가 localhost:3090이고 서버가 localhost:3095라고 가정했을 때 프론트에서 서버로 요청을 보낼 시에 요청을 post 하나만 보낸다고 해도 options라는 요청이 하나 더 가게 되어있습니다. 이것이 유명한 cors 때문에 하나를 더 보내는 것입니다. 만약 cors에 대한 처리가 프론트 및 백엔드에서 아무것도 되어있지 않을 경우 cors 에러가 날것이며 이것을 고치는 방법은 크게 2가지가 있는데 하나는 프론트 webpack 설정에서 서버로 보내는 비동기 url의 기본값을 서버 주소로 바꾸는 것이고 다른 하나는 서버에서 해당 오류 처리를 해주는 것입니다.
  
  - **프론트와 백엔드의 도메인이 다를경우 쿠키**    
프론트와 백엔드의 도메인이 다를 경우 로그인을 시도했을 때 프론트에서 백엔드로 쿠키를 전달할 수도 없고 백엔드에서 쿠키를 만들어 프론트로 전달할 수도 없습니다. 이 문제를 해결하려면 axios의 기준으로 get은 2번째 인자에, post는 3번째 인자에, 아래 코드를 치면 된다. 아래 코드와 같이 withCredentials 속성을 true로 주면 됩니다.
```js
  {
    withCredentials: true,
  }
```
  
  - **VFC 와 FC**    
TypeScript & React 컴포넌트에서 Props로 { children }을 받아오는 경우 해당 컴포넌트의 type은 FC입니다. 그러나 { children }를 받아오지 않을 경우에는 VFC를 적어주면 됩니다.
  
  - **SWR | revalidate 와 mutate의 차이점**    
SWR에서 revalidate와 mutate의 차이점은 revalidate는 호출 시 서버로 요청을 지속적으로 보내서 데이터를 가져옵니다. 반면 mutate는 서버에 요청을 보내지 않고 데이터를 수정할 수도 있고 서버로 나중에 보낼 수도 있습니다. 서버에 요청을 보내지 않고 데이터를 수정하는 것은 약간 프론트에서 state를 set할 때와 비슷합니다. 이를 이용해서 optimistic ui를 사용할 수도 있습니다. 
  
  - **Optimistic UI**    
Optimistic UI, 한국어로 직역하자면 낙관적인 UI이다. 요즘 인스타그램이나 네이버 블로그 등 좋아요 같은 유저 인터렉션을 많이 봤을 텐데 이것을 누르면 바로 좋아요에 불이 들어오며 좋아요가 된 것처럼 느끼게 된다. 그러나 이것은 색이 칠해진 것이지 서버에 실제로 좋아요가 된 것은 아니다. 로직을 설명하자면 사용자가 좋아요를 누르면 먼저 색을 칠한 후 서버에 요청을 보내고 만약 실패한다면 다시 색을 빼버리고 성공하면 그대로 두는 로직이다. 사용자의 기다림을 줄이며 사용자의 경험을 중시하는 느낌인데, 보통 개발자들은 Pessimistic UI라고 해서 서버에 먼저 요청을 보낸 후 결과에 따라 사용자에게 화면을 보여주는 경우가 많은데, 프론트에서 서버로 요청을 보내서 성공률이 97~99%이고, 에러가 1~3% 정도 일 때는 적용할만하다는 의견이 있다. 즉, Optimistic UI는 사용자 액션에 대한 서버의 결과를 거의 성공이라고 확신할 때 도입할 만한 것 같다 나중에 도담도담에 한번 추가해볼까...   

  - **SWR에서 전역 mutate가 있는 이유**    
보통 컴포넌트나 로직을 짤 때 SWR을 사용하면 코드의 상단부에서 API URL과 함께 data revalidate mutate error 등을 가져오게 되는데, 이는 곧 어떤 컴포넌트가 렌더링 될 때 최소 한 번은 서버에 요청을 보냄을 의미한다. 하지만 이 한 번의 요청도 낭비가 될 수 있기 때문에 요청은 안 해도 되지만 mutate는 필요할 때 전역적으로 swr에서 { mutate }를 import 해 올 수 있다.
  
  - **npm 패키지중 @types를 붙이는 패키지들**    
npm 패키지를 다운로드할 때 @tpyes를 붙여서 type 패키지도 같이 받아야 하는 lib가 있고 그렇지 않은 lib가 있다. 이것을 구분하는 방법은 다운로드하고자 하는 패키지를 npmjs 사이트에 검색해서 해당 lib의 이름 옆에 DT라고 되어있으면 @tpyes 패키지를 추가로 다운로드해야 하고 TS라고 쓰여 있으면 그냥 TS를 지원하는 lib이므로 추가로 다운로드하지 않아도 된다.
  
  - **stopPropagation으로 모달 영역밖 이벤트 제어**    
웹에서 모달을 구현할 때 모달 영역을 제외한 영역, 즉 바깥 영역을 클릭하면 모달이 꺼지는 기능을 익히 봤을 것이다. 해당 기능은 모달 영역의 부모 인자가 페이지 전체를 감싸고 있고 모달의 onClick 속성에 event.stopPropagation을 주어서 부모에게 이벤트 버블링이 되는 것을 막아서 onClick 감지를 못하게 한 후, 모달을 보여주는 state를 false로 변경해 모달을 없애는 것 같다.
  
  - **비구조화 할당해서 가져온 값을 이름 바꾸는법**    
아래 코드를 보면 useSWR에서 key, fetcher로 가져온 data를 userData로 이름을 바꿔줬다.
```js
  const { data: userDat } = useSWR(`${Back_URL}`, fetcher);
```
  
  - **Input이 들어가는 컴포넌트**     
input 태그가 들어가는 컴포넌트는 되도록 쪼개는 게 좋다. 그 이유는 input 태그에서 타이핑을 하면 계속 화면이 리 렌더링 되면서 자원을 잡아먹게 된다. 되도록 컴포넌트로 쪼개서 사용해야 최적화가 잘 된다.
  
  - **중첩 라우팅 규칙**    
보통 app.tsx 같은 곳에서 라우팅을 할 텐데 라우터의 파라미터로 받아오는 값 중 특정 라우터 파라미터에는 어떤 페이지가 나와야 한다 같은 룰이 있을 때가 있다. 예를 들어 /workspace/sleact에는 꼭 어떤 페이지가 나와야 하고 다른 /workspace/:workspace 같은 불특정한 페이지에는 해당 파라미터에 맞게 동적으로 렌더링 되어야 한다고 가정하면 라우팅 코드 중 아래에 해당하는 모든 파라미터에 대응되는 코드는 제일 밑에 써야 한다. 아래 코드 참조
```js
  <Route path="/workspace/sleact" component={SleactWorkSpace} />
  <Route path="/workspace/:workspace" component={WorkSpace} />
```
  
  - **제네릭 타입 명시**    
제네릭에서 interface or type지정하지 않고 직접 타입 명시하는법
```ts
  const { workspace, channel } = useParams<{workspace: string; channel: string;}>();
```
  
  - **NavLink**
Navigation Bar 만들 때 Link말고 NavLink사용하면 좋을듯, NavLink사용시 해당 페이지 URL과 NavLink에 지정해준 URL이 똑같으면 activeClass가 적용됨
  
  - ****
  
</details>

### 1일차
강의는 2장 끝까지 보았다. 실제 Slack 서비스의 로그인 및 회원가입 페이지를 구현하고 EsLint Prettier Babel Webpack Config 등 여러 가지 설정들을 직접 해보았는데 매우 흥미로웠다, CRA가 얼마나 대단하고 간편한 건지 새삼 깨닫게 되었다. 또 SWR 사용해서 로그인 회원가입 기능도 만들었는데 도담도 담에서 하는 로그인 / 회원가입 로직은 백엔드에서 발급받은 값을 프론트에서 받아 쿠키에 저장했는데 강의에서는 백엔드에서 쿠키를 받고 httponly를 사용해 브라우저가 자동으로 쿠키를 저장하게 만든 것 같다. axios로 서버에 요청을 보낼 때 withCredential 옵션을 사용해 쿠키를 보내야 하는 게 약간 흠이긴 하지만 좋은 것 같다. 결과적으로는 새로운 로직 및 기술을 배운 것 같다. SWR의 성능은 확실한 것 같다. 여러 옵션이 있어서 써먹기 좋을 듯.

### 2일차
강의는 4강까지 봤다. DM 관련 컴포넌트들이나 로직을 만졌는데 채팅 관련 프론트 작업을 처리하는 방법을 어느 정도 알게 된 것 같다. 또한 SWR로 여러 GET 관련 api들을 다루다 보니 이제는 익숙해진듯하다. styled-component나 emotion처럼 TypeScript로 Styling을 하는 lib들의 장점이 다른 lib들을 import 해올 수 있다는 점인 것 같다. 나중에 토이 프로젝트할 때도 쓸 것 같다. 셋째 날에는 5장, 넷째 날에는 6,7장을 듣고 정리해서 깃허브에 올릴 것 같다.
  
### 3일차

### 마무리
