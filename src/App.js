import { Route, Routes } from 'react-router-dom';
import './App.css';
import RandomBingoNumber from './page/RandomBingoNumber';
import Card1 from './component/Card1';
import  RegisterCard  from './page/RegisterCard';
import SafeBrowserMode from './page/SafeBrowserMode';
import  StartBingo  from './page/StartBingo';

function App() {
  return (
    <div className="App">
<SafeBrowserMode>
      <Routes>
        <Route path="/randombingonumber"  element = {<RandomBingoNumber/>}/>
        <Route path="/registerdcard"  element = {<RegisterCard/>}/>
        <Route path="/"  element = {<RegisterCard/>}/>
      <Route path="/card1" element={<Card1 />} />
      <Route path="/startbingo" element={<StartBingo />} />
       </Routes>
       </SafeBrowserMode>
    </div>
  );
}

export default App;
