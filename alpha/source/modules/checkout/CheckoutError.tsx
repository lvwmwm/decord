// Module ID: 10514
// Function ID: 10515
// Name: CheckoutError
// Dependencies: [10515, 2]

// Module 10514 (CheckoutError)
import RevenueError2 from "RevenueError" /* 10515 */;
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
