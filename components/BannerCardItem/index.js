// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-More" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
