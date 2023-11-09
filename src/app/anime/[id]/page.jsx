import {getAnimeResponse} from "@/libs/api-libs"
import Image from "next/image"
const Page = async({params: {id}}) => {
  const anime = await getAnimeResponse(`anime/${id}`)
  return(
    <div>
     <div className="pt-4 px-5">
      <h3 className="text-2xl text-color-secondary">{anime.data.title}-{anime.data.year}</h3>
     </div>
     <div className="pt-4 px-5 flex gap-2 text-color-secondary">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-secondary p-2">PERINGKAT
           <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-secondary p-2">SKOR
           <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-secondary">EPISODE
           <p>{anime.data.episodes}</p>
        </div>
     </div>
     
     <div className="pt-4 px-5 flex sm:flex-nowrap flex-wrap   gap-2">
      <Image src={anime.data.images.webp.image_url}
             alt={anime.data.images.jpg.image_url}
             width={250}
             height={250}
             className="w-full rounded object-cover"
       /> 
        <div className="border border-color-secondary p-2">
          <p className="p-4 border border-color-secondary rounded text-center text-2xl text-color-secondary">sinopsis</p>
         <p className="text-justify text-xl text-color-secondary">{anime.data.synopsis}</p>
        </div>
  
     </div>
    </div>
    )
}
export default Page