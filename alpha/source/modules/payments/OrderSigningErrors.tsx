// Module ID: 9523
// Function ID: 9524
// Name: OrderSigningErrors
// Dependencies: [5736, 4828, 2]
// Exports: getOrderSigningError

// Module 9523 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4828 */;
import PaymentConstants from "PaymentConstants" /* 5736 */;
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
