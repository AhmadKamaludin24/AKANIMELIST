const Pagination = ({ page, lastPage, setPage}) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth", 
      top: 0
    })
  }
  
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }
  return(
    <div className="flex justify-center items-center py-8 px-4 gap-8 text-color-secondary text-2xl">
    {page <= 1 ? null : 
      <button onClick = {handlePrevPage} className='hover:text-color-accent'>Prev</button>
    }
      <p>{page} of {lastPage}</p>
      {page >= lastPage ? null : 
      <button onClick = {handleNextPage} className='hover:text-color-accent'>Next</button>
        }
      
    </div>
   )
}
export default Pagination