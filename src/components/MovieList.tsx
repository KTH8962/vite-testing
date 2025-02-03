import { useEffect, useState } from "react"
import { fetchMovies } from "@/fetchers/movie"
import type { Movie } from "@/fetchers/movie"

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetchMovies("avengers").then(setMovies)
  }, [])

  return (
    <>
      <h2>Movie List!</h2>
      {movies.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </>
  )
}
