// Module ID: 7202
// Function ID: 57994
// Name: _discardDraftOrder
// Dependencies: [5, 4113, 6668, 2]
// Exports: discardDraftOrder

// Module 7202 (_discardDraftOrder)
import asyncGeneratorStep from "asyncGeneratorStep";
import { OrderStatus } from "CustomCheckoutFlow";

const require = arg1;
async function _discardDraftOrder(arg0, arg1) {
  let iter = (function*(arg0) {
    let checkoutSucceeded;
    let order;
    ({ order, checkoutSucceeded } = arg0);
    yield undefined;
    if (!checkoutSucceeded) {
      let id;
      if (null != order) {
        id = order.id;
      }
      if (null != id) {
        if (order.status === outer2_3.DRAFT) {
          yield outer2_0(outer2_1[2]).discardOrder(order.id);
          const obj = outer2_0(outer2_1[2]);
        }
      }
    }
  })();
  iter.next();
  return iter;
}
const result = require("getOrders").fileFinishedImporting("modules/checkout/utils/OrderUtils.native.tsx");

export const discardDraftOrder = function discardDraftOrder(arg0) {
  return _discardDraftOrder(...arguments);
};
