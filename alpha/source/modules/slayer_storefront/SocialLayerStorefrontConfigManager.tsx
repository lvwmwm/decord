// Module ID: 14816
// Function ID: 14817
// Name: SocialLayerStorefrontConfigManager
// Dependencies: [7085, 10460, 2]

// Module 14816 (SocialLayerStorefrontConfigManager)
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10460 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
import size from "module_2" /* 2 */;

class SocialLayerStorefrontConfigManager extends AutomaticLifecycleManager {
  constructor() {
    let onPostConnectionOpen;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(applyArgumentsResult) };
    onPostConnectionOpen = applyArgumentsResult.onPostConnectionOpen;
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  onPostConnectionOpen() {
    const obj = SocialLayerStorefrontActionCreators;
    const socialLayerStorefrontConfig = obj.fetchSocialLayerStorefrontConfig();
  }
}
const prototype = SocialLayerStorefrontConfigManager.prototype;
const socialLayerStorefrontConfigManager = new SocialLayerStorefrontConfigManager();
const result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontConfigManager.tsx");

export default socialLayerStorefrontConfigManager;
