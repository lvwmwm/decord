// Module ID: 11213
// Function ID: 11214
// Name: useOrderSigning
// Dependencies: [5, 32, 19, 5729, 5777, 5763, 7569, 11214, 1112, 7570, 2]
// Exports: useOrderSigning

// Module 11213 (useOrderSigning)
import PaymentConstants from "PaymentConstants" /* 5729 */;
import BillingErrorDefault from "BillingError" /* 5763 */;
import ClientBillingError2 from "ClientBillingError" /* 5777 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3, gatewayCheckoutContext, loadId, order2, purchaseToken;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: hasOwnProperty, useState: metroRequire } = react);
const OrderStatus = PaymentConstants.OrderStatus;
class OrderSigningFailedError extends Error {
  constructor(arg0) {
    const tmp2 = new tmp(concat(arg0), concat);
    tmp2.name = "OrderSigningFailed";
    return tmp2;
  }
}
class UnexpectedOrderStatusError extends Error {
  constructor(arg0) {
    const tmp2 = new tmp(concat(arg0), concat);
    tmp2.name = "UnexpectedOrderStatus";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/payments/hooks/useOrderSigning.tsx");

export function useOrderSigning(order) {
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
  const tmp3 = closure_5((arg0) => {
    closure_4(arg0);
    if (onError != null) {
      onError(arg0);
    }
  }, items);
  closure_5 = tmp3;
  const items1 = [errorSource, tmp3];
  let tmp4 = closure_5(function(arg0, extra, arg2) {
    let obj2;
    const ClientBillingError = ClientBillingError2.ClientBillingError;
    const obj = { site: "order_sign", tags: obj2, extra };
    obj2 = { flow: errorSource };
    ClientBillingError.report(obj, arg0);
    let tmp4 = arg0;
    if (!(arg0 instanceof BillingErrorDefault)) {
      const self = this;
      const self2 = this;
      tmp4 = new tmp3(5763)(arg0);
    }
    if (null != arg2) {
      const self3 = this;
      const self4 = this;
      tmp4 = new tmp3(5763)(arg2);
    }
    closure_5(tmp4);
    return tmp4;
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
        let c2;
        let c3;
        let obj22;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            let billing_facet;
            let prop;
            let orderSigningError;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                loadId = undefined;
                purchaseToken = undefined;
                gatewayCheckoutContext = undefined;
                c3 = undefined;
                c4 = undefined;
                let obj4 = loadId;
                if (loadId === undefined) {
                  obj4 = {};
                }
                ({ loadId: c0, purchaseToken: c1, gatewayCheckoutContext: c2, errorExtra: c3, onSigningDeferred: c4 } = obj4);
                order = undefined;
                billing_facet = undefined;
                prop = undefined;
                orderSigningError = undefined;
                c5 = 1;
                c6 = 1;
                return { value: "Path", done: true };
              }
            } else if (1 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else if (null == closure_130_0) {
                const self3 = this;
                const self4 = this;
                const tmp86 = new purchaseToken(gatewayCheckoutContext[5])("Order not created yet");
                closure_130_5(tmp86);
                c6 = 3;
                return { value: { type: "failed" }, done: true };
              } else {
                closure_130_4(null);
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj8 = { orderId: closure_130_0.id, loadId, purchaseToken, gatewayCheckoutContext };
                const obj9 = { value: obj22.signOrder(obj8), done: false };
                obj22 = loadId(gatewayCheckoutContext[6]);
                return obj9;
              }
            } else if (2 === c5) {
              let obj10;
              c4 = 0;
              order2 = closure_3;
              if (order2 instanceof loadId(gatewayCheckoutContext[6]).OrderSigningFailedWithConstraintsError) {
                if (closure_130_2 != null) {
                  tmp73(order2.order);
                }
                closure_130_5(order2);
                obj10 = { type: "failed" };
              } else {
                const obj11 = { orderId: closure_130_0.id };
                const merged = Object.assign(c3);
                closure_130_6(order2, obj11);
                obj10 = { type: "failed" };
              }
              c6 = 3;
              return { value: obj10, done: true };
            } else {
              if (3 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  return { value, done: true };
                } else {
                  order = value;
                  if (order.status === constants.SIGNED) {
                    c4 = 0;
                    c6 = 3;
                    return { value: { type: "signed", order }, done: true };
                  } else if (order.status === constants.SIGNING_IN_PROGRESS) {
                    billing_facet = order.billing_facet;
                    prop = null;
                    if (null != billing_facet) {
                      prop = billing_facet.order_signing_deferral_context;
                    }
                    if (c4 != null) {
                      tmp41(order);
                    }
                    if (null != prop) {
                      c4 = 2;
                      c5 = 5;
                      c6 = 1;
                      const obj16 = { value: obj7.performSigningDeferralAction(prop), done: false };
                      obj7 = loadId(gatewayCheckoutContext[7]);
                      return obj16;
                    }
                  } else {
                    const obj21 = loadId(gatewayCheckoutContext[9]);
                    orderSigningError = obj21.getOrderSigningError(order);
                    if (null != orderSigningError) {
                      closure_130_5(orderSigningError);
                      c4 = 0;
                      c6 = 3;
                      return { value: { type: "failed" }, done: true };
                    } else if (null != order.error) {
                      const self2 = this;
                      throw new closure_1_8(order.error.code);
                    } else {
                      const self = this;
                      throw new closure_1_9(order.status);
                    }
                  }
                }
              } else if (4 === c5) {
                const obj18 = { orderId: closure_130_0.id };
                const merged1 = Object.assign(c3);
                const intl = loadId(gatewayCheckoutContext[8]).intl;
                closure_130_6(closure_3, obj18, intl.string(loadId(gatewayCheckoutContext[8]).t.khEaRI));
                c4 = 0;
                c6 = 3;
                return { value: { type: "failed" }, done: true };
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                c4 = 1;
              }
              c4 = 0;
              c6 = 3;
              return { value: { type: "pending", order }, done: true };
            }
          } catch (tmp89) {
            closure_3 = tmp89;
            if (0 === c4) {
              c6 = 3;
              throw tmp89;
            } else if (1 === tmp91) {
              c5 = 2;
            } else {
              c5 = 4;
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
}
