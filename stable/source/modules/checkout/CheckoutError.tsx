// Module ID: 11579
// Function ID: 11580
// Name: CheckoutError
// Dependencies: [11580, 2]

// Module 11579 (CheckoutError)
import RevenueError2 from "RevenueError" /* 11580 */;
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
