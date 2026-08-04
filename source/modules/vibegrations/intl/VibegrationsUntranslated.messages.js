// Module ID: 3353
// Function ID: 3354
// Name: messagesProxy
// Dependencies: [1239, 3354, 1274, 2]

// Module 3353 (messagesProxy)
import module_1274 from "module_1274";
import module_1274 from "module_1274";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = require(1239) /* loadJsonAsset */.loadJsonAsset(require(3354) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("modules/vibegrations/intl/VibegrationsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
