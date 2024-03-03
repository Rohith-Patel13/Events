// Write your code here
import './index.css'

const EventItem = props => {
  const {eachObject} = props
  const {imageUrl, name, location} = eachObject

  return (
    <li>
      <img src={imageUrl} alt="event" className="eventImage" />
      <h2>{name}</h2>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
