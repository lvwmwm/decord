// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15140, 16, 9, 1257, 15334, 15335, 17, 15337, 18328, 19072, 19073, 19074, 19075, 19076, 19078, 19079, 19080, 19081, 19082, 19083, 19084, 19085, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15334 */;
import installSystrace from "installSystrace" /* 15335 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15140 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f82217 = () => {
  let closure_0 = GenerateInvite(f19131[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19131, arg0);
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
const f19121 = () => BackgroundSync(f19121[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f82217);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19122 = () => TTITestAction(f19122[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f82217);
}
const Disconnect = "Disconnect";
const f19123 = () => Disconnect(f19123[15]);
AppRegistry.registerHeadlessTask("Disconnect", f82217);
const MarkAsRead = "MarkAsRead";
const f19124 = () => MarkAsRead(f19124[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f82217);
const MuteAction = "MuteAction";
const f19125 = () => MuteAction(f19125[17]);
AppRegistry.registerHeadlessTask("MuteAction", f82217);
const ToggleDeafen = "ToggleDeafen";
const f19126 = () => ToggleDeafen(f19126[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f82217);
const ToggleSelfMute = "ToggleSelfMute";
const f19127 = () => ToggleSelfMute(f19127[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f82217);
const DismissCallAction = "DismissCallAction";
const f19128 = () => DismissCallAction(f19128[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f82217);
const DirectReply = "DirectReply";
const f19129 = () => DirectReply(f19129[21]);
AppRegistry.registerHeadlessTask("DirectReply", f82217);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19130 = () => SelectVoiceChannel(f19130[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f82217);
const GenerateInvite = "GenerateInvite";
const f19131 = () => GenerateInvite(f19131[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f82217);
const result = size.fileFinishedImporting("index.native.tsx");
