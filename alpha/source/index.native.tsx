// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15364, 16, 9, 1242, 15558, 15559, 17, 15561, 19452, 20248, 20249, 20250, 20251, 20252, 20254, 20255, 20256, 20257, 20258, 20259, 20260, 20261, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15558 */;
import installSystrace from "installSystrace" /* 15559 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15364 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78113 = () => {
  let closure_0 = GenerateInvite(f20307[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20307, arg0);
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
const f20297 = () => BackgroundSync(f20297[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78113);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20298 = () => TTITestAction(f20298[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78113);
}
const Disconnect = "Disconnect";
const f20299 = () => Disconnect(f20299[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78113);
const MarkAsRead = "MarkAsRead";
const f20300 = () => MarkAsRead(f20300[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78113);
const MuteAction = "MuteAction";
const f20301 = () => MuteAction(f20301[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78113);
const ToggleDeafen = "ToggleDeafen";
const f20302 = () => ToggleDeafen(f20302[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78113);
const ToggleSelfMute = "ToggleSelfMute";
const f20303 = () => ToggleSelfMute(f20303[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78113);
const DismissCallAction = "DismissCallAction";
const f20304 = () => DismissCallAction(f20304[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78113);
const DirectReply = "DirectReply";
const f20305 = () => DirectReply(f20305[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78113);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20306 = () => SelectVoiceChannel(f20306[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78113);
const GenerateInvite = "GenerateInvite";
const f20307 = () => GenerateInvite(f20307[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78113);
const result = size.fileFinishedImporting("index.native.tsx");
