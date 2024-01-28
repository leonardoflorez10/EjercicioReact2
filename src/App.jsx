
import './App.css'
import Reviews from './components/Reviews'
import {data} from './components/data'
const {reviews} = data;

function App() {

    return <div className='App'>
      <Reviews reviews={reviews}></Reviews>

    </div>

}

export default App
