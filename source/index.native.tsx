// Module ID: 0
// Function ID: 81
// Name: __exportStarResult1
// Dependencies: []

// Module 0 (__exportStarResult1)
function registerHeadlessTask(BackgroundSync, arg1) {
  const require = BackgroundSync;
  const dependencyMap = arg1;
  AppRegistry.registerHeadlessTask(BackgroundSync, () => {
    const BackgroundSync = BackgroundSync(arg1[12]).default;
    return (arg0) => callback(callback, closure_1, arg0);
  });
}
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const _module2 = require(dependencyMap[2]);
const _module3 = require(dependencyMap[3]);
const polyfillsEnd = require(dependencyMap[4]).default.imports.polyfillsEnd;
polyfillsEnd.record();
const _module4 = require(dependencyMap[5]);
const sentryEnd = require(dependencyMap[4]).default.imports.sentryEnd;
sentryEnd.record();
if (require(dependencyMap[6]).isTTITest) {
  require(dependencyMap[7]).installSystrace();
}
const AppRegistry = require(dependencyMap[8]).AppRegistry;
AppRegistry.registerComponent("Discord", () => require(dependencyMap[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", (arg0) => {
  const callback = [...arguments];
  return callback(dependencyMap[10]).default("Main", () => {
    callback(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require(dependencyMap[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", (arg0) => {
  const callback = [...arguments];
  return callback(dependencyMap[10]).default("Share", () => callback(...closure_0));
});
registerHeadlessTask("BackgroundSync", () => require(dependencyMap[13]));
registerHeadlessTask("TTITestAction", () => require(dependencyMap[14]));
registerHeadlessTask("Disconnect", () => require(dependencyMap[15]));
registerHeadlessTask("MarkAsRead", () => require(dependencyMap[16]));
registerHeadlessTask("MuteAction", () => require(dependencyMap[17]));
registerHeadlessTask("ToggleDeafen", () => require(dependencyMap[18]));
registerHeadlessTask("ToggleSelfMute", () => require(dependencyMap[19]));
registerHeadlessTask("DismissCallAction", () => require(dependencyMap[20]));
registerHeadlessTask("DirectReply", () => require(dependencyMap[21]));
registerHeadlessTask("SelectVoiceChannel", () => require(dependencyMap[22]));
registerHeadlessTask("GenerateInvite", () => require(dependencyMap[23]));
const _module5 = require(dependencyMap[24]);
const result = _module5.fileFinishedImporting("index.native.tsx");
