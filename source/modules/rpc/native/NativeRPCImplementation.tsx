// Module ID: 13742
// Function ID: 13743
// Name: items
// Dependencies: [13743, 13787, 13788, 13790, 13791, 13793, 13796, 13798, 10738, 2]

// Module 13742 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13788";
import merged3 from "items";
import merged4 from "module_13791";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13798"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10738")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13788").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
