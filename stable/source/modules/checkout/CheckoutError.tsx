// Module ID: 11734
// Function ID: 11735
// Name: CheckoutError
// Dependencies: [11735, 2]

// Module 11734 (CheckoutError)
import RevenueError2 from "RevenueError" /* 11735 */;
import size from "module_2" /* 2 */;

const RevenueError = RevenueError2.RevenueError;
const prototype = function CheckoutError(arg0) {
  const tmp2 = new tmp(arg0, new.target);
  tmp2.name = "FatalCheckoutError";
  return tmp2;
}.prototype;
class prototype extends RevenueError {
}
const result = size.fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = prototype;
