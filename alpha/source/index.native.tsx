// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14373, 16, 9, 1255, 14567, 14568, 17, 14570, 17877, 18617, 18618, 18619, 18620, 18621, 18623, 18624, 18625, 18626, 18627, 18628, 18629, 18630, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14567 */;
import installSystrace from "installSystrace" /* 14568 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14373 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f80920 = () => {
  let closure_0 = GenerateInvite(f18676[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18676, arg0);
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
const f18666 = () => BackgroundSync(f18666[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f80920);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18667 = () => TTITestAction(f18667[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f80920);
}
const Disconnect = "Disconnect";
const f18668 = () => Disconnect(f18668[15]);
AppRegistry.registerHeadlessTask("Disconnect", f80920);
const MarkAsRead = "MarkAsRead";
const f18669 = () => MarkAsRead(f18669[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f80920);
const MuteAction = "MuteAction";
const f18670 = () => MuteAction(f18670[17]);
AppRegistry.registerHeadlessTask("MuteAction", f80920);
const ToggleDeafen = "ToggleDeafen";
const f18671 = () => ToggleDeafen(f18671[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f80920);
const ToggleSelfMute = "ToggleSelfMute";
const f18672 = () => ToggleSelfMute(f18672[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f80920);
const DismissCallAction = "DismissCallAction";
const f18673 = () => DismissCallAction(f18673[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f80920);
const DirectReply = "DirectReply";
const f18674 = () => DirectReply(f18674[21]);
AppRegistry.registerHeadlessTask("DirectReply", f80920);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18675 = () => SelectVoiceChannel(f18675[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f80920);
const GenerateInvite = "GenerateInvite";
const f18676 = () => GenerateInvite(f18676[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f80920);
const result = size.fileFinishedImporting("index.native.tsx");
