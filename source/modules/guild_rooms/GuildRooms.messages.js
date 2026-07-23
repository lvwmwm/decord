// Module ID: 2132
// Function ID: 22461
// Name: messagesProxy
// Dependencies: [1215, 2133, 1250, 2]

// Module 2132 (messagesProxy)
import module_1250 from "module_1250";
import module_1250 from "module_1250";

const loader = module_1250.createLoader({
  () => {
    const jsonAsset = require(1215) /* loadJsonAsset */.loadJsonAsset(require(2133) /* registerAsset */);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1250.makeMessagesProxy(loader);
const result = require("module_1250").fileFinishedImporting("modules/guild_rooms/GuildRooms.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
