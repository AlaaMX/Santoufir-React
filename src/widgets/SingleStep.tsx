import React from 'react'
import "../styles/SingleStep.css"
interface SingleStepProps {
  name: string,
    //@thq-prop-number
  number: string
}

const SingleStep = (props: SingleStepProps) => {
  return (<div className="single-step-single-step">
      <div className="single-step-step-number">
        <span className="single-step-text semi-bold title-m">
          {props.number}
        </span>
      </div>
      <span className="semi-bold title-s">{props.name}</span>
      <span className="single-step-text2 semi-bold">*</span>
    </div>)
}


export default SingleStep