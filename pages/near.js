import Link from "next/link";

export default function Near() {
    return (
        <div className="text-center my-52">
         <h1 className="lg:text-7xl mb-6 lg:w-full leading-40p w-52 mx-auto font-semibold text-4xl text-primary-900">
          Page 3<br/>
          </h1>
          <Link href="/"> <span className="text-center w-full text-blue-500 cursor-pointer ">Home</span></Link>
        </div>
    )
  }
  