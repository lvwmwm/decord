// Module ID: 14390
// Function ID: 14391
// Name: importDefaultResult1
// Dependencies: [4473, 1301, 1339, 14391, 14438, 14439, 14441, 14442, 14444, 14447, 14448, 14450, 9479, 2]

// Module 14390 (importDefaultResult1)
import _modDef9479 from "module_9479" /* 9479 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14438 */;
import _modDef14439 from "module_14439" /* 14439 */;
import itemsDefault from "items" /* 14441 */;
import _modDef14442 from "module_14442" /* 14442 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14444 */;
import _modDef14450 from "module_14450" /* 14450 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import importDefaultResult1 from "handleThemeChange" /* 1301 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14447 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1339 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14439);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14442);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14450, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9479];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
