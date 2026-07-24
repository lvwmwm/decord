// Module ID: 8805
// Function ID: 69518
// Name: useProductDisableState
// Dependencies: [3782, 566, 656, 1212, 2]
// Exports: useProductDisableState

// Module 8805 (useProductDisableState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const premiumSubscription = outer1_2.getPremiumSubscription();
    let prop;
    if (null != premiumSubscription) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = require(656) /* set */.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    obj = { isDisabled: stateFromStores };
    let stringResult = null;
    if (stateFromStores) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.NbveHD);
    }
    obj.disabledReason = stringResult;
  } else {
    obj = { isDisabled: false, disabledReason: null };
  }
  return obj;
};
