import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  useEffect (() => {
    // const axios = require('axios')

    const options = {
      method: 'GET',
      url: 'https://kidsmathgames.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Host': 'kidsmathgames.p.rapidapi.com',
        'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
      }
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, []);

  return (
    <div>
      <h1>Hello Kids</h1>
    </div>
  )
}

export default Home
