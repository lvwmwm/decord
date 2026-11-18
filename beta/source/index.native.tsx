// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16646, 16, 9, 1242, 16840, 16841, 17, 16843, 20136, 20932, 20933, 20934, 20935, 20936, 20938, 20939, 20940, 20941, 20942, 20943, 20944, 20945, 2]

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

const f80365 = () => {
  let closure_0 = GenerateInvite(f20991[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20991, arg0);
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
const f20981 = () => BackgroundSync(f20981[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80365);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20982 = () => TTITestAction(f20982[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80365);
}
const Disconnect = "Disconnect";
const f20983 = () => Disconnect(f20983[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80365);
const MarkAsRead = "MarkAsRead";
const f20984 = () => MarkAsRead(f20984[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80365);
const MuteAction = "MuteAction";
const f20985 = () => MuteAction(f20985[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80365);
const ToggleDeafen = "ToggleDeafen";
const f20986 = () => ToggleDeafen(f20986[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80365);
const ToggleSelfMute = "ToggleSelfMute";
const f20987 = () => ToggleSelfMute(f20987[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80365);
const DismissCallAction = "DismissCallAction";
const f20988 = () => DismissCallAction(f20988[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80365);
const DirectReply = "DirectReply";
const f20989 = () => DirectReply(f20989[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80365);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20990 = () => SelectVoiceChannel(f20990[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80365);
const GenerateInvite = "GenerateInvite";
const f20991 = () => GenerateInvite(f20991[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80365);
const result = size.fileFinishedImporting("index.native.tsx");
