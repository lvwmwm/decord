// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14771, 16, 9, 1255, 14965, 14966, 17, 14968, 18010, 18753, 18754, 18755, 18756, 18757, 18759, 18760, 18761, 18762, 18763, 18764, 18765, 18766, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14965 */;
import installSystrace from "installSystrace" /* 14966 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14771 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f81416 = () => {
  let closure_0 = GenerateInvite(f18812[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18812, arg0);
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
const f18802 = () => BackgroundSync(f18802[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f81416);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18803 = () => TTITestAction(f18803[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f81416);
}
const Disconnect = "Disconnect";
const f18804 = () => Disconnect(f18804[15]);
AppRegistry.registerHeadlessTask("Disconnect", f81416);
const MarkAsRead = "MarkAsRead";
const f18805 = () => MarkAsRead(f18805[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f81416);
const MuteAction = "MuteAction";
const f18806 = () => MuteAction(f18806[17]);
AppRegistry.registerHeadlessTask("MuteAction", f81416);
const ToggleDeafen = "ToggleDeafen";
const f18807 = () => ToggleDeafen(f18807[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f81416);
const ToggleSelfMute = "ToggleSelfMute";
const f18808 = () => ToggleSelfMute(f18808[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f81416);
const DismissCallAction = "DismissCallAction";
const f18809 = () => DismissCallAction(f18809[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f81416);
const DirectReply = "DirectReply";
const f18810 = () => DirectReply(f18810[21]);
AppRegistry.registerHeadlessTask("DirectReply", f81416);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18811 = () => SelectVoiceChannel(f18811[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f81416);
const GenerateInvite = "GenerateInvite";
const f18812 = () => GenerateInvite(f18812[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f81416);
const result = size.fileFinishedImporting("index.native.tsx");
