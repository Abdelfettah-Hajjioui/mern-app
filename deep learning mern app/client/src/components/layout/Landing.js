import React from "react";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>HD Attendance system</h1>
          <p className='lead'>
            HD attendance system is a project of recognizing the students face
            for taking attendance by using face biometrics based on high -
            definition monitor video and other information technology. HD
            attendance system is a project created by two students of ENSAH,
            Omar DAKKAK and Abdelfettah HAJJIOUI, and supervised by professor
            Mohammed ADDAM
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
