// Module ID: 13392
// Function ID: 103011
// Name: items
// Dependencies: [13393, 13437, 13438, 13440, 13441, 13443, 13446, 13448, 10492, 2]

// Module 13392 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13438";
import merged3 from "items";
import merged4 from "module_13441";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13448"), commands: obj, events: obj, stores: [] };
const items = [require("importDefaultResult1")];
obj.transports = items;
obj.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13438").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
