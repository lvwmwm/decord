// Module ID: 3682
// Function ID: 3683
// Dependencies: [1123, 3683, 1158, 2]

// Module 3682
import AssetJsonUtils from "AssetJsonUtils" /* 1123 */;
import _mod3683 from "module_3683" /* 3683 */;
import module_1158_mod from "module_1158" /* 1158 */;
import size from "module_2" /* 2 */;

let module_1158 = module_1158_mod;
const loader = module_1158.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3683);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1158 = module_1158_mod;
const messagesProxy = module_1158.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/vibegrations/intl/VibegrationsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
