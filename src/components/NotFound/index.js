// Write your code here

import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-cont">
    <Header />
    <div className="content-cont">
      <div className="response-cont">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not-found"
        />
        <h1 className="heading"> Lost Your Way? </h1>
        <p>
          {' '}
          Sorry, we cannot find that page. You will find lots to explore on the
          home page{' '}
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
