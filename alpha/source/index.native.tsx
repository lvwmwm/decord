// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16646, 16, 9, 1242, 16840, 16841, 17, 16843, 20131, 20926, 20927, 20928, 20929, 20930, 20932, 20933, 20934, 20935, 20936, 20937, 20938, 20939, 2]

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

const f80345 = () => {
  let closure_0 = GenerateInvite(f20985[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20985, arg0);
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
const f20975 = () => BackgroundSync(f20975[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80345);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20976 = () => TTITestAction(f20976[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80345);
}
const Disconnect = "Disconnect";
const f20977 = () => Disconnect(f20977[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80345);
const MarkAsRead = "MarkAsRead";
const f20978 = () => MarkAsRead(f20978[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80345);
const MuteAction = "MuteAction";
const f20979 = () => MuteAction(f20979[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80345);
const ToggleDeafen = "ToggleDeafen";
const f20980 = () => ToggleDeafen(f20980[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80345);
const ToggleSelfMute = "ToggleSelfMute";
const f20981 = () => ToggleSelfMute(f20981[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80345);
const DismissCallAction = "DismissCallAction";
const f20982 = () => DismissCallAction(f20982[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80345);
const DirectReply = "DirectReply";
const f20983 = () => DirectReply(f20983[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80345);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20984 = () => SelectVoiceChannel(f20984[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80345);
const GenerateInvite = "GenerateInvite";
const f20985 = () => GenerateInvite(f20985[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80345);
const result = size.fileFinishedImporting("index.native.tsx");
