// Module ID: 4287
// Function ID: 4288
// Dependencies: [1117, 4288, 1152, 2]

// Module 4287
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import AssetRegistry from "AssetRegistry" /* 4288 */;
import module_1152_mod from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1152 = module_1152_mod;
const loader = module_1152.createLoader(obj, "en-US");
module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/connected_apps/ConnectedApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
