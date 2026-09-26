// Module ID: 3710
// Function ID: 3711
// Dependencies: [1119, 3711, 1154, 2]

// Module 3710
import AssetJsonUtils from "AssetJsonUtils" /* 1119 */;
import _mod3711 from "module_3711" /* 3711 */;
import module_1154_mod from "module_1154" /* 1154 */;
import size from "module_2" /* 2 */;

let module_1154 = module_1154_mod;
const loader = module_1154.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3711);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1154 = module_1154_mod;
const messagesProxy = module_1154.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/vibegrations/intl/VibegrationsUntranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
