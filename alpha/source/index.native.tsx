// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16285, 16, 9, 1242, 16479, 16480, 17, 16482, 19669, 20465, 20466, 20467, 20468, 20469, 20471, 20472, 20473, 20474, 20475, 20476, 20477, 20478, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16479 */;
import installSystrace from "installSystrace" /* 16480 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16285 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77920 = () => {
  let closure_0 = GenerateInvite(f20524[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20524, arg0);
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
const f20514 = () => BackgroundSync(f20514[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77920);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20515 = () => TTITestAction(f20515[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77920);
}
const Disconnect = "Disconnect";
const f20516 = () => Disconnect(f20516[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77920);
const MarkAsRead = "MarkAsRead";
const f20517 = () => MarkAsRead(f20517[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77920);
const MuteAction = "MuteAction";
const f20518 = () => MuteAction(f20518[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77920);
const ToggleDeafen = "ToggleDeafen";
const f20519 = () => ToggleDeafen(f20519[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77920);
const ToggleSelfMute = "ToggleSelfMute";
const f20520 = () => ToggleSelfMute(f20520[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77920);
const DismissCallAction = "DismissCallAction";
const f20521 = () => DismissCallAction(f20521[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77920);
const DirectReply = "DirectReply";
const f20522 = () => DirectReply(f20522[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77920);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20523 = () => SelectVoiceChannel(f20523[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77920);
const GenerateInvite = "GenerateInvite";
const f20524 = () => GenerateInvite(f20524[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77920);
const result = size.fileFinishedImporting("index.native.tsx");
