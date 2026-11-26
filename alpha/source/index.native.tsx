// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15631, 16, 9, 1242, 15825, 15826, 17, 15828, 19613, 20418, 20419, 20420, 20421, 20422, 20424, 20425, 20426, 20427, 20428, 20429, 20430, 20431, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15825 */;
import installSystrace from "installSystrace" /* 15826 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15631 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77684 = () => {
  let closure_0 = GenerateInvite(f20477[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20477, arg0);
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
const f20467 = () => BackgroundSync(f20467[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77684);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20468 = () => TTITestAction(f20468[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77684);
}
const Disconnect = "Disconnect";
const f20469 = () => Disconnect(f20469[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77684);
const MarkAsRead = "MarkAsRead";
const f20470 = () => MarkAsRead(f20470[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77684);
const MuteAction = "MuteAction";
const f20471 = () => MuteAction(f20471[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77684);
const ToggleDeafen = "ToggleDeafen";
const f20472 = () => ToggleDeafen(f20472[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77684);
const ToggleSelfMute = "ToggleSelfMute";
const f20473 = () => ToggleSelfMute(f20473[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77684);
const DismissCallAction = "DismissCallAction";
const f20474 = () => DismissCallAction(f20474[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77684);
const DirectReply = "DirectReply";
const f20475 = () => DirectReply(f20475[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77684);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20476 = () => SelectVoiceChannel(f20476[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77684);
const GenerateInvite = "GenerateInvite";
const f20477 = () => GenerateInvite(f20477[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77684);
const result = size.fileFinishedImporting("index.native.tsx");
