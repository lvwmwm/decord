// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15419, 16, 9, 1257, 15613, 15614, 17, 15616, 18667, 19423, 19424, 19425, 19426, 19427, 19429, 19430, 19431, 19432, 19433, 19434, 19435, 19436, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15613 */;
import installSystrace from "installSystrace" /* 15614 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15419 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f84026 = () => {
  let closure_0 = GenerateInvite(f19482[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19482, arg0);
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
const f19472 = () => BackgroundSync(f19472[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84026);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19473 = () => TTITestAction(f19473[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84026);
}
const Disconnect = "Disconnect";
const f19474 = () => Disconnect(f19474[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84026);
const MarkAsRead = "MarkAsRead";
const f19475 = () => MarkAsRead(f19475[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84026);
const MuteAction = "MuteAction";
const f19476 = () => MuteAction(f19476[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84026);
const ToggleDeafen = "ToggleDeafen";
const f19477 = () => ToggleDeafen(f19477[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84026);
const ToggleSelfMute = "ToggleSelfMute";
const f19478 = () => ToggleSelfMute(f19478[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84026);
const DismissCallAction = "DismissCallAction";
const f19479 = () => DismissCallAction(f19479[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84026);
const DirectReply = "DirectReply";
const f19480 = () => DirectReply(f19480[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84026);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19481 = () => SelectVoiceChannel(f19481[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84026);
const GenerateInvite = "GenerateInvite";
const f19482 = () => GenerateInvite(f19482[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84026);
const result = size.fileFinishedImporting("index.native.tsx");
