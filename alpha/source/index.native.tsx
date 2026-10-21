// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15341, 16, 9, 1257, 15535, 15536, 17, 15538, 18533, 19291, 19292, 19293, 19294, 19295, 19297, 19298, 19299, 19300, 19301, 19302, 19303, 19304, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15535 */;
import installSystrace from "installSystrace" /* 15536 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15341 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f83317 = () => {
  let closure_0 = GenerateInvite(f19350[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19350, arg0);
};
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = react_native.AppRegistry;
AppRegistry.registerComponent("Discord", () => require("App").default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  let args;
  _require = [...arguments];
  return require("executeRunnable").default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require("AppShare").default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  let args;
  _require = [...arguments];
  return require("executeRunnable").default("Share", () => closure_3(...closure_0));
});
const BackgroundSync = "BackgroundSync";
const f19340 = () => BackgroundSync(f19340[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f83317);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19341 = () => TTITestAction(f19341[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f83317);
}
const Disconnect = "Disconnect";
const f19342 = () => Disconnect(f19342[15]);
AppRegistry.registerHeadlessTask("Disconnect", f83317);
const MarkAsRead = "MarkAsRead";
const f19343 = () => MarkAsRead(f19343[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f83317);
const MuteAction = "MuteAction";
const f19344 = () => MuteAction(f19344[17]);
AppRegistry.registerHeadlessTask("MuteAction", f83317);
const ToggleDeafen = "ToggleDeafen";
const f19345 = () => ToggleDeafen(f19345[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f83317);
const ToggleSelfMute = "ToggleSelfMute";
const f19346 = () => ToggleSelfMute(f19346[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f83317);
const DismissCallAction = "DismissCallAction";
const f19347 = () => DismissCallAction(f19347[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f83317);
const DirectReply = "DirectReply";
const f19348 = () => DirectReply(f19348[21]);
AppRegistry.registerHeadlessTask("DirectReply", f83317);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19349 = () => SelectVoiceChannel(f19349[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f83317);
const GenerateInvite = "GenerateInvite";
const f19350 = () => GenerateInvite(f19350[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f83317);
const result = size.fileFinishedImporting("index.native.tsx");
