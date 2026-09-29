// Module ID: 9180
// Function ID: 9181
// Name: useProductDisableState
// Dependencies: [4452, 504, 1077, 1115, 2]
// Exports: useProductDisableState

// Module 9180 (useProductDisableState)
import initialize from "initialize" /* 504 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import SubscriptionStore from "SubscriptionStore" /* 4452 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    const obj2 = { isDisabled: stateFromStores, disabledReason: null };
    let stringResult = null;
    if (stateFromStores) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.NbveHD);
    }
    obj2.disabledReason = stringResult;
    let obj3 = obj2;
  } else {
    obj3 = { isDisabled: false, disabledReason: null };
  }
  return obj3;
};
