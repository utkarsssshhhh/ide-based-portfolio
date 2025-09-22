import { MainWindow } from "./components/MainWindow";
import { Sidebar } from "./components/Sidebar";


function App(){
  return <>
    <div className="flex">      
      <Sidebar/>
      <MainWindow/>
    </div>
  </>
}

export default App;