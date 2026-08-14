// Module ID: 13803
// Function ID: 13804
// Name: items
// Dependencies: [13804, 13848, 13849, 13851, 13852, 13854, 13857, 13859, 10723, 2]

// Module 13803 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13849";
import merged3 from "items";
import merged4 from "module_13852";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13859"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10723")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13849").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
