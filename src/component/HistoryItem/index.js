import './index.css'

const HistoryItem = props => {
  const {historyDetails, onClickDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteHistory = () => {
    onClickDeleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="time-text">{timeAccessed}</p>
      <div className="image-domain-button-container">
        <div className="logo-title-domain-container">
          <img src={logoUrl} alt="domain logo" className="images" />
          <div className="domain-container">
            <p className="title-text">{title}</p>
            <p className="domain-text">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="button"
          onClick={deleteHistory}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
