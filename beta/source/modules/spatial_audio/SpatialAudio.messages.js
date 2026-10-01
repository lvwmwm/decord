// Module ID: 3649
// Function ID: 3650
// Dependencies: [1119, 3650, 1154, 2]

// Module 3649
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import AssetRegistry from "AssetRegistry" /* 3650 */;
import module_1154_mod from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1154 = module_1154_mod;
const loader = module_1154.createLoader(obj, "en-US");
module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudio.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
