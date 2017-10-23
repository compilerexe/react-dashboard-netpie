class Topic extends React.Component {

  render () {
    return (
      <div>
        <section className="section">
          <div className="container">
            <article className="message">
              <div className="message-header">
                <p className="message-header-text" id={this.props.topicHeader}>Message</p>
              </div>
              <div className="message-body">
                <p className="title" id={this.props.topicId}>connecting..</p>

                <div className="field has-addons">

                  <input className="input" type="text" id={this.props.fieldMessage}
                         placeholder="Type your message to topic ..."/>

                  <a className="button is-link" id={this.props.publishButton}>
                    Publish
                  </a>

                </div>

              </div>
            </article>
          </div>
        </section>
      </div>
    )
  }

}

const main = (

  <div className="container">
    <section className="section">
      <div className="container">
        <h1 className="title">NETPIE.io</h1>
        <h2 className="subtitle">
          React Dashboard
        </h2>
        <div className="notification">
          <p>appName: react dashboard netpie</p>
          <p>appId: {Config.appId}</p>
          <p>appKey: {Config.appKey}</p>
          <p>appSecret: {Config.appSecret}</p>
        </div>
      </div>
    </section>

    <Topic topicHeader='topic-header-ch1' topicId='incoming-messages-ch1' fieldMessage='field-msg-ch1'
           publishButton='publish-ch1'/>
    <Topic topicHeader='topic-header-ch2' topicId='incoming-messages-ch2' fieldMessage='field-msg-ch2'
           publishButton='publish-ch2'/>
    <Topic topicHeader='topic-header-ch3' topicId='incoming-messages-ch3' fieldMessage='field-msg-ch3'
           publishButton='publish-ch3'/>

  </div>

)

let app = document.getElementById('app')

ReactDOM.render(main, app)
