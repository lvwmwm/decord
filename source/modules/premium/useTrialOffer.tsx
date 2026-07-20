// Module ID: 6676
// Function ID: 51354
// Name: hasUserTrialOfferExpired
// Dependencies: []
// Exports: useTrialOffer

// Module 6676 (hasUserTrialOfferExpired)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/useTrialOffer.tsx");

export { hasUserTrialOfferExpired };
export const useTrialOffer = function useTrialOffer(closure_9) {
  const arg1 = closure_9;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => userTrialOffer.getUserTrialOffer(arg0));
  const dependencyMap = stateFromStores;
  const tmp2 = callback(React.useState(hasUserTrialOfferExpired(stateFromStores)), 2);
  const first = tmp2[0];
  const callback = first;
  const React = tmp2[1];
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  let result = !arg1(dependencyMap[4]).useStateFromStores(items1, () => arg0(stateFromStores[5]).isPremium(currentUser.getCurrentUser()));
  if (!result) {
    result = closure_5.canFractionalPremiumUserUseOffer();
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
            if (!closure_2) {
              if (callback3(callback)) {
                callback2(true);
              }
            }
            callback();
          });
        }
      }
    }
    const stateFromStores = startTimer;
    if (null != stateFromStores) {
      if (null != stateFromStores.expires_at) {
        const Timeout = arg0(stateFromStores[6]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        const arg0 = timeout;
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
