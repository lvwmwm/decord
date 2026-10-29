// Module ID: 2406
// Function ID: 2407
// Dependencies: [1129, 2407, 1164, 2]

// Module 2406
import AssetJsonUtils from "AssetJsonUtils" /* 1129 */;
import AssetRegistry from "AssetRegistry" /* 2407 */;
import module_1164_mod from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1164 = module_1164_mod;
const loader = module_1164.createLoader(obj, "en-US");
module_1164 = module_1164_mod;
const messagesProxy = module_1164.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/waterwheels/WaterwheelsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
