// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15580, 16, 9, 1241, 15774, 15775, 17, 15777, 19550, 20354, 20355, 20356, 20357, 20358, 20360, 20361, 20362, 20363, 20364, 20365, 20366, 20367, 2]

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

const f77465 = () => {
  let closure_0 = GenerateInvite(f20413[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20413, arg0);
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
const f20403 = () => BackgroundSync(f20403[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77465);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20404 = () => TTITestAction(f20404[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77465);
}
const Disconnect = "Disconnect";
const f20405 = () => Disconnect(f20405[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77465);
const MarkAsRead = "MarkAsRead";
const f20406 = () => MarkAsRead(f20406[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77465);
const MuteAction = "MuteAction";
const f20407 = () => MuteAction(f20407[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77465);
const ToggleDeafen = "ToggleDeafen";
const f20408 = () => ToggleDeafen(f20408[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77465);
const ToggleSelfMute = "ToggleSelfMute";
const f20409 = () => ToggleSelfMute(f20409[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77465);
const DismissCallAction = "DismissCallAction";
const f20410 = () => DismissCallAction(f20410[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77465);
const DirectReply = "DirectReply";
const f20411 = () => DirectReply(f20411[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77465);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20412 = () => SelectVoiceChannel(f20412[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77465);
const GenerateInvite = "GenerateInvite";
const f20413 = () => GenerateInvite(f20413[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77465);
const result = size.fileFinishedImporting("index.native.tsx");
