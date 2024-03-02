
import './App.css'
import logo from './assets/images/logo.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import skull from './assets/images/t-2.png'
function App() {

  return (
   <div className="web-scroll">
    
        <section className="bg-[url('./assets/images/bg-1.jpg')] h-screen w-screen bg-cover bg-no-repeat">
          <div className="bg-[url('./assets/images/mobile-1.png')] md:bg-[url('./assets/images/desktopbg-1.png')] h-screen w-screen bg-cover bg-no-repeat">
       
         {/* Navbar */}
          <nav className="flex justify-center md:justify-between items-center p-10 mx-1">
            <div className="">
            <img src={logo} className='hidden md:flex md:w-12' alt="" />
            </div>
            <div>
              <ul className='flex md:hidden space-x-5 font-texts text-white text-xl'>
                <li>Home</li>
                <li>About</li>
                <li>Tokenomics</li>
                <li>Jounery</li>
              </ul>
              <ul className='hidden md:flex text-2xl text-white space-x-10 font-texts'>
                <li>Home</li>
                <li>About</li>
                <li>Tokenomics</li>
                <li>Roadmap</li>
                <li>Join Community</li>
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
             <h1 className='font-head text-white md:text-[70px] whitespace-normal'>Illuminati <br/> Eye of Providence</h1>
             </div>
             <div className='flex space-x-10 text-white'>
             <FaTelegramPlane size={40} />
             <FaXTwitter size={40}/>
             </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-10">
              <div className="">
              <img src={logo} className='spin w-96' alt="" />
              </div>

              <div className="">
                <a href="" className='font-head bg-black px-8 py-6 rounded-lg text-2xl text-white'>Join Community</a>
              </div>
           
          </div>


          <div className="flex flex-col justify-between items-end gap-10">
          <div className="text-end">
                <h1 className='font-head text-white md:text-[40px]'>Introducing</h1>
              </div>
             <div className='text-end'>
             <h1 className='font-head text-white md:text-[70px] whitespace-normal'>Illuminati <br/> Eye of Providence</h1>
             </div>

            <div className='text-white font-texts'>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
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
                    <h1 className='font-head text-[55px] leading-tight'>Illuminati Eye of Providence</h1>
                  </div>

                  <div className="text-white font-texts my-6">
                    <a href="" className="bg-[url('./assets/images/bg-1.jpeg')] h-fit w-screen
                     bg-no-repeat bg-cover px-4 py-3 rounded-b-2xl text-2xl text-center">Be a part of Us</a>
                  </div>
          </div>
          </div>
        </section>
        {/* About */}
        <section className="bg-[url('./assets/images/bg-3.png')] h-screen w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-screen w-screen bg-cover bg-no-repeat">
       
          <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>About Us</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center p-2 items-center">
                <div>
                  <img src={logo} className='w-96' alt="" />
                </div>
                <div className="bg-transparent my-8 md:my-0 backdrop-blur-md rounded-3xl md:text-[40px] 
                font-texts shadow-sm h-fit w-80 md:w-fit p-4 md:p-8 border border-red-900 text-white md:text-start text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati qui aperiam praesentium repellat quaerat aspernatur sint, nulla similique dicta!</p>
                
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
  
       <section className="bg-[url('./assets/images/bg-5.jpg')] h-screen w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-screen w-screen bg-cover bg-no-repeat">
        <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>Features</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center md:p-20">

<div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
  hover:scale-110 transition ease-in-out duration-200
text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
  <h3 className='font-head md:text-[30px] text-[20px] '>Wallet Scanning</h3>
  {/* <span className='font-texts md:text-[25px]'>Total Supply</span> */}
</div>

<div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
  hover:scale-110 transition ease-in-out duration-200
text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
  <h3 className='font-head md:text-[30px] text-[20px]'>Aplha wallet copy trading</h3>
  {/* <span className='font-texts md:text-[20px] text-[25px]'>Total Supply</span> */}
</div>

<div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
  hover:scale-110 transition ease-in-out duration-200
text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
  <h3 className='font-head md:text-[30px] text-[20px]'>Seemless library to keep track of wallets special to you</h3>
  {/* <span className='font-texts md:text-[20px] text-[25px]'>Total Supply</span> */}
</div>



</div>

              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center">
              <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[30px] text-[20px]'>1s accurate trade alerts</h3>
                  {/* <span className='font-texts md:text-[20px] text-[25px]'>Total Supply</span> */}
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[30px] text-[20px]'>Ai insight to and analysis (Coming Soon)</h3>
                  {/* <span className='font-texts md:text-[20px] text-[25px]'>Total Supply</span> */}
                </div>
              </div>
          
                

              </div>
       </div>
          </section>

        {/* Tokenomics */}
        <section className="bg-[url('./assets/images/bg-4.jpg')] h-screen w-screen bg-cover bg-no-repeat">
        <div className="bg-[url('./assets/images/mobile-2.png')] md:bg-[url('./assets/images/desktopbg-2.png')] h-screen w-screen bg-cover bg-no-repeat">
        <div className='p-10 mx-8"'>
            <div className="text-center">
              <h1 className='font-head text-white text-[50px] md:text-[60px]'>Tokenomics</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center md:p-20">

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'>10,000,000</h3>
                  <span className='font-texts md:text-[25px]'>Total Supply</span>
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text-[30px]'>10,000,000</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Total Supply</span>
                </div>

                <div className="text-white shadow-black shadow-2xl bg-transparent hover:bg-[url('./assets/images/bg-1.jpeg')] hover:bg-cover 
                  hover:scale-110 transition ease-in-out duration-200
                text-center backdrop-blur-2xl h-fit w-80 p-8 rounded-2xl">
                  <h3 className='font-head md:text-[40px] text[-30px]'>10,000,000</h3>
                  <span className='font-texts md:text-[20px] text-[25px]'>Total Supply</span>
                </div>

                

              </div>

            <div className="text-white flex flex-col my-6 items-center justify-center">
              <h3 className='font-texts md:text-[30px] text-[25px]'>CA:</h3>
            <p className='md:text-[25px] font-head text-[30px]'>Ox00000000</p>          

          <img src={skull} className='w-32' alt="" />
                            </div>
                

              </div>
       </div>
          </section>

</div>
   
  )
}

export default App
