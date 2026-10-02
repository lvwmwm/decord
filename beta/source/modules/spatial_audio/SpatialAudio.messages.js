// Module ID: 3652
// Function ID: 3653
// Dependencies: [1131, 3653, 1166, 2]

// Module 3652
import AssetJsonUtils from "AssetJsonUtils" /* 1131 */;
import AssetRegistry from "AssetRegistry" /* 3653 */;
import module_1166_mod from "module_1166" /* 1166 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1166 = module_1166_mod;
const loader = module_1166.createLoader(obj, "en-US");
module_1166 = module_1166_mod;
const messagesProxy = module_1166.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
