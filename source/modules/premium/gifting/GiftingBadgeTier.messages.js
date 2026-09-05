// Module ID: 2494
// Function ID: 2495
// Name: messagesProxy
// Dependencies: [1120, 2495, 1155, 2]

// Module 2494 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1120 */;
import registerAsset from "registerAsset" /* 2495 */;
import module_1155 from "module_1155" /* 1155 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/premium/gifting/GiftingBadgeTier.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
