import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardPage from "./scenarioA/BoardPage";
import CommercePage from "./scenarioB/CommercePage";
import MailPage from "./scenarioC/MailPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">개선 과제 메인</h1>
        <p className="mb-2">아래 3가지 시나리오가 각각 문제가 있습니다.</p>
        <ul className="list-disc ml-6 mb-4 text-sm">
          <li>시나리오 A (Board): 전역 Store를 과도하게 남용</li>
          <li>시나리오 B (Commerce): Props Drilling이 심각</li>
          <li>
            시나리오 C (Mail): 한 컴포넌트 로컬 state에 모든 것을 뭉쳐버림
          </li>
        </ul>
        <div className="flex gap-2 mb-4">
          <Link
            to="/scenarioA"
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            시나리오 A
          </Link>
          <Link
            to="/scenarioB"
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            시나리오 B
          </Link>
          <Link
            to="/scenarioC"
            className="bg-purple-500 text-white px-3 py-1 rounded"
          >
            시나리오 C
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/scenarioA" element={<BoardPage />} />
        <Route path="/scenarioB" element={<CommercePage />} />
        <Route path="/scenarioC" element={<MailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
