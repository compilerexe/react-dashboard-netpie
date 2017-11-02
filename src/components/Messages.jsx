// const Messages = (props) => {
//   return (
//     <div>
//       <div className='section'>
//         <div className='container'>
//           <div className='message'>
//             <div className='message-header'>
//               <p className='message-header-text' id={props.topicHeader}>Message</p>
//             </div>
//             <div className='message-body'>
//               <p className='title' id={props.topicId}>connecting..</p>
//
//               <div className='field has-addons'>
//
//                 <input className='input' type='text' id={props.fieldMessage}
//                        placeholder='Type your message to topic ...'/>
//
//                 <a className='button is-link' id={props.publishButton}>
//                   Publish
//                 </a>
//
//               </div>
//
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

const Messages = {
  basic: (props) => {
    return (
      <div className='form-group'>
        <div className='card'>
          <div className='card-header'>
            <span id={props.topicHeader}>Message</span>
          </div>
          <div className='card-body'>
            <p id={props.topicId}>connecting..</p>
            <div className="container row" style={{padding: 0}}>
              <div className="col-11">
                <input type="text" className="form-control" id={props.fieldMessage}
                       placeholder="Type your message to topic ..."/>
              </div>
              <div className="col-1">
                <button type='button' className='btn btn-primary' id={props.publishButton}>Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Messages
