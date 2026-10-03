// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 13958, 16, 9, 1242, 14152, 14153, 17, 14155, 17390, 18098, 18099, 18100, 18101, 18102, 18104, 18105, 18106, 18107, 18108, 18109, 18110, 18111, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14152 */;
import installSystrace from "installSystrace" /* 14153 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13958 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f79596 = () => {
  let closure_0 = GenerateInvite(f18157[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18157, arg0);
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
const f18147 = () => BackgroundSync(f18147[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f79596);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18148 = () => TTITestAction(f18148[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f79596);
}
const Disconnect = "Disconnect";
const f18149 = () => Disconnect(f18149[15]);
AppRegistry.registerHeadlessTask("Disconnect", f79596);
const MarkAsRead = "MarkAsRead";
const f18150 = () => MarkAsRead(f18150[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f79596);
const MuteAction = "MuteAction";
const f18151 = () => MuteAction(f18151[17]);
AppRegistry.registerHeadlessTask("MuteAction", f79596);
const ToggleDeafen = "ToggleDeafen";
const f18152 = () => ToggleDeafen(f18152[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f79596);
const ToggleSelfMute = "ToggleSelfMute";
const f18153 = () => ToggleSelfMute(f18153[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f79596);
const DismissCallAction = "DismissCallAction";
const f18154 = () => DismissCallAction(f18154[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f79596);
const DirectReply = "DirectReply";
const f18155 = () => DirectReply(f18155[21]);
AppRegistry.registerHeadlessTask("DirectReply", f79596);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18156 = () => SelectVoiceChannel(f18156[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f79596);
const GenerateInvite = "GenerateInvite";
const f18157 = () => GenerateInvite(f18157[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f79596);
const result = size.fileFinishedImporting("index.native.tsx");
