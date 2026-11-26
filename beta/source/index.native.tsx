// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15449, 16, 9, 1241, 15643, 15644, 17, 15646, 19410, 20219, 20220, 20221, 20222, 20223, 20225, 20226, 20227, 20228, 20229, 20230, 20231, 20232, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15643 */;
import installSystrace from "installSystrace" /* 15644 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15449 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77111 = () => {
  let closure_0 = GenerateInvite(f20278[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20278, arg0);
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
const f20268 = () => BackgroundSync(f20268[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77111);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20269 = () => TTITestAction(f20269[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77111);
}
const Disconnect = "Disconnect";
const f20270 = () => Disconnect(f20270[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77111);
const MarkAsRead = "MarkAsRead";
const f20271 = () => MarkAsRead(f20271[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77111);
const MuteAction = "MuteAction";
const f20272 = () => MuteAction(f20272[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77111);
const ToggleDeafen = "ToggleDeafen";
const f20273 = () => ToggleDeafen(f20273[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77111);
const ToggleSelfMute = "ToggleSelfMute";
const f20274 = () => ToggleSelfMute(f20274[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77111);
const DismissCallAction = "DismissCallAction";
const f20275 = () => DismissCallAction(f20275[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77111);
const DirectReply = "DirectReply";
const f20276 = () => DirectReply(f20276[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77111);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20277 = () => SelectVoiceChannel(f20277[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77111);
const GenerateInvite = "GenerateInvite";
const f20278 = () => GenerateInvite(f20278[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77111);
const result = size.fileFinishedImporting("index.native.tsx");
