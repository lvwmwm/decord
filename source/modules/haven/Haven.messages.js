// Module ID: 2996
// Function ID: 2997
// Name: messagesProxy
// Dependencies: [1239, 2997, 1274, 2]

// Module 2996 (messagesProxy)
import module_1274 from "module_1274";
import module_1274 from "module_1274";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = require(1239) /* loadJsonAsset */.loadJsonAsset(require(2997) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("modules/haven/Haven.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
