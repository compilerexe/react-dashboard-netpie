import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Messages from './components/Messages.jsx'

export default class Main extends Component {

  render () {

    return (

      <div className='container'>
        <div className='row'>

          <div className='col-12'>
            <div className='form-group'>
              <h1>NETPIE.io</h1>
              <h2>
                React Dashboard
              </h2>
            </div>
            <div className='form-group'>
              <div className='card card-body'>
                <p>appName: react dashboard netpie</p>
                <p>appId: {Config.appId}</p>
                <p>appKey: {Config.appKey}</p>
                <p>appSecret: {Config.appSecret}</p>
              </div>
            </div>
          </div>

          <div className='col-12'>

            <Messages.basic topicHeader='topic-header-ch1' topicId='incoming-messages-ch1' fieldMessage='field-msg-ch1'
                   publishButton='publish-ch1'/>


            <Messages.basic topicHeader='topic-header-ch2' topicId='incoming-messages-ch2' fieldMessage='field-msg-ch2'
                   publishButton='publish-ch2'/>


            <Messages.basic topicHeader='topic-header-ch3' topicId='incoming-messages-ch3' fieldMessage='field-msg-ch3'
                   publishButton='publish-ch3'/>

          </div>

        </div>

      </div>

    )

  }

}

ReactDOM.render(<Main/>, document.getElementById('app'))
