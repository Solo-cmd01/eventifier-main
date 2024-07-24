import Cards from "./Cards";
import items from "./Eventlist";

const Events = () => {
  return (
     
    <div className="container mx-auto">
        
      <h1 className="text-center text-4xl my-8 montes font-semibold">Popular Events in Mumbai</h1>
      <div className="flex gap-4 ml-20 lg:ml-20">
           <div className="h-7 w-9 px-1 bg-slate-300 text-center rounded-[13px]">All</div>
           <div className="h-7 w-16 px-1 bg-slate-300 text-center rounded-[13px]">Today</div>
           <div className="h-7 w-24 px-1 bg-slate-300 text-center rounded-[13px]">Tomorrow</div>
           <div className="h-7 w-28 px-1 bg-slate-300 text-center rounded-[13px]">This Weekend</div>
           <div className="h-7 w-12 px-1 bg-slate-300 text-center rounded-[13px]">Free</div>
             
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 items-center ml-20 lg:ml-20">
        {items.slice(0, 6).map((item, index) => (
          <Cards
            key={index}
            date={item.date}
            title={item.title}
            image={item.image}
            time={item.time}
            amount={item.amount}
            interested={item.interested}
            type={item.type}
            code={item.code}
            ticketImage="/public/images/ion_ticket.png"
            starImage="/public/images/Star 1.png"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-60 opensans py-5 border transition-all border-slate-700  rounded-md text-[16px]">See More</button>
      </div>
    </div>
  )
}

export default Events





// import { MdOutlineStarBorder } from "react-icons/md";
// import { IoTicketSharp } from "react-icons/io5";

// const Events = () => {
//   return (
//     <div>
//         <div className=''>
//             <h1 className='mx-5 md:mx-20 Montserrat font-bold text-4xl my-10'>Popular Events in Mumbai</h1>
//             <div className='flex gap-2'>
//                 <div className='rounded-full mx-5 md:mx-20 h-7 w-14 text-center bg-slate-300'><p className=''>All</p></div>
//             </div>

//             <div className="mx-5  md:mx-20 my-auto">
//                     <img src="/images/ImageLakeside.svg" alt="image" />
//             </div>
            


//             <div className='flex gap- md:gap-0'>
//                 <div>
//                         <h1 className='font-semibold text-blue-500 ml-12 md:ml-32 mt-2 text-1xl md:text-2xl'>NOV</h1>
//                         <h1 className='font-bold ml-11 md:ml-[118px] text-sm md:text-2xl'>25-26</h1>
//                 </div>
//                 <div className="ml-10 mr-5 md:mr-0 md:ml-[30px]">
//                     <h1 className="font-extrabold text-1xl mt-2">Lakeside Camping at Pawna</h1>
//                     <p className=" font-bold">Adventure Geek - Explore the Unexplored,  <br />Mumbai</p>
//                     <p className="font-normal">8:30 AM - 7:30 PM</p>
//                     <div className='flex gap-2'>
//                     <IoTicketSharp size={20}className="my-auto"/>
//                     <p className="font-semibold">INR 1,400</p> 
//                     <MdOutlineStarBorder size={20} className="my-auto"/>
//                     <p className="font-semibold">14 interested</p>

//                     </div>
//                 </div>


//             </div>

//         </div>
//     </div>
//   )
// }

// export default Events