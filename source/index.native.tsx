// Module ID: 0
// Function ID: 81
// Name: registerHeadlessTask
// Dependencies: [1, 25, 13193, 26, 14, 1184, 13387, 13388, 27, 13390, 15960, 16676, 16677, 16678, 16679, 16680, 16682, 16683, 16684, 16685, 16686, 16687, 16688, 16689, 2]

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
AppRegistry.registerComponent("Discord", () => require(13390) /* App */.default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", (arg0) => {
  const _require = [...arguments];
  return _require(15960).default("Main", () => {
    outer1_3(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require(16676) /* AppShare */.default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", (arg0) => {
  const _require = [...arguments];
  return _require(15960).default("Share", () => outer1_4(...closure_0));
});
registerHeadlessTask("BackgroundSync", () => require(16678) /* resolved */);
registerHeadlessTask("TTITestAction", () => require(16679) /* _createForOfIteratorHelperLoose */);
registerHeadlessTask("Disconnect", () => require(16680) /* promise */);
registerHeadlessTask("MarkAsRead", () => require(16682) /* promise */);
registerHeadlessTask("MuteAction", () => require(16683) /* promise */);
registerHeadlessTask("ToggleDeafen", () => require(16684) /* promise */);
registerHeadlessTask("ToggleSelfMute", () => require(16685) /* promise */);
registerHeadlessTask("DismissCallAction", () => require(16686) /* promise */);
registerHeadlessTask("DirectReply", () => require(16687) /* promise */);
registerHeadlessTask("SelectVoiceChannel", () => require(16688) /* promise */);
registerHeadlessTask("GenerateInvite", () => require(16689) /* promise */);
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");
