// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16369, 16, 9, 1242, 16563, 16564, 17, 16566, 19798, 20595, 20596, 20597, 20598, 20599, 20601, 20602, 20603, 20604, 20605, 20606, 20607, 20608, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16563 */;
import installSystrace from "installSystrace" /* 16564 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16369 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78467 = () => {
  let closure_0 = GenerateInvite(f20654[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20654, arg0);
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
const f20644 = () => BackgroundSync(f20644[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78467);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20645 = () => TTITestAction(f20645[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78467);
}
const Disconnect = "Disconnect";
const f20646 = () => Disconnect(f20646[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78467);
const MarkAsRead = "MarkAsRead";
const f20647 = () => MarkAsRead(f20647[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78467);
const MuteAction = "MuteAction";
const f20648 = () => MuteAction(f20648[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78467);
const ToggleDeafen = "ToggleDeafen";
const f20649 = () => ToggleDeafen(f20649[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78467);
const ToggleSelfMute = "ToggleSelfMute";
const f20650 = () => ToggleSelfMute(f20650[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78467);
const DismissCallAction = "DismissCallAction";
const f20651 = () => DismissCallAction(f20651[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78467);
const DirectReply = "DirectReply";
const f20652 = () => DirectReply(f20652[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78467);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20653 = () => SelectVoiceChannel(f20653[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78467);
const GenerateInvite = "GenerateInvite";
const f20654 = () => GenerateInvite(f20654[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78467);
const result = size.fileFinishedImporting("index.native.tsx");
