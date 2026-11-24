// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15458, 16, 9, 1241, 15652, 15653, 17, 15655, 19439, 20249, 20250, 20251, 20252, 20253, 20255, 20256, 20257, 20258, 20259, 20260, 20261, 20262, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15652 */;
import installSystrace from "installSystrace" /* 15653 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15458 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77197 = () => {
  let closure_0 = GenerateInvite(f20308[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20308, arg0);
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
const f20298 = () => BackgroundSync(f20298[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77197);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20299 = () => TTITestAction(f20299[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77197);
}
const Disconnect = "Disconnect";
const f20300 = () => Disconnect(f20300[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77197);
const MarkAsRead = "MarkAsRead";
const f20301 = () => MarkAsRead(f20301[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77197);
const MuteAction = "MuteAction";
const f20302 = () => MuteAction(f20302[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77197);
const ToggleDeafen = "ToggleDeafen";
const f20303 = () => ToggleDeafen(f20303[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77197);
const ToggleSelfMute = "ToggleSelfMute";
const f20304 = () => ToggleSelfMute(f20304[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77197);
const DismissCallAction = "DismissCallAction";
const f20305 = () => DismissCallAction(f20305[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77197);
const DirectReply = "DirectReply";
const f20306 = () => DirectReply(f20306[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77197);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20307 = () => SelectVoiceChannel(f20307[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77197);
const GenerateInvite = "GenerateInvite";
const f20308 = () => GenerateInvite(f20308[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77197);
const result = size.fileFinishedImporting("index.native.tsx");
