// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16282, 16, 9, 1242, 16476, 16477, 17, 16479, 19675, 20473, 20474, 20475, 20476, 20477, 20479, 20480, 20481, 20482, 20483, 20484, 20485, 20486, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16476 */;
import installSystrace from "installSystrace" /* 16477 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16282 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77999 = () => {
  let closure_0 = GenerateInvite(f20532[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20532, arg0);
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
const f20522 = () => BackgroundSync(f20522[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77999);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20523 = () => TTITestAction(f20523[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77999);
}
const Disconnect = "Disconnect";
const f20524 = () => Disconnect(f20524[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77999);
const MarkAsRead = "MarkAsRead";
const f20525 = () => MarkAsRead(f20525[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77999);
const MuteAction = "MuteAction";
const f20526 = () => MuteAction(f20526[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77999);
const ToggleDeafen = "ToggleDeafen";
const f20527 = () => ToggleDeafen(f20527[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77999);
const ToggleSelfMute = "ToggleSelfMute";
const f20528 = () => ToggleSelfMute(f20528[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77999);
const DismissCallAction = "DismissCallAction";
const f20529 = () => DismissCallAction(f20529[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77999);
const DirectReply = "DirectReply";
const f20530 = () => DirectReply(f20530[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77999);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20531 = () => SelectVoiceChannel(f20531[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77999);
const GenerateInvite = "GenerateInvite";
const f20532 = () => GenerateInvite(f20532[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77999);
const result = size.fileFinishedImporting("index.native.tsx");
