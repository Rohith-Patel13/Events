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
      <button type="button" className="eventBtn">
        <img
          src={imageUrl}
          alt="event"
          className="eventImage"
          onClick={eventImageClicked}
        />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
