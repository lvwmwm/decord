// Module ID: 7122
// Function ID: 57223
// Name: useDiscountOffer
// Dependencies: []
// Exports: default

// Module 7122 (useDiscountOffer)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_7 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default function useDiscountOffer(arg0, arg1) {
  arg1 = arg0;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => userDiscountOffer.getUserDiscountOffer(arg0));
  const dependencyMap = stateFromStores;
  let hasExpiredResult;
  if (null != stateFromStores) {
    hasExpiredResult = stateFromStores.hasExpired();
  }
  const tmp4 = callback(React.useState(null != hasExpiredResult && hasExpiredResult), 2);
  const first = tmp4[0];
  const callback = first;
  const React = tmp4[1];
  const obj = arg1(dependencyMap[5]);
  const tmp3 = null != hasExpiredResult && hasExpiredResult;
  const items1 = [closure_4];
  const items2 = [first, stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => arg0(stateFromStores[6]).isPremium(currentUser.getCurrentUser()));
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      if (stateFromStores.hasAcknowledged()) {
        const Timeout = arg0(stateFromStores[7]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        const arg0 = timeout;
        function startTimer() {
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
                  if (!closure_2) {
                    if (lib.hasExpired()) {
                      callback(true);
                    }
                  }
                  lib();
                });
              }
            }
          }
        }
        const stateFromStores = startTimer;
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
