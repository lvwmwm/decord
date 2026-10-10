// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14427, 16, 9, 1255, 14621, 14622, 17, 14624, 17949, 18691, 18692, 18693, 18694, 18695, 18697, 18698, 18699, 18700, 18701, 18702, 18703, 18704, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14621 */;
import installSystrace from "installSystrace" /* 14622 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14427 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f81161 = () => {
  let closure_0 = GenerateInvite(f18750[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18750, arg0);
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
const f18740 = () => BackgroundSync(f18740[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f81161);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18741 = () => TTITestAction(f18741[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f81161);
}
const Disconnect = "Disconnect";
const f18742 = () => Disconnect(f18742[15]);
AppRegistry.registerHeadlessTask("Disconnect", f81161);
const MarkAsRead = "MarkAsRead";
const f18743 = () => MarkAsRead(f18743[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f81161);
const MuteAction = "MuteAction";
const f18744 = () => MuteAction(f18744[17]);
AppRegistry.registerHeadlessTask("MuteAction", f81161);
const ToggleDeafen = "ToggleDeafen";
const f18745 = () => ToggleDeafen(f18745[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f81161);
const ToggleSelfMute = "ToggleSelfMute";
const f18746 = () => ToggleSelfMute(f18746[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f81161);
const DismissCallAction = "DismissCallAction";
const f18747 = () => DismissCallAction(f18747[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f81161);
const DirectReply = "DirectReply";
const f18748 = () => DirectReply(f18748[21]);
AppRegistry.registerHeadlessTask("DirectReply", f81161);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18749 = () => SelectVoiceChannel(f18749[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f81161);
const GenerateInvite = "GenerateInvite";
const f18750 = () => GenerateInvite(f18750[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f81161);
const result = size.fileFinishedImporting("index.native.tsx");
