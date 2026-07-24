// Module ID: 13445
// Function ID: 103338
// Name: items
// Dependencies: [13446, 13490, 13491, 13493, 13494, 13496, 13499, 13501, 10521, 2]

// Module 13445 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13491";
import merged3 from "items";
import merged4 from "module_13494";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13501"), commands: obj, events: obj, stores: [] };
const items = [require("importDefaultResult1")];
obj.transports = items;
obj.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13491").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
