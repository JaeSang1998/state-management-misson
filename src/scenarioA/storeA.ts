import { create } from "zustand";
import axios from "axios";

interface BoardPost {
  id: number;
  title: string;
}

interface StoreAState {
  posts: BoardPost[];
  search: string;
  isModalOpen: boolean;

  fetchPosts: () => Promise<void>;
  setSearch: (v: string) => void;
  setModalOpen: (v: boolean) => void;
}

export const useStoreA = create<StoreAState>((set) => ({
  posts: [],
  search: "",
  isModalOpen: false,

  fetchPosts: async () => {
    try {
      const res = await axios.get("/api/boardposts");
      set({ posts: res.data.posts });
    } catch (err) {
      console.error("Fetch boardposts error:", err);
    }
  },

  setSearch: (v) => set({ search: v }),
  setModalOpen: (v) => set({ isModalOpen: v }),
}));
