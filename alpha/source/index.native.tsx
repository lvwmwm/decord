// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14571, 16, 9, 1231, 14765, 14766, 17, 14768, 17797, 18486, 18487, 18488, 18489, 18490, 18492, 18493, 18494, 18495, 18496, 18497, 18498, 18499, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14765 */;
import installSystrace from "installSystrace" /* 14766 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14571 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18545 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18545[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18545[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18545[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18545[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18545 = () => GenerateInvite(f18545[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18545 = () => GenerateInvite(f18545[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18545[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18545, arg0);
  });
}
GenerateInvite = "Disconnect";
f18545 = () => GenerateInvite(f18545[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "MarkAsRead";
f18545 = () => GenerateInvite(f18545[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "MuteAction";
f18545 = () => GenerateInvite(f18545[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "ToggleDeafen";
f18545 = () => GenerateInvite(f18545[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18545 = () => GenerateInvite(f18545[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "DismissCallAction";
f18545 = () => GenerateInvite(f18545[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "DirectReply";
f18545 = () => GenerateInvite(f18545[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18545 = () => GenerateInvite(f18545[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
GenerateInvite = "GenerateInvite";
f18545 = () => GenerateInvite(f18545[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18545[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18545, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
