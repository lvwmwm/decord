// Module ID: 11155
// Function ID: 11156
// Name: CheckoutError
// Dependencies: [11156, 2]

// Module 11155 (CheckoutError)
import RevenueError2 from "RevenueError" /* 11156 */;
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
