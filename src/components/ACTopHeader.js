import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';

import "../components/ACTopHeader.css";

function ACTopHeader(props) {
    const [show, setShow] = useState(false);

    return (
        <>
        <button className="fixed-navigation" onClick={() => setShow(true)}><i><span className="closed">Navigation</span></i>
        {/* <i><span className="open">Close</span></i> */}
        </button>
        <div className="top-header d-flex align-items-center justify-content-start">
            <Link to="/"><img src="/ACLogo-white.png" style={{width: "150px"}}></img></Link>
    <h2 className="">{props.headername}</h2>
        </div>

        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default ACTopHeader
