// Module ID: 13639
// Function ID: 13640
// Name: items
// Dependencies: [13640, 13684, 13685, 13687, 13688, 13690, 13693, 13695, 10539, 2]

// Module 13639 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13685";
import merged3 from "items";
import merged4 from "module_13688";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13695"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10539")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13685").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
