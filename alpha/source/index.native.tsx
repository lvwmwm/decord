// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15350, 16, 9, 1242, 15544, 15545, 17, 15547, 19448, 20259, 20260, 20261, 20262, 20263, 20265, 20266, 20267, 20268, 20269, 20270, 20271, 20272, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15544 */;
import installSystrace from "installSystrace" /* 15545 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15350 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78088 = () => {
  let closure_0 = GenerateInvite(f20318[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20318, arg0);
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
const f20308 = () => BackgroundSync(f20308[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78088);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20309 = () => TTITestAction(f20309[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78088);
}
const Disconnect = "Disconnect";
const f20310 = () => Disconnect(f20310[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78088);
const MarkAsRead = "MarkAsRead";
const f20311 = () => MarkAsRead(f20311[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78088);
const MuteAction = "MuteAction";
const f20312 = () => MuteAction(f20312[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78088);
const ToggleDeafen = "ToggleDeafen";
const f20313 = () => ToggleDeafen(f20313[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78088);
const ToggleSelfMute = "ToggleSelfMute";
const f20314 = () => ToggleSelfMute(f20314[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78088);
const DismissCallAction = "DismissCallAction";
const f20315 = () => DismissCallAction(f20315[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78088);
const DirectReply = "DirectReply";
const f20316 = () => DirectReply(f20316[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78088);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20317 = () => SelectVoiceChannel(f20317[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78088);
const GenerateInvite = "GenerateInvite";
const f20318 = () => GenerateInvite(f20318[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78088);
const result = size.fileFinishedImporting("index.native.tsx");
