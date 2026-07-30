// Module ID: 13519
// Function ID: 13520
// Name: items
// Dependencies: [13520, 13564, 13565, 13567, 13568, 13570, 13573, 13575, 10618, 2]

// Module 13519 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13565";
import merged3 from "items";
import merged4 from "module_13568";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13575"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10618")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13565").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
