
import Card from "./Card";
import {Store} from 'lucide-react'

export default function  Marketplace(){
    
    return(
        <section className="bg-gray-100 min-h-screen text-[#53093a] py-28">
            <div className=" flex flex-col justify-center items-center ">
                <h1 className="font-bold text-5xl mb-4">
                The Ascendency Marketplace
                </h1>
                <p className="max-w-7/12 text-center text-base ">
                    Post your freelance availability, showcase your expertise, and get hired by individuals and companies.
                     A marketplace built for African talent, by African talent.
                </p>
            </div>

        
            <div className="flex mt-12  mx-3">
                <Card icon={<Store color="crimson"/>}
            title="Post Your Services"
            text="Create a professional profile showcasing your skills, rates, and availability." />

              <Card icon={<Store color="crimson"/>}
            title="Get Hired"
            text="Companies and individuals can browse and book your expertise directly." />

              <Card icon={<Store color="crimson"/>}
            title="Build Reputation"
            text="Earn reviews and ratings that elevate your profile and attract more clients." />
              <Card icon={<Store color="crimson"/>}
            title="Secure Payments"
            text="All transactions are protected. Mentors and freelancers get paid after service delivery." />
            </div>
            </section>
       
    );
}