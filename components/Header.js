export default function Header() {
  return (
    <header className="bg-white fixed top-0 z-50 w-full">
        <nav className="flex items-center  lg:max-w-5xl  m-auto px-4 lg:px-0  my-6 content-wrapper">
        <div className="flex items-center">
            <img src="/assets/logo1.svg" height={39} width={39} />
            <span className="ml-2 hidden md:block text-zinc-700 font-bold text-lg">Dacade</span>
            <div class="border-gray-200 border-solid w-[0.125rem] h-[2.438rem] border-r-2 lg:mx-2.5 mx-1.5"></div>
            <div class="hidden lg:block">
            <img src="/assets/logo2.svg" height={38} width={120} />
            </div>
            <div class="lg:hidden"><svg width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m22.697 2.318-5.683 8.437a.605.605 0 0 0 .897.793L23.505 6.7a.227.227 0 0 1 .377.172v15.19a.226.226 0 0 1-.4.146L6.573 1.963A2.898 2.898 0 0 0 4.363.937H3.77A2.896 2.896 0 0 0 .875 3.834v21.395a2.896 2.896 0 0 0 5.366 1.516l5.683-8.438a.605.605 0 0 0-.897-.793l-5.594 4.849a.227.227 0 0 1-.378-.172V7a.227.227 0 0 1 .4-.145L22.363 27.1a2.898 2.898 0 0 0 2.212 1.025h.591a2.896 2.896 0 0 0 2.896-2.896V3.834a2.896 2.896 0 0 0-5.365-1.516Z" fill="#000"></path></svg></div>
        </div>
        <div class="flex text-black font-normal lg:text-lg text-base items-center ml-auto">
            <button type="button" class="hidden lg:block bg-transparent border-none text-default w-full  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent  border rounded-full px-5 py-3 rounded-4xl inline-block">Start The Course</button>
            <button type="button" class="ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">Create wallet</button></div>
        <div>
        </div>
        </nav>
       
    </header>
  )
}
