// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15150, 16, 9, 1257, 15344, 15345, 17, 15347, 18338, 19085, 19086, 19087, 19088, 19089, 19091, 19092, 19093, 19094, 19095, 19096, 19097, 19098, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15344 */;
import installSystrace from "installSystrace" /* 15345 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15150 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f82279 = () => {
  let closure_0 = GenerateInvite(f19144[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19144, arg0);
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
const f19134 = () => BackgroundSync(f19134[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f82279);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19135 = () => TTITestAction(f19135[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f82279);
}
const Disconnect = "Disconnect";
const f19136 = () => Disconnect(f19136[15]);
AppRegistry.registerHeadlessTask("Disconnect", f82279);
const MarkAsRead = "MarkAsRead";
const f19137 = () => MarkAsRead(f19137[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f82279);
const MuteAction = "MuteAction";
const f19138 = () => MuteAction(f19138[17]);
AppRegistry.registerHeadlessTask("MuteAction", f82279);
const ToggleDeafen = "ToggleDeafen";
const f19139 = () => ToggleDeafen(f19139[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f82279);
const ToggleSelfMute = "ToggleSelfMute";
const f19140 = () => ToggleSelfMute(f19140[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f82279);
const DismissCallAction = "DismissCallAction";
const f19141 = () => DismissCallAction(f19141[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f82279);
const DirectReply = "DirectReply";
const f19142 = () => DirectReply(f19142[21]);
AppRegistry.registerHeadlessTask("DirectReply", f82279);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19143 = () => SelectVoiceChannel(f19143[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f82279);
const GenerateInvite = "GenerateInvite";
const f19144 = () => GenerateInvite(f19144[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f82279);
const result = size.fileFinishedImporting("index.native.tsx");
