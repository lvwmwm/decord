// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16259, 16, 9, 1242, 16453, 16454, 17, 16456, 19620, 20417, 20418, 20419, 20420, 20421, 20423, 20424, 20425, 20426, 20427, 20428, 20429, 20430, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16453 */;
import installSystrace from "installSystrace" /* 16454 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16259 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77620 = () => {
  let closure_0 = GenerateInvite(f20476[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20476, arg0);
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
const f20466 = () => BackgroundSync(f20466[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77620);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20467 = () => TTITestAction(f20467[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77620);
}
const Disconnect = "Disconnect";
const f20468 = () => Disconnect(f20468[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77620);
const MarkAsRead = "MarkAsRead";
const f20469 = () => MarkAsRead(f20469[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77620);
const MuteAction = "MuteAction";
const f20470 = () => MuteAction(f20470[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77620);
const ToggleDeafen = "ToggleDeafen";
const f20471 = () => ToggleDeafen(f20471[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77620);
const ToggleSelfMute = "ToggleSelfMute";
const f20472 = () => ToggleSelfMute(f20472[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77620);
const DismissCallAction = "DismissCallAction";
const f20473 = () => DismissCallAction(f20473[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77620);
const DirectReply = "DirectReply";
const f20474 = () => DirectReply(f20474[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77620);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20475 = () => SelectVoiceChannel(f20475[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77620);
const GenerateInvite = "GenerateInvite";
const f20476 = () => GenerateInvite(f20476[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77620);
const result = size.fileFinishedImporting("index.native.tsx");
