// Module ID: 13501
// Function ID: 103643
// Name: items
// Dependencies: [13502, 13546, 13547, 13549, 13550, 13552, 13555, 13557, 10588, 2]

// Module 13501 (items)
import merged1 from "RPC_LOCAL_SCOPE";
import merged2 from "module_13547";
import merged3 from "items";
import merged4 from "module_13550";
import merged5 from "messageEventsValidation";

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
obj = {};
const merged6 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: require("module_13557"), commands: obj, events: obj, stores: [] };
const items = [require("importDefaultResult1")];
obj.transports = items;
obj.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const result = require("module_13547").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
