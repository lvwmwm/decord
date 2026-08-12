// Module ID: 13799
// Function ID: 13800
// Name: items
// Dependencies: [13800, 13844, 13845, 13847, 13848, 13850, 13853, 13855, 10791, 2]

// Module 13799 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13845";
import merged3 from "items";
import merged4 from "module_13848";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13855"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10791")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13845").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
