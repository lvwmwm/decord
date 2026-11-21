// Module ID: 9572
// Function ID: 9573
// Name: StripeNextAction
// Dependencies: [5, 9571, 4726, 2]
// Exports: reopenStripeNextAction

// Module 9572 (StripeNextAction)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

function openNextActionInstructions(arg0) {
  if (null == arg0) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Stripe next action context has no client secret or instructions url");
    throw error;
  } else {
    const _window = window;
    window.open(arg0);
  }
}
function handleStripeNextAction() {
  return obj(...arguments);
}
let obj = function _handleStripeNextAction() {
  obj = _asyncToGenerator(async (clientSecret, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let obj5;
      if (1 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else if (null != clientSecret) {
          c4 = 2;
          c5 = 1;
          const obj6 = { value: obj5.getLoadedStripe(closure_2), done: false };
          obj5 = closure_131_0(closure_131_1[1]);
          return obj6;
        } else {
          closure_131_3(c1);
        }
      } else if (2 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          closure_3 = value;
          c4 = 3;
          c5 = 1;
          const obj8 = { clientSecret };
          const obj9 = { value: closure_3.handleNextAction(obj8), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else {
        let error = value.error;
        if (null != error) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          error = new Error("Stripe next action failed: " + error.message);
          throw error;
        }
      }
      await "HermesInternal";
      closure_3 = tmp4;
      ({ client_secret: c0, instructions_url: c1 } = closure_0);
      closure_2 = closure_1;
      return "Path";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _reopenStripeNextAction() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj5 = { value: handleStripeNextAction(closure_0, closure_1), done: false };
            return obj5;
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_1 = closure_4;
            const obj6 = { tags: { source: "order_signing_reopen_next_action" } };
            const obj2 = closure_131_0(closure_131_1[2]);
            const result = obj2.captureBillingException(closure_1, obj6);
            const tmp14 = null != closure_0.client_secret && null != closure_0.instructions_url;
            if (tmp14) {
              closure_131_3(closure_0.instructions_url);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp25) {
        closure_4 = tmp25;
        if (0 === c5) {
          c7 = 3;
          throw tmp25;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/payments/StripeNextAction.tsx");

export { handleStripeNextAction };
export function reopenStripeNextAction() {
  return obj(...arguments);
}
