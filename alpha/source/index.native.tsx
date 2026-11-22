// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15435, 16, 9, 1241, 15629, 15630, 17, 15632, 19395, 20204, 20205, 20206, 20207, 20208, 20210, 20211, 20212, 20213, 20214, 20215, 20216, 20217, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15629 */;
import installSystrace from "installSystrace" /* 15630 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15435 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77106 = () => {
  let closure_0 = GenerateInvite(f20263[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20263, arg0);
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
const f20253 = () => BackgroundSync(f20253[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77106);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20254 = () => TTITestAction(f20254[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77106);
}
const Disconnect = "Disconnect";
const f20255 = () => Disconnect(f20255[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77106);
const MarkAsRead = "MarkAsRead";
const f20256 = () => MarkAsRead(f20256[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77106);
const MuteAction = "MuteAction";
const f20257 = () => MuteAction(f20257[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77106);
const ToggleDeafen = "ToggleDeafen";
const f20258 = () => ToggleDeafen(f20258[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77106);
const ToggleSelfMute = "ToggleSelfMute";
const f20259 = () => ToggleSelfMute(f20259[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77106);
const DismissCallAction = "DismissCallAction";
const f20260 = () => DismissCallAction(f20260[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77106);
const DirectReply = "DirectReply";
const f20261 = () => DirectReply(f20261[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77106);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20262 = () => SelectVoiceChannel(f20262[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77106);
const GenerateInvite = "GenerateInvite";
const f20263 = () => GenerateInvite(f20263[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77106);
const result = size.fileFinishedImporting("index.native.tsx");
