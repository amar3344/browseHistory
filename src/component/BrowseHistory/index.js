import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class BrowseHistory extends Component {
  state = {searchInput: ''}

  getSearchedInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDeleteHistory = id => {
    const {searchInput} = this.state
    const updatedHistory = searchInput.filter(eachItem => eachItem.id !== id)

    this.setState({searchInput: updatedHistory})
  }

  render() {
    const {HistoryList} = this.props
    const {searchInput} = this.state
    const filterSearchedInput = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="top-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo-image"
            />
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                placeholder="search history"
                className="input"
                value={searchInput}
                onChange={this.getSearchedInput}
              />
            </div>
          </div>
          <ul className="bottom-container ">
            {filterSearchedInput.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                historyDetails={eachItem}
                onClickDeleteHistory={this.onClickDeleteHistory}
              />
            ))}
          </ul>
          <div className="result-container">
            <p className="no-history-text">There is no history to show</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowseHistory
