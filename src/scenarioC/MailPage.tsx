import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

interface MailItem {
  id: number;
  subject: string;
}

export default function MailPage() {
  const [mailState, setMailState] = useState<{
    mailList: MailItem[];
    search: string;
    composeOpen: boolean;
  }>({
    mailList: [],
    search: "",
    composeOpen: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  // fetch mail list once
  useEffect(() => {
    axios
      .get("/api/mails")
      .then((res) => {
        setMailState((prev) => ({ ...prev, mailList: res.data.mails }));
      })
      .catch((err) => console.error("fetch mails error", err));
  }, []);

  // sync search query param <-> mailState.search
  useEffect(() => {
    const q = new URLSearchParams(location.search).get("q") || "";
    setMailState((prev) => ({ ...prev, search: q }));
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailState((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`?q=${mailState.search}`);
  };

  const openCompose = () => {
    setMailState((prev) => ({ ...prev, composeOpen: true }));
  };
  const closeCompose = () => {
    setMailState((prev) => ({ ...prev, composeOpen: false }));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Mail Page</h1>

      <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
        <input
          data-testid="mail-search-input"
          className="border p-1"
          placeholder="메일 검색..."
          value={mailState.search}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          검색
        </button>
      </form>

      <p className="mb-2">검색어: {mailState.search}</p>

      <div className="mb-4">
        {mailState.mailList
          .filter((mail) =>
            mail.subject.toLowerCase().includes(mailState.search.toLowerCase())
          )
          .map((mail) => (
            <div key={mail.id} className="border p-2 my-2 bg-white rounded">
              <h2 className="font-semibold">{mail.subject}</h2>
            </div>
          ))}
      </div>

      <button
        data-testid="mail-compose-btn"
        className="bg-green-500 text-white px-3 py-1 rounded"
        onClick={openCompose}
      >
        새 메일 작성
      </button>

      {mailState.composeOpen && (
        <ComposeMailModal closeCompose={closeCompose} />
      )}
    </div>
  );
}

function ComposeMailModal({ closeCompose }: { closeCompose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="font-bold mb-2">메일 작성 모달</h2>
        <button
          data-testid="mail-compose-close"
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={closeCompose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
