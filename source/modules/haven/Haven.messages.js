// Module ID: 2910
// Function ID: 24857
// Name: messagesProxy
// Dependencies: [1215, 2911, 1250, 2]

// Module 2910 (messagesProxy)
import module_1250 from "module_1250";
import module_1250 from "module_1250";

const loader = module_1250.createLoader({
  () => {
    const jsonAsset = require(1215) /* loadJsonAsset */.loadJsonAsset(require(2911) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1250.makeMessagesProxy(loader);
const result = require("module_1250").fileFinishedImporting("modules/haven/Haven.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
