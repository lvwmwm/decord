// Module ID: 13732
// Function ID: 13733
// Name: items
// Dependencies: [13733, 13777, 13778, 13780, 13781, 13783, 13786, 13788, 10732, 2]

// Module 13732 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13778";
import merged3 from "items";
import merged4 from "module_13781";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13788"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10732")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13778").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
