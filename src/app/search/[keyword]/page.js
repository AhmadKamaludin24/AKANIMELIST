import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/header"
import {getAnimeResponse} from "@/libs/api-libs"
const Page = async ({params}) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword) 
    //const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  //  );
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    

    return (
        <div className="bg-color-dark">
       <Header title={`pencarian untuk ${decodedKeyword}..`}/>
          <AnimeList api={searchAnime} />
    </div>
    );
};
export default Page;