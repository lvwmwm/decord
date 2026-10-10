// Module ID: 9073
// Function ID: 9074
// Name: OrderSigningErrors
// Dependencies: [5071, 4791, 2]
// Exports: getOrderSigningError

// Module 9073 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4791 */;
import PaymentConstants from "PaymentConstants" /* 5071 */;
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
