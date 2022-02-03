import React, {useEffect, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import NewsList from "./NewsList.js"
import Dailynews from "./Dailynews.js"

export default function Home() {
  const [topstories, setTopstories] = useState([])
  const [newstories, setNewstories] = useState([])
  const [beststories, setBeststories] = useState([])
  const [dailynews, setDailynews] = useState([])
  const [showstories, setShowstories] = useState([])

  const storiesType = ["topstories", "newstories", "beststories", "showstories"]
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/${storiesType[0]}.json?print=pretty`)
    .then(res => res.json())
    .then(id => {
      for(let i = 0; i < 20; i ++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id[i]}.json?print=pretty`)
        .then(res => res.json())
        .then(data => {
          if(data) {
            setTopstories(topstories => [...topstories, data])
          }
        })
      }
    })
    fetch(`https://hacker-news.firebaseio.com/v0/${storiesType[1]}.json?print=pretty`)
    .then(res => res.json())
    .then(id => {
      for(let i = 0; i < 20; i ++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id[i]}.json?print=pretty`)
        .then(res => res.json())
        .then(data => {
          if(data) {
            setNewstories(newstories => [...newstories, data])
          }
        })
      }
    })
    fetch(`https://hacker-news.firebaseio.com/v0/${storiesType[2]}.json?print=pretty`)
    .then(res => res.json())
    .then(id => {
      for(let i = 0; i < 20; i ++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id[i]}.json?print=pretty`)
        .then(res => res.json())
        .then(data => {
          if(data) {
            if(i < 1) setDailynews(dailynews => [...dailynews, data])
            else setBeststories(beststories => [...beststories, data])
          }
        })
      }
    })
    fetch(`https://hacker-news.firebaseio.com/v0/${storiesType[3]}.json?print=pretty`)
    .then(res => res.json())
    .then(id => {
      for(let i = 0; i < 20; i ++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id[i]}.json?print=pretty`)
        .then(res => res.json())
        .then(data => {
          if(data) {
            setShowstories(showstories => [...showstories, data])
          }
        })
      }
    })
  }, [])
    

    return (<div className="home">
      <div>
        <h1>Daily News</h1>
        <Dailynews value={dailynews} />
        <ul className="sortNav">
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/ask">Ask</Link>
          </li>
          <li>
            <Link to="/show">Show</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<NewsList value={topstories} />} />          
          <Route path="/new" element={<NewsList value={newstories} />} />          
          <Route path="/ask" element={<NewsList value={beststories} />} />          
          <Route path="/show" element={<NewsList value={showstories} />} />          
        </Routes>
      </div>
    </div>)
}