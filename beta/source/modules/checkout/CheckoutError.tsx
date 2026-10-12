// Module ID: 10504
// Function ID: 10505
// Name: CheckoutError
// Dependencies: [10505, 2]

// Module 10504 (CheckoutError)
import RevenueError2 from "RevenueError" /* 10505 */;
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
