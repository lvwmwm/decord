// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15706, 16, 9, 1254, 15900, 15901, 17, 15903, 19000, 19798, 19799, 19800, 19801, 19802, 19804, 19805, 19806, 19807, 19808, 19809, 19810, 19811, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15900 */;
import installSystrace from "installSystrace" /* 15901 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15706 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f85082 = () => {
  let closure_0 = GenerateInvite(f19857[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19857, arg0);
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
const f19847 = () => BackgroundSync(f19847[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f85082);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19848 = () => TTITestAction(f19848[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f85082);
}
const Disconnect = "Disconnect";
const f19849 = () => Disconnect(f19849[15]);
AppRegistry.registerHeadlessTask("Disconnect", f85082);
const MarkAsRead = "MarkAsRead";
const f19850 = () => MarkAsRead(f19850[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f85082);
const MuteAction = "MuteAction";
const f19851 = () => MuteAction(f19851[17]);
AppRegistry.registerHeadlessTask("MuteAction", f85082);
const ToggleDeafen = "ToggleDeafen";
const f19852 = () => ToggleDeafen(f19852[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f85082);
const ToggleSelfMute = "ToggleSelfMute";
const f19853 = () => ToggleSelfMute(f19853[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f85082);
const DismissCallAction = "DismissCallAction";
const f19854 = () => DismissCallAction(f19854[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f85082);
const DirectReply = "DirectReply";
const f19855 = () => DirectReply(f19855[21]);
AppRegistry.registerHeadlessTask("DirectReply", f85082);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19856 = () => SelectVoiceChannel(f19856[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f85082);
const GenerateInvite = "GenerateInvite";
const f19857 = () => GenerateInvite(f19857[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f85082);
const result = size.fileFinishedImporting("index.native.tsx");
