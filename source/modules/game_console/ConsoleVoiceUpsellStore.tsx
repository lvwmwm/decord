// Module ID: 15676
// Function ID: 119772
// Name: useConsoleVoiceUpsellStore
// Dependencies: []
// Exports: setShowConsoleVoiceSparkles, setVoiceUpsellDismissed

// Module 15676 (useConsoleVoiceUpsellStore)
let closure_2 = Object.freeze({ "Null": null, "Null": null });
const _module = require(dependencyMap[0]);
const obj = _module.create(() => closure_2);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export const useConsoleVoiceUpsellStore = obj;
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState({ showSparkles: arg0 });
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState({ voiceUpsellDismissed: arg0 });
  });
};
