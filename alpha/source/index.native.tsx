// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15439, 16, 9, 1257, 15633, 15634, 17, 15636, 18699, 19483, 19484, 19485, 19486, 19487, 19489, 19490, 19491, 19492, 19493, 19494, 19495, 19496, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15633 */;
import installSystrace from "installSystrace" /* 15634 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15439 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f84252 = () => {
  let closure_0 = GenerateInvite(f19542[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19542, arg0);
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
const f19532 = () => BackgroundSync(f19532[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84252);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19533 = () => TTITestAction(f19533[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84252);
}
const Disconnect = "Disconnect";
const f19534 = () => Disconnect(f19534[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84252);
const MarkAsRead = "MarkAsRead";
const f19535 = () => MarkAsRead(f19535[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84252);
const MuteAction = "MuteAction";
const f19536 = () => MuteAction(f19536[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84252);
const ToggleDeafen = "ToggleDeafen";
const f19537 = () => ToggleDeafen(f19537[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84252);
const ToggleSelfMute = "ToggleSelfMute";
const f19538 = () => ToggleSelfMute(f19538[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84252);
const DismissCallAction = "DismissCallAction";
const f19539 = () => DismissCallAction(f19539[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84252);
const DirectReply = "DirectReply";
const f19540 = () => DirectReply(f19540[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84252);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19541 = () => SelectVoiceChannel(f19541[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84252);
const GenerateInvite = "GenerateInvite";
const f19542 = () => GenerateInvite(f19542[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84252);
const result = size.fileFinishedImporting("index.native.tsx");
