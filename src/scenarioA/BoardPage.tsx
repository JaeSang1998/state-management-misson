import React, { useEffect } from "react";
import { useStoreA } from "./storeA";
import { useLocation, useNavigate } from "react-router-dom";

export default function BoardPage() {
  const { posts, search, isModalOpen, fetchPosts, setSearch, setModalOpen } =
    useStoreA();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const queryParam = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    setSearch(queryParam);
  }, [queryParam, setSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`?q=${search}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Board Page</h1>
      <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
        <input
          data-testid="board-search-input"
          className="border p-1"
          placeholder="검색어..."
          value={search}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          검색
        </button>
      </form>

      <p className="mb-2">검색어: {search}</p>

      <div className="mb-4 space-y-2">
        {posts
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((p) => (
            <div key={p.id} className="border p-2 bg-white rounded">
              {p.title}
            </div>
          ))}
      </div>

      <button
        data-testid="board-open-modal"
        className="bg-green-500 text-white px-3 py-1 rounded"
        onClick={() => setModalOpen(true)}
      >
        새 글 작성 열기
      </button>

      {isModalOpen && <CreatePostModal />}
    </div>
  );
}

function CreatePostModal() {
  const { setModalOpen } = useStoreA();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="font-bold mb-2">새 글 작성 모달</h2>
        <button
          data-testid="board-close-modal"
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => setModalOpen(false)}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
