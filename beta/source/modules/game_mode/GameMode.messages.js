// Module ID: 3909
// Function ID: 3910
// Dependencies: [1119, 3910, 1154, 2]

// Module 3909
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import AssetRegistry from "AssetRegistry" /* 3910 */;
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
const result = size.fileFinishedImporting("modules/game_mode/GameMode.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
