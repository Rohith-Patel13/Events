import './index.css'

const registrationStatusView = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  RegistrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatusViewValue} = props

  const yetToRegisterFunc = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetImage"
      />
      <p>A live performance brings so much to your relationship with dance.</p>
      <button type="button">Register Here</button>
    </>
  )

  const registeredFunc = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="yetImage"
      />
      <p>You have already registered for the event</p>
    </>
  )

  const registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yetImage"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </>
  )

  switch (registrationStatusViewValue) {
    case '':
      return <p>Click on an event, to view its registration details</p>

    case registrationStatusView.yetToRegister:
      return <h1>{yetToRegisterFunc()}</h1>

    case registrationStatusView.registered:
      return <h1>{registeredFunc()}</h1>

    case registrationStatusView.RegistrationsClosed:
      return <h1>{registrationClosed()}</h1>

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
