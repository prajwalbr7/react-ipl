// Write your code here
import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {Logos: []}

  componentDidMount() {
    this.getLogoCardItems()
  }

  getLogoCardItems = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const UpdateData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({Logos: UpdateData})
  }

  render() {
    const {Logos} = this.state
    return (
      <div className="container1">
        <div className="container-img-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-size"
          />
          <h1 className="heading-ipl-logo-style">IPL Dashboard</h1>
        </div>
        <ul className="ul-style">
          {Logos.map(eachItem => (
            <TeamCard Details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
