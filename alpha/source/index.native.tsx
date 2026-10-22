// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15385, 16, 9, 1257, 15579, 15580, 17, 15582, 18601, 19356, 19357, 19358, 19359, 19360, 19362, 19363, 19364, 19365, 19366, 19367, 19368, 19369, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15579 */;
import installSystrace from "installSystrace" /* 15580 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15385 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f83754 = () => {
  let closure_0 = GenerateInvite(f19415[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19415, arg0);
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
const f19405 = () => BackgroundSync(f19405[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f83754);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19406 = () => TTITestAction(f19406[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f83754);
}
const Disconnect = "Disconnect";
const f19407 = () => Disconnect(f19407[15]);
AppRegistry.registerHeadlessTask("Disconnect", f83754);
const MarkAsRead = "MarkAsRead";
const f19408 = () => MarkAsRead(f19408[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f83754);
const MuteAction = "MuteAction";
const f19409 = () => MuteAction(f19409[17]);
AppRegistry.registerHeadlessTask("MuteAction", f83754);
const ToggleDeafen = "ToggleDeafen";
const f19410 = () => ToggleDeafen(f19410[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f83754);
const ToggleSelfMute = "ToggleSelfMute";
const f19411 = () => ToggleSelfMute(f19411[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f83754);
const DismissCallAction = "DismissCallAction";
const f19412 = () => DismissCallAction(f19412[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f83754);
const DirectReply = "DirectReply";
const f19413 = () => DirectReply(f19413[21]);
AppRegistry.registerHeadlessTask("DirectReply", f83754);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19414 = () => SelectVoiceChannel(f19414[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f83754);
const GenerateInvite = "GenerateInvite";
const f19415 = () => GenerateInvite(f19415[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f83754);
const result = size.fileFinishedImporting("index.native.tsx");
