
import './App.css'
import Blog from './Components/Blog/Blog'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Navigation from './Components/Navigation/Navigation'

function App() {


  return (
    <>
      <Navigation></Navigation>

      <div className='md:flex mt-5 gap-10'>
        <Blog></Blog>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
