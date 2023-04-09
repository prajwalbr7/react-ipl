// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeamLogo, matchStatus, result, competingTeam} = recentMatches

  const color = matchStatus === 'Lost' ? 'label-color1' : 'label-color2'
  return (
    <li className="list-container-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="list-img-sizing"
      />
      <h1 className="list-heading-style-team-card">{competingTeam}</h1>
      <p className="list-para-style-team-card">{result}</p>
      <p className={`list-label-style ${color}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
