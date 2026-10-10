// Module ID: 10503
// Function ID: 10504
// Name: CheckoutError
// Dependencies: [10504, 2]

// Module 10503 (CheckoutError)
import RevenueError2 from "RevenueError" /* 10504 */;
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
