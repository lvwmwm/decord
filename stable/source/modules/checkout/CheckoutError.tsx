// Module ID: 10505
// Function ID: 10506
// Name: CheckoutError
// Dependencies: [10506, 2]

// Module 10505 (CheckoutError)
import RevenueError2 from "RevenueError" /* 10506 */;
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
