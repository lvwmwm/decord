// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16528, 16, 9, 1242, 16722, 16723, 17, 16725, 19978, 20777, 20778, 20779, 20780, 20781, 20783, 20784, 20785, 20786, 20787, 20788, 20789, 20790, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16722 */;
import installSystrace from "installSystrace" /* 16723 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16528 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f79270 = () => {
  let closure_0 = GenerateInvite(f20836[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20836, arg0);
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
const f20826 = () => BackgroundSync(f20826[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f79270);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20827 = () => TTITestAction(f20827[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f79270);
}
const Disconnect = "Disconnect";
const f20828 = () => Disconnect(f20828[15]);
AppRegistry.registerHeadlessTask("Disconnect", f79270);
const MarkAsRead = "MarkAsRead";
const f20829 = () => MarkAsRead(f20829[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f79270);
const MuteAction = "MuteAction";
const f20830 = () => MuteAction(f20830[17]);
AppRegistry.registerHeadlessTask("MuteAction", f79270);
const ToggleDeafen = "ToggleDeafen";
const f20831 = () => ToggleDeafen(f20831[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f79270);
const ToggleSelfMute = "ToggleSelfMute";
const f20832 = () => ToggleSelfMute(f20832[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f79270);
const DismissCallAction = "DismissCallAction";
const f20833 = () => DismissCallAction(f20833[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f79270);
const DirectReply = "DirectReply";
const f20834 = () => DirectReply(f20834[21]);
AppRegistry.registerHeadlessTask("DirectReply", f79270);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20835 = () => SelectVoiceChannel(f20835[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f79270);
const GenerateInvite = "GenerateInvite";
const f20836 = () => GenerateInvite(f20836[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f79270);
const result = size.fileFinishedImporting("index.native.tsx");
