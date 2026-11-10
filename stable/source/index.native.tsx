// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16022, 16, 9, 1242, 16216, 16217, 17, 16219, 19353, 20146, 20147, 20148, 20149, 20150, 20152, 20153, 20154, 20155, 20156, 20157, 20158, 20159, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16216 */;
import installSystrace from "installSystrace" /* 16217 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16022 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77119 = () => {
  let closure_0 = GenerateInvite(f20205[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20205, arg0);
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
const f20195 = () => BackgroundSync(f20195[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77119);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20196 = () => TTITestAction(f20196[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77119);
}
const Disconnect = "Disconnect";
const f20197 = () => Disconnect(f20197[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77119);
const MarkAsRead = "MarkAsRead";
const f20198 = () => MarkAsRead(f20198[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77119);
const MuteAction = "MuteAction";
const f20199 = () => MuteAction(f20199[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77119);
const ToggleDeafen = "ToggleDeafen";
const f20200 = () => ToggleDeafen(f20200[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77119);
const ToggleSelfMute = "ToggleSelfMute";
const f20201 = () => ToggleSelfMute(f20201[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77119);
const DismissCallAction = "DismissCallAction";
const f20202 = () => DismissCallAction(f20202[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77119);
const DirectReply = "DirectReply";
const f20203 = () => DirectReply(f20203[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77119);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20204 = () => SelectVoiceChannel(f20204[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77119);
const GenerateInvite = "GenerateInvite";
const f20205 = () => GenerateInvite(f20205[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77119);
const result = size.fileFinishedImporting("index.native.tsx");
