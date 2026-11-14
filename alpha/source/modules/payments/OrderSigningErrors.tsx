// Module ID: 10443
// Function ID: 10444
// Name: OrderSigningErrors
// Dependencies: [6050, 5126, 2]
// Exports: getOrderSigningError

// Module 10443 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 5126 */;
import PaymentConstants from "PaymentConstants" /* 6050 */;
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
