// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15638, 16, 9, 1242, 15832, 15833, 17, 15835, 19629, 20476, 20477, 20478, 20479, 20480, 20482, 20483, 20484, 20485, 20486, 20487, 20488, 20489, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15832 */;
import installSystrace from "installSystrace" /* 15833 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15638 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77912 = () => {
  let closure_0 = GenerateInvite(f20535[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20535, arg0);
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
const f20525 = () => BackgroundSync(f20525[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77912);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20526 = () => TTITestAction(f20526[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77912);
}
const Disconnect = "Disconnect";
const f20527 = () => Disconnect(f20527[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77912);
const MarkAsRead = "MarkAsRead";
const f20528 = () => MarkAsRead(f20528[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77912);
const MuteAction = "MuteAction";
const f20529 = () => MuteAction(f20529[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77912);
const ToggleDeafen = "ToggleDeafen";
const f20530 = () => ToggleDeafen(f20530[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77912);
const ToggleSelfMute = "ToggleSelfMute";
const f20531 = () => ToggleSelfMute(f20531[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77912);
const DismissCallAction = "DismissCallAction";
const f20532 = () => DismissCallAction(f20532[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77912);
const DirectReply = "DirectReply";
const f20533 = () => DirectReply(f20533[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77912);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20534 = () => SelectVoiceChannel(f20534[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77912);
const GenerateInvite = "GenerateInvite";
const f20535 = () => GenerateInvite(f20535[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77912);
const result = size.fileFinishedImporting("index.native.tsx");
