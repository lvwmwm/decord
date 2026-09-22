// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14482, 16, 9, 1231, 14676, 14677, 17, 14679, 17705, 18394, 18395, 18396, 18397, 18398, 18400, 18401, 18402, 18403, 18404, 18405, 18406, 18407, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14676 */;
import installSystrace from "installSystrace" /* 14677 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14482 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18453 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18453[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18453[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18453[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18453[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18453 = () => GenerateInvite(f18453[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18453 = () => GenerateInvite(f18453[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18453[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18453, arg0);
  });
}
GenerateInvite = "Disconnect";
f18453 = () => GenerateInvite(f18453[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "MarkAsRead";
f18453 = () => GenerateInvite(f18453[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "MuteAction";
f18453 = () => GenerateInvite(f18453[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "ToggleDeafen";
f18453 = () => GenerateInvite(f18453[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18453 = () => GenerateInvite(f18453[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "DismissCallAction";
f18453 = () => GenerateInvite(f18453[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "DirectReply";
f18453 = () => GenerateInvite(f18453[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18453 = () => GenerateInvite(f18453[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
GenerateInvite = "GenerateInvite";
f18453 = () => GenerateInvite(f18453[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18453[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18453, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
