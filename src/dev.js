import './dev.scss';
import ReactCkeditorWeibo from './main';

/*===example start===*/

// install: npm install afeiship/react-ckeditor-weibo --save
// import : import ReactCkeditorWeibo from 'react-ckeditor-weibo'

class App extends React.Component {
  state = {
    token: require('./token.json').token,
    value: `
      <h2>Hello</h2>
      <p>ckeditor is a very good editor</p>
      <p>React is so good</p>
      <p>Ruby lang is wonderful!</p>
    `
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="hello-react-ckeditor-weibo">
        <ReactCkeditorWeibo
          value={this.state.value}
          onChange={this._onChange}
          token={this.state.token}
          ref='rc'
        />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
