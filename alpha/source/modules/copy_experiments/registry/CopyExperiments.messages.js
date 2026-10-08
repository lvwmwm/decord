// Module ID: 2337
// Function ID: 2338
// Dependencies: [1130, 2338, 1165, 2]

// Module 2337
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import AssetRegistry from "AssetRegistry" /* 2338 */;
import module_1165_mod from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1165 = module_1165_mod;
const loader = module_1165.createLoader(obj, "en-US");
module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/copy_experiments/registry/CopyExperiments.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
