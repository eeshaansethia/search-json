import './css/App.css';
import Search from './components/Search';
import data from "./data/saved_links.json"

function App() {
  const linkData = data.links
  return (
    <div className="App">
      <Search link_details={linkData} />
    </div>

  );
}

export default App;
