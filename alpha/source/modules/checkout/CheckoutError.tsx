// Module ID: 11580
// Function ID: 11581
// Name: CheckoutError
// Dependencies: [11581, 2]

// Module 11580 (CheckoutError)
import RevenueError2 from "RevenueError" /* 11581 */;
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
