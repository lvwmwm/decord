// Module ID: 13457
// Function ID: 103470
// Name: items
// Dependencies: [13458, 13502, 13503, 13505, 13506, 13508, 13511, 13513, 10550, 2]

// Module 13457 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13503";
import merged3 from "items";
import merged4 from "module_13506";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13513"), commands: obj, events: obj, stores: [] };
const items = [require("importDefaultResult1")];
obj.transports = items;
obj.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13503").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
