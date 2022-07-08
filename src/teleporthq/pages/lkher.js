import React from 'react'

import { Helmet } from 'react-helmet'

import './lkher.css'

const Lkher = (props) => {
  return (
    <div className="lkher-container">
      <Helmet>
        <title>lkher - Idealistic Comfortable Gerbil</title>
        <meta
          property="og:title"
          content="lkher - Idealistic Comfortable Gerbil"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/omni-start-outline.svg"
        className="lkher-image"
      />
      <img
        alt="image"
        src="/playground_assets/omni-logo.svg"
        className="lkher-omni-logo"
      />
      <div className="lkher-container1">
        <span className="title-xl light">
          Inititate your profile so we can match you with i nteresting
        </span>
        <span className="title-xl semi-bold">acting</span>
        <span className="title-xl light">roles</span>
      </div>
      <p className="lkher-text03 paragraph-xl light">
        Make use of OM credits to deploy our smart engine that let you get
        accurate acting jobs that matches your preferences !
      </p>
      <img
        alt="image"
        src="/playground_assets/logo-omni-light.svg"
        className="lkher-image1"
      />
      <p className="lkher-text04 paragraph-xl light">
        Omni is a web based application that make use of artificial
        initelligence to help acting talents find their right acting role !
      </p>
      <p className="lkher-text05 paragraph-xl light">
        Copyright © 2022 . Omni® All right reserved
      </p>
      <p className="title-m light">
        <span className="lkher-text07">
          Privacy
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="lkher-text08">
          {' '}
          |
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="lkher-text09">
          Terms
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="lkher-text10">
          {' '}
          |
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="lkher-text11">Security</span>
      </p>
    </div>
  )
}

export default Lkher
