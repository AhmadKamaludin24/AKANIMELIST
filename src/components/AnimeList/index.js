import Image from "next/image"
import Link from "next/link"
const AnimeList = ({api}) => {
  return(
    <div className="grid md:grid-cols-5
    sm:grid-cols-3 grid-cols-2 gap-4 px-4">
     {api.data?.map((anime) => {
     return(
                <Link href={`/anime/${anime.mal_id}`} className="text-color-secondary hover:text-color-accent transition-all">
      <Image src={anime.images.jpg.image_url} alt=".." width={350} height={350} className='w-full mx-h-64 object-cover'/>
      <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3> 
      </Link>
     )
     })}

      

    </div>
    

    
    )
}
export default AnimeList