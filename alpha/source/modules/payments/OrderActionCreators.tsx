// Module ID: 7569
// Function ID: 7570
// Name: OrderActionCreators
// Dependencies: [5, 7568, 1071, 3, 5763, 7570, 1112, 2450, 1284, 5777, 2]
// Exports: fetchOrderEntitlementsWithRetry, getOrder, signOrder

// Module 7569 (OrderActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import _modDef2450 from "module_2450" /* 2450 */;
import BillingError2 from "BillingError" /* 5763 */;
import OrderConstants from "OrderConstants" /* 7568 */;
import OrderSigningErrors from "OrderSigningErrors" /* 7570 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const BillingError_mod = BillingError2;
let c11, c12, c7, closure_10, closure_4, error;

let SPENDING_LIMIT_REACHED;
let SPENDING_LIMIT_WILL_EXCEED;
const f91209 = (reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED;
function isOrderShape(obj) {
  return null != obj && typeof obj === "object" && "id" in obj && "status" in obj;
}
function getOrderSigningConstraintsError(status) {
  let tmp = null;
  if (null != status) {
    tmp = null;
    if (typeof status === "object") {
      tmp = null;
      if ("status" in status) {
        tmp = null;
        if (400 === status.status) {
          tmp = null;
          if ("body" in status) {
            const body = status.body;
            tmp = null;
            const tmp2 = null != body && typeof body === "object" && "id" in body && "status" in body;
            if (tmp2) {
              const body2 = status.body;
              const self = this;
              if (typeof OrderSigningFailedWithConstraintsError === "function") {
                const unsatisfied_constraints = body2.unsatisfied_constraints;
                let someResult;
                if (unsatisfied_constraints != null) {
                  someResult = unsatisfied_constraints.some(f91209);
                }
                let orderSigningError = null;
                if (someResult) {
                  obj = OrderSigningErrors;
                  orderSigningError = obj.getOrderSigningError(body2);
                }
                let str2;
                if (orderSigningError != null) {
                  str2 = orderSigningError.message;
                }
                if (str2 == null) {
                  str2 = "Order signing failed due to unsatisfied constraints";
                }
                let code;
                if (orderSigningError != null) {
                  code = orderSigningError.code;
                }
                if (code == null) {
                  code = (function getConstraintErrorCode(body2) {
                    let prop = body2.unsatisfied_constraints;
                    if (prop == null) {
                      prop = [];
                    }
                    for (const item10008 of prop) {
                      let tmp2 = closure_1_7[item10008.reason_code];
                      if (null != tmp2) {
                        obj.return();
                        return tmp2;
                      }
                    }
                    return null;
                  })(body2);
                }
                const self2 = this;
                const self3 = this;
                const tmp52 = new tmp5(str2, code, orderSigningError, tmp3, tmp5, str2, this, body2, code);
                tmp52.order = body2;
                tmp = tmp52;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
      }
    }
  }
  return tmp;
}
let obj = function _signOrder() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let tmp57;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c5;
      try {
        let expected_revision;
        let load_id;
        let purchase_token;
        let gateway_checkout_context;
        let closure_5;
        let body;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c0 = undefined;
            expected_revision = undefined;
            load_id = undefined;
            purchase_token = undefined;
            gateway_checkout_context = undefined;
            ({ orderId: c0, expectedRevision: c1, loadId: c2, purchaseToken: c3, gatewayCheckoutContext: c4 } = closure_0);
            closure_5 = undefined;
            body = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            body = {};
            if (null != expected_revision) {
              body.expected_revision = expected_revision;
            }
            if (null != purchase_token) {
              body.purchase_token = purchase_token;
            }
            if (null != gateway_checkout_context) {
              body.gateway_checkout_context = gateway_checkout_context;
            }
            c5 = 1;
            const HTTP = closure_131_0(closure_131_2[8]).HTTP;
            const request = { url: closure_131_5.ORDER_SIGN(c0), body, context: tmp57, rejectWithError: true };
            const post = HTTP.post;
            tmp57 = undefined;
            if (null != load_id) {
              if ("" !== load_id) {
                const obj5 = { load_id };
                tmp57 = obj5;
              }
            }
            c6 = 3;
            c7 = 1;
            const obj6 = { value: post(request), done: false };
            return obj6;
          }
        } else if (2 === c6) {
          c5 = 0;
          let closure_7 = closure_4;
          if (closure_7 instanceof closure_131_0(closure_131_2[8]).HTTPResponseError) {
            if (409 === closure_7.status) {
              if (closure_131_11(closure_7.body)) {
                const self2 = this;
                throw new closure_131_9(closure_7.body);
              }
            }
          }
          const tmp28 = closure_131_12(closure_7);
          let closure_1 = tmp28;
          if (tmp28 == null) {
            closure_1 = closure_7;
          }
          throw closure_1;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_5 = value;
          c5 = 0;
          if (null == closure_5.body) {
            const self = this;
            throw new closure_131_10();
          } else {
            c7 = 3;
            obj = { value: closure_5.body, done: true };
            return obj;
          }
        }
      } catch (tmp62) {
        closure_4 = tmp62;
        if (0 === c5) {
          c7 = 3;
          throw tmp62;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getOrder() {
  obj = _asyncToGenerator(async (orderId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj8;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              error = tmp4;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj4 = { url: Endpoints.ORDER_GET(orderId), rejectWithError: true };
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            error = closure_3;
            const obj6 = { error, orderId };
            closure_130_6.error("failed to fetch order", obj6);
            const ClientBillingError = closure_130_0(closure_130_2[9]).ClientBillingError;
            const obj7 = { site: "order_fetch", extra: obj8 };
            obj8 = { orderId };
            ClientBillingError.report(obj7, error);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const body = value.body || null;
            c4 = 0;
            c6 = 3;
            return { value: body, done: true };
          }
        } catch (tmp23) {
          closure_3 = tmp23;
          if (0 === c4) {
            c6 = 3;
            throw tmp23;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchOrderEntitlements() {
  return obj(...arguments);
}
obj = function _fetchOrderEntitlements() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            closure_0 = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.ORDER_ENTITLEMENTS(closure_0), rejectWithError: false };
            const get = HTTP.get;
            c2 = 2;
            c5 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c2) {
          c4 = 0;
          c5 = 3;
          const obj6 = { value: [], done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let body;
          closure_0 = value;
          if (null != closure_0.body) {
            body = closure_0.body;
          } else {
            body = [];
          }
          c4 = 0;
          c5 = 3;
          obj = { value: body, done: true };
          return obj;
        }
      } catch (tmp13) {
        let closure_3 = tmp13;
        if (0 === c4) {
          c5 = 3;
          throw tmp13;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchOrderEntitlementsWithRetry() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c9;
      try {
        let _loop;
        let c3;
        c12 = 2;
        const tmp4 = c11;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_8 = tmp;
            let closure_7 = tmp4;
            value = undefined;
            _loop = undefined;
            c3 = undefined;
            c11 = 1;
            c12 = 1;
            let obj4 = { value: fetchOrderEntitlements(closure_0), done: false };
            return obj4;
          }
        } else {
          let next;
          let tmp16;
          let iter3;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              _loop = function* _loop(c3, value) {
                closure_0 = c3;
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (c3 === 1) {
                    throw value;
                  } else if (c3 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  try {
                    let length;
                    c3 = 2;
                    if (0 === c2) {
                      if (c3 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (c3 === 2) {
                        c3 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        length = tmp3;
                        if (length.length > 0) {
                          c3 = 3;
                          return { value: 1, done: true };
                        } else {
                          const self = this;
                          const self2 = this;
                          const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
                          c2 = 1;
                          c3 = 1;
                          const obj4 = { value: promise, done: false };
                          return obj4;
                        }
                      }
                    } else if (1 === c2) {
                      if (c3 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (c3 === 2) {
                        c3 = 3;
                        const obj5 = { value, done: true };
                        return obj5;
                      } else {
                        c2 = 2;
                        c3 = 1;
                        const obj6 = { value: closure_1_15(closure_0), done: false };
                        return obj6;
                      }
                    } else if (c3 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (c3 === 2) {
                      c3 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      length = value;
                      c3 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } catch (tmp13) {
                    c3 = 3;
                    throw tmp13;
                  }
                }
              };
              let closure_2 = closure_136_17;
              value = closure_136_17[Symbol.iterator]();
              if (value !== undefined) {
                c9 = 1;
                c3 = tmp30;
                const tmp54 = _loop(c3);
                const iter4 = tmp54[tmp46.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter4.next;
                c3 = undefined;
              }
              c12 = 3;
              let obj6 = { value, done: true };
              return obj6;
            }
          } else if (2 === tmp4) {
            c9 = 0;
            value.return();
            throw closure_10;
          } else {
            if (3 === tmp4) {
              c9 = 2;
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                c3 = value;
                if (arg0 === 2) {
                  c3 = value;
                  c9 = 1;
                  const method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    c9 = 0;
                    value.return();
                    c12 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    const iter2 = method(c3);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter2.done) {
                      c9 = 0;
                      value = iter2.value;
                      value.return();
                      c12 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c11 = 3;
                      c12 = 1;
                      return iter2;
                    }
                  }
                } else {
                  c9 = 1;
                  tmp16 = value;
                }
              }
            } else {
              c9 = 1;
              const str = "throw";
              const tmp6 = closure_10;
              const method1 = HermesBuiltin.getMethod("throw");
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp6);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter3 = iter;
                } else {
                  c11 = 3;
                  c12 = 1;
                  return iter;
                }
              }
            }
            c9 = 0;
            if (iter3.value) {
              value.return();
            }
          }
          iter3 = next(tmp16);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter3.done) {
            c11 = 3;
            c12 = 1;
            return iter3;
          }
        }
      } catch (tmp40) {
        closure_10 = tmp40;
        if (0 === c9) {
          c12 = 3;
          throw tmp40;
        } else if (1 === tmp42) {
          c11 = 2;
        } else {
          c11 = 4;
        }
      }
    }
  });
  return obj(...arguments);
};
const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const Endpoints = Constants.Endpoints;
let tmp2 = new LoggerDefault("OrderActionCreators");
let closure_6 = tmp2;
obj = { [SPENDING_LIMIT_REACHED]: BillingError2.ErrorCodes.BILLING_SPENDING_LIMIT_REACHED, [SPENDING_LIMIT_WILL_EXCEED]: BillingError2.ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED };
({ SPENDING_LIMIT_REACHED, SPENDING_LIMIT_WILL_EXCEED } = ConstraintReasonCode);
let BillingError = BillingError_mod;
class OrderSigningFailedWithConstraintsError extends BillingError {
  constructor(unsatisfied_constraints) {
    unsatisfied_constraints = unsatisfied_constraints.unsatisfied_constraints;
    let someResult;
    if (unsatisfied_constraints != null) {
      someResult = unsatisfied_constraints.some(f91209);
    }
    let orderSigningError = null;
    if (someResult) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      obj = OrderSigningErrors;
      orderSigningError = obj.getOrderSigningError(unsatisfied_constraints);
    }
    let str;
    if (orderSigningError != null) {
      str = orderSigningError.message;
    }
    if (str == null) {
      str = "Order signing failed due to unsatisfied constraints";
    }
    let code;
    if (orderSigningError != null) {
      code = orderSigningError.code;
    }
    if (code == null) {
      code = (function getConstraintErrorCode(body2) {
        let prop = body2.unsatisfied_constraints;
        if (prop == null) {
          prop = [];
        }
        for (const item10008 of prop) {
          let tmp2 = closure_1_7[item10008.reason_code];
          if (null != tmp2) {
            obj.return();
            return tmp2;
          }
        }
        return null;
      })(unsatisfied_constraints);
    }
    const unsatisfied_constraints1 = new unsatisfied_constraints(str, code, unsatisfied_constraints);
    unsatisfied_constraints1.order = unsatisfied_constraints;
    return unsatisfied_constraints1;
  }
}
class OrderSigningOrderChangedError extends OrderSigningFailedWithConstraintsError {
  constructor(unsatisfied_constraints) {
    let vfMgld;
    unsatisfied_constraints = unsatisfied_constraints.unsatisfied_constraints;
    let someResult;
    if (unsatisfied_constraints != null) {
      someResult = unsatisfied_constraints.some((name) => "order_hydration_drift.storefront_promotions_unchanged" === name.name);
    }
    const tmp4 = new OrderSigningOrderChangedError(unsatisfied_constraints, tmp2, tmp);
    const intl = intl2.intl;
    const string = intl.string;
    if (true === someResult) {
      vfMgld = _modDef2450.vfMgld;
    } else {
      vfMgld = _modDef2450["Wq++Jf"];
    }
    tmp4.message = string(vfMgld);
    return tmp4;
  }
}
BillingError = BillingError_mod;
class OrderProcessingPendingError extends BillingError {
  constructor() {
    const tmp2 = new tmp("Order signed but entitlements not yet visible after polling", new.target);
    tmp2.name = "OrderProcessingPending";
    return tmp2;
  }
}
class InvalidOrderResponseError extends Error {
  constructor() {
    const tmp2 = new tmp("Invalid order response", new.target);
    tmp2.name = "InvalidOrderResponse";
    return tmp2;
  }
}
let closure_17 = [250, 500, 1000, 1500, 2500, 4250];
const result = size.fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export { OrderSigningFailedWithConstraintsError };
export { OrderSigningOrderChangedError };
export { OrderProcessingPendingError };
export { InvalidOrderResponseError };
export { getOrderSigningConstraintsError };
export function signOrder() {
  return obj(...arguments);
}
export function getOrder() {
  return obj(...arguments);
}
export { fetchOrderEntitlements };
export function fetchOrderEntitlementsWithRetry() {
  return obj(...arguments);
}
