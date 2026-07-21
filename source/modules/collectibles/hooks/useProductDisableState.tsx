// Module ID: 8758
// Function ID: 69250
// Name: useProductDisableState
// Dependencies: []
// Exports: useProductDisableState

// Module 8758 (useProductDisableState)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (null != premiumSubscription) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = arg1(dependencyMap[2]).FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    obj = { isDisabled: stateFromStores };
    let stringResult = null;
    if (stateFromStores) {
      const intl = arg1(dependencyMap[3]).intl;
      stringResult = intl.string(arg1(dependencyMap[3]).t.NbveHD);
    }
    obj.disabledReason = stringResult;
  } else {
    obj = { accessibilityRole: null, GUILD_WEBHOOKS: null };
  }
  return obj;
};
