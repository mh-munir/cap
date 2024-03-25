"use client";
import Image from 'next/image';
import SoftHero from '../../../public/assets/soft-bg.png';
import Badge from '../../../public/assets/image-2.png';
import block1 from '../../../public/assets/img5.png';
import block2 from '../../../public/assets/img6.png';
import Service1 from '../../../public/assets/service-icon.png';
import Service2 from '../../../public/assets/service-icon2.png';
import Service3 from '../../../public/assets/service-icon3.png';
import JobImg from '../../../public/assets/image-5.png';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="main">
         <section className="soft-section">
            <div className="container">
                <div className="hero-items">
                  <div className='hero-contents'>
                      <div className='career-item--top soft-badge'>
                            <h6 className='badge-title'>Job Guarantee </h6>
                            <Image className='badge-img' src={Badge} alt='badge'/>
                      </div>
                      <h3 className='career-item--title sales-item--title'>Advanced Graphics Design</h3>
                      <p className='career-item--text'>Explore your creativity.</p>
                  </div>
                  <div className="graphics-hero">
                    <Image src={SoftHero} alt=''/>
                  </div>
                </div>
            </div>
         </section>
         <section className='block-section section-gray'>
          <div className="container">
            <div className="block-items">
              <div className="block-item">
                  <h5 className='block-title'>Software Design Program details</h5>
                  <p className='block-subtitle'>In this program, you will</p>
                  <ul className='block-lists'>
                      <li className='block-list'>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28.982" height="32.355" viewBox="0 0 28.982 32.355">
                              <g id="Group_22" data-name="Group 22" transform="translate(-636.934 -305.034)">
                                <path id="Path_16" data-name="Path 16" d="M680.139,334.338a2.2,2.2,0,0,1,.726-1.055,2.1,2.1,0,0,1,2.268-.278,2.057,2.057,0,0,1,1.269,1.92c.024.781.006,1.563.006,2.345v.135a4.526,4.526,0,0,1,3.339,1.89,4.822,4.822,0,0,1-2.082,7.369,4.216,4.216,0,0,1-.74.22,2.821,2.821,0,0,1-.529.006v3.815l.187.011c.046-.515.1-1.011.133-1.51s.12-.61.6-.735a6.433,6.433,0,0,0,1.982-.9.56.56,0,0,1,.815.036l1.3,1.09.989-1c-.355-.424-.719-.859-1.085-1.293-.3-.351-.315-.49-.075-.889a6.454,6.454,0,0,0,.789-2.006.529.529,0,0,1,.534-.467l1.845-.161v-1.4l-1.195-.109c-.213-.019-.426-.035-.639-.055a.533.533,0,0,1-.548-.479,6.751,6.751,0,0,0-.874-2.159.424.424,0,0,1,.023-.517c.193-.251.388-.5.59-.745.215-.26.438-.513.661-.771l-.979-1.008-1.381,1.15a.526.526,0,0,1-.706.042,6.421,6.421,0,0,0-2.166-.97c-.312-.073-.438-.249-.468-.613q-.054-.651-.108-1.3c-.008-.094-.02-.189-.032-.29-.136-.01-.261-.01-.382-.03a.5.5,0,0,1-.43-.552.509.509,0,0,1,.492-.477c.265-.01.531-.007.8,0a.51.51,0,0,1,.534.506c.049.543.1,1.087.139,1.631a.251.251,0,0,0,.192.246q.793.333,1.571.7a.236.236,0,0,0,.307-.037c.419-.361.844-.715,1.269-1.069a.529.529,0,0,1,.8.033q.785.78,1.564,1.566a.546.546,0,0,1,.03.854q-.566.663-1.135,1.323a.215.215,0,0,0-.038.271q.337.754.635,1.525a.211.211,0,0,0,.212.168c.6.048,1.19.105,1.785.158a.527.527,0,0,1,.547.587q0,1.129,0,2.257a.525.525,0,0,1-.536.575c-.6.055-1.2.111-1.807.161a.2.2,0,0,0-.2.155q-.291.774-.616,1.536a.218.218,0,0,0,.035.271q.561.655,1.112,1.32a.549.549,0,0,1-.038.87q-.778.783-1.561,1.56a.525.525,0,0,1-.785.031c-.432-.357-.863-.714-1.288-1.079a.236.236,0,0,0-.307-.027q-.766.365-1.551.69a.271.271,0,0,0-.2.264c-.039.53-.087,1.058-.135,1.587a.526.526,0,0,1-.594.54c-.184,0-.369,0-.553,0-.447,0-.635-.194-.619-.635,0-.02-.006-.039,0-.02-.45.131-.893.294-1.35.387a2.681,2.681,0,0,1-2.232-.522,1.054,1.054,0,0,0-.369-.176,4.836,4.836,0,0,1-1.866-.824,2.65,2.65,0,0,1-1.068-2.16.377.377,0,0,0-.173-.344,2.628,2.628,0,0,1-1.192-1.953,2.535,2.535,0,0,1,.216-1.251.308.308,0,0,0-.041-.355,2.671,2.671,0,0,1-.514-2.253,2.162,2.162,0,0,1,.6-1.066.224.224,0,0,0,.06-.318,2.224,2.224,0,0,1,.649-2.824,3.4,3.4,0,0,1,.74-.381c.1-.045.147-.077.141-.2a2.417,2.417,0,0,1,2.177-2.51C679.776,334.349,679.952,334.347,680.139,334.338Zm3.214,11c-.2.012-.364.027-.526.03a2.184,2.184,0,0,1-1.169-.272.511.511,0,0,1-.212-.687.5.5,0,0,1,.691-.243,1.7,1.7,0,0,0,.992.128c.175-.022.232-.084.231-.264-.008-1.033,0-2.065,0-3.1,0-.464-.048-.518-.513-.56a.613.613,0,0,0-.241.007c-.354.119-.709.236-1.053.379a.552.552,0,0,1-.717-.183.506.506,0,0,1,.2-.724,6.077,6.077,0,0,1,1.186-.464,6.153,6.153,0,0,1,1.117-.066v-1.2c-.326.035-.632.088-.939.1a1.193,1.193,0,0,1-1.157-.7.517.517,0,0,1,.212-.653.472.472,0,0,1,.654.107.43.43,0,0,0,.494.19,4.9,4.9,0,0,0,.641-.159.205.205,0,0,0,.112-.154c.005-.656.016-1.313-.007-1.969a1.016,1.016,0,0,0-.641-.911,1.051,1.051,0,0,0-1.148.123,1.106,1.106,0,0,0-.408,1.221.524.524,0,0,1-.356.646.493.493,0,0,1-.626-.313c-.062-.256-.219-.273-.406-.236a2.15,2.15,0,0,0-.585.184,1.381,1.381,0,0,0-.686,1.482,1.413,1.413,0,0,0,1.348,1.135c.36.031.57.241.554.554a.527.527,0,0,1-.613.491,2.409,2.409,0,0,1-1.926-1.054c-.059-.083-.094-.164-.239-.127a1.263,1.263,0,0,0-.9,1.411,1.662,1.662,0,0,0,1.4,1.239.526.526,0,1,1-.05,1.047,2.139,2.139,0,0,1-1.195-.412c-.162-.117-.243-.08-.354.061a1.451,1.451,0,0,0-.01,1.735,1.25,1.25,0,0,0,.912.669,6.739,6.739,0,0,0,.927.016.74.74,0,0,0,.754-.542,2.838,2.838,0,0,1,2.7-1.618.6.6,0,0,1,.32.17.477.477,0,0,1,.1.534.581.581,0,0,1-.476.342,6.487,6.487,0,0,0-1.07.32,1.044,1.044,0,0,0-.661.88,4.8,4.8,0,0,0,.064,1.027.544.544,0,0,1-.393.665.527.527,0,0,1-.632-.411c-.036-.126-.064-.255-.1-.4a4.61,4.61,0,0,1-2.186-.058,1.339,1.339,0,0,0,.432,1.672,5.416,5.416,0,0,1,.249-.54.859.859,0,0,1,.279-.3.489.489,0,0,1,.592.088.526.526,0,0,1,.081.652,3.205,3.205,0,0,0-.395,1.5,1.706,1.706,0,0,0,1.092,1.563.355.355,0,0,0,0-.066c-.1-.387.015-.647.312-.74s.547.057.689.416a2.594,2.594,0,0,0,.845,1.168,1.951,1.951,0,0,0,1.959.151c.476-.173.474-.178.474-.677s0-1.015,0-1.528c-.268.05-.51.112-.757.138a2.009,2.009,0,0,1-2.115-.876.547.547,0,0,1,.119-.781.522.522,0,0,1,.759.2.772.772,0,0,0,.716.4,9.669,9.669,0,0,0,1.147-.19c.049-.01.124-.081.125-.125C683.356,346.374,683.353,345.86,683.353,345.333Zm1.058.6a3.859,3.859,0,0,0,2.511-1.525,3.752,3.752,0,0,0-2.511-5.946Z" transform="translate(-33.86 -24.404)" fill="#223d4f"/>
                                <path id="Path_17" data-name="Path 17" d="M662.009,327.846c-.339,0-.679,0-1.018,0a.527.527,0,1,1-.013-1.052c.649-.005,1.3,0,1.947,0,.271,0,.318-.053.312-.328a2.054,2.054,0,0,1,1.1-1.955.84.84,0,0,0,.335-1.33c-.272-.445-.614-.846-.91-1.278a8.291,8.291,0,0,1-1.487-4.716,13.2,13.2,0,0,0-.718-4.519,8.485,8.485,0,0,0-3.647-4.414,14.8,14.8,0,0,0-5.185-1.819,15.52,15.52,0,0,0-3.846-.332,11.3,11.3,0,0,0-7.329,3.276,11.829,11.829,0,0,0-3.365,6.582,12.608,12.608,0,0,0,.775,7.067c.6,1.5,1.221,3,1.8,4.52a13.9,13.9,0,0,1,.955,4.121,9.936,9.936,0,0,1-.684,4.529.528.528,0,1,1-.968-.4,9.185,9.185,0,0,0,.585-4.232,17.033,17.033,0,0,0-1.342-4.907c-.513-1.311-1.068-2.605-1.56-3.923a13.276,13.276,0,0,1-.412-7.812,12.62,12.62,0,0,1,4-6.779,12.331,12.331,0,0,1,5.969-2.907,13.983,13.983,0,0,1,4.95.05,20.749,20.749,0,0,1,4.227,1.1,10.947,10.947,0,0,1,4.152,2.743,10.067,10.067,0,0,1,2.434,5.052,15.87,15.87,0,0,1,.262,2.926,7.415,7.415,0,0,0,1.52,4.508,8.712,8.712,0,0,1,.661.912,3.2,3.2,0,0,1,.378.98,1.677,1.677,0,0,1-.9,1.835,1.245,1.245,0,0,0-.691,1.247,1.232,1.232,0,0,1-1.24,1.26c-.347.006-.693,0-1.04,0Z" fill="#223d4f"/>
                                <path id="Path_18" data-name="Path 18" d="M780.4,515.51c-1.052-.059-2.105-.116-3.157-.179a5.766,5.766,0,0,1-1.028-.1,2.878,2.878,0,0,1-1.587-1.207,9.153,9.153,0,0,1-1.427-3.14.518.518,0,0,1,.365-.659.537.537,0,0,1,.659.432,8.471,8.471,0,0,0,1.348,2.859,1.9,1.9,0,0,0,1.614.782c1.1,0,2.194.1,3.291.156.154.008.31-.012.464,0a.493.493,0,0,0,.551-.405,3.694,3.694,0,0,0,.18-.993,3.858,3.858,0,0,1,.664-2.053,5.132,5.132,0,0,1,.412-.574.522.522,0,1,1,.825.639,4,4,0,0,0-.789,1.494c-.082.386-.046.8-.125,1.183a4.269,4.269,0,0,1-.352,1.015,1.268,1.268,0,0,1-1.177.728c-.243.007-.486,0-.73,0Z" transform="translate(-120.665 -181.715)" fill="#223d4f"/>
                                <path id="Path_19" data-name="Path 19" d="M782.243,559.081a6.479,6.479,0,0,1,.215-.771c.237-.6.495-1.2.761-1.788a.52.52,0,0,1,.755-.305c.276.136.331.436.179.785-.27.621-.526,1.248-.777,1.876a2.161,2.161,0,0,0-.093.431.523.523,0,0,1-.559.479C782.424,559.762,782.234,559.535,782.243,559.081Z" transform="translate(-128.693 -222.403)" fill="#223d4f"/>
                              </g>
                          </svg>
                        </span>
                        <p className='block-text'>
                          Learn all of the skills, tools, and processes you need to become 
                          a sales marketer.
                        </p>
                      </li>
                      <li className='block-list'>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32.591" viewBox="0 0 28 32.591">
                            <g id="Group_26" data-name="Group 26" transform="translate(-611.83 -328.656)">
                              <path id="Path_34" data-name="Path 34" d="M625.763,380.6c1.42-1.373,2.6-2.445,3.688-3.589a1.607,1.607,0,0,1,2.309-.3,7.429,7.429,0,0,0,1.5.75c5.5,1.913,6.973,5.85,6.478,10.862-.1,1.048-.463,1.441-1.6,1.437q-12.36-.04-24.721,0c-1.138,0-1.643-.38-1.584-1.441a24.111,24.111,0,0,1,.32-5.091,7.234,7.234,0,0,1,2.387-3.59,27.764,27.764,0,0,1,5.554-3.012,2.322,2.322,0,0,1,1.91.388C623.276,378.055,624.387,379.263,625.763,380.6Zm12.4,7.758c.744-5.645.057-6.928-5.014-9.518a8.12,8.12,0,0,1-1-.512,1.672,1.672,0,0,0-2.563.311c-1.091,1.278-2.267,2.492-3.464,3.8-.951-.824-1.419-1.208-1.862-1.616-3.7-3.409-3.691-3.4-8.138-.812-1.391.81-2.624,1.764-2.74,3.386s-.025,3.252-.025,4.965Z" transform="translate(0 -28.513)" fill="#223d4f"/>
                              <path id="Path_35" data-name="Path 35" d="M645.191,335.939a10.141,10.141,0,0,1-3.47,6.817,6.081,6.081,0,0,1-8.287.067,9.807,9.807,0,0,1-3.566-7.816c.073-3.66,3.753-6.494,7.918-6.346C642.045,328.813,645.248,331.743,645.191,335.939Zm-13.889-.3a9.257,9.257,0,0,0,2.843,6.044c2,1.939,4.918,2.093,6.66,0a14.988,14.988,0,0,0,2.872-5.7c.775-2.959-2.015-5.772-5.484-6.014C634.38,329.707,631.341,332.026,631.3,335.641Z" transform="translate(-11.661 0)" fill="#223d4f"/>
                              <path id="Path_36" data-name="Path 36" d="M646.529,395.426c.537.7,1.05,1.085,1.094,1.518.032.323-.584,1.025-.838.992a1.556,1.556,0,0,1-1.153-.88C645.56,396.677,646.08,396.186,646.529,395.426Z" transform="translate(-20.856 -40.844)" fill="#223d4f"/>
                            </g>
                          </svg>
                        </span>
                        <p className='block-text'>
                           Work with an expert mentor and tutor, who will give personalized 
                            feedback and insight into the daily life of a digital marketer.
                        </p>
                      </li>
                      <li className='block-list'>
                        <span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="35.594" viewBox="0 0 26 35.594">
                            <g id="Group_565" data-name="Group 565" transform="translate(-281 -975.301)">
                              <path id="Path_23" data-name="Path 23" d="M636.449,215.909q0,8.437,0,16.874c0,.79-.118.911-.892.911H611.344c-.753,0-.888-.134-.888-.882q0-14.389-.007-28.778a1.219,1.219,0,0,1,.4-.945c1.575-1.554,3.128-3.13,4.708-4.679a1.12,1.12,0,0,1,.708-.3q9.7-.024,19.393-.012c.645,0,.8.157.8.823Q636.449,207.417,636.449,215.909ZM611.6,204.3v28.234h23.682V199.24H616.64v.451c0,1.3,0,2.6,0,3.895,0,.512-.183.689-.7.691-1.31.005-2.621,0-3.931.007C611.879,204.284,611.747,204.294,611.6,204.3Zm.929-1.149h2.145c.831,0,.831,0,.83-.829V200.16Z" transform="translate(-329.449 777.201)" fill="#223d4f"/>
                              <path id="Path_24" data-name="Path 24" d="M712.569,275.442q-2.038,0-4.076,0c-.573,0-.771-.213-.754-.794a4.264,4.264,0,0,1,2.791-3.8c.452-.157.679-.059.883.388a1.245,1.245,0,0,0,2.3.014c.234-.493.433-.572.94-.378a4.245,4.245,0,0,1,2.737,3.8c.008.561-.188.768-.742.769C715.287,275.444,713.928,275.442,712.569,275.442Zm-3.628-1.147h7.233a2.788,2.788,0,0,0-1.632-2.194,2.437,2.437,0,0,1-1.985,1.036,2.482,2.482,0,0,1-2-1.056A2.941,2.941,0,0,0,708.941,274.3Z" transform="translate(-414.505 713.667)" fill="#223d4f"/>
                              <path id="Path_25" data-name="Path 25" d="M646.36,404.666H637.5c-.594,0-.865-.178-.869-.565s.252-.567.858-.567H655.06a4.618,4.618,0,0,1,.481.009.514.514,0,0,1,.51.53.531.531,0,0,1-.5.58,3.46,3.46,0,0,1-.444.012Z" transform="translate(-352.34 597.603)" fill="#223d4f"/>
                              <path id="Path_26" data-name="Path 26" d="M646.374,340.156h-8.9a2.22,2.22,0,0,1-.37-.012.511.511,0,0,1-.458-.5.522.522,0,0,1,.411-.581,1.534,1.534,0,0,1,.4-.027h17.717a2.244,2.244,0,0,1,.407.013.523.523,0,0,1,.476.566.511.511,0,0,1-.5.539,2.7,2.7,0,0,1-.333.006Z" transform="translate(-352.354 653.995)" fill="#223d4f"/>
                              <path id="Path_27" data-name="Path 27" d="M646.293,371.314h8.858a2.689,2.689,0,0,1,.407.012.5.5,0,0,1,.468.529.513.513,0,0,1-.432.562,1.662,1.662,0,0,1-.368.023H637.361c-.489,0-.754-.2-.757-.566s.262-.559.756-.56Z" transform="translate(-352.316 625.771)" fill="#223d4f"/>
                              <path id="Path_28" data-name="Path 28" d="M728.058,234.17a2.585,2.585,0,1,1,2.641-2.543A2.583,2.583,0,0,1,728.058,234.17Zm1.505-2.6a1.457,1.457,0,0,0-2.913,0,1.457,1.457,0,1,0,2.913,0Z" transform="translate(-430.05 750.186)" fill="#223d4f"/>
                              <path id="Path_29" data-name="Path 29" d="M641.885,436.868h-4.449a1.755,1.755,0,0,1-.333-.012.513.513,0,0,1-.454-.509.521.521,0,0,1,.419-.576,1.5,1.5,0,0,1,.368-.028q4.449,0,8.9,0a1.55,1.55,0,0,1,.3.013.525.525,0,0,1,.471.571.516.516,0,0,1-.506.535,2.426,2.426,0,0,1-.3.005Z" transform="translate(-352.354 569.444)" fill="#223d4f"/>
                            </g>
                          </svg>
                        </span>
                        <p className='block-text'>
                          Build an impressive resume out of the real-world experience
                          you complete.
                        </p>
                      </li>
                      <li className='block-list'>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.371" height="38.126" viewBox="0 0 30.371 38.126">
                          <g id="Group_566" data-name="Group 566" transform="translate(-279 -1075.531)">
                            <path id="Path_30" data-name="Path 30" d="M662.594,285.868q0-3.447,0-6.894a2.813,2.813,0,0,1,2.379-3.026c4.006-.942,8.01-1.889,12.023-2.8a3.588,3.588,0,0,1,1.538,0c4.063.924,8.117,1.887,12.174,2.835a2.76,2.76,0,0,1,2.2,2.691c.009,4.74.143,9.485-.039,14.218a19.051,19.051,0,0,1-8.424,15.373,18.52,18.52,0,0,1-6.336,2.88,1.456,1.456,0,0,1-.719,0,19.4,19.4,0,0,1-14.12-13.946,18.244,18.244,0,0,1-.677-5.22Q662.6,288.923,662.594,285.868Zm3.046-6.97v.284c0,4.426-.012,8.853.01,13.279a13.028,13.028,0,0,0,.232,2.448,16.353,16.353,0,0,0,11.564,13.109,1.112,1.112,0,0,0,.636-.005,16.541,16.541,0,0,0,11.755-15.219c.124-4.527.029-9.061.042-13.591,0-.284-.132-.338-.358-.39-3.729-.867-7.455-1.745-11.185-2.608a2.037,2.037,0,0,0-.873-.052c-2.781.63-5.557,1.285-8.335,1.933Z" transform="translate(-383.594 802.465)" fill="#223d4f"/>
                            <path id="Path_32" data-name="Path 32" d="M716.95,348.649c-.008.32-.192.4-.519.233-1.018-.531-2.073-1-3.035-1.62a1.919,1.919,0,0,0-2.362,0,33.645,33.645,0,0,1-3,1.6c-.124.064-.358.117-.417.056a.587.587,0,0,1-.1-.446q.352-2.139.737-4.272a.642.642,0,0,0-.22-.649q-1.53-1.458-3.03-2.948a2,2,0,0,1-.27-.48,2.026,2.026,0,0,1,.5-.225c1.455-.222,2.914-.421,4.369-.647a.54.54,0,0,0,.318-.28c.656-1.3,1.293-2.618,1.951-3.922a.641.641,0,0,1,.364-.329c.085-.017.256.182.323.317q.986,1.956,1.944,3.926a.489.489,0,0,0,.432.314c1.46.193,2.916.409,4.371.631.138.021.358.12.371.207a.591.591,0,0,1-.182.425c-1,.992-2.006,1.979-3.029,2.949a.794.794,0,0,0-.262.823c.265,1.407.5,2.821.741,4.233C716.946,348.582,716.947,348.621,716.95,348.649Zm-8.838-.461c.142-.069.256-.12.367-.178,1.131-.594,2.266-1.183,3.39-1.79a.62.62,0,0,1,.686,0c.381.225.781.419,1.173.625l2.587,1.354c-.247-1.461-.492-2.87-.715-4.283a.631.631,0,0,1,.148-.468c.505-.527,1.042-1.024,1.558-1.542.492-.493.973-1,1.476-1.516-.057-.012-.1-.025-.149-.032-1.341-.193-2.682-.388-4.024-.574a.578.578,0,0,1-.5-.367c-.209-.463-.446-.914-.672-1.369l-1.226-2.477c-.625,1.271-1.232,2.469-1.8,3.683a.889.889,0,0,1-.792.563c-1.325.167-2.645.374-3.967.566l-.1.134a1.512,1.512,0,0,1,.338.19c.92.888,1.83,1.786,2.751,2.674a.6.6,0,0,1,.2.616C708.579,345.378,708.354,346.765,708.112,348.188Z" transform="translate(-418.051 752.049)" fill="#223d4f"/>
                            <path id="Path_33" data-name="Path 33" d="M731.943,370.271l2.978-2.993a1.352,1.352,0,0,1,.311-.293,1.954,1.954,0,0,1,.472-.1c-.03.157-.007.363-.1.464-.43.471-.891.914-1.341,1.366-.662.664-1.332,1.322-1.986,1.994-.221.227-.4.241-.623.012-.536-.551-1.092-1.083-1.616-1.645-.094-.1-.074-.309-.106-.468.158.028.368,0,.464.092C730.914,369.191,731.4,369.714,731.943,370.271Z" transform="translate(-438.659 725.747)" fill="#223d4f"/>
                          </g>
                        </svg>
                        </span>
                        <p className='block-text'>
                           Land a job as a sales marketer within 90 days of completing 
                           from the course —or your money back.
                        </p>
                      </li>
                  </ul>
              </div>
              <div className="block-item">
                  <Image src={block1} alt=''/>
              </div>
            </div>
          </div>
         </section>

         <section className='block-section'>
          <div className="container">
            <div className="block-items bg-gray--dark">
              <div className="block-item">
                  <Image src={block2} alt=''/>
              </div>
              <div className="block-item block-contens">
                  <h5 className='block-title block-title--second'>Why become a Software Designer?</h5>
                  <ul className='block-lists'>
                      <li className='block-list-second'>
                        <h5 className='block-list-title'>A job you'll love</h5>
                        <p className='block-text'>
                          As a sales & marketer, you’ll have the satisfaction of producing 
                          success of a business and turning your techniques into reality 
                          with just communicating new peoples. 
                        </p>
                      </li>
                      <li className='block-list-second'>
                        <h5 className='block-list-title'>A flexible career path</h5>
                        <p className='block-text'>
                          As a sales & marketer, you'll have the opportunity to work for 
                          SME business, startups, agencies, large corporates, on a freelance 
                          basis, or even physically.
                        </p>
                      </li>
                      <li className='block-list-second'>
                        <h5 className='block-list-title'>A vast career opportunity </h5>
                        <p className='block-text'>
                          As a sales & Marketer, you'll have the opportunity to meet so many 
                          new peoples everyday that creates new opportunities in your 
                          career and enlarge your capacity of communication.
                        </p>
                      </li>
                  </ul>
              </div>
            </div>

            <div className="services">
              <h2 className='service-title'>Why choose us?</h2>

              <div className="services-items">
                <div className="service-item">
                  <Image src={Service1} alt=''/>
                  <p><strong>Practical</strong> Learning</p>
                </div>
                <div className="service-item">
                  <Image src={Service2} alt='' />
                  <p><strong>Course</strong> Certification</p>
                </div>
                <div className="service-item">
                  <Image src={Service3} alt=''/>
                  <p><strong>Job</strong> Guarantee</p>
                </div>
              </div>
            </div>

            <div className='jobs'>
              <div className="job-items">
                <div className="job-item job-item--first">
                  <div className='job-img'>
                    <Image src={JobImg} alt=''/>
                  </div>
                  <div className='job-item--content'>
                      <h5>Income Guarantee</h5>
                      <p>
                        We understand that changing careers is a big step. That's why 
                        our programs come with a guarantee. Land a job within 6
                        months or your money back!
                      </p>
                      <div className='job-offer-text'>
                      <p>
                        96% of our eligible graduates get a job in their new field 
                        within 180 days of graduation.
                      </p>
                      </div>
                  </div>
                </div>
                <div className="job-item">
                  <div className="job-item--child1">
                      <div className='item--child1--content'>
                        <span>
                          <svg id="question-circle-fill" xmlns="http://www.w3.org/2000/svg" width="25.312" height="25.312" viewBox="0 0 25.312 25.312">
                            <path id="Path_55" data-name="Path 55" d="M25.312,12.656A12.656,12.656,0,1,1,12.656,0,12.656,12.656,0,0,1,25.312,12.656ZM10.394,9.544H8.306c-.048-2.983,2.262-4.007,4.36-4.007,2.21,0,4.228,1.155,4.228,3.544a3.861,3.861,0,0,1-1.968,3.254c-1.166.884-1.6,1.215-1.6,2.351v.562h-2.07l-.011-.733A3.6,3.6,0,0,1,13.1,11.371c.933-.7,1.526-1.164,1.526-2.169a1.838,1.838,0,0,0-2.079-1.848,2.018,2.018,0,0,0-2.149,2.189Zm1.979,10.193a1.481,1.481,0,1,1,0-2.954,1.484,1.484,0,1,1,0,2.954Z" fill="#2680eb" fill-rule="evenodd"/>
                          </svg>
                        </span>
                        <p className='q-text'>Any Questions? <Link href="/contact-us">Contact us</Link></p>
                      </div>
                  </div>
                  <div className="job-item--child2">
                      <div className="item--child2--top">
                          <div className='child2-top--content'>
                              <div className='value-items'>
                                <h3 className='value-items--first'>Best Value</h3>
                                <h3 className='value-items--last'>50% OFF</h3>
                              </div>
                              <p className='value-off--price'>10000 BDT</p>
                              <p className='value-price'>5000 BDT</p>
                          </div>
                      </div>
                      <Link className='enroll-btn' href="/contact-us">Enroll Now &#62;</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </section>
    </main>
  )
}
