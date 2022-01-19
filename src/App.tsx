import React, { useState, useCallback, useEffect } from 'react';
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  Image,
  Heading,
  MediaCard,
  Caption
} from '@shopify/polaris';
import './App.css'
import { ImportMinor } from '@shopify/polaris-icons';
import axios from 'axios';
interface AccountProps {
  onAction(): void;
}

export default function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [first, setFirst] = useState('');
  useEffect(() => {
    axios.get(
      'https://api.nasa.gov/planetary/apod',
      {
        params: {
          count: 10,
          'api_key': API_KEY
        }
      }
    ).then(data => {
      setPhoto(data['data'])
      setConnected(!connected)

    })
  }, [])
  const [photo, setPhoto] = useState<any | []>([])
  const [connected, setConnected] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <Page
      title=" "

    >
      <header className="header">
        <nav className="header__content">
          <div className="header__buttons">
            <button className="header__theme-button" title="Toggle Theme">
             <img src='' />
                </button>
                </div>
                </nav>
    </header>

      <main className="main-container section">
        <div className="content">


          <div className="posts">

            {
              photo.map(({ date, explanation, title, url }: any) => {
                return <>
                  <article
                    className="post"
                  >
                    <div className="post__header">
                      <div className="post__profile">
                        {title}
                      </div>
                      <div onClick={()=>setActive(!active)} className={`like-heart-btn  ${active?'active':''}`} >
                          <svg className="like-heart" viewBox="0 0 511.626 511.626" xmlns="http://www.w3.org/2000/svg">
                          <path className="heart-fill" d="M475.366,71.951c-24.175-23.606-57.575-35.404-100.215-35.404c-11.8,0-23.843,2.046-36.117,6.136
                          c-12.279,4.093-23.702,9.615-34.256,16.562c-10.568,6.945-19.65,13.467-27.269,19.556c-7.61,6.091-14.845,12.564-21.696,19.414
                          c-6.854-6.85-14.087-13.323-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556c-10.564-6.95-21.985-12.468-34.261-16.562
                          c-12.275-4.089-24.316-6.136-36.116-6.136c-42.637,0-76.039,11.801-100.211,35.404C12.087,95.552,0,128.288,0,170.162 c0,12.753,2.24,25.889,6.711,39.398c4.471,13.514,9.566,25.031,15.275,34.546c5.708,9.514,12.181,18.796,19.414,27.837 c7.233,9.042,12.519,15.27,15.846,18.699c3.33,3.422,5.948,5.899,7.851,7.419L243.25,469.937c3.427,3.429,7.614,5.144,12.562,5.144 s9.138-1.715,12.563-5.137l177.87-171.307c43.588-43.583,65.38-86.41,65.38-128.475C511.626,128.288,499.537,95.552,475.366,71.951
                          z"></path>
    
                         </svg>
                      </div>

                    </div>

                    <div className="post__content">
                      <div className="post__medias">
                        <img className="post__media" src={url} alt="Post Content" />
                      </div>
                    </div>
                    <div className="post__footer">
                      <div className="post__buttons">
                        <div className="post__indicators"></div>
                        <button className="post__button post__button--align-right">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
                            fill="currentColor"
                          />
                          </svg>
                        </button>
                      </div>
                      <div className="post__infos">
                        <div className="post__description">
                          <span>
                            {explanation}
                          </span>
                        </div>

                        <span className="post__date-time">{date}</span>
                      </div>
                    </div>
                  </article>
                </>
              })
            }



          </div>
        </div>
      </main>
    </Page>
  )



}

