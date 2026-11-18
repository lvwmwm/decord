// Module ID: 6772
// Function ID: 6773
// Name: OrderSigningErrors
// Dependencies: [6770, 5540, 4643, 2]
// Exports: getOrderSigningError

// Module 6772 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 4643 */;
import PaymentConstants from "PaymentConstants" /* 5540 */;
import OrderConstants from "OrderConstants" /* 6770 */;
import size from "module_2" /* 2 */;

const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const OrderClientErrorCode = PaymentConstants.OrderClientErrorCode;
const result = size.fileFinishedImporting("modules/payments/OrderSigningErrors.tsx");

export function getOrderSigningError(body2) {
  const unsatisfied_constraints = body2.unsatisfied_constraints;
  let someResult;
  if (unsatisfied_constraints != null) {
    someResult = unsatisfied_constraints.some((reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED);
  }
  if (someResult) {
    const self3 = this;
    const self4 = this;
    const tmp8 = BillingErrorDefault;
    const tmp82 = new tmp8("", BillingErrorDefault.ErrorCodes.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION);
    return tmp82;
  } else {
    const error = body2.error;
    let tmp2 = null;
    if (null != error) {
      tmp2 = null;
      if (error.code !== OrderClientErrorCode.UNKNOWN_ERROR_CODE) {
        const self = this;
        const self2 = this;
        tmp2 = new BillingErrorDefault(error.message, error.billing_error_code);
      }
    }
    return tmp2;
  }
}
