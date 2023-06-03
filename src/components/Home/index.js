// Write your code here

import Header from '../Header'
import '../index.css'

const Home = () => (
  <div className="home-con">
    <Header />
    <div className="home-img-cont">
      <img
        className="mobile-hm-img"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="desktop-hm-img"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
