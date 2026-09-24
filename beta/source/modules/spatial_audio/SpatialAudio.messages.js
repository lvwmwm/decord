// Module ID: 3648
// Function ID: 3649
// Dependencies: [1123, 3649, 1158, 2]

// Module 3648
import AssetJsonUtils from "AssetJsonUtils" /* 1123 */;
import _mod3649 from "module_3649" /* 3649 */;
import module_1158_mod from "module_1158" /* 1158 */;
import size from "module_2" /* 2 */;

let module_1158 = module_1158_mod;
const loader = module_1158.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3649);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1158 = module_1158_mod;
const messagesProxy = module_1158.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
