// Module ID: 0
// Function ID: 81
// Name: registerHeadlessTask
// Dependencies: [1, 25, 13182, 26, 14, 1184, 13376, 13377, 27, 13379, 15949, 16665, 16666, 16667, 16668, 16669, 16671, 16672, 16673, 16674, 16675, 16676, 16677, 16678, 2]

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
AppRegistry.registerComponent("Discord", () => require(13379) /* App */.default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", (arg0) => {
  const _require = [...arguments];
  return _require(15949).default("Main", () => {
    outer1_3(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require(16665) /* AppShare */.default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", (arg0) => {
  const _require = [...arguments];
  return _require(15949).default("Share", () => outer1_4(...closure_0));
});
registerHeadlessTask("BackgroundSync", () => require(16667) /* resolved */);
registerHeadlessTask("TTITestAction", () => require(16668) /* _createForOfIteratorHelperLoose */);
registerHeadlessTask("Disconnect", () => require(16669) /* promise */);
registerHeadlessTask("MarkAsRead", () => require(16671) /* promise */);
registerHeadlessTask("MuteAction", () => require(16672) /* promise */);
registerHeadlessTask("ToggleDeafen", () => require(16673) /* promise */);
registerHeadlessTask("ToggleSelfMute", () => require(16674) /* promise */);
registerHeadlessTask("DismissCallAction", () => require(16675) /* promise */);
registerHeadlessTask("DirectReply", () => require(16676) /* promise */);
registerHeadlessTask("SelectVoiceChannel", () => require(16677) /* promise */);
registerHeadlessTask("GenerateInvite", () => require(16678) /* promise */);
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");
