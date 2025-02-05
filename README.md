npm i -D vitest jsdom @testing-library/react @testing-library/dom @testing-library/user-event @testing-library/jest-dom @types/jest

npm i -D msw

npm i -D @vitest/coverage-v8

항목 설명
Stmts(Statements): 단순히 각 구문의 실행을 확인
Branch: 조건문(If, Switch)의 각 분기 실행(가능한 모든 결과)을 확인
Funcs(Functions): 각 함수 호출을 확인
Lines: 각 코드 라인의 실행을 확인
Uncovered Line: 테스트를 통해 실행되지 않은 코드 라인을 표시

% Coverage report from v8
----------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files | 65.11 | 75 | 66.66 | 65.11 |
src | 0 | 0 | 0 | 0 |
App.tsx | 0 | 0 | 0 | 0 | 1-12
main.tsx | 0 | 0 | 0 | 0 | 1-8
src/components | 100 | 100 | 100 | 100 |
MovieList.tsx | 100 | 100 | 100 | 100 |
src/fetchers | 100 | 100 | 100 | 100 |
movie.ts | 100 | 100 | 100 | 100 |
----------------|---------|----------|---------|---------|-------------------

npm i -D cypress
