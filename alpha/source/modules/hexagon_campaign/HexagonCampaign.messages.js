// Module ID: 4280
// Function ID: 4281
// Dependencies: [1129, 4281, 1164, 2]

// Module 4280
import AssetJsonUtils from "AssetJsonUtils" /* 1129 */;
import AssetRegistry from "AssetRegistry" /* 4281 */;
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
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaign.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
