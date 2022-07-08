import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Idealistic Comfortable Gerbil</title>
        <meta property="og:title" content="Idealistic Comfortable Gerbil" />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/omni-start-outline.svg"
        className="home-image"
      />
      <img
        alt="image"
        src="/playground_assets/omni-logo.svg"
        className="home-omni-logo"
      />
      <div className="home-container1">
        <span className="title-xl light">Register your account and get</span>
        <span className="title-xl semi-bold">1000</span>
        <span className="title-xl light">OM credits !</span>
      </div>
      <p className="home-text03 paragraph-xl light">
        Make use of OM credits to deploy our smart engine that let you get
        accurate acting jobs that matches your preferences !
      </p>
      <img
        alt="image"
        src="/playground_assets/ui-search-illustration.svg"
        className="home-ui-search-illustration"
      />
      <div className="home-auth-container">
        <div className="home-container2">
          <span className="title-l semi-bold">Welcome</span>
          <span className="title-l">to Omni !</span>
        </div>
        <p className="home-text06 paragraph-xl light">
          Please provide your informations
        </p>
        <div className="home-auth-error">
          <div className="home-container3">
            <span className="title-m semi-bold">Oops!</span>
            <span className="title-m light">
              your credentials are not valid.
            </span>
          </div>
          <p className="paragraph-l light">
            we couldn’t find an account with these credentials, we can always
            recover your account !
          </p>
        </div>
        <div className="home-text-input-container">
          <span className="title-s semi-bold">Username</span>
          <span className="home-text11 title-s semi-bold">*</span>
          <p className="home-text12 paragraph-l light">
            please provide us with your username
          </p>
          <div className="home-container4">
            <input
              type="text"
              placeholder="#omni_user"
              className="title-s input input-error light"
            />
          </div>
        </div>
        <div className="home-text-input-container1">
          <span className="title-s semi-bold">E-mail</span>
          <span className="home-text14 title-s semi-bold">*</span>
          <p className="home-text15 paragraph-l light">
            please provide us with your username
          </p>
          <div className="home-container5">
            <input
              type="text"
              placeholder="exemple@gmail.com"
              className="title-s input input-focus light"
            />
          </div>
        </div>
        <div className="home-text-input-container2">
          <span className="title-s semi-bold">Password</span>
          <span className="home-text17 title-s semi-bold">*</span>
          <p className="home-text18 paragraph-l light">
            please provide us with your username
          </p>
          <div className="home-container6">
            <input
              type="text"
              placeholder="****************"
              className="title-s input input-error light"
            />
          </div>
        </div>
        <div className="home-text-input-container3">
          <span className="title-s semi-bold">Confirm Password</span>
          <span className="home-text20 title-s semi-bold">*</span>
          <p className="home-text21 paragraph-l light">
            please provide us with your username
          </p>
          <div className="home-container7">
            <input
              type="text"
              placeholder="****************"
              className="title-s input input-focus light"
            />
          </div>
        </div>
        <div className="home-container8">
          <span className="paragraph-l light">
            Don’t have an omni account ?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="paragraph-l semi-bold">Sign up</span>
        </div>
        <button className="home-frame8button button">
          <span className="home-text24 title-s semi-bold">
            LOGGING TO ACCOUNT
          </span>
        </button>
        <p className="home-text25 paragraph-l light">
          Did you forget your password we can always recover it !
        </p>
      </div>
      <img
        alt="image"
        src="/playground_assets/logo-omni-light.svg"
        className="home-image1"
      />
      <p className="home-text26 paragraph-xl light">
        Omni is a web based application that make use of artificial
        initelligence to help acting talents find their right acting role !
      </p>
      <p className="home-text27 paragraph-xl light">
        Copyright © 2022 . Omni® All right reserved
      </p>
      <p className="title-m light">
        <span className="home-text29">
          Privacy
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text30">
          {' '}
          |
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text31">
          Terms
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text32">
          {' '}
          |
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text33">Security</span>
      </p>
    </div>
  )
}

export default Home
