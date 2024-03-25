"use client";
import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '../../public/assets/hero-img.png';
import Badge from '../../public/assets/image-2.png'
import BadgeBanner from '../../public/assets/bennar-img.png'
import Certificate from '../../public/assets/course-Certificate.png'
import Unleash from '../../public/assets/unleash.png'
import { CiCircleCheck } from "react-icons/ci";

export default function Home() {
  return (
    <main>
          <section className='hero-section'>
              <div className='hero-container'>
                  <div className='hero-content'>
                          <h1 className='hero-titile'>Advance your capacity you love.</h1>
                          <p className='hero-des'>Become a pro in your profession to build a better career. </p>
                          <Link className='hero-link' href="/">Find your program</Link>
                  </div>
                      <div className='hero-img'>
                        <Image src={HeroImg} priority={true}  alt='Advance your capacity you love.'/>
                      </div>
              </div>
          </section>
          <section className='mission-section'>
                <div className='mission-container'>
                  <div className='mission-item'>
                    <div className='mission-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="47.3" height="29.638" viewBox="0 0 47.3 29.638">
                              <g id="Group_4" data-name="Group 4" transform="translate(-33.603 -44.393)">
                                <path id="Path_10" data-name="Path 10" d="M80.309,50.358a2.825,2.825,0,0,0-1.583-.893q-9.942-2.444-19.916-4.873a5.921,5.921,0,0,0-2.915-.031Q47.082,46.7,38.252,48.854c-.987.235-1.974.439-2.93.752a2.389,2.389,0,0,0-1.473,3.338,2.718,2.718,0,0,0,1.974,1.442c1.677.407,3.338.815,5.03,1.222V67.313a3.241,3.241,0,0,0,.783,2.209,7.568,7.568,0,0,0,1.316,1.238,15.523,15.523,0,0,0,5.563,2.3,35.688,35.688,0,0,0,7.271.94,37.391,37.391,0,0,0,10.953-1.128,14.548,14.548,0,0,0,5-2.241,4.319,4.319,0,0,0,1.927-3.761c-.063-3.62-.016-7.255-.031-10.875,0-.313.11-.423.407-.5,1.081-.235,2.147-.5,3.228-.768a20.31,20.31,0,0,0,1.974-.533A2.382,2.382,0,0,0,80.309,50.358Zm-9.59,18.96a13.376,13.376,0,0,1-4.152,1.849A35.137,35.137,0,0,1,55.88,72.311a29.129,29.129,0,0,1-9.057-1.52,18.8,18.8,0,0,1-2.836-1.348,4.327,4.327,0,0,1-1.019-.909,1.647,1.647,0,0,1-.423-1.175q.024-5.5.016-11v-.329c.392.094.768.188,1.144.266,3.353.815,6.706,1.645,10.06,2.444l1.222.235.141.031.517.11.36.063.266.047.313.063.454.094.157.031a.345.345,0,0,0,.282-.047l.36-.078.329-.047.439-.094.2-.031.564-.11.266-.047L60,58.9l.313-.063c3.839-.924,7.725-1.865,11.627-2.8v.5c0,3.463-.031,6.926.031,10.389A2.683,2.683,0,0,1,70.719,69.318ZM78.8,52.552a1.753,1.753,0,0,1-.548.188q-9.989,2.444-19.978,4.873c-.345.078-.689.11-1.191.172-.642-.141-1.41-.313-2.194-.5-1.1-.266-2.209-.533-3.322-.8Q43.909,54.6,36.262,52.74a1.9,1.9,0,0,1-.642-.251.664.664,0,0,1,.016-1.16,1.96,1.96,0,0,1,.564-.235l20.072-4.889a4.205,4.205,0,0,1,1.974,0q9.966,2.421,19.916,4.858a2.8,2.8,0,0,1,.611.2A.7.7,0,0,1,78.8,52.552Z" fill="#3a3a3a"/>
                                <path id="Path_11" data-name="Path 11" d="M63.117,58.266c-.013-2.115-.008-4.231-.008-6.348v-.409c-.409.1-.771.2-1.139.265-.282.047-.362.169-.36.453.014,2.012.011,4.025,0,6.037a1.319,1.319,0,0,1-.124.584,4.473,4.473,0,0,0-.539,2.068c-.011.987.429,1.429,1.417,1.429a2.659,2.659,0,0,0,.274-.017,1.125,1.125,0,0,0,1.138-1.172,4.462,4.462,0,0,0-.5-2.25A1.519,1.519,0,0,1,63.117,58.266Z" transform="translate(15.504 4.034)" fill="#3a3a3a"/>
                              </g>
                        </svg>
                    </div>
                    <div className='mission-content'>
                        <h3 className='mission-title'>Learn online & Offline</h3>
                        <p className='mission-des'>at a flexible pace</p>
                    </div>
                  </div>
                  <div className='mission-item'>
                    <div className='mission-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48.265" height="35.467" viewBox="0 0 48.265 35.467">
                            <g id="Group_2" data-name="Group 2" transform="translate(-15.59 -25.992)">
                              <path id="Path_4" data-name="Path 4" d="M34.918,47.123a10.566,10.566,0,1,1,10.567-10.5A10.558,10.558,0,0,1,34.918,47.123Zm-.007-18.772a8.207,8.207,0,1,0,8.227,8.222A8.235,8.235,0,0,0,34.911,28.351Z" transform="translate(-1.198 0)" fill="#3a3a3a"/>
                              <path id="Path_5" data-name="Path 5" d="M51.81,65.132H49.548A28.5,28.5,0,0,0,48.9,62.2a10.04,10.04,0,0,0-5.051-5.819,10.5,10.5,0,0,0-4.481-1.071q-5.686-.013-11.362,0a10.041,10.041,0,0,0-10.05,9.575c0,.078-.017.147-.026.259H15.59a10.584,10.584,0,0,1,.484-3.221,12.639,12.639,0,0,1,12.1-8.971q5.517.091,11.043,0a12.271,12.271,0,0,1,7.106,2.193A12.646,12.646,0,0,1,51.68,63.63C51.749,64.114,51.767,64.606,51.81,65.132Z" transform="translate(0 -3.682)" fill="#3a3a3a"/>
                              <path id="Path_6" data-name="Path 6" d="M56.445,49.541a7.025,7.025,0,1,1,7.026-6.981A7.02,7.02,0,0,1,56.445,49.541Zm0-12.481a5.457,5.457,0,1,0,5.47,5.467A5.476,5.476,0,0,0,56.441,37.06Z" transform="translate(-4.622 -1.298)" fill="#3a3a3a"/>
                              <path id="Path_7" data-name="Path 7" d="M68.075,61.519H66.564a19.486,19.486,0,0,0-.423-1.951A6.715,6.715,0,0,0,59.8,54.983q-3.782-.013-7.555,0a6.535,6.535,0,0,0-1.71.224,6.718,6.718,0,0,0-2.469,1.235,9.532,9.532,0,0,0-1.58-.622A8.186,8.186,0,0,1,48.8,54.2a8.064,8.064,0,0,1,3.557-.777c2.452.035,4.9.035,7.348,0a8.385,8.385,0,0,1,8.28,7.1C68.032,60.836,68.041,61.165,68.075,61.519Z" transform="translate(-4.221 -3.746)" fill="#3a3a3a"/>
                            </g>
                        </svg>
                    </div>
                    <div className='mission-content'>
                        <h3 className='mission-title'>Learn with expert mentors</h3>
                        <p className='mission-des'>and build your portfolio</p>
                    </div>
                  </div>
                    <div className='mission-item'>
                    <div className='mission-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28.488" height="33.929" viewBox="0 0 28.488 33.929">
                              <g id="Group_3" data-name="Group 3" transform="translate(-40.021 -26.312)">
                                <path id="Path_8" data-name="Path 8" d="M68.292,39.569c0,1.792-.049,3.585.011,5.375.114,3.376-1.361,6.075-3.517,8.49a23.431,23.431,0,0,1-9.779,6.454,2.12,2.12,0,0,1-1.324.064A22.535,22.535,0,0,1,41.8,50.834a9.723,9.723,0,0,1-1.561-5.247c-.011-4.232,0-8.464-.016-12.7,0-.823.313-1.376,1.153-1.332,3.705.192,6.829-1.361,9.857-3.213a17.908,17.908,0,0,0,2.04-1.44,1.39,1.39,0,0,1,1.981.006,22.022,22.022,0,0,0,9.224,4.481,13.644,13.644,0,0,0,2.395.16c1.037.009,1.414.321,1.418,1.343C68.3,35.121,68.292,37.345,68.292,39.569Zm-27-6.881a3.661,3.661,0,0,0-.052.412c0,4.137-.032,8.274.013,12.41a8.9,8.9,0,0,0,1.367,4.644A21.61,21.61,0,0,0,53.855,58.91a1.487,1.487,0,0,0,.958-.056,22.921,22.921,0,0,0,9.459-6.426,11.566,11.566,0,0,0,3.039-8.192c-.1-3.517-.022-7.038-.022-10.558v-.97c-5.737-.582-7.056-1.108-13.018-5.155C47.373,31.949,46.5,32.3,41.289,32.688Z" fill="#3a3a3a"  />
                                <path id="Path_9" data-name="Path 9" d="M53.163,48.884c2.869-2.874,5.658-5.668,8.447-8.46,1.086-1.088,1.428-1.089,2.5-.025,1.807,1.8,1.807,1.8.016,3.59Q59.214,48.9,54.3,53.8c-.823.822-1.268.842-2.108.063q-2.444-2.265-4.862-4.556c-.766-.727-.774-1.117-.116-1.888,1.94-2.273,1.941-2.274,4.119-.253C51.922,47.713,52.5,48.263,53.163,48.884Zm0,4.448L64.247,42.268,62.758,40.6,53.144,50.3,49.3,46.725l-1.471,1.612Z" transform="translate(-1.861 -3.742)" fill="#3a3a3a" />
                              </g>
                        </svg>
                    </div>
                    <div className='mission-content'>
                        <h3 className='mission-title'>Ensure a job in field</h3>
                        <p className='mission-des'>backed by our Job Guarantee</p>
                    </div>
                  </div>
                </div>
          </section>
          <section className='career-section'>
            <div className='career-container'>
              <div className='career-heading'>
                <h2 className='career-title'>Transform your career. </h2>
                  <div className='career-img--border'>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="684" height="2" viewBox="0 0 684 2">
                          <defs>
                            <linearGradient id="linear-gradient" x1="0.942" y1="0.5" x2="0.003" y2="0.5" gradientUnits="objectBoundingBox">
                              <stop offset="0" stopColor="#fff"/>
                              <stop offset="0.519" stopColor="#1054b1"/>
                              <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                          </defs>
                          <g id="Group_577" data-name="Group 577" transform="translate(-618 -814)">
                            <rect id="Rectangle_1628" data-name="Rectangle 1628" width="684" height="2" transform="translate(618 814)" fill="url(#linear-gradient)"/>
                          </g>
                        </svg>
                  </div>
                  <p className='career-title--des'>
                      Our programs will teach you everything you need to get your first job in related fields 
                      as little as 3 months—even if you don’t have any previous experience.
                    </p>
              </div>

              <div className='career-items'>
                <div className="career-item career-item--first">
                  <div className='career-item--top'>
                      <h6 className='badge-title'>Job Guarantee </h6>
                      <Image className='badge-img' src={Badge} alt='badge'/>
                  </div>
                  <div className="career-item--body">
                    <h3 className='career-item--title'>Sales and Marketing</h3>
                    <p className='career-item--text'>Make your next company famous. Learn the skills you need to drive growth.</p>
                  </div>
                  <div className="career-item--footer">
                    <Link className='career-item--link' href="/sales-marketing">Explore &#62; </Link>
                  </div>
                </div>

                <div className="career-item career-item--second">
                  <div className='career-item--top'>
                      <h6 className='badge-title'>Income Guarantee </h6>
                      <Image className='badge-img' src={Badge} alt='badge'/>
                  </div>
                  <div className="career-item--body">
                    <h3 className='career-item--title'>Advanced Graphics Design</h3>
                    <p className='career-item--text'>Make your next company famous. Learn the skills you need to drive growth.</p>
                  </div>
                  <div className="career-item--footer">
                    <Link className='career-item--link' href="/graphics-design">Explore &#62; </Link>
                  </div>
                </div>

                <div className="career-item career-item--third">
                  <div className='career-item--top'>
                      <h6 className='badge-title'>Job Guarantee </h6>
                      <Image className='badge-img' src={Badge} alt='badge'/>
                  </div>
                  <div className="career-item--body">
                    <h3 className='career-item--title'>Software Design ( UI/UX)</h3>
                    <p className='career-item--text'>Make your next company famous. Learn the skills you need to drive growth.</p>
                  </div>
                  <div className="career-item--footer">
                    <Link className='career-item--link' href="/software">Explore &#62; </Link>
                  </div>
                </div>

                <div className="career-item career-item--fourth">
                  <div className='career-item--top'>
                      <h6 className='badge-title'>Job Guarantee </h6>
                      <Image className='badge-img' src={Badge} alt='badge'/>
                  </div>
                  <div className="career-item--body">
                    <h3 className='career-item--title'>Emotional Intelligence</h3>
                    <p className='career-item--text'>Make your next company famous. Learn the skills you need to drive growth.</p>
                  </div>
                  <div className="career-item--footer">
                    <Link className='career-item--link' href="/">Explore &#62; </Link>
                  </div>
                </div>
                <div className="career-item career-item--fifth">
                  <div className='career-item--top'>
                      <h6 className='badge-title'>Job Guarantee </h6>
                      <Image className='badge-img' src={Badge} alt='badge'/>
                  </div>
                  <div className="career-item--body">
                    <h3 className='career-item--title'>Advanced Digital Marketing</h3>
                    <p className='career-item--text'>Make your next company famous. Learn the skills you need to drive growth.</p>
                  </div>
                  <div className="career-item--footer">
                    <Link className='career-item--link' href="/marketing">Explore &#62; </Link>
                  </div>
                </div>
                <div className="career-item career-item--sixth">
                  <div className='career-item--top'>
                      <h6 className='badge-title'>Job Guarantee </h6>
                      <Image className='badge-img' src={Badge} alt='badge'/>
                  </div>
                  <div className="career-item--body">
                    <h3 className='career-item--title'>Entrepreneurship</h3>
                    <p className='career-item--text'>Make your next company famous. Learn the skills you need to drive growth.</p>
                  </div>
                  <div className="career-item--footer">
                    <Link className='career-item--link' href="/">Explore &#62; </Link>
                  </div>
                </div>
              </div>

              <div className='badge-banner'>
                  <div className='banner-body'>
                    <div className="badge-banner--top">
                      <Image src={Badge} alt="Badge" />
                      <h3 className='badge-banner--title'>Job Guarantee </h3>
                    </div>
                    <div className="badge-banner--content">
                      <p>
                        We understand that changing careers is a big step. That's why our programs come with a guarantee. 
                        you’ll get a job within 6 months of graduating, or we’ll refund the cost of your program.
                      </p>
                  </div>
                  </div>
                  <div className="banner-bg--img">
                    <Image src={BadgeBanner} alt='Banner'/>
                  </div>
              </div>
            </div>
          </section>

          <section className='certificate-section'>
            <div className="certificate-container">
              <div className='certificate-content'>
                <div className='certificate-item'>
                    <span><CiCircleCheck /></span>
                    <div className='certificate-item--content'>
                        <h5>Obtain your course certificate</h5>
                        <p>You will receive a highly valued digital certificate at the end of each course.</p>
                    </div>
                </div>

                <div className='certificate-item'>
                    <span><CiCircleCheck /></span>
                    <div className='certificate-item--content'>
                        <h5>Obtain your course certificate</h5>
                        <p>You will receive a highly valued digital certificate at the end of each course.</p>
                    </div>
                </div>
                </div>
                <div className='certificate-img'>
                    <Image src={Certificate} alt='Certificate' />
                </div>
            </div>
          </section>

          <section className="unleash-section">
            <div className="unleash-container">
              <div className='unleash-img'>
                <Image src={Unleash} alt='Unleash the potential of employees.'/>
              </div>
              <div className='unleash-content'>
                <h5>Unleash the potential of employees.</h5>
                <p>Advance the capabilities of your employees to bring more productivity in your company or organization.</p>
                <Link className='unleash-btn' href="">Learn More &#62;</Link>
              </div>
            </div>
          </section>
          
    </main>
  )
}
