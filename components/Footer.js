import { socialMedia } from "../data/data"
export default function Footer() {
  return (
    <footer className="w-full bg-white">
       <div className="lg:max-w-4xl px-[23px] py-24  text-lg mx-auto">
       <h6 className="text-center">Visit <span className="font-bold cursor-pointer">nearbalkans.org</span> and make sure to follow us on our social and community channels!</h6>
       <div className="lg:flex pt-[2.438rem] w-full lg:w-[33.75rem] lg:mx-auto">
        <img src="/assets/logo2.svg" className="sm:block hidden" />
        <div class="border-gray-200 border-solid border-r-2 mx-[3.813rem] hidden lg:block"></div>
        <div className="flex items-center lg:ml-auto justify-between">
            {
                socialMedia.map((v,i)=>{
                    return  <img className="lg:px-3 px-2 mt-10 lg:mt-0" key={i} src={v.url} alt={v.name} />
                })
            }
           
        </div>
       </div>
       <div className="lg:flex justify-center  m-auto gap-10 pt-[39px]">
            <div>
                <p className="text-lg cursor-pointer text-center"> NEAR Balkans 2022</p>
            </div>
            <div>
                <p className="text-lg cursor-pointer text-center"> info@nearbalkans.org</p>
            </div>
            <div>
                <p className="text-lg cursor-pointer text-center"> Privacy Policy</p>
            </div>
            <div>
                <p className="text-lg cursor-pointer text-center"> Terms & Conditions</p>
            </div>
            <div>
                <p className="text-lg cursor-pointer text-center"> Terms & Conditions</p>
            </div>
        </div>
        <h6 class="pt-[34px] text-center">NEAR Balkans Hub: Bosnia &amp; Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia</h6>
       </div> 
    </footer>
  )
}
