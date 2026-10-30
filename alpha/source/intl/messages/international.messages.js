// Module ID: 15973
// Function ID: 15974
// Dependencies: [1118, 15974, 1153, 2]

// Module 15973
import AssetJsonUtils from "AssetJsonUtils" /* 1118 */;
import AssetRegistry from "AssetRegistry" /* 15974 */;
import module_1153_mod from "module_1153" /* 1153 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1153 = module_1153_mod;
const loader = module_1153.createLoader(obj, "en-US");
module_1153 = module_1153_mod;
const messagesProxy = module_1153.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
