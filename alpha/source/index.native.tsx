// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16170, 16, 9, 1242, 16364, 16365, 17, 16367, 19516, 20330, 20331, 20332, 20333, 20334, 20336, 20337, 20338, 20339, 20340, 20341, 20342, 20343, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16364 */;
import installSystrace from "installSystrace" /* 16365 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16170 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77286 = () => {
  let closure_0 = GenerateInvite(f20389[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20389, arg0);
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
const f20379 = () => BackgroundSync(f20379[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77286);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20380 = () => TTITestAction(f20380[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77286);
}
const Disconnect = "Disconnect";
const f20381 = () => Disconnect(f20381[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77286);
const MarkAsRead = "MarkAsRead";
const f20382 = () => MarkAsRead(f20382[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77286);
const MuteAction = "MuteAction";
const f20383 = () => MuteAction(f20383[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77286);
const ToggleDeafen = "ToggleDeafen";
const f20384 = () => ToggleDeafen(f20384[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77286);
const ToggleSelfMute = "ToggleSelfMute";
const f20385 = () => ToggleSelfMute(f20385[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77286);
const DismissCallAction = "DismissCallAction";
const f20386 = () => DismissCallAction(f20386[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77286);
const DirectReply = "DirectReply";
const f20387 = () => DirectReply(f20387[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77286);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20388 = () => SelectVoiceChannel(f20388[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77286);
const GenerateInvite = "GenerateInvite";
const f20389 = () => GenerateInvite(f20389[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77286);
const result = size.fileFinishedImporting("index.native.tsx");
