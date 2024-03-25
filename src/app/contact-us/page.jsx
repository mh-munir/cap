"use client";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="main-contact">
         <div className="contact-section">
            <div className="contact-container">
              <div className="contact-heading">
                  <h2 className='contact-title'>Enroll Now</h2>
                  <p className='contact-subtitle'>Make sure your course. Confirm your job</p>
              </div>

              <div className="contact-form">
                <form action="">
                  <div className='input-group'>
                    <input className='input-field first-name' type="text" placeholder='*First Name'/>
                    <input className='input-field last-name' type="text" placeholder='*Last Name'/>
                  </div>
                  <div className='input-group'>
                    <input className='input-field' type="email" placeholder='*E-mail Address'/>
                  </div>
                  <div className='input-group'>
                    <input className='input-field' type="text" placeholder='*Phone Number'/>
                  </div>
                  <div className='input-group'>
                    <input className='input-field' type="text" placeholder='*Course Name'/>
                  </div>
                  <p className='form-text'>
                      The ACAP may keep you informed with personalized emails about services. See our <Link href="/">Privacy Policy</Link> for 
                      more details or to opt-out at any time.
                  </p>
                  <div className='form-checkbox'>
                      <input id='chexbox' type="checkbox" />
                      <label className='checkbox-label' htmlFor="chexbox">Subscribe me to receive email updates, ACAP does not share or sell personal information.</label>
                  </div>

                  <div className='form-footer'>
                    <button className='submit-btn' type='submit'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
         </div>
    </main>
  )
}
