// Module ID: 11584
// Function ID: 11585
// Name: useSocialLayerStorefrontMobileAccountLinkingDisabled
// Dependencies: [7548, 504, 2]
// Exports: useSocialLayerStorefrontMobileAccountLinkingDisabled

// Module 11584 (useSocialLayerStorefrontMobileAccountLinkingDisabled)
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7548 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx");

export function useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId) {
  _require = applicationId;
  const items = [SocialLayerStorefrontStore];
  const items1 = [applicationId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != applicationId;
    if (tmp2) {
      const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(tmp);
      let prop;
      if (configForApplicationId != null) {
        prop = configForApplicationId.disableMobileAccountLinking;
      }
      tmp2 = true === prop;
    }
    return tmp2;
  }, items1);
}
