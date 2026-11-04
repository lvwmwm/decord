// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16027, 16, 9, 1242, 16221, 16222, 17, 16224, 19358, 20151, 20152, 20153, 20154, 20155, 20157, 20158, 20159, 20160, 20161, 20162, 20163, 20164, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16221 */;
import installSystrace from "installSystrace" /* 16222 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16027 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f77126 = () => {
  let closure_0 = GenerateInvite(f20210[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20210, arg0);
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
const f20200 = () => BackgroundSync(f20200[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f77126);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20201 = () => TTITestAction(f20201[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f77126);
}
const Disconnect = "Disconnect";
const f20202 = () => Disconnect(f20202[15]);
AppRegistry.registerHeadlessTask("Disconnect", f77126);
const MarkAsRead = "MarkAsRead";
const f20203 = () => MarkAsRead(f20203[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f77126);
const MuteAction = "MuteAction";
const f20204 = () => MuteAction(f20204[17]);
AppRegistry.registerHeadlessTask("MuteAction", f77126);
const ToggleDeafen = "ToggleDeafen";
const f20205 = () => ToggleDeafen(f20205[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f77126);
const ToggleSelfMute = "ToggleSelfMute";
const f20206 = () => ToggleSelfMute(f20206[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f77126);
const DismissCallAction = "DismissCallAction";
const f20207 = () => DismissCallAction(f20207[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f77126);
const DirectReply = "DirectReply";
const f20208 = () => DirectReply(f20208[21]);
AppRegistry.registerHeadlessTask("DirectReply", f77126);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20209 = () => SelectVoiceChannel(f20209[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f77126);
const GenerateInvite = "GenerateInvite";
const f20210 = () => GenerateInvite(f20210[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f77126);
const result = size.fileFinishedImporting("index.native.tsx");
