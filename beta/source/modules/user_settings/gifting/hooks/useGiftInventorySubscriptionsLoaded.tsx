// Module ID: 14174
// Function ID: 14175
// Name: useGiftInventorySubscriptionsLoaded
// Dependencies: [5, 32, 19, 6360, 2]
// Exports: default

// Module 14174 (useGiftInventorySubscriptionsLoaded)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c3, c4;

const result = size.fileFinishedImporting("modules/user_settings/gifting/hooks/useGiftInventorySubscriptionsLoaded.tsx");

export default function useGiftInventorySubscriptionsLoaded() {
  let tmp2;
  let tmp = _slicedToArray(react.useState("loading"), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    let _false;
    function loadSubscriptions() {
      return obj(...arguments);
    }
    let obj = function _loadSubscriptions() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c4 === 2) {
          c4 = 3;
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
          let c2;
          try {
            let closure_0;
            let succeeded;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = tmp4;
                succeeded = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: obj2.fetchSubscriptions(), done: false };
                obj2 = _false(closure_2_1[3]);
                return obj5;
              }
            } else {
              if (1 === c3) {
                c2 = 0;
                succeeded = "failed";
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                succeeded = "succeeded";
                c2 = 0;
              }
              const tmp9 = closure_129_0;
              if (tmp9) {
                closure_0(succeeded);
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp15) {
            if (0 === c2) {
              c4 = 3;
              throw tmp15;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = true;
    const tmp = loadSubscriptions();
    return () => {
      let c0 = false;
    };
  }, []);
  let obj = { loaded: "loading" !== tmp2, succeeded: "succeeded" === tmp2 };
  return obj;
};
