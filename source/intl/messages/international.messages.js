// Module ID: 13162
// Function ID: 101375
// Name: messagesProxy
// Dependencies: [1215, 13163, 1250, 2]

// Module 13162 (messagesProxy)
import module_1250 from "module_1250";
import module_1250 from "module_1250";

const loader = module_1250.createLoader({
  () => {
    const jsonAsset = require(1215) /* loadJsonAsset */.loadJsonAsset(require(13163) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1250.makeMessagesProxy(loader);
const result = require("module_1250").fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
