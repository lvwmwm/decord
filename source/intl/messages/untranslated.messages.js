// Module ID: 14052
// Function ID: 14053
// Name: messagesProxy
// Dependencies: [1238, 14053, 1273, 2]

// Module 14052 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1238 */;
import registerAsset from "registerAsset" /* 14053 */;
import module_1273 from "module_1273" /* 1273 */;

const loader = module_1273.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1273.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
