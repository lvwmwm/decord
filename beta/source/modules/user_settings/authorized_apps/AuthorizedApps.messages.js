// Module ID: 2139
// Function ID: 2140
// Dependencies: [1117, 2140, 1152, 2]

// Module 2139
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import AssetRegistry from "AssetRegistry" /* 2140 */;
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
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/AuthorizedApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
