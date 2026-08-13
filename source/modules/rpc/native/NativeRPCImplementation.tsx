// Module ID: 13800
// Function ID: 13801
// Name: items
// Dependencies: [13801, 13845, 13846, 13848, 13849, 13851, 13854, 13856, 10705, 2]

// Module 13800 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13846";
import merged3 from "items";
import merged4 from "module_13849";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13856"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10705")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13846").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
