// Module ID: 3237
// Function ID: 25826
// Name: messagesProxy
// Dependencies: [1215, 3238, 1250, 2]

// Module 3237 (messagesProxy)
import module_1250 from "module_1250";
import module_1250 from "module_1250";

const loader = module_1250.createLoader({
  () => {
    const jsonAsset = require(1215) /* loadJsonAsset */.loadJsonAsset(require(3238) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1250.makeMessagesProxy(loader);
const result = require("module_1250").fileFinishedImporting("modules/custom_typing_indicator/intl/CustomTypingIndicator.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
