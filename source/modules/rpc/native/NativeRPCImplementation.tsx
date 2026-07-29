// Module ID: 13524
// Function ID: 13525
// Name: items
// Dependencies: [13525, 13569, 13570, 13572, 13573, 13575, 13578, 13580, 10622, 2]

// Module 13524 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13570";
import merged3 from "items";
import merged4 from "module_13573";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13580"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10622")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13570").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
