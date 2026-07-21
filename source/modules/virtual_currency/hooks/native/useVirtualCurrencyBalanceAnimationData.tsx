// Module ID: 9780
// Function ID: 76022
// Name: useVirtualCurrencyBalanceAnimationData
// Dependencies: []
// Exports: useVirtualCurrencyBalanceAnimationData

// Module 9780 (useVirtualCurrencyBalanceAnimationData)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx");

export const useVirtualCurrencyBalanceAnimationData = function useVirtualCurrencyBalanceAnimationData(initialRenderedBalance) {
  let tmp6;
  initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
  const arg1 = initialRenderedBalance;
  const balance = initialRenderedBalance.balance;
  const importDefault = balance;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => ref.useReducedMotion);
  const dependencyMap = stateFromStores;
  const tmp2 = callback(React.useState(null), 2);
  const currentAnimationType = tmp2[0];
  const callback = currentAnimationType;
  const React = tmp2[1];
  closure_5 = React.useRef(null);
  const lottieRef = React.useRef(null);
  const obj = arg1(dependencyMap[3]);
  [tmp6, closure_7] = callback(React.useState(null != initialRenderedBalance), 2);
  const tmp7 = callback(React.useState(null == initialRenderedBalance), 2);
  const first1 = tmp7[0];
  let closure_9 = tmp7[1];
  const tmp9 = importDefault(dependencyMap[4])(balance);
  const onValueChange = React.useCallback(() => {

  }, []);
  const items1 = [currentAnimationType];
  const onValueReached = React.useCallback(() => {
    closure_5.current = null;
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
          const timeout = setTimeout(() => {
            if (!closure_2) {
              callback3(closure_1 - closure_0);
            }
            callback(false);
            callback2(true);
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
      tmp = null !== tmp9;
    }
    if (tmp) {
      tmp = balance !== tmp9;
    }
    if (tmp) {
      tmp = first1;
    }
    if (tmp) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      const tmp9 = callback2(balance - tmp9);
    }
  }, items3);
  return { onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef };
};
