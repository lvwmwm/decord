// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16369, 16, 9, 1242, 16563, 16564, 17, 16566, 19795, 20592, 20593, 20594, 20595, 20596, 20598, 20599, 20600, 20601, 20602, 20603, 20604, 20605, 2]

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

const f78451 = () => {
  let closure_0 = GenerateInvite(f20651[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20651, arg0);
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
const f20641 = () => BackgroundSync(f20641[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78451);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20642 = () => TTITestAction(f20642[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78451);
}
const Disconnect = "Disconnect";
const f20643 = () => Disconnect(f20643[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78451);
const MarkAsRead = "MarkAsRead";
const f20644 = () => MarkAsRead(f20644[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78451);
const MuteAction = "MuteAction";
const f20645 = () => MuteAction(f20645[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78451);
const ToggleDeafen = "ToggleDeafen";
const f20646 = () => ToggleDeafen(f20646[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78451);
const ToggleSelfMute = "ToggleSelfMute";
const f20647 = () => ToggleSelfMute(f20647[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78451);
const DismissCallAction = "DismissCallAction";
const f20648 = () => DismissCallAction(f20648[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78451);
const DirectReply = "DirectReply";
const f20649 = () => DirectReply(f20649[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78451);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20650 = () => SelectVoiceChannel(f20650[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78451);
const GenerateInvite = "GenerateInvite";
const f20651 = () => GenerateInvite(f20651[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78451);
const result = size.fileFinishedImporting("index.native.tsx");
