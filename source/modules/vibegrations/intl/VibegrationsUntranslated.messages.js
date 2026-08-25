// Module ID: 3405
// Function ID: 3406
// Name: messagesProxy
// Dependencies: [1239, 3406, 1274, 2]

// Module 3405 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 3406 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/vibegrations/intl/VibegrationsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
