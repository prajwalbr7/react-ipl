// Write your code here
import './index.css'

const LatestMatch = props => {
  const {LatestDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = LatestDetails
  return (
    <div className="latestmatch-container">
      <div className="latest-left-container">
        <h1 className="latest-heading-style">{competingTeam}</h1>
        <p className="latest-para-style">{date}</p>
        <p className="latest-para-style">{venue}</p>
        <p className="latest-para-style">{result}</p>
      </div>
      <div className="">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className=""
        />
      </div>
      <div className="latest-right-Container">
        <p className="latest-para-style1">First Innings</p>
        <p className="latest-para-style">{firstInnings}</p>

        <p className="latest-para-style1">Second Innings</p>
        <p className="latest-para-style">{secondInnings}</p>

        <p className="latest-para-style1">Man of The Match</p>
        <p className="latest-para-style">{manOfTheMatch}</p>

        <p className="latest-para-style1">Umpires</p>
        <p className="latest-para-style">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
