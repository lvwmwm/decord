// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14277, 16, 9, 1254, 14471, 14472, 17, 14474, 17725, 18453, 18454, 18455, 18456, 18457, 18459, 18460, 18461, 18462, 18463, 18464, 18465, 18466, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14471 */;
import installSystrace from "installSystrace" /* 14472 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14277 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f80708 = () => {
  let closure_0 = GenerateInvite(f18512[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18512, arg0);
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
const f18502 = () => BackgroundSync(f18502[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80708);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18503 = () => TTITestAction(f18503[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80708);
}
const Disconnect = "Disconnect";
const f18504 = () => Disconnect(f18504[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80708);
const MarkAsRead = "MarkAsRead";
const f18505 = () => MarkAsRead(f18505[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80708);
const MuteAction = "MuteAction";
const f18506 = () => MuteAction(f18506[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80708);
const ToggleDeafen = "ToggleDeafen";
const f18507 = () => ToggleDeafen(f18507[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80708);
const ToggleSelfMute = "ToggleSelfMute";
const f18508 = () => ToggleSelfMute(f18508[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80708);
const DismissCallAction = "DismissCallAction";
const f18509 = () => DismissCallAction(f18509[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80708);
const DirectReply = "DirectReply";
const f18510 = () => DirectReply(f18510[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80708);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18511 = () => SelectVoiceChannel(f18511[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80708);
const GenerateInvite = "GenerateInvite";
const f18512 = () => GenerateInvite(f18512[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80708);
const result = size.fileFinishedImporting("index.native.tsx");
