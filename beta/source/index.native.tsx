// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14517, 16, 9, 1235, 14711, 14712, 17, 14714, 17707, 18397, 18398, 18399, 18400, 18401, 18403, 18404, 18405, 18406, 18407, 18408, 18409, 18410, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14711 */;
import installSystrace from "installSystrace" /* 14712 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14517 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1235 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18456 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18456[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18456[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18456[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18456[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18456 = () => GenerateInvite(f18456[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18456 = () => GenerateInvite(f18456[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18456[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18456, arg0);
  });
}
GenerateInvite = "Disconnect";
f18456 = () => GenerateInvite(f18456[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "MarkAsRead";
f18456 = () => GenerateInvite(f18456[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "MuteAction";
f18456 = () => GenerateInvite(f18456[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "ToggleDeafen";
f18456 = () => GenerateInvite(f18456[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18456 = () => GenerateInvite(f18456[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "DismissCallAction";
f18456 = () => GenerateInvite(f18456[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "DirectReply";
f18456 = () => GenerateInvite(f18456[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18456 = () => GenerateInvite(f18456[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
GenerateInvite = "GenerateInvite";
f18456 = () => GenerateInvite(f18456[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18456[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18456, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
