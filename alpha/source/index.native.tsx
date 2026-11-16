// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16646, 16, 9, 1242, 16840, 16841, 17, 16843, 20133, 20929, 20930, 20931, 20932, 20933, 20935, 20936, 20937, 20938, 20939, 20940, 20941, 20942, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16840 */;
import installSystrace from "installSystrace" /* 16841 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16646 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f80357 = () => {
  let closure_0 = GenerateInvite(f20988[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20988, arg0);
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
const f20978 = () => BackgroundSync(f20978[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80357);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20979 = () => TTITestAction(f20979[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80357);
}
const Disconnect = "Disconnect";
const f20980 = () => Disconnect(f20980[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80357);
const MarkAsRead = "MarkAsRead";
const f20981 = () => MarkAsRead(f20981[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80357);
const MuteAction = "MuteAction";
const f20982 = () => MuteAction(f20982[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80357);
const ToggleDeafen = "ToggleDeafen";
const f20983 = () => ToggleDeafen(f20983[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80357);
const ToggleSelfMute = "ToggleSelfMute";
const f20984 = () => ToggleSelfMute(f20984[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80357);
const DismissCallAction = "DismissCallAction";
const f20985 = () => DismissCallAction(f20985[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80357);
const DirectReply = "DirectReply";
const f20986 = () => DirectReply(f20986[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80357);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20987 = () => SelectVoiceChannel(f20987[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80357);
const GenerateInvite = "GenerateInvite";
const f20988 = () => GenerateInvite(f20988[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80357);
const result = size.fileFinishedImporting("index.native.tsx");
