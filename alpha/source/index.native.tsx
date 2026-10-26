// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15443, 16, 9, 1257, 15637, 15638, 17, 15640, 18703, 19487, 19488, 19489, 19490, 19491, 19493, 19494, 19495, 19496, 19497, 19498, 19499, 19500, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15637 */;
import installSystrace from "installSystrace" /* 15638 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15443 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f84277 = () => {
  let closure_0 = GenerateInvite(f19546[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19546, arg0);
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
const f19536 = () => BackgroundSync(f19536[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84277);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19537 = () => TTITestAction(f19537[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84277);
}
const Disconnect = "Disconnect";
const f19538 = () => Disconnect(f19538[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84277);
const MarkAsRead = "MarkAsRead";
const f19539 = () => MarkAsRead(f19539[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84277);
const MuteAction = "MuteAction";
const f19540 = () => MuteAction(f19540[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84277);
const ToggleDeafen = "ToggleDeafen";
const f19541 = () => ToggleDeafen(f19541[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84277);
const ToggleSelfMute = "ToggleSelfMute";
const f19542 = () => ToggleSelfMute(f19542[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84277);
const DismissCallAction = "DismissCallAction";
const f19543 = () => DismissCallAction(f19543[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84277);
const DirectReply = "DirectReply";
const f19544 = () => DirectReply(f19544[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84277);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19545 = () => SelectVoiceChannel(f19545[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84277);
const GenerateInvite = "GenerateInvite";
const f19546 = () => GenerateInvite(f19546[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84277);
const result = size.fileFinishedImporting("index.native.tsx");
