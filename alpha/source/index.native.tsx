// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16272, 16, 9, 1242, 16466, 16467, 17, 16469, 19634, 20430, 20431, 20432, 20433, 20434, 20436, 20437, 20438, 20439, 20440, 20441, 20442, 20443, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16466 */;
import installSystrace from "installSystrace" /* 16467 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16272 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77750 = () => {
  let closure_0 = GenerateInvite(f20489[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20489, arg0);
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
const f20479 = () => BackgroundSync(f20479[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77750);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20480 = () => TTITestAction(f20480[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77750);
}
const Disconnect = "Disconnect";
const f20481 = () => Disconnect(f20481[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77750);
const MarkAsRead = "MarkAsRead";
const f20482 = () => MarkAsRead(f20482[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77750);
const MuteAction = "MuteAction";
const f20483 = () => MuteAction(f20483[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77750);
const ToggleDeafen = "ToggleDeafen";
const f20484 = () => ToggleDeafen(f20484[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77750);
const ToggleSelfMute = "ToggleSelfMute";
const f20485 = () => ToggleSelfMute(f20485[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77750);
const DismissCallAction = "DismissCallAction";
const f20486 = () => DismissCallAction(f20486[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77750);
const DirectReply = "DirectReply";
const f20487 = () => DirectReply(f20487[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77750);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20488 = () => SelectVoiceChannel(f20488[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77750);
const GenerateInvite = "GenerateInvite";
const f20489 = () => GenerateInvite(f20489[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77750);
const result = size.fileFinishedImporting("index.native.tsx");
