// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 16330, 16, 9, 1242, 16524, 16525, 17, 16527, 19744, 20541, 20542, 20543, 20544, 20545, 20547, 20548, 20549, 20550, 20551, 20552, 20553, 20554, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 16524 */;
import installSystrace from "installSystrace" /* 16525 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 16330 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f78328 = () => {
  let closure_0 = GenerateInvite(f20600[12]).default;
  return (arg0) => closure_0(GenerateInvite, f20600, arg0);
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
const f20590 = () => BackgroundSync(f20590[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f78328);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f20591 = () => TTITestAction(f20591[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f78328);
}
const Disconnect = "Disconnect";
const f20592 = () => Disconnect(f20592[15]);
AppRegistry.registerHeadlessTask("Disconnect", f78328);
const MarkAsRead = "MarkAsRead";
const f20593 = () => MarkAsRead(f20593[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f78328);
const MuteAction = "MuteAction";
const f20594 = () => MuteAction(f20594[17]);
AppRegistry.registerHeadlessTask("MuteAction", f78328);
const ToggleDeafen = "ToggleDeafen";
const f20595 = () => ToggleDeafen(f20595[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f78328);
const ToggleSelfMute = "ToggleSelfMute";
const f20596 = () => ToggleSelfMute(f20596[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f78328);
const DismissCallAction = "DismissCallAction";
const f20597 = () => DismissCallAction(f20597[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f78328);
const DirectReply = "DirectReply";
const f20598 = () => DirectReply(f20598[21]);
AppRegistry.registerHeadlessTask("DirectReply", f78328);
const SelectVoiceChannel = "SelectVoiceChannel";
const f20599 = () => SelectVoiceChannel(f20599[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f78328);
const GenerateInvite = "GenerateInvite";
const f20600 = () => GenerateInvite(f20600[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f78328);
const result = size.fileFinishedImporting("index.native.tsx");
