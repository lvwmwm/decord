// Module ID: 0
// Function ID: 81
// Name: registerHeadlessTask
// Dependencies: [1, 25, 13238, 26, 14, 1184, 13432, 13433, 27, 13435, 16011, 16728, 16729, 16730, 16731, 16732, 16734, 16735, 16736, 16737, 16738, 16739, 16740, 16741, 2]

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
AppRegistry.registerComponent("Discord", () => require(13435) /* App */.default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", (arg0) => {
  const _require = [...arguments];
  return _require(16011).default("Main", () => {
    outer1_3(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require(16728) /* AppShare */.default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", (arg0) => {
  const _require = [...arguments];
  return _require(16011).default("Share", () => outer1_4(...closure_0));
});
registerHeadlessTask("BackgroundSync", () => require(16730) /* resolved */);
registerHeadlessTask("TTITestAction", () => require(16731) /* _createForOfIteratorHelperLoose */);
registerHeadlessTask("Disconnect", () => require(16732) /* promise */);
registerHeadlessTask("MarkAsRead", () => require(16734) /* promise */);
registerHeadlessTask("MuteAction", () => require(16735) /* promise */);
registerHeadlessTask("ToggleDeafen", () => require(16736) /* promise */);
registerHeadlessTask("ToggleSelfMute", () => require(16737) /* promise */);
registerHeadlessTask("DismissCallAction", () => require(16738) /* promise */);
registerHeadlessTask("DirectReply", () => require(16739) /* promise */);
registerHeadlessTask("SelectVoiceChannel", () => require(16740) /* promise */);
registerHeadlessTask("GenerateInvite", () => require(16741) /* promise */);
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");
