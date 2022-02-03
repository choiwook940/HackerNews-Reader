import React, {useEffect, useState} from "react";

export default function Dailynews(props) {
  const [writer, setWriter] = useState([])
  // useEffect(() => {
  //   fetch(`https://hacker-news.firebaseio.com/v0/user/${props.value[0].by}.json?print=pretty`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data) {
  //       setWriter(writer => [...writer, data])
  //       console.log(Date.now() / 1000 - data.created)
  //       console.log(new Date(data.created))
  //       const what_time = Date.now() / 1000 - data.created;
  //       console.log(what_time.getHours())
  //     }
  //   })
  // }, [])
  

  return <ul className="daily-news">
          {props.value.map((data) => {
            return (
              <li key={data.id}>
                <div className="news">
                  <div></div>
                  <span className="writer-id">{data.by}</span>
                  <strong>{data.title}</strong>
                  <span className="written-time">{data.time}</span>
                </div>
                <div className="sub">
                  <a href={data.url} className="sub-url">링크</a>
                  <span className="sub-score">{data.score}</span>
                  <span className="sub-descendants">{data.descendants}</span>
                </div>
              </li>
            )
          })}
        </ul>
}