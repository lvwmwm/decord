// Module ID: 11216
// Function ID: 11217
// Name: StripeNextAction
// Dependencies: [5, 11215, 5777, 2]
// Exports: reopenStripeNextAction

// Module 11216 (StripeNextAction)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

function openNextActionInstructions(arg0) {
  if (null == arg0) {
    const self = this;
    if (typeof NextActionInstructionsMissingError === "function") {
      const self2 = this;
      const self3 = this;
      const tmp5 = new arg0("Stripe next action context has no client secret or instructions url", tmp3, arg0);
      tmp5.name = "NextActionInstructionsMissing";
      throw tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
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
          closure_131_5(c1);
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
        const error = value.error;
        if (null != error) {
          const self = this;
          throw new closure_131_4(error.message);
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: handleStripeNextAction(closure_0, closure_1), done: false };
            return obj4;
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_1 = closure_4;
            const ClientBillingError = closure_131_0(closure_131_1[2]).ClientBillingError;
            ClientBillingError.report({ site: "order_signing_reopen_next_action" }, closure_1);
            const tmp14 = null != closure_0.client_secret && null != closure_0.instructions_url;
            if (tmp14) {
              closure_131_5(closure_0.instructions_url);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
class NextActionInstructionsMissingError extends Error {
  constructor() {
    const tmp2 = new tmp("Stripe next action context has no client secret or instructions url", new.target);
    tmp2.name = "NextActionInstructionsMissing";
    return tmp2;
  }
}
class StripeNextActionFailedError extends Error {
  constructor(arg0) {
    const tmp2 = new tmp(concat(arg0), concat);
    tmp2.name = "StripeNextActionFailed";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/payments/StripeNextAction.tsx");

export { handleStripeNextAction };
export function reopenStripeNextAction() {
  return obj(...arguments);
}
