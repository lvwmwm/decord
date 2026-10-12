// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14450, 16, 9, 1255, 14644, 14645, 17, 14647, 18006, 18749, 18750, 18751, 18752, 18753, 18755, 18756, 18757, 18758, 18759, 18760, 18761, 18762, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14644 */;
import installSystrace from "installSystrace" /* 14645 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14450 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f81380 = () => {
  let closure_0 = GenerateInvite(f18808[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18808, arg0);
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
const f18798 = () => BackgroundSync(f18798[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f81380);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18799 = () => TTITestAction(f18799[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f81380);
}
const Disconnect = "Disconnect";
const f18800 = () => Disconnect(f18800[15]);
AppRegistry.registerHeadlessTask("Disconnect", f81380);
const MarkAsRead = "MarkAsRead";
const f18801 = () => MarkAsRead(f18801[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f81380);
const MuteAction = "MuteAction";
const f18802 = () => MuteAction(f18802[17]);
AppRegistry.registerHeadlessTask("MuteAction", f81380);
const ToggleDeafen = "ToggleDeafen";
const f18803 = () => ToggleDeafen(f18803[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f81380);
const ToggleSelfMute = "ToggleSelfMute";
const f18804 = () => ToggleSelfMute(f18804[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f81380);
const DismissCallAction = "DismissCallAction";
const f18805 = () => DismissCallAction(f18805[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f81380);
const DirectReply = "DirectReply";
const f18806 = () => DirectReply(f18806[21]);
AppRegistry.registerHeadlessTask("DirectReply", f81380);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18807 = () => SelectVoiceChannel(f18807[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f81380);
const GenerateInvite = "GenerateInvite";
const f18808 = () => GenerateInvite(f18808[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f81380);
const result = size.fileFinishedImporting("index.native.tsx");
