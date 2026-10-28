// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15478, 16, 9, 1257, 15672, 15673, 17, 15675, 18741, 19525, 19526, 19527, 19528, 19529, 19531, 19532, 19533, 19534, 19535, 19536, 19537, 19538, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15672 */;
import installSystrace from "installSystrace" /* 15673 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15478 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f84371 = () => {
  let closure_0 = GenerateInvite(f19584[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19584, arg0);
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
const f19574 = () => BackgroundSync(f19574[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84371);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19575 = () => TTITestAction(f19575[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84371);
}
const Disconnect = "Disconnect";
const f19576 = () => Disconnect(f19576[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84371);
const MarkAsRead = "MarkAsRead";
const f19577 = () => MarkAsRead(f19577[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84371);
const MuteAction = "MuteAction";
const f19578 = () => MuteAction(f19578[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84371);
const ToggleDeafen = "ToggleDeafen";
const f19579 = () => ToggleDeafen(f19579[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84371);
const ToggleSelfMute = "ToggleSelfMute";
const f19580 = () => ToggleSelfMute(f19580[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84371);
const DismissCallAction = "DismissCallAction";
const f19581 = () => DismissCallAction(f19581[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84371);
const DirectReply = "DirectReply";
const f19582 = () => DirectReply(f19582[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84371);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19583 = () => SelectVoiceChannel(f19583[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84371);
const GenerateInvite = "GenerateInvite";
const f19584 = () => GenerateInvite(f19584[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84371);
const result = size.fileFinishedImporting("index.native.tsx");
