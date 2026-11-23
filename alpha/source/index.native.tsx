// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15437, 16, 9, 1241, 15631, 15632, 17, 15634, 19397, 20206, 20207, 20208, 20209, 20210, 20212, 20213, 20214, 20215, 20216, 20217, 20218, 20219, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15631 */;
import installSystrace from "installSystrace" /* 15632 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15437 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77079 = () => {
  let closure_0 = GenerateInvite(f20265[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20265, arg0);
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
const f20255 = () => BackgroundSync(f20255[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77079);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20256 = () => TTITestAction(f20256[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77079);
}
const Disconnect = "Disconnect";
const f20257 = () => Disconnect(f20257[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77079);
const MarkAsRead = "MarkAsRead";
const f20258 = () => MarkAsRead(f20258[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77079);
const MuteAction = "MuteAction";
const f20259 = () => MuteAction(f20259[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77079);
const ToggleDeafen = "ToggleDeafen";
const f20260 = () => ToggleDeafen(f20260[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77079);
const ToggleSelfMute = "ToggleSelfMute";
const f20261 = () => ToggleSelfMute(f20261[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77079);
const DismissCallAction = "DismissCallAction";
const f20262 = () => DismissCallAction(f20262[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77079);
const DirectReply = "DirectReply";
const f20263 = () => DirectReply(f20263[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77079);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20264 = () => SelectVoiceChannel(f20264[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77079);
const GenerateInvite = "GenerateInvite";
const f20265 = () => GenerateInvite(f20265[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77079);
const result = size.fileFinishedImporting("index.native.tsx");
