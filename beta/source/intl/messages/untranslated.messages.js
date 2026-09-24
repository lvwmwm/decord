// Module ID: 14507
// Function ID: 14508
// Dependencies: [1123, 14508, 1158, 2]

// Module 14507
import AssetJsonUtils from "AssetJsonUtils" /* 1123 */;
import _mod14508 from "module_14508" /* 14508 */;
import module_1158_mod from "module_1158" /* 1158 */;
import size from "module_2" /* 2 */;

let module_1158 = module_1158_mod;
const loader = module_1158.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14508);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1158 = module_1158_mod;
const messagesProxy = module_1158.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
