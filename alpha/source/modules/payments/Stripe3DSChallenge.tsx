// Module ID: 10442
// Function ID: 10443
// Name: Stripe3DSChallenge
// Dependencies: [5, 6781, 2]
// Exports: authenticateStripePaymentIntent

// Module 10442 (Stripe3DSChallenge)
import StripeUtils from "StripeUtils" /* 6781 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function getLoadedStripe() {
  return obj(...arguments);
}
let obj = function _getLoadedStripe() {
  obj = _asyncToGenerator(async (value) => {
    let c2 = 0;
    let c3 = 0;
    return (async function(arg0, value) {
      let obj3;
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              value = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.getStripe(value), done: false };
              obj3 = StripeUtils;
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else if (null == value) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Stripe is not loaded");
            throw error;
          } else {
            c3 = 3;
            return { value, done: true };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _retrievePaymentIntent() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_0 = await closure_0.retrievePaymentIntent(closure_1);
    let error = closure_0.error;
    const paymentIntent = closure_0.paymentIntent;
    if (null != error) {
      const _Error2 = Error;
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      error = new Error("Could not retrieve the payment intent: " + error.message);
      throw error;
    }
    if (null == paymentIntent) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("Payment intent does not exist");
      throw error1;
    }
    return paymentIntent;
  });
  return obj(...arguments);
};
obj = function _confirmCardPayment() {
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let error;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            error = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: closure_0.confirmCardPayment(closure_1, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          error = value.error;
          if (null != error) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            error = new Error("Card authentication failed: " + error.message);
            throw error;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _authenticateStripePaymentIntent() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c0;
    let c1;
    let c4;
    function retrievePaymentIntent() {
      return closure_1_5(...arguments);
    }
    function confirmCardPayment() {
      return closure_1_6(...arguments);
    }
    function getConfirmCardPaymentData(status, c1) {
      if ("requires_payment_method" === status.status) {
        if (null != c1) {
          return { payment_method: c1 };
        }
      }
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null == c0) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Stripe 3DS context has no client secret");
      throw error;
    }
    let closure_3 = await closure_131_3(closure_2);
    let closure_4 = await retrievePaymentIntent(closure_3, c0);
    const status = closure_4.status;
    if ("succeeded" !== status) {
      if ("processing" !== status) {
        if ("requires_payment_method" !== status) {
          if ("requires_confirmation" !== status) {
            if ("requires_action" !== status) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error1 = new Error("Unexpected payment intent status: " + closure_4.status);
              throw error1;
            }
          }
        }
        let c5 = 3;
        obj = { value: confirmCardPayment(closure_3, c0, getConfirmCardPaymentData(closure_4, c1)), done: true };
        return obj;
      }
    }
    await "HermesInternal";
    closure_3 = tmp4;
    ({ client_secret: c0, payment_method_id: c1 } = closure_0);
    closure_2 = closure_1;
    return "Path";
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/payments/Stripe3DSChallenge.tsx");

export { getLoadedStripe };
export function authenticateStripePaymentIntent() {
  return obj(...arguments);
}
