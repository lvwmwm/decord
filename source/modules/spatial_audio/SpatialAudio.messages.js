// Module ID: 3404
// Function ID: 3405
// Name: messagesProxy
// Dependencies: [1239, 3405, 1274, 2]

// Module 3404 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1239 */;
import registerAsset from "registerAsset" /* 3405 */;
import module_1274 from "module_1274" /* 1274 */;

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
