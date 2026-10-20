// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15269, 16, 9, 1257, 15463, 15464, 17, 15466, 18454, 19214, 19215, 19216, 19217, 19218, 19220, 19221, 19222, 19223, 19224, 19225, 19226, 19227, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15463 */;
import installSystrace from "installSystrace" /* 15464 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15269 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f83057 = () => {
  let closure_0 = GenerateInvite(f19273[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19273, arg0);
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
const f19263 = () => BackgroundSync(f19263[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f83057);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19264 = () => TTITestAction(f19264[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f83057);
}
const Disconnect = "Disconnect";
const f19265 = () => Disconnect(f19265[15]);
AppRegistry.registerHeadlessTask("Disconnect", f83057);
const MarkAsRead = "MarkAsRead";
const f19266 = () => MarkAsRead(f19266[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f83057);
const MuteAction = "MuteAction";
const f19267 = () => MuteAction(f19267[17]);
AppRegistry.registerHeadlessTask("MuteAction", f83057);
const ToggleDeafen = "ToggleDeafen";
const f19268 = () => ToggleDeafen(f19268[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f83057);
const ToggleSelfMute = "ToggleSelfMute";
const f19269 = () => ToggleSelfMute(f19269[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f83057);
const DismissCallAction = "DismissCallAction";
const f19270 = () => DismissCallAction(f19270[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f83057);
const DirectReply = "DirectReply";
const f19271 = () => DirectReply(f19271[21]);
AppRegistry.registerHeadlessTask("DirectReply", f83057);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19272 = () => SelectVoiceChannel(f19272[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f83057);
const GenerateInvite = "GenerateInvite";
const f19273 = () => GenerateInvite(f19273[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f83057);
const result = size.fileFinishedImporting("index.native.tsx");
