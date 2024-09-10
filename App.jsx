import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Center from './Components/Center'
import Icons from './Components/icons'
import './App.css'

import Box1 from './Components/Box1'
import Box2 from './Components/Box2'
import People from './Components/People'
import Mainheader from './Components/mainheader'


function Overall() {
  const iconsdata = [
    {image:"https://static.vecteezy.com/system/resources/previews/024/212/471/original/responsive-design-icon-vector.jpg", 
      title:"Fully Responsive", 
      description: "This theme will look great on any device, no matter the size!" },

    {image:"https://static.vecteezy.com/system/resources/previews/002/368/699/original/layers-icon-free-vector.jpg", 
      title:"Bootstrap 5 Ready", 
      description: "Featuring the latest build of the new Bootstrap 5 framework!"},

    {image:"https://static.vecteezy.com/system/resources/previews/002/142/076/original/line-icon-for-customize-vector.jpg", 
      title:"Easy to Use", 
      description: "Ready to use with your own content, or customize the source files!"},
    ]

    return(
      <div className="Overall">

{iconsdata.map((ic) => (<Icons {...ic} key={ic.title}/>))}

      </div>
    )

}

function PeopleOverall() {
  const peopledata = [
    
    {image1:"https://th.bing.com/th/id/OIP.kxaV2bQFNr_19_gE2xkGtAHaHa?w=500&h=500&rs=1&pid=ImgDetMain", 
      title1:"Isabelle", 
      description1: "This is Fantastic ! Thanks so much guys!" },

    {image1:"https://th.bing.com/th/id/OIP.YH35XOduZ9DShgK08o7SqAAAAA?rs=1&pid=ImgDetMain", 
      title1:"Margaret E.", 
      description1: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."},

    {image1:"https://sevenstar.org/wp-content/uploads/2022/07/graduate.png", 
      title1:"Sarah W.", 
      description1: "Thanks so much for making these free resources available to us!"},
    ]

    return(
      <div className="pploverall">

{peopledata.map((pp) => (<People {...pp} key={pp.title1}/>))}

      </div>
    )

}


function App() {


  return (
   <>
    <Header/>
    <Center/>
    <Overall/>
    <Box1/>
    <Box2/>
    <PeopleOverall/>
    <Mainheader title="What people are saying...." />

    </>
    


  )
}

export default App
