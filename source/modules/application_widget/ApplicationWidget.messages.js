// Module ID: 3014
// Function ID: 3015
// Name: messagesProxy
// Dependencies: [1238, 3015, 1273, 2]

// Module 3014 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1238 */;
import registerAsset from "registerAsset" /* 3015 */;
import module_1273 from "module_1273" /* 1273 */;

const loader = module_1273.createLoader({
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1273.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/application_widget/ApplicationWidget.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
