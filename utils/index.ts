import { carProps } from "@/types";
import { FilterProps } from "@/types";

export async function fetchCars(filter:FilterProps) {
  const {manufacturer,year,model,fuel,limit}=filter;
  const headers={
		'X-RapidAPI-Key': '5e0b04ba7bmshce11344ae8bd339p11f817jsn531ec7bebc7a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

  }  
  const response= await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}
  &model=${model}&limit=${limit}&fuel_type=${fuel}`,{
    headers:headers,
  });
  const result = await response.json();
  return result
}



export const calculateCarRent = (city_mpg:number,year:number)=>{
  
  const basePricePerDay=50;
  const milageFactor=0.1;
  const ageFactor=0.05;
  const milageRate =city_mpg*milageFactor;
  const ageRate=(new Date().getFullYear()- year)*ageFactor;
  const rentalRatePerDay =milageRate+basePricePerDay+ageRate;

  return rentalRatePerDay.toFixed(0);

}

export const generateCarImageUrl = (car:carProps,angle?:string)=>{
const url = new URL("https://cdn.imagin.studio/getimage");
const {make, model ,year }= car;

url.searchParams.append('customer','hrjavascript-mastery')
url.searchParams.append('make', make);
url.searchParams.append('modelFamily', model.split(' ')[0]);
url.searchParams.append('zoomType', 'fullscreen');
url.searchParams.append('modelYear', `${year}`);
url.searchParams.append('angle', `${angle}`);

return `${url}`;

}
