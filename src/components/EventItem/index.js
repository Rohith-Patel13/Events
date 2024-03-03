// Write your code here
import './index.css'

const registrationStatusView = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  RegistrationsClosed: 'REGISTRATIONS_CLOSED',
}
console.log(registrationStatusView)

const EventItem = props => {
  const {eachObject} = props
  const {imageUrl, name, location, registrationStatus} = eachObject
  console.log(registrationStatus)

  return (
    <li>
      <img src={imageUrl} alt="event" className="eventImage" />
      <h2>{name}</h2>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
