// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13687, 16, 9, 1231, 13881, 13882, 17, 13884, 17053, 17752, 17753, 17754, 17755, 17756, 17758, 17759, 17760, 17761, 17762, 17763, 17764, 17765, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 13881 */;
import installSystrace from "installSystrace" /* 13882 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13687 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f69809 = () => {
  let closure_0 = GenerateInvite(f17811[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17811, arg0);
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
const f17801 = () => BackgroundSync(f17801[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f69809);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f17802 = () => TTITestAction(f17802[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f69809);
}
const Disconnect = "Disconnect";
const f17803 = () => Disconnect(f17803[15]);
AppRegistry.registerHeadlessTask("Disconnect", f69809);
const MarkAsRead = "MarkAsRead";
const f17804 = () => MarkAsRead(f17804[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f69809);
const MuteAction = "MuteAction";
const f17805 = () => MuteAction(f17805[17]);
AppRegistry.registerHeadlessTask("MuteAction", f69809);
const ToggleDeafen = "ToggleDeafen";
const f17806 = () => ToggleDeafen(f17806[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f69809);
const ToggleSelfMute = "ToggleSelfMute";
const f17807 = () => ToggleSelfMute(f17807[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f69809);
const DismissCallAction = "DismissCallAction";
const f17808 = () => DismissCallAction(f17808[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f69809);
const DirectReply = "DirectReply";
const f17809 = () => DirectReply(f17809[21]);
AppRegistry.registerHeadlessTask("DirectReply", f69809);
const SelectVoiceChannel = "SelectVoiceChannel";
const f17810 = () => SelectVoiceChannel(f17810[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f69809);
const GenerateInvite = "GenerateInvite";
const f17811 = () => GenerateInvite(f17811[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f69809);
const result = size.fileFinishedImporting("index.native.tsx");
