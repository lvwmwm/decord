// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15314, 16, 9, 1241, 15508, 15509, 17, 15511, 19268, 20079, 20080, 20081, 20082, 20083, 20085, 20086, 20087, 20088, 20089, 20090, 20091, 20092, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15508 */;
import installSystrace from "installSystrace" /* 15509 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15314 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f76830 = () => {
  let closure_0 = GenerateInvite(f20138[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20138, arg0);
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
const f20128 = () => BackgroundSync(f20128[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f76830);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20129 = () => TTITestAction(f20129[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f76830);
}
const Disconnect = "Disconnect";
const f20130 = () => Disconnect(f20130[15]);
AppRegistry.registerHeadlessTask("Disconnect", f76830);
const MarkAsRead = "MarkAsRead";
const f20131 = () => MarkAsRead(f20131[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f76830);
const MuteAction = "MuteAction";
const f20132 = () => MuteAction(f20132[17]);
AppRegistry.registerHeadlessTask("MuteAction", f76830);
const ToggleDeafen = "ToggleDeafen";
const f20133 = () => ToggleDeafen(f20133[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f76830);
const ToggleSelfMute = "ToggleSelfMute";
const f20134 = () => ToggleSelfMute(f20134[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f76830);
const DismissCallAction = "DismissCallAction";
const f20135 = () => DismissCallAction(f20135[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f76830);
const DirectReply = "DirectReply";
const f20136 = () => DirectReply(f20136[21]);
AppRegistry.registerHeadlessTask("DirectReply", f76830);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20137 = () => SelectVoiceChannel(f20137[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f76830);
const GenerateInvite = "GenerateInvite";
const f20138 = () => GenerateInvite(f20138[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f76830);
const result = size.fileFinishedImporting("index.native.tsx");
