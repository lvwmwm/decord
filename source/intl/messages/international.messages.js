// Module ID: 13516
// Function ID: 13517
// Name: messagesProxy
// Dependencies: [1239, 13517, 1274, 2]

// Module 13516 (messagesProxy)
import module_1274 from "module_1274";
import module_1274 from "module_1274";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = require(1239) /* loadJsonAsset */.loadJsonAsset(require(13517) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
