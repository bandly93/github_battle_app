var React = require('react'),
    PropTypes = require('prop-types'),
    Link = require('react-router-dom').Link,
    PlayerInput = require("../components/player-input"),
    PlayerPreview = require("../components/player-preview");

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }
  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    });
  }
  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}>
                <button
                  className = "reset"
                  onClick = {this.handleReset.bind(null,"playerOne")} >
                  Reset
                </button>
            </PlayerPreview>
          }

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />
          }

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}>
                <button
                  className = "reset"
                  onClick = {this.handleReset.bind(null,"playerTwo")} >
                  Reset
                </button>
            </PlayerPreview>
          }
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className='button'
            to={{
              pathname: match.url + '/results',
              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
            }}>
              Battle
          </Link>}
      </div>
    )
  }
}

module.exports = Battle;