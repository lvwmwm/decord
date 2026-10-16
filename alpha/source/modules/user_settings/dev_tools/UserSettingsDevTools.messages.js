// Module ID: 2209
// Function ID: 2210
// Dependencies: [1132, 2210, 1167, 2]

// Module 2209
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import AssetRegistry from "AssetRegistry" /* 2210 */;
import module_1167_mod from "module_1167" /* 1167 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1167 = module_1167_mod;
const loader = module_1167.createLoader(obj, "en-US");
module_1167 = module_1167_mod;
const messagesProxy = module_1167.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsDevTools.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
