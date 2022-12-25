import '../css/card.css'

function Card({ link_data }) {

    return (
        <div className="card-container">
            <a className="para-text" href={link_data} target="_blank" rel="noopener noreferrer">{link_data}</a>
        </div>

    )
}

export default Card

