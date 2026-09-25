// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13732, 16, 9, 1231, 13926, 13927, 17, 13929, 17021, 17718, 17719, 17720, 17721, 17722, 17724, 17725, 17726, 17727, 17728, 17729, 17730, 17731, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 13926 */;
import installSystrace from "installSystrace" /* 13927 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13732 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f17777 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17777[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17777[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17777[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17777[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17777 = () => GenerateInvite(f17777[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f17777 = () => GenerateInvite(f17777[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f17777[12]).default;
    return (arg0) => closure_0(GenerateInvite, f17777, arg0);
  });
}
GenerateInvite = "Disconnect";
f17777 = () => GenerateInvite(f17777[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "MarkAsRead";
f17777 = () => GenerateInvite(f17777[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "MuteAction";
f17777 = () => GenerateInvite(f17777[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "ToggleDeafen";
f17777 = () => GenerateInvite(f17777[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17777 = () => GenerateInvite(f17777[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "DismissCallAction";
f17777 = () => GenerateInvite(f17777[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "DirectReply";
f17777 = () => GenerateInvite(f17777[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17777 = () => GenerateInvite(f17777[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
GenerateInvite = "GenerateInvite";
f17777 = () => GenerateInvite(f17777[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17777[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17777, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
