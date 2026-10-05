// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13960, 16, 9, 1242, 14154, 14155, 17, 14157, 17414, 18120, 18121, 18122, 18123, 18124, 18126, 18127, 18128, 18129, 18130, 18131, 18132, 18133, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14154 */;
import installSystrace from "installSystrace" /* 14155 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13960 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f79739 = () => {
  let closure_0 = GenerateInvite(f18179[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18179, arg0);
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
const f18169 = () => BackgroundSync(f18169[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f79739);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18170 = () => TTITestAction(f18170[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f79739);
}
const Disconnect = "Disconnect";
const f18171 = () => Disconnect(f18171[15]);
AppRegistry.registerHeadlessTask("Disconnect", f79739);
const MarkAsRead = "MarkAsRead";
const f18172 = () => MarkAsRead(f18172[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f79739);
const MuteAction = "MuteAction";
const f18173 = () => MuteAction(f18173[17]);
AppRegistry.registerHeadlessTask("MuteAction", f79739);
const ToggleDeafen = "ToggleDeafen";
const f18174 = () => ToggleDeafen(f18174[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f79739);
const ToggleSelfMute = "ToggleSelfMute";
const f18175 = () => ToggleSelfMute(f18175[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f79739);
const DismissCallAction = "DismissCallAction";
const f18176 = () => DismissCallAction(f18176[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f79739);
const DirectReply = "DirectReply";
const f18177 = () => DirectReply(f18177[21]);
AppRegistry.registerHeadlessTask("DirectReply", f79739);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18178 = () => SelectVoiceChannel(f18178[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f79739);
const GenerateInvite = "GenerateInvite";
const f18179 = () => GenerateInvite(f18179[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f79739);
const result = size.fileFinishedImporting("index.native.tsx");
