import Head from 'next/head'
import Link from 'next/link'
import { courseList } from '../data/data'
export default function Home() {
  return (
    <div className='scroll-smooth'>
      <Head>
        <title>NEAR dev 101</title>
        <meta name="description" content="NEAR dev 101" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* bg-gradient-to-b -z-10 from-[#fafbff] via-[#f2f3fc] to-[#ffffff] */}
      <main>
      <section className='pt-52 overflow-hidden relative'>
        <div className="absolute grid top-0 md:hidden w-full m-auto grid-cols-2 gap-7">
          <div className="bg-hero-background-mobile h-[18.75rem] m-auto w-3/4"></div>
          <div className="bg-hero-background-mobile h-[18.75rem] m-auto w-3/4"></div>
        </div>
        <div className=' px-6 lg:px-0  relative lg:pt-32 pt-12 h-fit md:h-screen lg:h-fit w-full'>
        <div className=" text-center lg:w-[56.875rem] mx-auto"><h1 className="lg:text-7xl lg:w-full leading-[50px] w-52 mx-auto font-semibold text-4xl text-primary-900">Get <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#9092fb] via-[#86b5ef] to-[#7bdde2]">NEAR</span> Certified!</h1>
        <p className=" pt-5 pb-24 lg:text-[1.375rem] text-lg text-primary-800 leading-7">We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.</p>
          <a href="#wallet"> <img src="/assets/icon1.svg" className='mx-auto text-center cursor-pointer' /></a>
        </div>
        </div>
        
      </section>
      <section id='wallet'>
      <div  className="grid mt-16  justify-items-center font-semibold text-center text-primary-900 text-[32px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em]">Making your NEAR <br />learning easy.</div>
        <div className='lg:mt-[182px] relative mt-16 gap-y-4 px-[22px] lg:px-0 lg:max-w-[940px] mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center'>
          <div className='text-center my-auto lg:text-left'>
          <h1 className='text-primary-900 font-semibold text-2xl text-center lg:text-left lg:text-4xl leading-10 tracking-[-0.02em]'>
          Open NEAR wallet
          </h1>
          <p className="text-primary-800 font-normal text-base lg:text-lg lg:leading-6 pt-[6px]"><span className="hidden lg:block">Opening a NEAR wallet is the first step and<br/> essential part of joining the NEAR community<br/> as well as starting this course.</span><span className="block lg:hidden">Opening a NEAR wallet is the first step and an essential part of joining the NEAR community as well as starting this course.</span></p>
          <button
          className='font-normal text-primary-900 text-base  mt-8  border-primary-900  text-dark-100   focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block'
          >Create wallet</button>
          </div>
          
          <div className='mx-auto  sm:mr-0 sm:ml-auto relative'>
          <div class="blur-[6.181rem] bg-left-gradient-background  h-full w-[380px] m-auto max-w-[380px] absolute  z-0 hidden lg:block"></div>
            <img  src="/assets/img1.png" className='w-44  md:w-72 md:h-72' width={296} height={296}/>
          </div>
          <div>
          </div>
        </div>
        <img src="/assets/img2l.svg" className='hidden sm:block w-fit m-auto mt-36' height={132} width={164} />
        <div className='relative gap-y-4 px-[22px] lg:px-0 lg:max-w-[940px] mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center'>
          <div className='sm:block hidden text-center my-auto lg:text-left relative'>
          <div class="blur-[6.181rem] bg-left-gradient-background  -left-36 -bottom-36 h-full w-[380px] m-auto max-w-[380px] absolute  z-0 hidden lg:block"></div>
            <img src='/assets/img2.svg' width={296} height={296} />
          </div>
          <div className='m-auto sm:ml-auto'>
            <h1 className='text-primary-900 font-semibold text-center sm:text-left text-2xl lg:text-4xl leading-10	 tracking-[-0.02em] relative'>
            Complete the course
            </h1>
            <p className="text-primary-800 text-lg leading-6 mt-6 text-center sm:text-left">In three simple modules, learn:</p>
            {
              courseList.map((v,i)=>{
                return (
                  <div key={i} className='flex gap-x-3 gap-y-2.5 lg:items-end items-center lg:flex-row flex-col mt-6'>
                  <img src={v.img} height={32} width={32}/>
                  <p className="text-primary-800 mt-auto text-base lg:text-lg lg:leading-6 ">{v.name}</p>
                  </div>
                )
              })
            }
           
          </div>
          <div>
          </div>
        </div>
        <img src="/assets/img2r.svg" className='w-fit m-auto mt-10 sm:block hidden' height={132} width={164} />
        <div className='mt-20 sm:mt-5'>
          <h1 className="text-primary-900 text-center font-semibold text-2xl lg:text-4xl leading-10 tracking-[-0.02em] ">
          Claim NEAR certificate
          </h1>
          <p className='text-primary-800 font-normal text-lg leading-6 text-center'>
          Upon course completion, receive the NEAR dev 101 <br/>
          certificate as an NFT on your NEAR wallet.
          </p>
          <img src='/assets/imgbg1.png' width={644} className="m-auto mt-20 sm:px-0 px-5" height={362}/>
        </div>
      </section>
      <section className='lg:px-36'>
        <div className=' flex md:bg-gradient-to-l -z-10 from-[#E9FAFB] via-[#effcfc] to-[#ffffff] lg:flex-row flex-col-reverse justify-between items-center mt-44'>
            <div className='relative text-center lg:text-left'>
            <h1 className="text-primary-900 font-semibold text-2xl lg:text-4xl leading-10 tracking-[-0.02em]">NEAR Development 101</h1>
            <button className="relative  text-primary-900 text-base  mt-4 cursor-pointer leading-4  w-fit   border rounded-full px-5 py-3 rounded-4xl inline-block">Start The Course</button>
            </div>
            <div >
              <img src="/assets/imgbg2.png" className='w-44 md:w-96 md:h-96' width={400} height={400} />
            </div>
        </div>
      </section>
      </main>
    
      
    </div>
  )
}
