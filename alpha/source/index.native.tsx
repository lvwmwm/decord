// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 15480, 16, 9, 1254, 15674, 15675, 17, 15677, 18749, 19535, 19536, 19537, 19538, 19539, 19541, 19542, 19543, 19544, 19545, 19546, 19547, 19548, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 15674 */;
import installSystrace from "installSystrace" /* 15675 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 15480 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f84508 = () => {
  let closure_0 = GenerateInvite(f19594[12]).default;
  return (arg0) => closure_0(GenerateInvite, f19594, arg0);
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
const f19584 = () => BackgroundSync(f19584[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f84508);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f19585 = () => TTITestAction(f19585[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f84508);
}
const Disconnect = "Disconnect";
const f19586 = () => Disconnect(f19586[15]);
AppRegistry.registerHeadlessTask("Disconnect", f84508);
const MarkAsRead = "MarkAsRead";
const f19587 = () => MarkAsRead(f19587[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f84508);
const MuteAction = "MuteAction";
const f19588 = () => MuteAction(f19588[17]);
AppRegistry.registerHeadlessTask("MuteAction", f84508);
const ToggleDeafen = "ToggleDeafen";
const f19589 = () => ToggleDeafen(f19589[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f84508);
const ToggleSelfMute = "ToggleSelfMute";
const f19590 = () => ToggleSelfMute(f19590[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f84508);
const DismissCallAction = "DismissCallAction";
const f19591 = () => DismissCallAction(f19591[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f84508);
const DirectReply = "DirectReply";
const f19592 = () => DirectReply(f19592[21]);
AppRegistry.registerHeadlessTask("DirectReply", f84508);
const SelectVoiceChannel = "SelectVoiceChannel";
const f19593 = () => SelectVoiceChannel(f19593[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f84508);
const GenerateInvite = "GenerateInvite";
const f19594 = () => GenerateInvite(f19594[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f84508);
const result = size.fileFinishedImporting("index.native.tsx");
