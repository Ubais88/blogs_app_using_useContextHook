import React, { useContext, useEffect } from 'react'
import Header from "./components/Header.js"
import Blogs from "./components/Blogs.js"
import Pagination from "./components/Pagination.js"
import { AppContext } from './Context/AppContext.js'

const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  },[])

  return (
    <div className='w-full h-full flex flex-col gap-y-1 items-center justify-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App