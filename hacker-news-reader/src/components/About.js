import React, {useState} from "react";

export default function About() {
  const [active, setActive] = useState(true)
  function handleButtonClick(e) {
    console.log(e.target.parentNode.parentNode.parentNode)
  }
  return <div class="about active">
      <div class="header">
        <button onClick={handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
            <path d="M12.51 1.86998L10.73 0.0999756L0.839996 9.99998L10.74 19.9L12.51 18.13L4.38 9.99998L12.51 1.86998Z" fill="#6B6C70"/>
          </svg>
        </button>
        <svg class="about-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9.9 15.3H8.1V13.5H9.9V15.3ZM11.763 8.325L10.953 9.153C10.305 9.81 9.9 10.35 9.9 11.7H8.1V11.25C8.1 10.26 8.505 9.36 9.153 8.703L10.269 7.569C10.602 7.245 10.8 6.795 10.8 6.3C10.8 5.31 9.99 4.5 9 4.5C8.01 4.5 7.2 5.31 7.2 6.3H5.4C5.4 4.311 7.011 2.7 9 2.7C10.989 2.7 12.6 4.311 12.6 6.3C12.6 7.092 12.276 7.812 11.763 8.325Z" fill="#6D6D74"/>
        </svg>
      </div>

      <h3>About this site</h3>
      <p>This is a simple Hacker News clone, built with <a href="">SvelteKit</a>, an application framework for <a href="">Svelte</a>.</p>
      <p>Svelte is a new kind of framework, one that compiles your component templates into fast, compact JavaScript — either client-side or server-side. You can read more about the design and philosophy in the <a href="">introductory blog post</a>.</p>
      <p>We're using <a href="">hnpwa-api</a> as a backend. The app is hosted on <a href="">Vercel</a>.</p>
      
      <h4>Introducing Karma</h4>
      <h5>Who has a ‘Super karma’ badge?</h5>
      <p>We give this badge to those who are ranked 100th or higher.</p>
      <h5>What does ‘karma’ mean?</h5>
      <p>Karma points are calculated as the number of upvotes a given user's content has received minus the number of downvotes.</p>
      <h5>How is a user's karma calculated?</h5>
      <p>Roughly, the number of upvotes on their posts minus the number of downvotes. These don't match up exactly. Some votes are dropped by anti-abuse software.</p>
      <h5>Do posts by users with more karma rank higher?</h5>
      <p>No.</p>
      <p>If you need more information, please check this link. <br /><a href="">https://news.ycombinator.com/newsfaq.html</a></p>
    </div>;
}