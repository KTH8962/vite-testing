describe("영화 목록 페이지", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it("페이지 접속 시 기본 영화 목록이 표시되어야 함.", () => {
    cy.wait(1000) // 영화 목록을 가져오기까지 1초 동안 기다림!
    cy.get("h2").should("contain", "Movie List!") // <h2> 요소의 텍스트가 'Movie List!'이어야 함!
    cy.get("ul li").should("have.length.gt", 0) // <li> 요소가 1개 이상 있어야 함!
    cy.get("ul li").first().should("have.text", "The Avengers") // 첫 번째 <li> 요소의 텍스트가 'The Avengers'이어야 함!
  })

  it("영화 제목 검색 시 해당 영화 목록이 표시되어야 함.", () => {
    cy.get('input[type="text"]').type("batman{Enter}") // 텍스트 입력 후 엔터키!
    cy.wait(1000)
    cy.get("ul li").should("have.length.gt", 0)
    cy.get("ul li").first().should("contain", "Batman Begins")
  })
})
