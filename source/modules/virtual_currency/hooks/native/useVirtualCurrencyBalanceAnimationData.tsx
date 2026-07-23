// Module ID: 9788
// Function ID: 76076
// Name: useVirtualCurrencyBalanceAnimationData
// Dependencies: [57, 31, 4122, 566, 8284, 2]
// Exports: useVirtualCurrencyBalanceAnimationData

// Module 9788 (useVirtualCurrencyBalanceAnimationData)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx");

export const useVirtualCurrencyBalanceAnimationData = function useVirtualCurrencyBalanceAnimationData(initialRenderedBalance) {
  let closure_7;
  let tmp6;
  initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
  const balance = initialRenderedBalance.balance;
  const items = [_isNativeReflectConstruct];
  stateFromStores = initialRenderedBalance(stateFromStores[3]).useStateFromStores(items, () => ref.useReducedMotion);
  const tmp2 = currentAnimationType(React.useState(null), 2);
  currentAnimationType = tmp2[0];
  React = tmp2[1];
  _isNativeReflectConstruct = React.useRef(null);
  const lottieRef = React.useRef(null);
  const obj = initialRenderedBalance(stateFromStores[3]);
  [tmp6, closure_7] = currentAnimationType(React.useState(null != initialRenderedBalance), 2);
  const tmp7 = currentAnimationType(React.useState(null == initialRenderedBalance), 2);
  const first1 = tmp7[0];
  let closure_9 = tmp7[1];
  const tmp9 = balance(stateFromStores[4])(balance);
  let closure_10 = tmp9;
  const onValueChange = React.useCallback(() => {

  }, []);
  const items1 = [currentAnimationType];
  const onValueReached = React.useCallback(() => {
    _isNativeReflectConstruct.current = null;
    callback(null);
  }, []);
  const callback2 = React.useCallback((arg0) => {
    if (0 !== arg0) {
      let str = "spend";
      if (arg0 > 0) {
        str = "earn";
      }
      ref.current = str;
      if (currentAnimationType === ref.current) {
        const current = lottieRef.current;
        if (null != current) {
          current.play();
        }
      } else {
        callback(ref.current);
      }
      const tmp = ref;
    }
  }, items1);
  const items2 = [initialRenderedBalance, balance, first1, stateFromStores, callback2];
  const effect = React.useEffect(() => {
    if (null != timeout) {
      if (null !== balance) {
        if (!first1) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            if (!outer1_2) {
              outer1_11(outer1_1 - closure_0);
            }
            outer1_7(false);
            outer1_9(true);
          }, 1250);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items2);
  const items3 = [balance, tmp9, currentAnimationType, first1, stateFromStores, callback2];
  const effect1 = React.useEffect(() => {
    let tmp = null !== balance;
    if (tmp) {
      tmp = null !== closure_10;
    }
    if (tmp) {
      tmp = balance !== closure_10;
    }
    if (tmp) {
      tmp = first1;
    }
    if (tmp) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      callback2(balance - closure_10);
    }
  }, items3);
  return { onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef };
};
