// Module ID: 2405
// Function ID: 2406
// Dependencies: [1118, 2406, 1153, 2]

// Module 2405
import AssetJsonUtils from "AssetJsonUtils" /* 1118 */;
import AssetRegistry from "AssetRegistry" /* 2406 */;
import module_1153_mod from "module_1153" /* 1153 */;
import size from "module_2" /* 2 */;

let obj = {
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1153 = module_1153_mod;
const loader = module_1153.createLoader(obj, "en-US");
module_1153 = module_1153_mod;
const messagesProxy = module_1153.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInvitesUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
