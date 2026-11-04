// Module ID: 9493
// Function ID: 9494
// Name: OrderSigningErrors
// Dependencies: [5730, 4826, 2]
// Exports: getOrderSigningError

// Module 9493 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4826 */;
import PaymentConstants from "PaymentConstants" /* 5730 */;
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
