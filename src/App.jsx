import './App.css'
import logo from './assets/images/logo.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import intro from './assets/videos/intro-1.mp4'
function App() {

  return (
   <div className="web-scroll">
    
        <section className="bg-[url('./assets/images/bg-1.jpg')] h-fit md:h-screen w-screen bg-cover bg-no-repeat">
          <div className="bg-[url('./assets/images/mobile-1.png')] md:bg-[url('./assets/images/desktopbg-1.png')] h-screen w-screen bg-cover bg-no-repeat">
       
         {/* Navbar */}
          <nav className="flex justify-center md:justify-between items-center p-10 mx-1">
            <div className="">
            <img src={logo} className='hidden md:flex md:w-12' alt="" />
            </div>
            <div>
              <ul className='flex md:hidden space-x-5 font-texts text-white text-xl'>
              <li><a href="#">Home</a></li>
                <li><a href="#abt">About</a></li>
                <li><a href="#token">Tokenomics</a></li>
                <li><a href="https://whitepaper.theilluminatieye.xyz/whitepaper.pdf">WhitePaper</a></li>
        
              </ul>
              <ul className='hidden md:flex text-2xl text-white space-x-10 font-texts'>
                <li><a href="#">Home</a></li>
                <li><a href="#abt">About</a></li>
                <li><a href="#token">Tokenomics</a></li>
                <li> <a href="https://whitepaper.theilluminatieye.xyz/whitepaper.pdf">WhitePaper</a></li>
                <li><a href="#join">Join Community</a></li>
              </ul>
            </div>
          </nav>

          {/* Hero */}
          
        <div className="hidden md:flex justify-between items-center md:mx-8 md:p-16">
          <div className='flex justify-center'>
          <div className="flex flex-col justify-between gap-10">
              <div className="">
                <h1 className='font-head text-white md:text-[40px]'>Introducing</h1>
              </div>
             <div>
             <h1 className='font-head text-white md:text-[70px] whitespace-normal'>Illuminati $EYE</h1>
             </div>
             <div className='flex space-x-10 text-white'>
            <a href="https://t.me/theilluminati_portal"> <FaTelegramPlane size={40} /></a>
         <a href="https://x.com/TheEye_Team">  <FaXTwitter size={40}/></a>  
             </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-10">
              <div className="">
              <img src={logo} className='spin w-96' alt="" />
              </div>

              <div className="text-white font-texts my-6">
                    <a href="https://t.me/TheIlluminatiEyeBot" className="bg-[url('./assets/images/bg-1.jpeg')] h-fit w-screen
                     bg-no-repeat bg-cover px-4 py-3 rounded-2xl text-2xl text-center">The Eye</a>
                  </div>
           
          </div>


          <div className="flex flex-col justify-between items-end gap-10">
          <div className="text-end">
                <h1 className='font-head text-white md:text-[20px] text-center'>The all seeing, all knowing and all powerful, <br/> all seeing eye is now at your disposal.</h1>
              </div>
             <div className='text-end'>
             <h1 className='font-head text-white md:text-[20px] text-center'>You have unlocked the secretsof the Illuminati  <br/> and the power of the $EYE.</h1>
             </div>
  
            <div className='text-end'>
              <h1 className='font-texts text-white md:text-[20px] text-center'>Track and follow portfolios,
               scan and view any<br/> wallet and analyze detailed portfolio performance <br/> in order to forecast your 
               future opportunities.</h1>
            </div>

          </div>

          </div>
        </div>
        
        {/* Mobile Hero */}
          <div className="md:hidden flex-col flex justify-between items-center mx-2 p-4">
                  <div>
                  <img src={logo} className='spin w-96' alt="" />
                  </div>
                  <div className='text-center text-white'>
                    <h2 className='font-head text-[25px]'>Introducing</h2>
                    <h1 className='font-head text-[55px] leading-tight'>Illuminati $EYE</h1>
                  </div>

                  <div className="text-white font-texts my-6">
                    <a href="" className="bg-[url('./assets/images/bg-1.jpeg')] h-fit w-screen
                     bg-no-repeat bg-cover px-4 py-3 rounded-2xl text-2xl text-center">Be a part of Us</a>
                  </div>
          </div>
          </div>
        </section>
        {/* About */}
        <section id='abt' className="bg-[url('./assets/images/bg-3.png')] h-fit w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-screen w-screen bg-cover bg-no-repeat">
       
          <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>About Us</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center p-2 items-center">
                <div>
                  <img src={logo} className='w-96' alt="" />
                </div>
                <div className="bg-transparent my-8 md:my-0 backdrop-blur-md rounded-3xl md:text-[30px] 
                font-texts shadow-sm h-fit w-80 md:w-fit p-4 md:p-8 border border-red-900 text-white md:text-start text-center">
                 <p>

                 The all seeing, all knowing and all powerful, all seeing eye is now at your disposal.

                  You have unlocked the secrets of the Illuminati and the power of the $EYE.

                  Track and follow portfolios, scan and view any wallet and analyze detailed portfolio performance in order to forecast your future opportunities.

                  You are now an alumni of the Illuminati - Make use of the $EYE now!
                 </p>
                  <div className="text-white font-texts my-6">
                    <a href="" className="bg-[url('./assets/images/bg-1.jpeg')] shadow-md h-fit w-fit
                     bg-no-repeat bg-cover px-4 py-2 rounded-2xl text-2xl text-center">Whitepaper</a>
                  </div>
                </div>
              </div>

              

            </div>
            </div>
</section>

      {/* Features */}
  
       <section className="bg-[url('./assets/images/bg-5.jpg')] h-fit w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-fit w-screen bg-cover bg-no-repeat">
        <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>Features</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-2 place-items-center md:p-8">
          
              <video src={intro} autoPlay={true} loop={true} controls={true} className='w-80 h-80 md:w-11/12'></video>
           


</div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center">
              <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[30px] text-[20px]'>1s accurate trade alerts</h3>
              
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[30px] text-[20px]'>Ai insight to and analysis (Coming Soon)</h3>
                
                </div>
              </div> */}
          
                

              </div>
       </div>
          </section>

        {/* Tokenomics */}
        <section id='token' className="bg-[url('./assets/images/bg-4.jpg')] h-fit w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-screen w-screen bg-cover bg-no-repeat">
        <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>Tokenomics</h1>
              </div>

              <div className="grid grid-cols-1 my-2 md:grid-cols-3 gap-2 place-items-center md:p-20">

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'>10,000,000</h3>
                  <span className='font-texts md:text-[25px]'>Total Supply</span>
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'>1%</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Max TXN</span>
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'> 2%</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Max Wallet</span>
                </div>

               
                

              </div>
                <div className="grid-col-1 grid place-items-center gap-10">
                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'> Buy 5% / Sell 5%</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Tax</span>
                </div>
                </div>

            <div className="text-white flex flex-col my-6 items-center justify-center">
              <h3 className='font-texts md:text-[30px] text-[25px]'>CA:</h3>
            <p className='md:text-[25px] font-head text-[30px]'>Ox00000000</p>          

   
                            </div>
                

              </div>
       </div>
          </section>

          {/* Community */}
          <section id='join' className="bg-[url('./assets/images/bg-2.jpg')] h-fit w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-screen w-screen bg-cover bg-no-repeat">
       
        <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>Join Community</h1>
              </div>

                <div className="grid grid-cols-1 place-items-center">
                  <div className="text-white shadow-black shadow-2xl bg-transparent 
                text-center backdrop-blur-xl h-fit p-3 rounded-2xl">
                    <p className='font-texts text-lg md:text-[25px] leading-relaxed'>
                    The time has come to embrace the Illuminati Eye of Providence and unlock the limitless
                     potential it holds. Become part of a community driven by vision, knowledge, and empowerment.
                     The all-seeing eye is yours – seize the opportunity and illuminate your path to greatness with IEP. <br/>



                    </p>
              <p className='font-head md:text-[35px]'>
                Embrace the vision. Embrace the power. Embrace Illuminati Eye of Providence.
              </p>
                  </div>

                  <div className="">
                    <img src={logo} className='w-72 md:w-96' alt="" />
                  </div>
                </div>

              {/* <div className="grid grid-cols-1 my-2 md:grid-cols-3 gap-2 place-items-center md:p-20">

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'>10,000,000</h3>
                  <span className='font-texts md:text-[25px]'>Total Supply</span>
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'>1%</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Max TXN</span>
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'> 2%</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Max Wallet</span>
                </div>

               
                

              </div>
                <div className="grid-col-1 grid place-items-center gap-10">
                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-3 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'> Buy 5% / Sell 5%</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Tax</span>
                </div>
                </div>

            <div className="text-white flex flex-col my-6 items-center justify-center">
              <h3 className='font-texts md:text-[30px] text-[25px]'>CA:</h3>
            <p className='md:text-[25px] font-head text-[30px]'>Ox00000000</p>          

          <img src={skull} className='w-32' alt="" />
                            </div> */}
                

              </div>
       </div>
          </section>

                              <footer className="bg-[url('./assets/images/bg-3.jpg')] flex h-fit w-screen bg-cover bg-no-repeat">
                               <div className="bg-[url('./assets/images/mobile-3.png')] 
                               md:bg-[url('./assets/images/desktopbg-2.png')] h-fit w-screen bg-cover bg-no-repeat">
                                 <div className="flex justify-center flex-col text-white items-center p-3">

                                  <div className="flex flex-row space-x-5">
                                  <a href="https://t.me/theilluminati_portal"> <FaTelegramPlane size={30} /></a>
         <a href="https://x.com/TheEye_Team">  <FaXTwitter size={30}/></a>  

         <a href="https://t.me/TheIlluminatiEyeBot"><FaRobot size={30}/></a>
             </div>
                                 
                                  <p className='text-white font-head'>Illuminati Eye 2024. All Rights Reserved.</p>
                                 </div>
                        </div>
                              </footer>

</div>
   
  )
}

export default App
