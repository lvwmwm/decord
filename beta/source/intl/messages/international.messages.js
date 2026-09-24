// Module ID: 14509
// Function ID: 14510
// Dependencies: [1123, 14510, 1158, 2]

// Module 14509
import AssetJsonUtils from "AssetJsonUtils" /* 1123 */;
import _mod14510 from "module_14510" /* 14510 */;
import module_1158_mod from "module_1158" /* 1158 */;
import size from "module_2" /* 2 */;

let module_1158 = module_1158_mod;
const loader = module_1158.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14510);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1158 = module_1158_mod;
const messagesProxy = module_1158.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
