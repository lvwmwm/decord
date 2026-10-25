// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15444, 16, 9, 1257, 15638, 15639, 17, 15641, 18704, 19488, 19489, 19490, 19491, 19492, 19494, 19495, 19496, 19497, 19498, 19499, 19500, 19501, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15638 */;
import installSystrace from "installSystrace" /* 15639 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15444 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f84268 = () => {
  let closure_0 = GenerateInvite(f19547[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19547, arg0);
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
const f19537 = () => BackgroundSync(f19537[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84268);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19538 = () => TTITestAction(f19538[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84268);
}
const Disconnect = "Disconnect";
const f19539 = () => Disconnect(f19539[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84268);
const MarkAsRead = "MarkAsRead";
const f19540 = () => MarkAsRead(f19540[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84268);
const MuteAction = "MuteAction";
const f19541 = () => MuteAction(f19541[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84268);
const ToggleDeafen = "ToggleDeafen";
const f19542 = () => ToggleDeafen(f19542[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84268);
const ToggleSelfMute = "ToggleSelfMute";
const f19543 = () => ToggleSelfMute(f19543[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84268);
const DismissCallAction = "DismissCallAction";
const f19544 = () => DismissCallAction(f19544[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84268);
const DirectReply = "DirectReply";
const f19545 = () => DirectReply(f19545[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84268);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19546 = () => SelectVoiceChannel(f19546[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84268);
const GenerateInvite = "GenerateInvite";
const f19547 = () => GenerateInvite(f19547[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84268);
const result = size.fileFinishedImporting("index.native.tsx");
