// Module ID: 12910
// Function ID: 12911
// Name: onPostConnectionOpen
// Dependencies: [5229, 7678, 2]

// Module 12910 (onPostConnectionOpen)
import "initialize";

const require = arg1;
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
  const socialLayerStorefrontConfig = require(7678) /* _fetchSocialLayerStorefront */.fetchSocialLayerStorefrontConfig();
};
const socialLayerStorefrontConfigManager = new SocialLayerStorefrontConfigManager();
const result = require("set").fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontConfigManager.tsx");

export default socialLayerStorefrontConfigManager;
