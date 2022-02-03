import React, {useEffect, useState} from "react";

export default function NewsList(props) {
  // const [stories, setStories] = useState([])
  useEffect(() => {
  }, [])
  return <ul className="news-list">
          {props.value.map((data) => {
            return (
              <li key={data.id}>
                <strong>{data.title}</strong>
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
