// Module ID: 7127
// Function ID: 57293
// Name: useDiscountOffer
// Dependencies: [57, 31, 1849, 6688, 1851, 566, 3776, 4015, 2]
// Exports: default

// Module 7127 (useDiscountOffer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GuildFeatures from "GuildFeatures";

let closure_6;
let closure_7;
const require = arg1;
({ PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_7 } = GuildFeatures);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default function useDiscountOffer(arg0, arg1) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => outer1_5.getUserDiscountOffer(closure_0));
  let hasExpiredResult;
  if (null != stateFromStores) {
    hasExpiredResult = stateFromStores.hasExpired();
  }
  const tmp4 = first(React.useState(null != hasExpiredResult && hasExpiredResult), 2);
  first = tmp4[0];
  React = tmp4[1];
  const obj = _require(stateFromStores[5]);
  const tmp3 = null != hasExpiredResult && hasExpiredResult;
  const items1 = [_isNativeReflectConstruct];
  const items2 = [first, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[5]).useStateFromStores(items1, () => callback(stateFromStores[6]).isPremium(outer1_4.getCurrentUser()));
  const effect = React.useEffect(() => {
    if (null != startTimer) {
      if (startTimer.hasAcknowledged()) {
        const Timeout = callback(stateFromStores[7]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        startTimer = function startTimer() {
          if (null != startTimer) {
            if (startTimer.hasAcknowledged()) {
              let num = 0;
              if (null != startTimer.expiresAt) {
                const expiresAt = startTimer.expiresAt;
                const _Date = Date;
                const time = expiresAt.getTime();
                num = time - Date.now();
              }
              if (null != timeout) {
                timeout.start(num, () => {
                  if (!outer2_2) {
                    if (startTimer.hasExpired()) {
                      outer2_3(true);
                    }
                  }
                  outer1_1();
                });
              }
            }
          }
        };
        startTimer();
        return () => timeout.stop();
      }
    }
  }, items2);
  let tmp8 = null;
  if (!first) {
    if (stateFromStores1) {
      if (!arg1) {
        if (arg0 !== closure_6) {
          tmp8 = null;
        }
      }
    }
    tmp8 = stateFromStores;
  }
  return tmp8;
};
