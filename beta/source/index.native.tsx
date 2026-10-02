// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13689, 16, 9, 1243, 13883, 13884, 17, 13886, 17055, 17754, 17755, 17756, 17757, 17758, 17760, 17761, 17762, 17763, 17764, 17765, 17766, 17767, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 13883 */;
import installSystrace from "installSystrace" /* 13884 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13689 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78675 = () => {
  let closure_0 = GenerateInvite(f17813[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17813, arg0);
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
const f17803 = () => BackgroundSync(f17803[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78675);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f17804 = () => TTITestAction(f17804[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78675);
}
const Disconnect = "Disconnect";
const f17805 = () => Disconnect(f17805[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78675);
const MarkAsRead = "MarkAsRead";
const f17806 = () => MarkAsRead(f17806[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78675);
const MuteAction = "MuteAction";
const f17807 = () => MuteAction(f17807[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78675);
const ToggleDeafen = "ToggleDeafen";
const f17808 = () => ToggleDeafen(f17808[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78675);
const ToggleSelfMute = "ToggleSelfMute";
const f17809 = () => ToggleSelfMute(f17809[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78675);
const DismissCallAction = "DismissCallAction";
const f17810 = () => DismissCallAction(f17810[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78675);
const DirectReply = "DirectReply";
const f17811 = () => DirectReply(f17811[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78675);
const SelectVoiceChannel = "SelectVoiceChannel";
const f17812 = () => SelectVoiceChannel(f17812[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78675);
const GenerateInvite = "GenerateInvite";
const f17813 = () => GenerateInvite(f17813[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78675);
const result = size.fileFinishedImporting("index.native.tsx");
