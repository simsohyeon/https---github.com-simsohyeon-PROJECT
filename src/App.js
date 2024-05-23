import './App.css';
import { BrowserView, MobileView } from 'react-device-detect'; //BrowserView, MobileView 컴포넌트를 import 하는 부분

function App() {
  return (
    <div className='App'>
      <BrowserView>
        데스크톱 브라우저!
      </BrowserView>
      <MobileView>
        모바일브라우저!
      </MobileView>
    </div>
  );
}

export default App;
