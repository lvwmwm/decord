// Module ID: 13645
// Function ID: 13646
// Name: messagesProxy
// Dependencies: [1239, 13646, 1274, 2]

// Module 13645 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 13646 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
