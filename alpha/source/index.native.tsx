// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13856, 16, 9, 1231, 14050, 14051, 17, 14053, 17240, 17941, 17942, 17943, 17944, 17945, 17947, 17948, 17949, 17950, 17951, 17952, 17953, 17954, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14050 */;
import installSystrace from "installSystrace" /* 14051 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13856 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18000 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18000[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18000[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18000[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18000[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18000 = () => GenerateInvite(f18000[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18000 = () => GenerateInvite(f18000[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18000[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18000, arg0);
  });
}
GenerateInvite = "Disconnect";
f18000 = () => GenerateInvite(f18000[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "MarkAsRead";
f18000 = () => GenerateInvite(f18000[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "MuteAction";
f18000 = () => GenerateInvite(f18000[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "ToggleDeafen";
f18000 = () => GenerateInvite(f18000[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18000 = () => GenerateInvite(f18000[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "DismissCallAction";
f18000 = () => GenerateInvite(f18000[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "DirectReply";
f18000 = () => GenerateInvite(f18000[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18000 = () => GenerateInvite(f18000[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
GenerateInvite = "GenerateInvite";
f18000 = () => GenerateInvite(f18000[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18000[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18000, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
