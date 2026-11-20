// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16648, 16, 9, 1242, 16842, 16843, 17, 16845, 20138, 20934, 20935, 20936, 20937, 20938, 20940, 20941, 20942, 20943, 20944, 20945, 20946, 20947, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16842 */;
import installSystrace from "installSystrace" /* 16843 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16648 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f80369 = () => {
  let closure_0 = GenerateInvite(f20993[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20993, arg0);
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
const f20983 = () => BackgroundSync(f20983[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80369);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20984 = () => TTITestAction(f20984[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80369);
}
const Disconnect = "Disconnect";
const f20985 = () => Disconnect(f20985[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80369);
const MarkAsRead = "MarkAsRead";
const f20986 = () => MarkAsRead(f20986[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80369);
const MuteAction = "MuteAction";
const f20987 = () => MuteAction(f20987[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80369);
const ToggleDeafen = "ToggleDeafen";
const f20988 = () => ToggleDeafen(f20988[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80369);
const ToggleSelfMute = "ToggleSelfMute";
const f20989 = () => ToggleSelfMute(f20989[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80369);
const DismissCallAction = "DismissCallAction";
const f20990 = () => DismissCallAction(f20990[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80369);
const DirectReply = "DirectReply";
const f20991 = () => DirectReply(f20991[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80369);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20992 = () => SelectVoiceChannel(f20992[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80369);
const GenerateInvite = "GenerateInvite";
const f20993 = () => GenerateInvite(f20993[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80369);
const result = size.fileFinishedImporting("index.native.tsx");
