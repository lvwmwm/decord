// Module ID: 16360
// Function ID: 16361
// Dependencies: [1117, 16361, 1152, 2]

// Module 16360
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import AssetRegistry from "AssetRegistry" /* 16361 */;
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
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
