// Module ID: 3357
// Function ID: 3358
// Name: messagesProxy
// Dependencies: [1239, 3358, 1274, 2]

// Module 3357 (messagesProxy)
import module_1274 from "module_1274";
import module_1274 from "module_1274";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = require(1239) /* loadJsonAsset */.loadJsonAsset(require(3358) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("modules/connected_devices/DeviceDetected.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
