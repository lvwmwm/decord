// Module ID: 0
// Function ID: 81
// Name: registerHeadlessTask
// Dependencies: [1, 25, 13194, 26, 14, 1184, 13388, 13389, 27, 13391, 15972, 16688, 16689, 16690, 16691, 16692, 16694, 16695, 16696, 16697, 16698, 16699, 16700, 16701, 2]

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
AppRegistry.registerComponent("Discord", () => require(13391) /* App */.default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", (arg0) => {
  const _require = [...arguments];
  return _require(15972).default("Main", () => {
    outer1_3(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require(16688) /* AppShare */.default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", (arg0) => {
  const _require = [...arguments];
  return _require(15972).default("Share", () => outer1_4(...closure_0));
});
registerHeadlessTask("BackgroundSync", () => require(16690) /* resolved */);
registerHeadlessTask("TTITestAction", () => require(16691) /* _createForOfIteratorHelperLoose */);
registerHeadlessTask("Disconnect", () => require(16692) /* promise */);
registerHeadlessTask("MarkAsRead", () => require(16694) /* promise */);
registerHeadlessTask("MuteAction", () => require(16695) /* promise */);
registerHeadlessTask("ToggleDeafen", () => require(16696) /* promise */);
registerHeadlessTask("ToggleSelfMute", () => require(16697) /* promise */);
registerHeadlessTask("DismissCallAction", () => require(16698) /* promise */);
registerHeadlessTask("DirectReply", () => require(16699) /* promise */);
registerHeadlessTask("SelectVoiceChannel", () => require(16700) /* promise */);
registerHeadlessTask("GenerateInvite", () => require(16701) /* promise */);
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");
