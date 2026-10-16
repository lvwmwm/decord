// Module ID: 2669
// Function ID: 2670
// Dependencies: [1132, 2670, 1167, 2]

// Module 2669
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import AssetRegistry from "AssetRegistry" /* 2670 */;
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
const result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgeTier.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
