// Module ID: 2292
// Function ID: 2293
// Dependencies: [1131, 2293, 1166, 2]

// Module 2292
import AssetJsonUtils from "AssetJsonUtils" /* 1131 */;
import AssetRegistry from "AssetRegistry" /* 2293 */;
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
const result = size.fileFinishedImporting("modules/copy_experiments/registry/CopyExperiments.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
