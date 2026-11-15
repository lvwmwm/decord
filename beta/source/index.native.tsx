// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16370, 16, 9, 1242, 16564, 16565, 17, 16567, 19803, 20600, 20601, 20602, 20603, 20604, 20606, 20607, 20608, 20609, 20610, 20611, 20612, 20613, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16564 */;
import installSystrace from "installSystrace" /* 16565 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16370 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78483 = () => {
  let closure_0 = GenerateInvite(f20659[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20659, arg0);
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
const f20649 = () => BackgroundSync(f20649[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78483);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20650 = () => TTITestAction(f20650[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78483);
}
const Disconnect = "Disconnect";
const f20651 = () => Disconnect(f20651[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78483);
const MarkAsRead = "MarkAsRead";
const f20652 = () => MarkAsRead(f20652[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78483);
const MuteAction = "MuteAction";
const f20653 = () => MuteAction(f20653[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78483);
const ToggleDeafen = "ToggleDeafen";
const f20654 = () => ToggleDeafen(f20654[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78483);
const ToggleSelfMute = "ToggleSelfMute";
const f20655 = () => ToggleSelfMute(f20655[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78483);
const DismissCallAction = "DismissCallAction";
const f20656 = () => DismissCallAction(f20656[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78483);
const DirectReply = "DirectReply";
const f20657 = () => DirectReply(f20657[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78483);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20658 = () => SelectVoiceChannel(f20658[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78483);
const GenerateInvite = "GenerateInvite";
const f20659 = () => GenerateInvite(f20659[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78483);
const result = size.fileFinishedImporting("index.native.tsx");
