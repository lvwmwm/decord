// Module ID: 10555
// Function ID: 10556
// Name: useVirtualCurrencyBalanceAnimationData
// Dependencies: [32, 19, 4825, 504, 7720, 2]
// Exports: useVirtualCurrencyBalanceAnimationData

// Module 10555 (useVirtualCurrencyBalanceAnimationData)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx");

export const useVirtualCurrencyBalanceAnimationData = function useVirtualCurrencyBalanceAnimationData(initialRenderedBalance) {
  let c7;
  let closure_4;
  let tmp6;
  initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
  const balance = initialRenderedBalance.balance;
  let stateFromStores;
  let currentAnimationType;
  react = undefined;
  let useReducedMotion;
  c7 = undefined;
  const items = [useReducedMotion];
  const obj = initialRenderedBalance(stateFromStores[3]);
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp2 = currentAnimationType(react.useState(null), 2);
  currentAnimationType = tmp2[0];
  react = tmp2[1];
  useReducedMotion = react.useRef(null);
  const lottieRef = react.useRef(null);
  [tmp6, c7] = currentAnimationType(react.useState(null != initialRenderedBalance), 2);
  const tmp5 = currentAnimationType(react.useState(null != initialRenderedBalance), 2);
  const tmp7 = currentAnimationType(react.useState(null == initialRenderedBalance), 2);
  const first1 = tmp7[0];
  let closure_9 = tmp7[1];
  const tmp9 = balance(stateFromStores[4])(balance);
  let closure_10 = tmp9;
  const onValueChange = react.useCallback(() => {

  }, []);
  const items1 = [currentAnimationType];
  const onValueReached = react.useCallback(() => {
    useReducedMotion.current = null;
    closure_4(null);
  }, []);
  const callback2 = react.useCallback((arg0) => {
    if (0 !== arg0) {
      let str = "spend";
      if (arg0 > 0) {
        str = "earn";
      }
      useReducedMotion.current = str;
      if (currentAnimationType === useReducedMotion.current) {
        const current = lottieRef.current;
        if (current != null) {
          current.play();
        }
      } else {
        closure_4(useReducedMotion.current);
      }
    }
  }, items1);
  const items2 = [initialRenderedBalance, balance, first1, stateFromStores, callback2];
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    if (null != timeout) {
      let tmp = balance;
      if (null !== balance) {
        const tmp2 = first1;
        if (!tmp2) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            const tmp = stateFromStores;
            if (!tmp) {
              callback2(balance - closure_0);
            }
            closure_1_7(false);
            closure_1_9(true);
          }, 1250);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items2);
  const items3 = [balance, tmp9, currentAnimationType, first1, stateFromStores, callback2];
  const effect1 = react.useEffect(() => {
    const tmp2 = null !== balance && null !== closure_10 && tmp !== closure_10 && first1 && !stateFromStores;
    if (tmp2) {
      callback2(balance - closure_10);
    }
  }, items3);
  return { onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef };
};
