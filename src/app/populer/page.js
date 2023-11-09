"use client"
import AnimeList from '@/components/AnimeList'
import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import {getAnimeResponse} from '@/libs/api-libs'
const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopanime] = useState([])
  const fetchData = async() => {
    //const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    //const data = await response.json();
    
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
     setTopanime(popularAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])
  
  return(
    <div>
    <HeaderMenu title={`Anime Terpopuler #${page}`}/>
    <AnimeList api={topAnime} />
    <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </div>
    )
}
export default Page