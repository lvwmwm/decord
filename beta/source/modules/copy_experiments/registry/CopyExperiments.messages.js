// Module ID: 2289
// Function ID: 2290
// Dependencies: [1119, 2290, 1154, 2]

// Module 2289
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import AssetRegistry from "AssetRegistry" /* 2290 */;
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
const result = size.fileFinishedImporting("modules/copy_experiments/registry/CopyExperiments.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
