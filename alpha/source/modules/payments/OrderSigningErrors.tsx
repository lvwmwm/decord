// Module ID: 9379
// Function ID: 9380
// Name: OrderSigningErrors
// Dependencies: [5660, 4771, 2]
// Exports: getOrderSigningError

// Module 9379 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4771 */;
import PaymentConstants from "PaymentConstants" /* 5660 */;
import size from "module_2" /* 2 */;

const OrderClientErrorCode = PaymentConstants.OrderClientErrorCode;
const result = size.fileFinishedImporting("modules/payments/OrderSigningErrors.tsx");

export const getOrderSigningError = function getOrderSigningError(error) {
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
};
