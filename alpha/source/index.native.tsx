// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14809, 16, 9, 1255, 15003, 15004, 17, 15006, 18046, 18789, 18790, 18791, 18792, 18793, 18795, 18796, 18797, 18798, 18799, 18800, 18801, 18802, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15003 */;
import installSystrace from "installSystrace" /* 15004 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14809 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f81573 = () => {
  let closure_0 = GenerateInvite(f18848[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18848, arg0);
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
const f18838 = () => BackgroundSync(f18838[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f81573);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18839 = () => TTITestAction(f18839[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f81573);
}
const Disconnect = "Disconnect";
const f18840 = () => Disconnect(f18840[15]);
AppRegistry.registerHeadlessTask("Disconnect", f81573);
const MarkAsRead = "MarkAsRead";
const f18841 = () => MarkAsRead(f18841[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f81573);
const MuteAction = "MuteAction";
const f18842 = () => MuteAction(f18842[17]);
AppRegistry.registerHeadlessTask("MuteAction", f81573);
const ToggleDeafen = "ToggleDeafen";
const f18843 = () => ToggleDeafen(f18843[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f81573);
const ToggleSelfMute = "ToggleSelfMute";
const f18844 = () => ToggleSelfMute(f18844[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f81573);
const DismissCallAction = "DismissCallAction";
const f18845 = () => DismissCallAction(f18845[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f81573);
const DirectReply = "DirectReply";
const f18846 = () => DirectReply(f18846[21]);
AppRegistry.registerHeadlessTask("DirectReply", f81573);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18847 = () => SelectVoiceChannel(f18847[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f81573);
const GenerateInvite = "GenerateInvite";
const f18848 = () => GenerateInvite(f18848[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f81573);
const result = size.fileFinishedImporting("index.native.tsx");
