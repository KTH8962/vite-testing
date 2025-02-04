import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"
import "@testing-library/jest-dom"
import MovieList from "@/components/MovieList"
//import { fetchMovies } from "@/fetchers/movie"

describe("MovieList", () => {
  const server = setupServer()
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test("영화 제목을 입력하고 엔터키를 누르면, 영화 목록을 출력합니다.", async () => {
    const user = userEvent.setup()
    const response = {
      Response: "True",
      Search: [
        { imdbID: "1", Title: "Batman Begins" },
        { imdbID: "2", Title: "The Batman" },
      ],
      totalResults: 2,
    }
    let requestUrl = ""
    server.use(
      http.get("https://omdbapi.com/", ({ request }) => {
        requestUrl = request.url
        console.log(requestUrl)
        return HttpResponse.json(response)
      })
    )
    await act(async () => {
      render(<MovieList />)
    })

    const searchInput = screen.getByPlaceholderText("영화 제목을 입력하세요!")
    await user.type(searchInput, "batman{Enter}")

    expect(requestUrl).toBe(
      `https://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=batman`
    )
  })
})

// describe("fetchMovies", () => {
//   const server = setupServer()
//   beforeAll(() => server.listen())
//   afterEach(() => server.resetHandlers())
//   afterAll(() => server.close())

//   test("영화를 성공적으로 가져옵니다.", async () => {
//     const response = {
//       Response: "True",
//       Search: [
//         { imdbID: "1", Title: "Avengers: Infinity War" },
//         { imdbID: "2", Title: "Avengers: Endgame" },
//       ],
//       totalResults: 2,
//     }
//     server.use(
//       http.get("https://omdbapi.com/", () => {
//         return HttpResponse.json(response)
//       })
//     )

//     const movies = await fetchMovies("avengers")
//     expect(movies).toHaveLength(2)
//     expect(movies[0]).toEqual(response.Search[0])
//     expect(movies[1]).toEqual(response.Search[1])
//   })

//   test("영화를 가져오는데 실패합니다.", async () => {
//     const response = {
//       Error: "Movie not found!",
//       Response: "False",
//     }
//     server.use(
//       http.get("https://omdbapi.com/", () => {
//         return HttpResponse.json(response)
//       })
//     )

//     const movies = await fetchMovies("존재하지 않는 영화?!")
//     expect(movies).toBeUndefined()
//   })

//   test("네트워크 오류가 발생합니다.", async () => {
//     server.use(
//       http.get("https://omdbapi.com/", () => {
//         return HttpResponse.error()
//       })
//     )

//     await expect(fetchMovies("avengers")).rejects.toThrow()
//   })
// })

// describe("MovieList", () => {
//   const server = setupServer() // 서버 생성
//   beforeAll(() => server.listen()) // 모든 테스트 전에 서버 시작
//   afterEach(() => server.resetHandlers()) // 각 테스트 후에 핸들러 재설정
//   afterAll(() => server.close()) // 모든 테스트 후에 서버 종료

//   test("영화 정보를 출력해야 합니다.", async () => {
//     // OMDB API 응답 모의 작업
//     const response = {
//       Response: "True",
//       Search: [
//         { imdbID: "1", Title: "Avengers: Infinity War" },
//         { imdbID: "2", Title: "Avengers: Endgame" },
//       ],
//       totalResults: 2,
//     }
//     server.use(
//       http.get("https://omdbapi.com/", () => {
//         return HttpResponse.json(response)
//       })
//     )
//     await act(async () => {
//       render(<MovieList />)
//     })
//     // expect(screen.getByText('Avengers: Infinity War').toBeInTheDocument()
//     // expect(screen.getByText('Avengers: Endgame')).toBeInTheDocument()
//     expect(screen.getByText(response.Search[0].Title)).toBeInTheDocument()
//     expect(screen.getByText(response.Search[1].Title)).toBeInTheDocument()
//   })
// })

// vi.mock("@/fetchers/movie")
// // 모듈 모의 작업
// const mockedMovie = vi.mocked(movie) // 실제 모듈의 타입에 맞게 모의 모듈 반환

// describe("MovieList", () => {
//   test("영화 정보를 출력해야 합니다.", async () => {
//     await act(async () => {
//       render(<MovieList />)
//     })
//     await vi.waitFor(() => {
//       expect(screen.getByText("Avengers: Infinity War")).toBeInTheDocument()
//       expect(screen.getByText("Avengers: Endgame")).toBeInTheDocument()
//     })
//   })
// })

//import { vi } from "vitest"
// import * as movie from "@/fetchers/movie"

// vi.mock("@/fetchers/movie")
// // 모듈 모의 작업
// const mockedMovie = vi.mocked(movie) // 실제 모듈의 타입에 맞게 모의 모듈 반환

// describe("MovieList", () => {
//   test("영화 정보를 출력해야 합니다.", async () => {
//     // fetchMovies 함수 모의 작업
//     mockedMovie.fetchMovies.mockResolvedValue([
//       { imdbID: "1", Title: "Avengers: Infinity War" },
//       { imdbID: "2", Title: "Avengers: Endgame" },
//     ])
//     await act(async () => {
//       render(<MovieList />)
//     })
//   })
// })
