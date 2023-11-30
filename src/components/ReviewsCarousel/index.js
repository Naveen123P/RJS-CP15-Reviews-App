// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onChangeReviewForward = () => {
    const {index} = this.state
    if (index >= 0 && index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onChangeReviewBackward = () => {
    const {index} = this.state
    if (index > 0 && index <= 3) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(reviewsList[index])
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.onChangeReviewBackward}
            value="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <div className="person-container">
            <img src={imgUrl} alt={username} className="person-img" />
            <p className="person-name">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.onChangeReviewForward}
            value="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
