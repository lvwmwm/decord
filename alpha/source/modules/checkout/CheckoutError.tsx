// Module ID: 12590
// Function ID: 12591
// Name: CheckoutError
// Dependencies: [12591, 2]

// Module 12590 (CheckoutError)
import RevenueError2 from "RevenueError" /* 12591 */;
import size from "module_2" /* 2 */;

const RevenueError = RevenueError2.RevenueError;
class CheckoutError extends RevenueError {
  constructor(arg0) {
    const tmp2 = new tmp(arg0, new.target);
    tmp2.name = "FatalCheckoutError";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export { CheckoutError };
