// Module ID: 2671
// Function ID: 2672
// Dependencies: [1132, 2672, 1167, 2]

// Module 2671
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import AssetRegistry from "AssetRegistry" /* 2672 */;
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
const result = size.fileFinishedImporting("modules/premium/gifting/GiftedSubscriptionsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
