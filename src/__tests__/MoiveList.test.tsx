import { render, screen, act, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import MovieList from "@/components/MovieList"

describe("MovieList", () => {
  test("영화 정보를 출력해야 합니다.", async () => {
    // render(<MovieList />)
    await act(async () => {
      render(<MovieList />)
    })
    await waitFor(() => {
      expect(screen.getByText("Avengers: Infinity War")).toBeInTheDocument()
      expect(screen.getByText("Avengers: Endgame")).toBeInTheDocument()
    })
  })
})
