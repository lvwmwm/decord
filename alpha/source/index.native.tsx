// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15982, 16, 9, 1243, 16176, 16177, 17, 16179, 19294, 20083, 20084, 20085, 20086, 20087, 20089, 20090, 20091, 20092, 20093, 20094, 20095, 20096, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16176 */;
import installSystrace from "installSystrace" /* 16177 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15982 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f76880 = () => {
  let closure_0 = GenerateInvite(f20142[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20142, arg0);
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
const f20132 = () => BackgroundSync(f20132[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f76880);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20133 = () => TTITestAction(f20133[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f76880);
}
const Disconnect = "Disconnect";
const f20134 = () => Disconnect(f20134[15]);
AppRegistry.registerHeadlessTask("Disconnect", f76880);
const MarkAsRead = "MarkAsRead";
const f20135 = () => MarkAsRead(f20135[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f76880);
const MuteAction = "MuteAction";
const f20136 = () => MuteAction(f20136[17]);
AppRegistry.registerHeadlessTask("MuteAction", f76880);
const ToggleDeafen = "ToggleDeafen";
const f20137 = () => ToggleDeafen(f20137[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f76880);
const ToggleSelfMute = "ToggleSelfMute";
const f20138 = () => ToggleSelfMute(f20138[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f76880);
const DismissCallAction = "DismissCallAction";
const f20139 = () => DismissCallAction(f20139[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f76880);
const DirectReply = "DirectReply";
const f20140 = () => DirectReply(f20140[21]);
AppRegistry.registerHeadlessTask("DirectReply", f76880);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20141 = () => SelectVoiceChannel(f20141[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f76880);
const GenerateInvite = "GenerateInvite";
const f20142 = () => GenerateInvite(f20142[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f76880);
const result = size.fileFinishedImporting("index.native.tsx");
