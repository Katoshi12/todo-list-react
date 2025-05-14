import type {FC} from "react";
import SearchBar from "./components/SearchBar.tsx";


const App: FC = () => {
  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <SearchBar onAdd={(value) => console.log('Добавлено:', value)}/>
    </div>
  );
};

export default App;
