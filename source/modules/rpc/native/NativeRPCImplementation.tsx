// Module ID: 13734
// Function ID: 13735
// Name: items
// Dependencies: [13735, 13779, 13780, 13782, 13783, 13785, 13788, 13790, 10733, 2]

// Module 13734 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13780";
import merged3 from "items";
import merged4 from "module_13783";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13790"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10733")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13780").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
