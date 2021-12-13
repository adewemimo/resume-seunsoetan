import './App.css';
import MainSection from './components/MainSection';
import SideBar from './components/SideBar';
import resumeDetails from './data/resumeDetails';

function App() {
  const {name, title, email, phone, description} = resumeDetails;
  return (
    <div className="App">
      <SideBar name={name} title={title} email={email} phone={phone} description={description}/>
      <MainSection  {...resumeDetails}/>
    </div>
  );
}

export default App;
