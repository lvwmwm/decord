// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15223, 16, 9, 1257, 15417, 15418, 17, 15420, 18403, 19151, 19152, 19153, 19154, 19155, 19157, 19158, 19159, 19160, 19161, 19162, 19163, 19164, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15417 */;
import installSystrace from "installSystrace" /* 15418 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15223 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f82557 = () => {
  let closure_0 = GenerateInvite(f19210[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19210, arg0);
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
const f19200 = () => BackgroundSync(f19200[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f82557);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19201 = () => TTITestAction(f19201[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f82557);
}
const Disconnect = "Disconnect";
const f19202 = () => Disconnect(f19202[15]);
AppRegistry.registerHeadlessTask("Disconnect", f82557);
const MarkAsRead = "MarkAsRead";
const f19203 = () => MarkAsRead(f19203[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f82557);
const MuteAction = "MuteAction";
const f19204 = () => MuteAction(f19204[17]);
AppRegistry.registerHeadlessTask("MuteAction", f82557);
const ToggleDeafen = "ToggleDeafen";
const f19205 = () => ToggleDeafen(f19205[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f82557);
const ToggleSelfMute = "ToggleSelfMute";
const f19206 = () => ToggleSelfMute(f19206[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f82557);
const DismissCallAction = "DismissCallAction";
const f19207 = () => DismissCallAction(f19207[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f82557);
const DirectReply = "DirectReply";
const f19208 = () => DirectReply(f19208[21]);
AppRegistry.registerHeadlessTask("DirectReply", f82557);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19209 = () => SelectVoiceChannel(f19209[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f82557);
const GenerateInvite = "GenerateInvite";
const f19210 = () => GenerateInvite(f19210[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f82557);
const result = size.fileFinishedImporting("index.native.tsx");
