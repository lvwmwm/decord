// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15105, 16, 9, 1255, 15299, 15300, 17, 15302, 18286, 19028, 19029, 19030, 19031, 19032, 19034, 19035, 19036, 19037, 19038, 19039, 19040, 19041, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15299 */;
import installSystrace from "installSystrace" /* 15300 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15105 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f81953 = () => {
  let closure_0 = GenerateInvite(f19087[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19087, arg0);
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
const f19077 = () => BackgroundSync(f19077[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f81953);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19078 = () => TTITestAction(f19078[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f81953);
}
const Disconnect = "Disconnect";
const f19079 = () => Disconnect(f19079[15]);
AppRegistry.registerHeadlessTask("Disconnect", f81953);
const MarkAsRead = "MarkAsRead";
const f19080 = () => MarkAsRead(f19080[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f81953);
const MuteAction = "MuteAction";
const f19081 = () => MuteAction(f19081[17]);
AppRegistry.registerHeadlessTask("MuteAction", f81953);
const ToggleDeafen = "ToggleDeafen";
const f19082 = () => ToggleDeafen(f19082[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f81953);
const ToggleSelfMute = "ToggleSelfMute";
const f19083 = () => ToggleSelfMute(f19083[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f81953);
const DismissCallAction = "DismissCallAction";
const f19084 = () => DismissCallAction(f19084[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f81953);
const DirectReply = "DirectReply";
const f19085 = () => DirectReply(f19085[21]);
AppRegistry.registerHeadlessTask("DirectReply", f81953);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19086 = () => SelectVoiceChannel(f19086[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f81953);
const GenerateInvite = "GenerateInvite";
const f19087 = () => GenerateInvite(f19087[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f81953);
const result = size.fileFinishedImporting("index.native.tsx");
