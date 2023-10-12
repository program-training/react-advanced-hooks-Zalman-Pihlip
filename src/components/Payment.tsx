import { FC } from "react";

type PaymentProps = { payment: number[] };

const Payment: FC<PaymentProps> = ({ payment }) => {
  const totalPayment = payment.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "5px",
        width: "150px",
        margin: "5px",
        border: "2px solid black",
        backgroundColor: "aqua",
        borderRadius: "15px",
      }}>
    <span>payment</span>
      <span>total payment: {totalPayment}</span>
      <span>quantity of products: {payment.length}</span>
    </div>
  );
};

export default Payment;
