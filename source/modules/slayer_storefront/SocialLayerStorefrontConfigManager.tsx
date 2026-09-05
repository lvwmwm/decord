// Module ID: 13741
// Function ID: 13742
// Name: onPostConnectionOpen
// Dependencies: [7118, 10798, 2]

// Module 13741 (onPostConnectionOpen)
import initializeDefault from "initialize" /* 7118 */;
import _fetchSocialLayerStorefront from "_fetchSocialLayerStorefront" /* 10798 */;

require = arg1;
initializeDefault;
class SocialLayerStorefrontConfigManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(applyArgumentsResult) };
    onPostConnectionOpen = applyArgumentsResult.onPostConnectionOpen;
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
SocialLayerStorefrontConfigManager.prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const socialLayerStorefrontConfig = _fetchSocialLayerStorefront.fetchSocialLayerStorefrontConfig();
};
const socialLayerStorefrontConfigManager = new SocialLayerStorefrontConfigManager();
const result = require("set").fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontConfigManager.tsx");

export default socialLayerStorefrontConfigManager;
