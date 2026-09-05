// Module ID: 3481
// Function ID: 3482
// Name: messagesProxy
// Dependencies: [1120, 3482, 1155, 2]

// Module 3481 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1120 */;
import registerAsset from "registerAsset" /* 3482 */;
import module_1155 from "module_1155" /* 1155 */;

const loader = module_1155.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
