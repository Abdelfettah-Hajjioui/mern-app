import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Execute_python = () => {
  return (
    <Fragment>
      <div className='buttons'>
        <Link to='/Pfa_pres_capture' className='btn btn-light'>
          Capture Faces
        </Link>
        <Link to='/pfa_train' className='btn btn-light'>
          Train Images
        </Link>
        <Link to='/face_recognition' className='btn btn-light'>
          Recognize/Attendance
        </Link>
      </div>
      <br></br>
      <div className='buttons'>
        <Link to='/pfa_auto_Mail' className='btn btn-light'>
          Auto Mail
        </Link>
        <Link to='/' className='btn btn-light'>
          Back to main menu
        </Link>
      </div>
    </Fragment>
  );
};

export default Execute_python;
