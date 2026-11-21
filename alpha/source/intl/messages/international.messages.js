// Module ID: 15428
// Function ID: 15429
// Dependencies: [1116, 15429, 1151, 2]

// Module 15428
import AssetJsonUtils from "AssetJsonUtils" /* 1116 */;
import AssetRegistry from "AssetRegistry" /* 15429 */;
import module_1151_mod from "module_1151" /* 1151 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1151 = module_1151_mod;
const loader = module_1151.createLoader(obj, "en-US");
module_1151 = module_1151_mod;
const messagesProxy = module_1151.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
