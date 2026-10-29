// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15942, 16, 9, 1254, 16136, 16137, 17, 16139, 19233, 20020, 20021, 20022, 20023, 20024, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16136 */;
import installSystrace from "installSystrace" /* 16137 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15942 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f86089 = () => {
  let closure_0 = GenerateInvite(f20079[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20079, arg0);
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
const f20069 = () => BackgroundSync(f20069[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f86089);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20070 = () => TTITestAction(f20070[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f86089);
}
const Disconnect = "Disconnect";
const f20071 = () => Disconnect(f20071[15]);
AppRegistry.registerHeadlessTask("Disconnect", f86089);
const MarkAsRead = "MarkAsRead";
const f20072 = () => MarkAsRead(f20072[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f86089);
const MuteAction = "MuteAction";
const f20073 = () => MuteAction(f20073[17]);
AppRegistry.registerHeadlessTask("MuteAction", f86089);
const ToggleDeafen = "ToggleDeafen";
const f20074 = () => ToggleDeafen(f20074[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f86089);
const ToggleSelfMute = "ToggleSelfMute";
const f20075 = () => ToggleSelfMute(f20075[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f86089);
const DismissCallAction = "DismissCallAction";
const f20076 = () => DismissCallAction(f20076[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f86089);
const DirectReply = "DirectReply";
const f20077 = () => DirectReply(f20077[21]);
AppRegistry.registerHeadlessTask("DirectReply", f86089);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20078 = () => SelectVoiceChannel(f20078[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f86089);
const GenerateInvite = "GenerateInvite";
const f20079 = () => GenerateInvite(f20079[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f86089);
const result = size.fileFinishedImporting("index.native.tsx");
