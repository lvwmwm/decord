// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15251, 16, 9, 1257, 15445, 15446, 17, 15448, 18432, 19190, 19191, 19192, 19193, 19194, 19196, 19197, 19198, 19199, 19200, 19201, 19202, 19203, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15445 */;
import installSystrace from "installSystrace" /* 15446 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15251 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f82957 = () => {
  let closure_0 = GenerateInvite(f19249[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19249, arg0);
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
const f19239 = () => BackgroundSync(f19239[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f82957);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19240 = () => TTITestAction(f19240[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f82957);
}
const Disconnect = "Disconnect";
const f19241 = () => Disconnect(f19241[15]);
AppRegistry.registerHeadlessTask("Disconnect", f82957);
const MarkAsRead = "MarkAsRead";
const f19242 = () => MarkAsRead(f19242[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f82957);
const MuteAction = "MuteAction";
const f19243 = () => MuteAction(f19243[17]);
AppRegistry.registerHeadlessTask("MuteAction", f82957);
const ToggleDeafen = "ToggleDeafen";
const f19244 = () => ToggleDeafen(f19244[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f82957);
const ToggleSelfMute = "ToggleSelfMute";
const f19245 = () => ToggleSelfMute(f19245[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f82957);
const DismissCallAction = "DismissCallAction";
const f19246 = () => DismissCallAction(f19246[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f82957);
const DirectReply = "DirectReply";
const f19247 = () => DirectReply(f19247[21]);
AppRegistry.registerHeadlessTask("DirectReply", f82957);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19248 = () => SelectVoiceChannel(f19248[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f82957);
const GenerateInvite = "GenerateInvite";
const f19249 = () => GenerateInvite(f19249[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f82957);
const result = size.fileFinishedImporting("index.native.tsx");
