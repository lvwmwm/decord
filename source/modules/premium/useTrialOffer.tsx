// Module ID: 6687
// Function ID: 51454
// Name: hasUserTrialOfferExpired
// Dependencies: [57, 31, 1849, 6688, 566, 3776, 4015, 2]
// Exports: useTrialOffer

// Module 6687 (hasUserTrialOfferExpired)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function hasUserTrialOfferExpired(stateFromStores) {
  let tmp = null != stateFromStores && null != stateFromStores.expires_at;
  if (tmp) {
    const _Date = Date;
    const _Date2 = Date;
    const timestamp = Date.now();
    tmp = timestamp > Date.parse(stateFromStores.expires_at);
  }
  return tmp;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/useTrialOffer.tsx");

export { hasUserTrialOfferExpired };
export const useTrialOffer = function useTrialOffer(closure_9) {
  const _require = closure_9;
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_5.getUserTrialOffer(closure_0));
  const tmp2 = first(React.useState(hasUserTrialOfferExpired(stateFromStores)), 2);
  first = tmp2[0];
  React = tmp2[1];
  const obj = _require(stateFromStores[4]);
  const items1 = [_isNativeReflectConstruct];
  let result = !_require(stateFromStores[4]).useStateFromStores(items1, () => callback(stateFromStores[5]).isPremium(outer1_4.getCurrentUser()));
  if (!result) {
    result = _createForOfIteratorHelperLoose.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = React.useEffect(() => {
    function startTimer() {
      if (null != startTimer) {
        let num = 0;
        if (null != startTimer.expires_at) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(startTimer.expires_at);
          num = parsed - Date.now();
        }
        if (null != timeout) {
          timeout.start(num, () => {
            if (!outer2_2) {
              if (outer3_6(startTimer)) {
                outer2_3(true);
              }
            }
            outer1_1();
          });
        }
      }
    }
    if (null != startTimer) {
      if (null != startTimer.expires_at) {
        const Timeout = callback(stateFromStores[6]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        startTimer();
        return () => timeout.stop();
      }
    }
  }, items2);
  let tmp7 = null;
  if (!first) {
    tmp7 = null;
    if (result) {
      tmp7 = stateFromStores;
    }
  }
  return tmp7;
};
