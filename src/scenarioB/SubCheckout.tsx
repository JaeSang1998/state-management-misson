interface Props {
  checkoutName: string;
  setCheckoutName: (val: string) => void;
  checkoutSuccess: boolean;
  onSubmit: () => void;
}

export default function SubCheckout({
  checkoutName,
  setCheckoutName,
  checkoutSuccess,
  onSubmit,
}: Props) {
  return (
    <div className="bg-white p-2 rounded">
      <h2 className="font-semibold mb-2">결제하기</h2>
      {checkoutSuccess ? (
        <p>결제 성공!</p>
      ) : (
        <>
          <input
            data-testid="commerce-checkout-name"
            className="border p-1 mr-2"
            placeholder="이름"
            value={checkoutName}
            onChange={(e) => setCheckoutName(e.target.value)}
          />
          <button
            data-testid="commerce-checkout-submit"
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={onSubmit}
          >
            결제
          </button>
        </>
      )}
    </div>
  );
}
