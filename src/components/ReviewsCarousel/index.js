// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {}

  render() {
    const {reviewsList} = this.props
    const {}

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button type="button" onClick={this.onChangeReview}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="..."
              className="arrow-img"
            />
          </button>
          <div className="person-container">
            <img src={} alt={'...'} className="person-img" />
            <h1 className="person-name">{}</h1>
            <p>{}</p>
            <p>{}</p>
          </div>
          <button type="button" onClick={this.onChangeReview}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="..."
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}
