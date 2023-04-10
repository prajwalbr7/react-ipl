// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {Logos: [], isLoading: true}

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
    this.setState({Logos: UpdateData, isLoading: false})
  }

  render() {
    const {Logos, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        ) : (
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
        )}
      </div>
    )
  }
}
export default Home
