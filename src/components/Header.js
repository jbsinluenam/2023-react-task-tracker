import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

  const location = useLocation()


  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (
          <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
          />
      )}
      </header>
    </div>
  )
}

//default props
Header.defaultProps = {
  title: 'Task Tracker'
}

//set Header proptypes to string
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//set Header style with Css in Js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }


export default Header