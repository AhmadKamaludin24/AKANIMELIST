import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce} from "@/libs/api-libs"
const Page = async () => {
    //const response = await fetch( `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
    const topAnime = await getAnimeResponse("top/anime", "")
    let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
   recomendedAnime = reproduce(recomendedAnime, 10)
    
    

    return (
      <section>
         <div className="bg-color-dark"><Header title='Populer' linkTitle='Lihat semua' linkHref='/populer'/>
             <AnimeList api={topAnime} />
         </div>
         <div className="bg-color-dark"><Header title='Rekomendasi'/>
             <AnimeList api={recomendedAnime} />
         </div>
      </section>

    );
};
export default Page;
