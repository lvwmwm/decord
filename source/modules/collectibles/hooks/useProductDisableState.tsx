// Module ID: 9628
// Function ID: 9629
// Name: useProductDisableState
// Dependencies: [4013, 589, 679, 1236, 2]
// Exports: useProductDisableState

// Module 9628 (useProductDisableState)
import reset from "reset";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj = require(589) /* initialize */;
  const items = [reset];
  const stateFromStores = obj.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = require(679) /* set */.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    obj = { isDisabled: null, disabledReason: null };
    obj[0] = stateFromStores;
    let stringResult = null;
    if (stateFromStores) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.NbveHD);
    }
    obj[1] = stringResult;
  } else {
    obj = { isDisabled: false, disabledReason: null };
  }
  return obj;
};
