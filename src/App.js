import './App.css';
import MainSection from './components/MainSection';
import SideBar from './components/SideBar';
import resumeDetails from './data/resumeDetails';

function App() {
  return (
    <div className="App">
      <SideBar {...resumeDetails}/>
      <MainSection  {...resumeDetails}/>
    </div>
  );
}

export default App;
