import { Dialog,Transition } from '@headlessui/react'
import Link from 'next/link'
import { useState , Fragment} from 'react'
import { country } from '../data/data'
export default function Header() {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <header className="bg-white fixed top-0 z-50 w-full">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   <div className='flex justify-between pb-5'>
                      <p className=' font-semibold text-xl tracking-tight'>Choose language</p>
                      <span className='my-auto cursor-pointer' onClick={closeModal}>
                        <img src='assets/close.svg' />
                      </span>
                   </div>
                  </Dialog.Title>
                  <div className='border-t pt-5'>
                    {
                      country.map((v,i)=>{
                        return(
                          <div className='flex justify-between pb-2 border p-2 mb-4 rounded' key={i}>
                      <div className='flex space-x-2 my-auto'>
                        <img src={v.url} className='w-5 h-5 ' height={14} width={24} />
                        <span>{v.name}</span>
                      </div>
                      <div>
                        <span className='p-2.5 rounded-full bg-gray-200 mx-auto flex items-center'>
                          <img src="assets/arrow.svg" width={7} height={14} />
                        </span>
                      </div>
                    </div>
                        )
                      })
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        <nav className="flex items-center  lg:max-w-5xl  m-auto px-4 lg:px-0  my-6 content-wrapper">
        <Link href="/near">
           <div className="flex items-center cursor-pointer">
            <img src="/assets/logo1.svg" height={39} width={39} />
            <span className="ml-2 hidden md:block text-zinc-700 font-bold text-lg">Dacade</span>
            <div class="border-gray-200 border-solid w-[0.125rem] h-[2.438rem] border-r-2 lg:mx-2.5 mx-1.5"></div>
            <div class="hidden lg:block">
            <img src="/assets/logo2.svg" height={38} width={120} />
            </div>
            <div class="lg:hidden"><svg width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m22.697 2.318-5.683 8.437a.605.605 0 0 0 .897.793L23.505 6.7a.227.227 0 0 1 .377.172v15.19a.226.226 0 0 1-.4.146L6.573 1.963A2.898 2.898 0 0 0 4.363.937H3.77A2.896 2.896 0 0 0 .875 3.834v21.395a2.896 2.896 0 0 0 5.366 1.516l5.683-8.438a.605.605 0 0 0-.897-.793l-5.594 4.849a.227.227 0 0 1-.378-.172V7a.227.227 0 0 1 .4-.145L22.363 27.1a2.898 2.898 0 0 0 2.212 1.025h.591a2.896 2.896 0 0 0 2.896-2.896V3.834a2.896 2.896 0 0 0-5.365-1.516Z" fill="#000"></path></svg></div>
        </div>
        </Link>
        <div class="flex text-black font-normal lg:text-lg text-base items-center ml-auto">
            <button type="button" onClick={openModal} class="hidden lg:block bg-transparent border-none text-default w-full  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent  border rounded-full px-5 py-3 rounded-4xl inline-block">Start The Course</button>
            <Link href="/wallet"> <button type="button" class="ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">Create wallet</button></Link></div>
        <div>
        </div>
        </nav>
       
    </header>
  )
}
