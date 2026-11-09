// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16340, 16, 9, 1242, 16534, 16535, 17, 16537, 19757, 20554, 20555, 20556, 20557, 20558, 20560, 20561, 20562, 20563, 20564, 20565, 20566, 20567, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16534 */;
import installSystrace from "installSystrace" /* 16535 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16340 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78371 = () => {
  let closure_0 = GenerateInvite(f20613[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20613, arg0);
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
const f20603 = () => BackgroundSync(f20603[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78371);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20604 = () => TTITestAction(f20604[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78371);
}
const Disconnect = "Disconnect";
const f20605 = () => Disconnect(f20605[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78371);
const MarkAsRead = "MarkAsRead";
const f20606 = () => MarkAsRead(f20606[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78371);
const MuteAction = "MuteAction";
const f20607 = () => MuteAction(f20607[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78371);
const ToggleDeafen = "ToggleDeafen";
const f20608 = () => ToggleDeafen(f20608[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78371);
const ToggleSelfMute = "ToggleSelfMute";
const f20609 = () => ToggleSelfMute(f20609[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78371);
const DismissCallAction = "DismissCallAction";
const f20610 = () => DismissCallAction(f20610[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78371);
const DirectReply = "DirectReply";
const f20611 = () => DirectReply(f20611[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78371);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20612 = () => SelectVoiceChannel(f20612[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78371);
const GenerateInvite = "GenerateInvite";
const f20613 = () => GenerateInvite(f20613[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78371);
const result = size.fileFinishedImporting("index.native.tsx");
