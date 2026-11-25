// Module ID: 11886
// Function ID: 11887
// Name: useGiftSubscriptionAgreement
// Dependencies: [5, 32, 19, 11885, 11880, 2]
// Exports: default

// Module 11886 (useGiftSubscriptionAgreement)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftSubscriptionAgreement.tsx");

export default function useGiftSubscriptionAgreement(code) {
  let closure_2;
  let first;
  code = undefined;
  if (code != null) {
    code = code.code;
  }
  let obj = code(11885);
  let isResolvingAgreement = obj.needsGiftSubscriptionAgreement(code);
  [first, dependencyMap] = react.useState(false);
  const items = [code, isResolvingAgreement];
  const effect = react.useEffect(() => {
    function lookUpOnOpen(arg0) {
      return obj(...arguments);
    }
    let obj = function _lookUpOnOpen() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        let closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c4;
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_1 = tmp4;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj6 = { value: obj3.resolveGiftCode(closure_0, { withSubscriptionPlan: true, withGiftSubscriptionAgreement: true }), done: false };
                obj3 = isResolvingAgreement(closure_2_2[4]);
                return obj6;
              }
            } else {
              if (1 === c5) {
                c4 = 0;
                closure_0 = closure_3;
                const obj2 = isResolvingAgreement(closure_2_2[4]);
                const result = obj2.reportUnexpectedGiftCodeError(closure_0);
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c4 = 0;
              }
              tmp(true);
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp19) {
            closure_3 = tmp19;
            if (0 === c4) {
              c6 = 3;
              throw tmp19;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let tmp2 = null != obj;
    const tmp = obj;
    if (tmp2) {
      tmp2 = isResolvingAgreement;
    }
    if (tmp2) {
      const tmp3 = lookUpOnOpen(tmp);
    }
  }, items);
  if (isResolvingAgreement) {
    isResolvingAgreement = !first;
  }
  return { isResolvingAgreement };
};
