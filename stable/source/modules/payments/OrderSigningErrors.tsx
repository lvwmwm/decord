// Module ID: 8522
// Function ID: 8523
// Name: OrderSigningErrors
// Dependencies: [4869, 4550, 2]
// Exports: getOrderSigningError

// Module 8522 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4550 */;
import PaymentConstants from "PaymentConstants" /* 4869 */;
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
