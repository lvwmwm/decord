// Module ID: 2218
// Function ID: 2219
// Name: messagesProxy
// Dependencies: [1239, 2219, 1274, 2]

// Module 2218 (messagesProxy)
import module_1274 from "module_1274";
import module_1274 from "module_1274";

const loader = module_1274.createLoader({
  () => {
    const jsonAsset = require(1239) /* loadJsonAsset */.loadJsonAsset(require(2219) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1274.makeMessagesProxy(loader);
const result = require("module_1274").fileFinishedImporting("modules/guild_space/GuildSpace.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
