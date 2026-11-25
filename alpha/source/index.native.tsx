// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15580, 16, 9, 1241, 15774, 15775, 17, 15777, 19551, 20351, 20352, 20353, 20354, 20355, 20357, 20358, 20359, 20360, 20361, 20362, 20363, 20364, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15774 */;
import installSystrace from "installSystrace" /* 15775 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15580 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77444 = () => {
  let closure_0 = GenerateInvite(f20410[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20410, arg0);
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
const f20400 = () => BackgroundSync(f20400[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77444);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20401 = () => TTITestAction(f20401[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77444);
}
const Disconnect = "Disconnect";
const f20402 = () => Disconnect(f20402[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77444);
const MarkAsRead = "MarkAsRead";
const f20403 = () => MarkAsRead(f20403[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77444);
const MuteAction = "MuteAction";
const f20404 = () => MuteAction(f20404[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77444);
const ToggleDeafen = "ToggleDeafen";
const f20405 = () => ToggleDeafen(f20405[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77444);
const ToggleSelfMute = "ToggleSelfMute";
const f20406 = () => ToggleSelfMute(f20406[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77444);
const DismissCallAction = "DismissCallAction";
const f20407 = () => DismissCallAction(f20407[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77444);
const DirectReply = "DirectReply";
const f20408 = () => DirectReply(f20408[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77444);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20409 = () => SelectVoiceChannel(f20409[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77444);
const GenerateInvite = "GenerateInvite";
const f20410 = () => GenerateInvite(f20410[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77444);
const result = size.fileFinishedImporting("index.native.tsx");
