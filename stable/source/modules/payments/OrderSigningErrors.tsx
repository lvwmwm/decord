// Module ID: 9363
// Function ID: 9364
// Name: OrderSigningErrors
// Dependencies: [5171, 4886, 2]
// Exports: getOrderSigningError

// Module 9363 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4886 */;
import PaymentConstants from "PaymentConstants" /* 5171 */;
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
