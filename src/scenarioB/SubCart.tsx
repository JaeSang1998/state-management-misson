interface Props {
  cartItems: { id: number; name: string }[];
}

export default function SubCart({ cartItems }: Props) {
  return (
    <div className="bg-white p-2 rounded">
      <h2 className="font-semibold mb-2">장바구니 목록</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="border mb-1 px-2">
            상품명: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
