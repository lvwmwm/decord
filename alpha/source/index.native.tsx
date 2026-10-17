// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15219, 16, 9, 1257, 15413, 15414, 17, 15416, 18399, 19147, 19148, 19149, 19150, 19151, 19153, 19154, 19155, 19156, 19157, 19158, 19159, 19160, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15413 */;
import installSystrace from "installSystrace" /* 15414 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15219 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f82481 = () => {
  let closure_0 = GenerateInvite(f19206[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19206, arg0);
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
const f19196 = () => BackgroundSync(f19196[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f82481);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19197 = () => TTITestAction(f19197[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f82481);
}
const Disconnect = "Disconnect";
const f19198 = () => Disconnect(f19198[15]);
AppRegistry.registerHeadlessTask("Disconnect", f82481);
const MarkAsRead = "MarkAsRead";
const f19199 = () => MarkAsRead(f19199[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f82481);
const MuteAction = "MuteAction";
const f19200 = () => MuteAction(f19200[17]);
AppRegistry.registerHeadlessTask("MuteAction", f82481);
const ToggleDeafen = "ToggleDeafen";
const f19201 = () => ToggleDeafen(f19201[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f82481);
const ToggleSelfMute = "ToggleSelfMute";
const f19202 = () => ToggleSelfMute(f19202[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f82481);
const DismissCallAction = "DismissCallAction";
const f19203 = () => DismissCallAction(f19203[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f82481);
const DirectReply = "DirectReply";
const f19204 = () => DirectReply(f19204[21]);
AppRegistry.registerHeadlessTask("DirectReply", f82481);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19205 = () => SelectVoiceChannel(f19205[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f82481);
const GenerateInvite = "GenerateInvite";
const f19206 = () => GenerateInvite(f19206[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f82481);
const result = size.fileFinishedImporting("index.native.tsx");
