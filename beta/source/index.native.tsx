// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15445, 16, 9, 1241, 15639, 15640, 17, 15642, 19406, 20215, 20216, 20217, 20218, 20219, 20221, 20222, 20223, 20224, 20225, 20226, 20227, 20228, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15639 */;
import installSystrace from "installSystrace" /* 15640 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15445 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77104 = () => {
  let closure_0 = GenerateInvite(f20274[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20274, arg0);
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
const f20264 = () => BackgroundSync(f20264[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77104);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20265 = () => TTITestAction(f20265[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77104);
}
const Disconnect = "Disconnect";
const f20266 = () => Disconnect(f20266[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77104);
const MarkAsRead = "MarkAsRead";
const f20267 = () => MarkAsRead(f20267[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77104);
const MuteAction = "MuteAction";
const f20268 = () => MuteAction(f20268[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77104);
const ToggleDeafen = "ToggleDeafen";
const f20269 = () => ToggleDeafen(f20269[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77104);
const ToggleSelfMute = "ToggleSelfMute";
const f20270 = () => ToggleSelfMute(f20270[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77104);
const DismissCallAction = "DismissCallAction";
const f20271 = () => DismissCallAction(f20271[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77104);
const DirectReply = "DirectReply";
const f20272 = () => DirectReply(f20272[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77104);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20273 = () => SelectVoiceChannel(f20273[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77104);
const GenerateInvite = "GenerateInvite";
const f20274 = () => GenerateInvite(f20274[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77104);
const result = size.fileFinishedImporting("index.native.tsx");
