// Module ID: 13543
// Function ID: 13544
// Name: items
// Dependencies: [13544, 13588, 13589, 13591, 13592, 13594, 13597, 13599, 10636, 2]

// Module 13543 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13589";
import merged3 from "items";
import merged4 from "module_13592";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13599"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10636")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13589").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
