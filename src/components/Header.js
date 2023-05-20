import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

  const onClick = () => {
    console.log('Click')
  }


  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button color='black' text="Add" onClick={onClick} />
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