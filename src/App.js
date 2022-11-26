import './App.css';
import SideMenu from './Components/side_menu/SideMenu';
import Player_options from './Components/player_options/Player_options';
import News from './Components/news/News';


function App() {
  return (
    <div className="App">
      <SideMenu/>
      <News/>
      <Player_options/>
      
    </div>
  );
}

export default App;
