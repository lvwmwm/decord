// Module ID: 0
// Function ID: 81
// Name: registerHeadlessTask
// Dependencies: [1, 25, 13129, 26, 14, 1184, 13323, 13324, 27, 13326, 15902, 16618, 16619, 16620, 16621, 16622, 16624, 16625, 16626, 16627, 16628, 16629, 16630, 16631, 2]

// Module 0 (registerHeadlessTask)
import module_1 from "prepareIdentify";
import prepareIdentify from "prepareIdentify";
import toLocaleLowerCase from "toLocaleLowerCase";
import module_26 from "module_26";
import isNonEmptyString from "isNonEmptyString";
import { AppRegistry } from "get ActivityIndicator";

function registerHeadlessTask(BackgroundSync, arg1) {
  let closure_0 = BackgroundSync;
  let closure_1 = arg1;
  AppRegistry.registerHeadlessTask(BackgroundSync, () => {
    BackgroundSync = BackgroundSync(table[12]).default;
    return (arg0) => callback(callback, outer1_1, arg0);
  });
}
const polyfillsEnd = require("_createForOfIteratorHelperLoose").default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = require("_createForOfIteratorHelperLoose").default.imports.sentryEnd;
sentryEnd.record();
if (require("isTTITest").isTTITest) {
  require("resolveName").installSystrace();
}
AppRegistry.registerComponent("Discord", () => require(13326) /* App */.default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", (arg0) => {
  const _require = [...arguments];
  return _require(15902).default("Main", () => {
    outer1_3(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require(16618) /* AppShare */.default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", (arg0) => {
  const _require = [...arguments];
  return _require(15902).default("Share", () => outer1_4(...closure_0));
});
registerHeadlessTask("BackgroundSync", () => require(16620) /* resolved */);
registerHeadlessTask("TTITestAction", () => require(16621) /* _createForOfIteratorHelperLoose */);
registerHeadlessTask("Disconnect", () => require(16622) /* promise */);
registerHeadlessTask("MarkAsRead", () => require(16624) /* promise */);
registerHeadlessTask("MuteAction", () => require(16625) /* promise */);
registerHeadlessTask("ToggleDeafen", () => require(16626) /* promise */);
registerHeadlessTask("ToggleSelfMute", () => require(16627) /* promise */);
registerHeadlessTask("DismissCallAction", () => require(16628) /* promise */);
registerHeadlessTask("DirectReply", () => require(16629) /* promise */);
registerHeadlessTask("SelectVoiceChannel", () => require(16630) /* promise */);
registerHeadlessTask("GenerateInvite", () => require(16631) /* promise */);
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");
