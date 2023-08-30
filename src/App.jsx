import './App.css'
import Post from './components/Post/Post'
import Header from './components/Header/Header'
import NavItem from './components/NavItem/NavItem'
import Story from './components/Story/Story'

function App() {

  return (
    <>
      <Header/>
      <h1>Clon de Instagram aquí!</h1>
      {/* <Post/> */}
      <NavItem
        icon="https://cdn-icons-png.flaticon.com/128/9454/9454103.png"
        action="Search"
      />
      <NavItem
        icon="https://cdn-icons-png.flaticon.com/128/4406/4406266.png"
        action="Discover"
      />
      <NavItem
        icon="https://cdn-icons-png.flaticon.com/128/5948/5948543.png"
        action="Reels"
      />

      <Story
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmTWiq4hLhWqSuzboLCNO0sMMKO2gxXvm1w&usqp=CAU"
        username="instagram user"/>
      <Story
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmTWiq4hLhWqSuzboLCNO0sMMKO2gxXvm1w&usqp=CAU"
        username="instagram user"/>
      <Story
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmTWiq4hLhWqSuzboLCNO0sMMKO2gxXvm1w&usqp=CAU"
        username="instagram user"/>
    </>
  )
}

export default App
