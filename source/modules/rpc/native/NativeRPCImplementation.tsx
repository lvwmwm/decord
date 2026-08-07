// Module ID: 13662
// Function ID: 13663
// Name: items
// Dependencies: [13663, 13707, 13708, 13710, 13711, 13713, 13716, 13718, 10666, 2]

// Module 13662 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13708";
import merged3 from "items";
import merged4 from "module_13711";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13718"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10666")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13708").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
