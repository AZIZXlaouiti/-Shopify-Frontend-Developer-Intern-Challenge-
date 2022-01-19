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
  // console.log(API_KEY)
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
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);
  const [connected, setConnected] = useState(false);
  console.log(photo)
  const handleFirstChange = useCallback((value) => setFirst(value), []);
  const handleLastChange = useCallback((value) => setLast(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);
  const handleCheckboxesChange = useCallback(
    (value) => setCheckboxes(value),
    [],
  );

  const toggleConnection = useCallback(() => {
    setConnected(!connected);
  }, [connected]);

  const breadcrumbs = [
    { content: 'Sample apps', url: '/sample-apps' },
    { content: 'Create React App', url: '/create-react-app' },
  ];
  const primaryAction = { content: 'New product' };
  const secondaryActions = [{ content: 'Import', icon: ImportMinor }];

  const choiceListItems = [
    { label: 'I accept the Terms of Service', value: 'false' },
    { label: 'I consent to receiving emails', value: 'false2' },
  ];

  const accountSectionDescription = connected
    ? 'Disconnect your account from your Shopify store.'
    : 'Connect your account to your Shopify store.';



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
                      <button className="post__button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z" fill="var(--text-dark)" stroke="var(--text-dark)" stroke-width="0.6"></path>
                        </svg>
                        
                      </button>

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

