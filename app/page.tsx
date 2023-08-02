

import Image from 'next/image'
import  {Hero,SearchBar,CustomFilter ,CarCard}  from '@/components'
import { fetchCars } from '@/utils'
import { FilterProps,HomeProps } from '@/types';

export default async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer|| '',
    year:searchParams.year|| 2023,
    fuel:searchParams.fuel|| '',
    limit:searchParams.limit|| 10,
    
    model:searchParams.model|| '',
  });
   const isDataEmpty=!Array.isArray(allCars) || allCars.length<1||!allCars

  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'
          >Car Catalogue</h1>
          <p>Explore the cars you want</p>
      </div>
      <div className='home__filters'>
         <SearchBar/>
   
      </div>
      {!isDataEmpty ?(
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car)=>(<CarCard car={car}/>))}
          </div>
        </section>
      ):(
         <div className='home__error-container'>
           <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
         </div>
      )}
     </div>
    </main>
  )
}
