// Module ID: 14188
// Function ID: 14189
// Name: messagesProxy
// Dependencies: [1120, 14189, 1155, 2]

// Module 14188 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1120 */;
import registerAsset from "registerAsset" /* 14189 */;
import module_1155 from "module_1155" /* 1155 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
