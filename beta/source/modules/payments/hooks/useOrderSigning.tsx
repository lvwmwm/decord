// Module ID: 8325
// Function ID: 8326
// Name: useOrderSigning
// Dependencies: [5, 32, 19, 4815, 4510, 4503, 6664, 2]
// Exports: useOrderSigning

// Module 8325 (useOrderSigning)
import BillingUtils from "BillingUtils" /* 4503 */;
import BillingErrorDefault from "BillingError" /* 4510 */;
import PaymentConstants from "PaymentConstants" /* 4815 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_1, loadId, order2;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: hasOwnProperty, useState: metroRequire } = react);
const OrderStatus = PaymentConstants.OrderStatus;
let result = size.fileFinishedImporting("modules/payments/hooks/useOrderSigning.tsx");

export const useOrderSigning = function useOrderSigning(order) {
  let closure_4;
  let first;
  let items2;
  order = order.order;
  const errorSource = order.errorSource;
  const onSignFailure = order.onSignFailure;
  const onError = order.onError;
  _slicedToArray = undefined;
  let closure_5;
  let closure_6;
  [first, _slicedToArray] = closure_6(null);
  const items = [onError];
  let tmp3 = closure_5((arg0) => {
    closure_4(arg0);
    if (onError != null) {
      onError(arg0);
    }
  }, items);
  closure_5 = tmp3;
  const items1 = [errorSource, tmp3];
  const tmp4 = closure_5(function(error, extra) {
    let obj3;
    let tmp3 = error;
    if (!(error instanceof BillingErrorDefault)) {
      const self = this;
      const self2 = this;
      tmp3 = new BillingErrorDefault(error);
    }
    const obj = BillingUtils;
    if (!obj.isExpectedHttpClientError(error)) {
      const _Error = Error;
      let tmp8 = tmp3;
      const captureBillingException = tmp5(4503).captureBillingException;
      BillingUtils;
      if (error instanceof Error) {
        tmp8 = error;
      }
      const obj2 = { tags: obj3, extra };
      obj3 = { source: errorSource };
      const result = captureBillingException(tmp8, obj2);
    }
    closure_5(tmp3);
    return tmp3;
  }, items1);
  closure_6 = tmp4;
  let obj = {
    error: first,
    signOrder: closure_5(onError((loadId) => {
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      const iter = (function*(arg0, value) {
        let c0;
        let c1;
        let obj7;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                order = tmp;
                closure_1 = tmp4;
                loadId = undefined;
                c1 = undefined;
                let obj4 = loadId;
                if (loadId === undefined) {
                  obj4 = {};
                }
                ({ loadId: c0, errorExtra: c1 } = obj4);
                order = undefined;
                c5 = 1;
                c6 = 1;
                return { value: "flex", done: true };
              }
            } else if (1 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else if (null == closure_130_0) {
                const self5 = this;
                const self6 = this;
                const tmp58 = new closure_1(order[4])("Order not created yet");
                closure_130_5(tmp58);
                c6 = 3;
                return { value: { type: "failed" }, done: true };
              } else {
                closure_130_4(null);
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj8 = { orderId: closure_130_0.id, loadId };
                const obj9 = { value: obj7.signOrder(obj8), done: false };
                obj7 = loadId(order[6]);
                return obj9;
              }
            } else if (2 === c5) {
              let obj10;
              c4 = 0;
              if (order2 instanceof loadId(order[6]).OrderSigningFailedWithConstraintsError) {
                if (closure_130_2 != null) {
                  tmp36(order2.order);
                }
                closure_130_5(order2);
                obj10 = { type: "failed" };
              } else {
                const obj11 = { orderId: closure_130_0.id };
                const merged = Object.assign(c1);
                closure_130_6(order2, obj11);
                obj10 = { type: "failed" };
              }
              c6 = 3;
              return { value: obj10, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              order = value;
              if (order.status !== constants.SIGNED) {
                if (null != order.errors) {
                  if (order.errors.length > 0) {
                    const _Error2 = Error;
                    const errors = order.errors;
                    const _HermesInternal2 = HermesInternal;
                    const self3 = this;
                    const self4 = this;
                    const error = new Error("Order signing failed with errors: " + errors.join(", "));
                    throw error;
                  }
                }
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error1 = new Error("Unexpected order status: " + order.status);
                throw error1;
              } else {
                c4 = 0;
                c6 = 3;
                return { value: { type: "signed", order }, done: true };
              }
            }
          } catch (tmp61) {
            order2 = tmp61;
            if (0 === c4) {
              c6 = 3;
              throw tmp61;
            } else {
              c5 = 2;
            }
          }
        }
      })();
      iter.next();
      return iter;
    }), items2),
    reportError: tmp4
  };
  items2 = [order, onSignFailure, tmp4, tmp3];
  return obj;
};
