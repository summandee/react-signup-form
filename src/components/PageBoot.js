import React from 'react'
// import '../App.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export default function PageBoot() {
  return (
    <>
        <div className='container'>
      <div>
        <h1> Jumbotron!</h1>
        <Image src="./images/bg 2.jpg"/>
          <p>
            This is a simple Jumbotron example.
          </p>
          <Button variant="success">
            Primary Button
          </Button>
        </div>
      </div>

    </>
  )
}
