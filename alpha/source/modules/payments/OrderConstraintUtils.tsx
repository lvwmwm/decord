// Module ID: 7567
// Function ID: 7568
// Name: OrderConstraintUtils
// Dependencies: [7568, 5729, 1112, 2]
// Exports: getBlockingConstraintReasonCode, getOrderConstraintMessage

// Module 7567 (OrderConstraintUtils)
import intl5 from "intl" /* 1112 */;
import PaymentConstants from "PaymentConstants" /* 5729 */;
import OrderConstants from "OrderConstants" /* 7568 */;
import size from "module_2" /* 2 */;

function isSpendingLimitReasonCode(reason_code) {
  return set.has(reason_code);
}
const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const OrderStatus = PaymentConstants.OrderStatus;
const items = [, ];
({ SPENDING_LIMIT_REACHED: arr[0], SPENDING_LIMIT_WILL_EXCEED: arr[1] } = ConstraintReasonCode);
const set = new Set(items);
const items1 = [ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE];
const set1 = new Set(items1);
const items2 = [, ];
({ DRAFT: arr3[0], SIGNING_FAILED: arr3[1] } = OrderStatus);
const set2 = new Set(items2);
const result = size.fileFinishedImporting("modules/payments/OrderConstraintUtils.tsx");

export { isSpendingLimitReasonCode };
export function getBlockingConstraintReasonCode(arg0, arg1) {
  if (set2.has(arg0)) {
    let tmp2 = null;
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let reason_code = nextResult.reason_code;
      if (!nextResult.actionable) {
        if (isSpendingLimitReasonCode(reason_code)) {
          iter.return();
          return reason_code;
        } else {
          let hasItem = null != tmp2;
          if (!hasItem) {
            hasItem = set1.has(reason_code);
          }
          if (!hasItem) {
            tmp2 = reason_code;
          }
        }
      }
      continue;
    }
    return tmp2;
  } else {
    return null;
  }
}
export function getOrderConstraintMessage(result, intl) {
  if (ConstraintReasonCode.SPENDING_LIMIT_REACHED !== result) {
    if (ConstraintReasonCode.SPENDING_LIMIT_WILL_EXCEED !== result) {
      if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === result) {
        const intl3 = intl5.intl;
        return intl3.string(intl5.t.keFvXM);
      } else if (ConstraintReasonCode.SKU_ALREADY_OWNED === result) {
        const intl2 = intl5.intl;
        return intl2.string(intl5.t.m371Mx);
      } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED === result) {
        intl = intl5.intl;
        return intl.string(intl5.t.v9oC0p);
      } else {
        return intl;
      }
    }
  }
  const intl4 = intl5.intl;
  return intl4.string(intl5.t["73Islf"]);
}
