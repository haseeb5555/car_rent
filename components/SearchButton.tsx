import { buttonProps } from '@/types'
import Image from 'next/image'

const SearchButton = ({otherClasses}:buttonProps) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
       <Image 
         src="/magnifying-glass.svg"
         alt="glass"
         width={40}
         height={40}
         className='object-contain'
       />
    </button>
  )
}

export default SearchButton
