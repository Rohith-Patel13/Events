import './index.css'

const registrationStatusView = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  RegistrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatusViewValue} = props

  switch (registrationStatusViewValue) {
    case '':
      return <h1>Click on an event, to view its registration details</h1>

    case registrationStatusView.yetToRegister:
      return <h1>{registrationStatusView.yetToRegister}</h1>

    case registrationStatusView.registered:
      return <h1>{registrationStatusView.registered}</h1>

    case registrationStatusView.RegistrationsClosed:
      return <h1>{registrationStatusView.RegistrationsClosed}</h1>

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
