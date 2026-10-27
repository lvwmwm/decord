// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15444, 16, 9, 1257, 15638, 15639, 17, 15641, 18713, 19497, 19498, 19499, 19500, 19501, 19503, 19504, 19505, 19506, 19507, 19508, 19509, 19510, 2]

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

const f84327 = () => {
  let closure_0 = GenerateInvite(f19556[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19556, arg0);
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
const f19546 = () => BackgroundSync(f19546[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84327);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19547 = () => TTITestAction(f19547[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84327);
}
const Disconnect = "Disconnect";
const f19548 = () => Disconnect(f19548[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84327);
const MarkAsRead = "MarkAsRead";
const f19549 = () => MarkAsRead(f19549[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84327);
const MuteAction = "MuteAction";
const f19550 = () => MuteAction(f19550[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84327);
const ToggleDeafen = "ToggleDeafen";
const f19551 = () => ToggleDeafen(f19551[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84327);
const ToggleSelfMute = "ToggleSelfMute";
const f19552 = () => ToggleSelfMute(f19552[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84327);
const DismissCallAction = "DismissCallAction";
const f19553 = () => DismissCallAction(f19553[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84327);
const DirectReply = "DirectReply";
const f19554 = () => DirectReply(f19554[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84327);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19555 = () => SelectVoiceChannel(f19555[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84327);
const GenerateInvite = "GenerateInvite";
const f19556 = () => GenerateInvite(f19556[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84327);
const result = size.fileFinishedImporting("index.native.tsx");
