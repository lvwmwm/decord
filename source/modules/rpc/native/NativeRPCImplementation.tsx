// Module ID: 13791
// Function ID: 13792
// Name: items
// Dependencies: [13792, 13836, 13837, 13839, 13840, 13842, 13845, 13847, 10707, 2]

// Module 13791 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13837";
import merged3 from "items";
import merged4 from "module_13840";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13847"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10707")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13837").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
