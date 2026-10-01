// Module ID: 8334
// Function ID: 8335
// Name: useProductDisableState
// Dependencies: [4494, 504, 1077, 1115, 2]
// Exports: useProductDisableState

// Module 8334 (useProductDisableState)
import get_initialized from "get initialized" /* 504 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import size from "module_2" /* 2 */;

let premiumSubscription;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj3;
  let stringResult;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    const obj2 = { isDisabled: stateFromStores, disabledReason: stringResult };
    stringResult = null;
    if (stateFromStores) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.NbveHD);
    }
    obj3 = obj2;
  } else {
    obj3 = { isDisabled: false, disabledReason: null };
  }
  return obj3;
};
