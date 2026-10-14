// Module ID: 2425
// Function ID: 2426
// Dependencies: [1130, 2426, 1165, 2]

// Module 2425
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import AssetRegistry from "AssetRegistry" /* 2426 */;
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
const result = size.fileFinishedImporting("modules/guild_space/GuildSpace.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
