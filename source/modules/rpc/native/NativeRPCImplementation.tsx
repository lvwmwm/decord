// Module ID: 13611
// Function ID: 13612
// Name: items
// Dependencies: [13612, 13656, 13657, 13659, 13660, 13662, 13665, 13667, 10511, 2]

// Module 13611 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13657";
import merged3 from "items";
import merged4 from "module_13660";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13667"), commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [require("module_10511")];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13657").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
