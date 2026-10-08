// Module ID: 3567
// Function ID: 3568
// Dependencies: [1130, 3568, 1165, 2]

// Module 3567
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import AssetRegistry from "AssetRegistry" /* 3568 */;
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
const result = size.fileFinishedImporting("modules/premium/rust_3pp/Rust3PP.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
