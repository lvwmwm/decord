// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13891, 16, 9, 1231, 14085, 14086, 17, 14088, 17297, 18012, 18013, 18014, 18015, 18016, 18018, 18019, 18020, 18021, 18022, 18023, 18024, 18025, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14085 */;
import installSystrace from "installSystrace" /* 14086 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13891 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18071 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18071[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18071[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18071[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18071[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18071 = () => GenerateInvite(f18071[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18071 = () => GenerateInvite(f18071[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18071[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18071, arg0);
  });
}
GenerateInvite = "Disconnect";
f18071 = () => GenerateInvite(f18071[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "MarkAsRead";
f18071 = () => GenerateInvite(f18071[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "MuteAction";
f18071 = () => GenerateInvite(f18071[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "ToggleDeafen";
f18071 = () => GenerateInvite(f18071[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18071 = () => GenerateInvite(f18071[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "DismissCallAction";
f18071 = () => GenerateInvite(f18071[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "DirectReply";
f18071 = () => GenerateInvite(f18071[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18071 = () => GenerateInvite(f18071[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
GenerateInvite = "GenerateInvite";
f18071 = () => GenerateInvite(f18071[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18071[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18071, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
