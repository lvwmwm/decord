// Module ID: 2256
// Function ID: 2257
// Dependencies: [1131, 2257, 1166, 2]

// Module 2256
import AssetJsonUtils from "AssetJsonUtils" /* 1131 */;
import AssetRegistry from "AssetRegistry" /* 2257 */;
import module_1166_mod from "module_1166" /* 1166 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1166 = module_1166_mod;
const loader = module_1166.createLoader(obj, "en-US");
module_1166 = module_1166_mod;
const messagesProxy = module_1166.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/checkout/messages/CheckoutUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
