// Module ID: 12385
// Function ID: 12386
// Name: useGiftSubscriptionAgreement
// Dependencies: [5, 32, 19, 12379, 2]
// Exports: default, needsGiftSubscriptionAgreement

// Module 12385 (useGiftSubscriptionAgreement)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c5;

let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftSubscriptionAgreement.tsx");

export default function useGiftSubscriptionAgreement(code) {
  let closure_2;
  let first;
  code = code.code;
  let isResolvingAgreement = code.isSubscription && undefined === code.giftSubscriptionAgreement;
  [first, closure_2] = react.useState(false);
  const items = [code, isResolvingAgreement];
  const effect = react.useEffect(() => {
    function lookUpOnOpen() {
      return obj(...arguments);
    }
    let obj = function _lookUpOnOpen() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_1 = tmp;
                closure_0 = tmp4;
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: obj3.resolveGiftCode(closure_0, { withSubscriptionPlan: true, withGiftSubscriptionAgreement: true }), done: false };
                obj3 = closure_2_0(isResolvingAgreement[3]);
                return obj6;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                closure_0 = tmp19;
                const obj2 = closure_2_0(isResolvingAgreement[3]);
                const result = obj2.reportUnexpectedGiftCodeError(closure_0);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              tmp19(true);
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp19) {
            if (0 === c3) {
              c5 = 3;
              throw tmp19;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = isResolvingAgreement;
    if (tmp) {
      lookUpOnOpen();
    }
  }, items);
  if (isResolvingAgreement) {
    isResolvingAgreement = !first;
  }
  return { isResolvingAgreement };
};
export function needsGiftSubscriptionAgreement(isSubscription) {
  isSubscription = isSubscription.isSubscription && undefined === isSubscription.giftSubscriptionAgreement;
  return isSubscription;
}
