export interface Movie {
  imdbID: string
  Title: string
}

export async function fetchMovies(title: string): Promise<Movie[]> {
  //   const res = await fetch(
  //     `https://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`
  //     )
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`)
  const { Search } = await res.json()
  console.log(Search)
  return Search
}
