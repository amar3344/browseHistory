import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowseHistory extends Component {
  state = {
    searchInput: '',
    HistoryList: initialHistoryList,
  }

  getSearchedInput = event => {
    const emptyResults = 'Empty'
    const {HistoryList, searchInput} = this.state
    const isGetSearchInput = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (isGetSearchInput !== undefined) {
      this.setState({searchInput: event.target.value})
    } else {
      this.setState({HistoryList: emptyResults})
    }
  }

  onGetFilteredSearchInput = () => {
    const {searchInput, HistoryList} = this.state
    const emptyText = 'Empty'
    let emptyList
    const filterSearchedInput = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (filterSearchedInput !== undefined) {
      emptyList = filterSearchedInput
    } else {
      emptyList = emptyText
    }

    return emptyList
  }

  onClickDeleteHistory = id => {
    const {HistoryList} = this.state
    let updatedHistory = HistoryList.filter(eachItem => eachItem.id !== id)
    const resultText = 'Empty'
    if (updatedHistory.length === 0) {
      updatedHistory = resultText
      this.setState({HistoryList: updatedHistory})
    } else {
      this.setState({HistoryList: updatedHistory})
    }
  }

  renderEmptyHistory = () => {
    const {searchInput} = this.state
    return (
      <div className="show-text">
        <p className="no-history-text">There is no history to show</p>
      </div>
    )
  }

  renderFilteredSearchedList = () => {
    const {searchInput, HistoryList} = this.state
    const filterSearchedInput = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul className="bottom-container ">
        {filterSearchedInput.map(eachItem => (
          <HistoryItem
            key={eachItem.id}
            historyDetails={eachItem}
            onClickDeleteHistory={this.onClickDeleteHistory}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput, HistoryList} = this.state
    const isSearchedInput = HistoryList.filter(eachItem =>
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
          {isSearchedInput.length !== 0
            ? this.renderFilteredSearchedList()
            : this.renderEmptyHistory()}
        </div>
      </div>
    )
  }
}

export default BrowseHistory
