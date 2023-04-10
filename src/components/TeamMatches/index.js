// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {TeamMatchCard: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    console.log(fetchedData)
    const UpdateData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: {
        id: fetchedData.latest_match_details.id,
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        date: fetchedData.latest_match_details.date,
        firstInnings: fetchedData.latest_match_details.first_innings,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        matchStatus: fetchedData.latest_match_details.match_status,
        result: fetchedData.latest_match_details.result,
        secondInnings: fetchedData.latest_match_details.second_innings,
        umpires: fetchedData.latest_match_details.umpires,
        venue: fetchedData.latest_match_details.venue,
      },
      recentMatches: fetchedData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    console.log(UpdateData)
    this.setState({TeamMatchCard: UpdateData, isLoading: false})
  }

  render() {
    const {TeamMatchCard, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = TeamMatchCard
    const {match} = this.props
    const {params} = match
    const {id} = params
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
          <div className={`teamMatchesContainer ${id}`}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="teamMatch-Img-Sizing"
            />
            <h1 className="teamMatch-heading-style">Latest Matches</h1>
            <LatestMatch LatestDetails={latestMatchDetails} />
            <ul className="ul-style-team-match">
              {recentMatches.map(eachItem => (
                <MatchCard MatchCardDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
