// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13688, 16, 9, 1231, 13882, 13883, 17, 13885, 17049, 17748, 17749, 17750, 17751, 17752, 17754, 17755, 17756, 17757, 17758, 17759, 17760, 17761, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 13882 */;
import installSystrace from "installSystrace" /* 13883 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13688 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f17807 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17807[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17807[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17807[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17807[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17807 = () => GenerateInvite(f17807[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f17807 = () => GenerateInvite(f17807[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f17807[12]).default;
    return (arg0) => closure_0(GenerateInvite, f17807, arg0);
  });
}
GenerateInvite = "Disconnect";
f17807 = () => GenerateInvite(f17807[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "MarkAsRead";
f17807 = () => GenerateInvite(f17807[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "MuteAction";
f17807 = () => GenerateInvite(f17807[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "ToggleDeafen";
f17807 = () => GenerateInvite(f17807[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17807 = () => GenerateInvite(f17807[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "DismissCallAction";
f17807 = () => GenerateInvite(f17807[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "DirectReply";
f17807 = () => GenerateInvite(f17807[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17807 = () => GenerateInvite(f17807[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
GenerateInvite = "GenerateInvite";
f17807 = () => GenerateInvite(f17807[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17807[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17807, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
