// Module ID: 9542
// Function ID: 9543
// Name: OrderSigningErrors
// Dependencies: [5742, 4829, 2]
// Exports: getOrderSigningError

// Module 9542 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4829 */;
import PaymentConstants from "PaymentConstants" /* 5742 */;
import size from "module_2" /* 2 */;

const OrderClientErrorCode = PaymentConstants.OrderClientErrorCode;
const result = size.fileFinishedImporting("modules/payments/OrderSigningErrors.tsx");

export function getOrderSigningError(error) {
  error = error.error;
  let tmp = null;
  if (null != error) {
    tmp = null;
    if (error.code !== OrderClientErrorCode.UNKNOWN_ERROR_CODE) {
      const self = this;
      const self2 = this;
      tmp = new BillingErrorDefault(error.message, error.billing_error_code);
    }
  }
  return tmp;
}
