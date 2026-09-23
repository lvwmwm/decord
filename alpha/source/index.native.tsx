// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14562, 16, 9, 1231, 14756, 14757, 17, 14759, 17774, 18463, 18464, 18465, 18466, 18467, 18469, 18470, 18471, 18472, 18473, 18474, 18475, 18476, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14756 */;
import installSystrace from "installSystrace" /* 14757 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14562 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18522 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18522[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18522[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18522[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18522[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18522 = () => GenerateInvite(f18522[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18522 = () => GenerateInvite(f18522[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18522[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18522, arg0);
  });
}
GenerateInvite = "Disconnect";
f18522 = () => GenerateInvite(f18522[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "MarkAsRead";
f18522 = () => GenerateInvite(f18522[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "MuteAction";
f18522 = () => GenerateInvite(f18522[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "ToggleDeafen";
f18522 = () => GenerateInvite(f18522[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18522 = () => GenerateInvite(f18522[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "DismissCallAction";
f18522 = () => GenerateInvite(f18522[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "DirectReply";
f18522 = () => GenerateInvite(f18522[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18522 = () => GenerateInvite(f18522[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
GenerateInvite = "GenerateInvite";
f18522 = () => GenerateInvite(f18522[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18522[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18522, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
