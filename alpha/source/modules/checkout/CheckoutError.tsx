// Module ID: 10973
// Function ID: 10974
// Name: CheckoutError
// Dependencies: [10974, 2]

// Module 10973 (CheckoutError)
import RevenueError2 from "RevenueError" /* 10974 */;
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
