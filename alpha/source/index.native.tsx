// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13978, 16, 9, 1242, 14172, 14173, 17, 14175, 17443, 18166, 18167, 18168, 18169, 18170, 18172, 18173, 18174, 18175, 18176, 18177, 18178, 18179, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14172 */;
import installSystrace from "installSystrace" /* 14173 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13978 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f79872 = () => {
  let closure_0 = GenerateInvite(f18225[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18225, arg0);
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
const f18215 = () => BackgroundSync(f18215[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f79872);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18216 = () => TTITestAction(f18216[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f79872);
}
const Disconnect = "Disconnect";
const f18217 = () => Disconnect(f18217[15]);
AppRegistry.registerHeadlessTask("Disconnect", f79872);
const MarkAsRead = "MarkAsRead";
const f18218 = () => MarkAsRead(f18218[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f79872);
const MuteAction = "MuteAction";
const f18219 = () => MuteAction(f18219[17]);
AppRegistry.registerHeadlessTask("MuteAction", f79872);
const ToggleDeafen = "ToggleDeafen";
const f18220 = () => ToggleDeafen(f18220[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f79872);
const ToggleSelfMute = "ToggleSelfMute";
const f18221 = () => ToggleSelfMute(f18221[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f79872);
const DismissCallAction = "DismissCallAction";
const f18222 = () => DismissCallAction(f18222[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f79872);
const DirectReply = "DirectReply";
const f18223 = () => DirectReply(f18223[21]);
AppRegistry.registerHeadlessTask("DirectReply", f79872);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18224 = () => SelectVoiceChannel(f18224[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f79872);
const GenerateInvite = "GenerateInvite";
const f18225 = () => GenerateInvite(f18225[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f79872);
const result = size.fileFinishedImporting("index.native.tsx");
