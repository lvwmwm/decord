// Module ID: 8199
// Function ID: 64850
// Name: useSocialLayerStorefrontMobileAccountLinkingDisabled
// Dependencies: []
// Exports: useSocialLayerStorefrontMobileAccountLinkingDisabled

// Module 8199 (useSocialLayerStorefrontMobileAccountLinkingDisabled)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx");

export const useSocialLayerStorefrontMobileAccountLinkingDisabled = function useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId) {
  const arg1 = applicationId;
  const items = [closure_2];
  const items1 = [applicationId];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      const configForApplicationId = configForApplicationId.getConfigForApplicationId(arg0);
      let prop;
      if (null != configForApplicationId) {
        prop = configForApplicationId.disableMobileAccountLinking;
      }
      tmp = true === prop;
    }
    return tmp;
  }, items1);
};
