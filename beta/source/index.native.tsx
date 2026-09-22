// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14479, 16, 9, 1235, 14673, 14674, 17, 14676, 17697, 18387, 18388, 18389, 18390, 18391, 18393, 18394, 18395, 18396, 18397, 18398, 18399, 18400, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14673 */;
import installSystrace from "installSystrace" /* 14674 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14479 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1235 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18446 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18446[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18446[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18446[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18446[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18446 = () => GenerateInvite(f18446[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18446 = () => GenerateInvite(f18446[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18446[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18446, arg0);
  });
}
GenerateInvite = "Disconnect";
f18446 = () => GenerateInvite(f18446[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "MarkAsRead";
f18446 = () => GenerateInvite(f18446[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "MuteAction";
f18446 = () => GenerateInvite(f18446[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "ToggleDeafen";
f18446 = () => GenerateInvite(f18446[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18446 = () => GenerateInvite(f18446[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "DismissCallAction";
f18446 = () => GenerateInvite(f18446[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "DirectReply";
f18446 = () => GenerateInvite(f18446[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18446 = () => GenerateInvite(f18446[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
GenerateInvite = "GenerateInvite";
f18446 = () => GenerateInvite(f18446[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18446[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18446, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
