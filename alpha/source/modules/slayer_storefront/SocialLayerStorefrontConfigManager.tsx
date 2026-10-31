// Module ID: 15623
// Function ID: 15624
// Name: SocialLayerStorefrontConfigManager
// Dependencies: [7287, 10670, 2]

// Module 15623 (SocialLayerStorefrontConfigManager)
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10670 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
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
