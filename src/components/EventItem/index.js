// Write your code here
import './index.css'

const EventItem = props => {
  const {eachObject, imageClicked} = props
  const {id, imageUrl, name, location, registrationStatus} = eachObject

  const eventImageClicked = () => {
    imageClicked(id, registrationStatus)
  }

  return (
    <li>
      <img
        src={imageUrl}
        alt="event"
        className="eventImage"
        onClick={eventImageClicked}
      />
      <h2>{name}</h2>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
