// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15398, 16, 9, 1257, 15592, 15593, 17, 15595, 18623, 19379, 19380, 19381, 19382, 19383, 19385, 19386, 19387, 19388, 19389, 19390, 19391, 19392, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15592 */;
import installSystrace from "installSystrace" /* 15593 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15398 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f83852 = () => {
  let closure_0 = GenerateInvite(f19438[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19438, arg0);
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
const f19428 = () => BackgroundSync(f19428[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f83852);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19429 = () => TTITestAction(f19429[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f83852);
}
const Disconnect = "Disconnect";
const f19430 = () => Disconnect(f19430[15]);
AppRegistry.registerHeadlessTask("Disconnect", f83852);
const MarkAsRead = "MarkAsRead";
const f19431 = () => MarkAsRead(f19431[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f83852);
const MuteAction = "MuteAction";
const f19432 = () => MuteAction(f19432[17]);
AppRegistry.registerHeadlessTask("MuteAction", f83852);
const ToggleDeafen = "ToggleDeafen";
const f19433 = () => ToggleDeafen(f19433[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f83852);
const ToggleSelfMute = "ToggleSelfMute";
const f19434 = () => ToggleSelfMute(f19434[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f83852);
const DismissCallAction = "DismissCallAction";
const f19435 = () => DismissCallAction(f19435[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f83852);
const DirectReply = "DirectReply";
const f19436 = () => DirectReply(f19436[21]);
AppRegistry.registerHeadlessTask("DirectReply", f83852);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19437 = () => SelectVoiceChannel(f19437[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f83852);
const GenerateInvite = "GenerateInvite";
const f19438 = () => GenerateInvite(f19438[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f83852);
const result = size.fileFinishedImporting("index.native.tsx");
