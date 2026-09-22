// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14285, 16, 9, 1230, 14479, 14480, 17, 14482, 17341, 18040, 18041, 18042, 18043, 18044, 18046, 18047, 18048, 18049, 18050, 18051, 18052, 18053, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14479 */;
import installSystrace from "installSystrace" /* 14480 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14285 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1230 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18099 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18099[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18099[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18099[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18099[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18099 = () => GenerateInvite(f18099[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18099 = () => GenerateInvite(f18099[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18099[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18099, arg0);
  });
}
GenerateInvite = "Disconnect";
f18099 = () => GenerateInvite(f18099[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "MarkAsRead";
f18099 = () => GenerateInvite(f18099[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "MuteAction";
f18099 = () => GenerateInvite(f18099[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "ToggleDeafen";
f18099 = () => GenerateInvite(f18099[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18099 = () => GenerateInvite(f18099[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "DismissCallAction";
f18099 = () => GenerateInvite(f18099[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "DirectReply";
f18099 = () => GenerateInvite(f18099[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18099 = () => GenerateInvite(f18099[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
GenerateInvite = "GenerateInvite";
f18099 = () => GenerateInvite(f18099[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18099[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18099, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
