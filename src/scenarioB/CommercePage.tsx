import React, { useEffect, useState } from "react";
import axios from "axios";
import SubCart from "./SubCart";
import SubTheme from "./SubTheme";
import SubCheckout from "./SubCheckout";

export default function CommercePage() {
  // theme, cartItems, checkoutName 등 전부 이 한 컴포넌트가 들고 있음
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [cartItems, setCartItems] = useState<{ id: number; name: string }[]>(
    []
  );
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // fetch cart
  useEffect(() => {
    axios
      .get("/api/cart")
      .then((res) => setCartItems(res.data.items))
      .catch((err) => console.error("cart fetch error", err));
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleCheckout = () => {
    if (!checkoutName.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }
    setCheckoutSuccess(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Commerce Page</h1>
      <div className="mb-4">
        <SubTheme theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="mb-4">
        <SubCart cartItems={cartItems} />
      </div>
      <div>
        <SubCheckout
          checkoutName={checkoutName}
          setCheckoutName={setCheckoutName}
          checkoutSuccess={checkoutSuccess}
          onSubmit={handleCheckout}
        />
      </div>
    </div>
  );
}
