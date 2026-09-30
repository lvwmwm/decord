// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13883, 16, 9, 1231, 14077, 14078, 17, 14080, 17275, 17976, 17977, 17978, 17979, 17980, 17982, 17983, 17984, 17985, 17986, 17987, 17988, 17989, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14077 */;
import installSystrace from "installSystrace" /* 14078 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13883 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18035 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18035[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18035[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18035[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18035[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18035 = () => GenerateInvite(f18035[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18035 = () => GenerateInvite(f18035[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18035[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18035, arg0);
  });
}
GenerateInvite = "Disconnect";
f18035 = () => GenerateInvite(f18035[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "MarkAsRead";
f18035 = () => GenerateInvite(f18035[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "MuteAction";
f18035 = () => GenerateInvite(f18035[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "ToggleDeafen";
f18035 = () => GenerateInvite(f18035[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18035 = () => GenerateInvite(f18035[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "DismissCallAction";
f18035 = () => GenerateInvite(f18035[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "DirectReply";
f18035 = () => GenerateInvite(f18035[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18035 = () => GenerateInvite(f18035[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
GenerateInvite = "GenerateInvite";
f18035 = () => GenerateInvite(f18035[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18035[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18035, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
