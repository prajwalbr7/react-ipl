// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {Details} = props
  const {name, teamImageUrl, id} = Details

  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="list-team-card">
        <img src={teamImageUrl} alt={name} className="img-team-card-size" />
        <p className="para-team-card">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
