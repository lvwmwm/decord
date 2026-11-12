// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16523, 16, 9, 1242, 16717, 16718, 17, 16720, 19973, 20772, 20773, 20774, 20775, 20776, 20778, 20779, 20780, 20781, 20782, 20783, 20784, 20785, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16717 */;
import installSystrace from "installSystrace" /* 16718 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16523 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f79281 = () => {
  let closure_0 = GenerateInvite(f20831[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20831, arg0);
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
const f20821 = () => BackgroundSync(f20821[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f79281);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20822 = () => TTITestAction(f20822[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f79281);
}
const Disconnect = "Disconnect";
const f20823 = () => Disconnect(f20823[15]);
AppRegistry.registerHeadlessTask("Disconnect", f79281);
const MarkAsRead = "MarkAsRead";
const f20824 = () => MarkAsRead(f20824[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f79281);
const MuteAction = "MuteAction";
const f20825 = () => MuteAction(f20825[17]);
AppRegistry.registerHeadlessTask("MuteAction", f79281);
const ToggleDeafen = "ToggleDeafen";
const f20826 = () => ToggleDeafen(f20826[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f79281);
const ToggleSelfMute = "ToggleSelfMute";
const f20827 = () => ToggleSelfMute(f20827[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f79281);
const DismissCallAction = "DismissCallAction";
const f20828 = () => DismissCallAction(f20828[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f79281);
const DirectReply = "DirectReply";
const f20829 = () => DirectReply(f20829[21]);
AppRegistry.registerHeadlessTask("DirectReply", f79281);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20830 = () => SelectVoiceChannel(f20830[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f79281);
const GenerateInvite = "GenerateInvite";
const f20831 = () => GenerateInvite(f20831[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f79281);
const result = size.fileFinishedImporting("index.native.tsx");
