// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16681, 16, 9, 1242, 16875, 16876, 17, 16878, 20181, 20975, 20976, 20977, 20978, 20979, 20981, 20982, 20983, 20984, 20985, 20986, 20987, 20988, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16875 */;
import installSystrace from "installSystrace" /* 16876 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16681 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f80536 = () => {
  let closure_0 = GenerateInvite(f21034[12]).default;
  return (arg0) => closure_0(GenerateInvite, f21034, arg0);
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
const f21024 = () => BackgroundSync(f21024[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80536);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f21025 = () => TTITestAction(f21025[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80536);
}
const Disconnect = "Disconnect";
const f21026 = () => Disconnect(f21026[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80536);
const MarkAsRead = "MarkAsRead";
const f21027 = () => MarkAsRead(f21027[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80536);
const MuteAction = "MuteAction";
const f21028 = () => MuteAction(f21028[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80536);
const ToggleDeafen = "ToggleDeafen";
const f21029 = () => ToggleDeafen(f21029[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80536);
const ToggleSelfMute = "ToggleSelfMute";
const f21030 = () => ToggleSelfMute(f21030[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80536);
const DismissCallAction = "DismissCallAction";
const f21031 = () => DismissCallAction(f21031[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80536);
const DirectReply = "DirectReply";
const f21032 = () => DirectReply(f21032[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80536);
const SelectVoiceChannel = "SelectVoiceChannel";
const f21033 = () => SelectVoiceChannel(f21033[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80536);
const GenerateInvite = "GenerateInvite";
const f21034 = () => GenerateInvite(f21034[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80536);
const result = size.fileFinishedImporting("index.native.tsx");
