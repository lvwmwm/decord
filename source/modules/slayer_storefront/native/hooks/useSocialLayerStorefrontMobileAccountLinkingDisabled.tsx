// Module ID: 8023
// Function ID: 63758
// Name: useSocialLayerStorefrontMobileAccountLinkingDisabled
// Dependencies: [5646, 566, 2]
// Exports: useSocialLayerStorefrontMobileAccountLinkingDisabled

// Module 8023 (useSocialLayerStorefrontMobileAccountLinkingDisabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx");

export const useSocialLayerStorefrontMobileAccountLinkingDisabled = function useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId) {
  const _require = applicationId;
  const items = [_isNativeReflectConstruct];
  const items1 = [applicationId];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const configForApplicationId = outer1_2.getConfigForApplicationId(closure_0);
      let prop;
      if (null != configForApplicationId) {
        prop = configForApplicationId.disableMobileAccountLinking;
      }
      tmp = true === prop;
    }
    return tmp;
  }, items1);
};
