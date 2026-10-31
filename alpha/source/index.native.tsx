// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16023, 16, 9, 1242, 16217, 16218, 17, 16220, 19351, 20144, 20145, 20146, 20147, 20148, 20150, 20151, 20152, 20153, 20154, 20155, 20156, 20157, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16217 */;
import installSystrace from "installSystrace" /* 16218 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16023 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77090 = () => {
  let closure_0 = GenerateInvite(f20203[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20203, arg0);
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
const f20193 = () => BackgroundSync(f20193[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77090);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20194 = () => TTITestAction(f20194[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77090);
}
const Disconnect = "Disconnect";
const f20195 = () => Disconnect(f20195[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77090);
const MarkAsRead = "MarkAsRead";
const f20196 = () => MarkAsRead(f20196[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77090);
const MuteAction = "MuteAction";
const f20197 = () => MuteAction(f20197[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77090);
const ToggleDeafen = "ToggleDeafen";
const f20198 = () => ToggleDeafen(f20198[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77090);
const ToggleSelfMute = "ToggleSelfMute";
const f20199 = () => ToggleSelfMute(f20199[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77090);
const DismissCallAction = "DismissCallAction";
const f20200 = () => DismissCallAction(f20200[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77090);
const DirectReply = "DirectReply";
const f20201 = () => DirectReply(f20201[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77090);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20202 = () => SelectVoiceChannel(f20202[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77090);
const GenerateInvite = "GenerateInvite";
const f20203 = () => GenerateInvite(f20203[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77090);
const result = size.fileFinishedImporting("index.native.tsx");
