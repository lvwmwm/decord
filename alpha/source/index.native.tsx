// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16367, 16, 9, 1242, 16561, 16562, 17, 16564, 19786, 20582, 20583, 20584, 20585, 20586, 20588, 20589, 20590, 20591, 20592, 20593, 20594, 20595, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16561 */;
import installSystrace from "installSystrace" /* 16562 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16367 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78485 = () => {
  let closure_0 = GenerateInvite(f20641[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20641, arg0);
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
const f20631 = () => BackgroundSync(f20631[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78485);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20632 = () => TTITestAction(f20632[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78485);
}
const Disconnect = "Disconnect";
const f20633 = () => Disconnect(f20633[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78485);
const MarkAsRead = "MarkAsRead";
const f20634 = () => MarkAsRead(f20634[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78485);
const MuteAction = "MuteAction";
const f20635 = () => MuteAction(f20635[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78485);
const ToggleDeafen = "ToggleDeafen";
const f20636 = () => ToggleDeafen(f20636[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78485);
const ToggleSelfMute = "ToggleSelfMute";
const f20637 = () => ToggleSelfMute(f20637[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78485);
const DismissCallAction = "DismissCallAction";
const f20638 = () => DismissCallAction(f20638[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78485);
const DirectReply = "DirectReply";
const f20639 = () => DirectReply(f20639[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78485);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20640 = () => SelectVoiceChannel(f20640[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78485);
const GenerateInvite = "GenerateInvite";
const f20641 = () => GenerateInvite(f20641[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78485);
const result = size.fileFinishedImporting("index.native.tsx");
