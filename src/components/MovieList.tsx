import { useEffect, useState } from "react"
import { fetchMovies } from "@/fetchers/movie"
import type { Movie } from "@/fetchers/movie"

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    fetchMovies("avengers").then(setMovies)
  }, [])

  return (
    <>
      <h2>Movie List!</h2>
      <input
        type="text"
        value={title}
        placeholder="영화 제목을 입력하세요!"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && fetchMovies(title).then(setMovies)
        }
      />
      {movies.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </>
  )
}
