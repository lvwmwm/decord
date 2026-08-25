// Module ID: 13933
// Function ID: 13934
// Name: importDefaultResult1
// Dependencies: [4372, 1302, 1340, 13934, 13981, 13982, 13984, 13985, 13987, 13990, 13991, 13993, 10820, 2]

// Module 13933 (importDefaultResult1)
import _modDef10820 from "module_10820" /* 10820 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 13981 */;
import _modDef13982 from "module_13982" /* 13982 */;
import itemsDefault from "items" /* 13984 */;
import _modDef13985 from "module_13985" /* 13985 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 13987 */;
import _modDef13993 from "module_13993" /* 13993 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 13990 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef13982);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef13985);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef13993, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef10820];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
