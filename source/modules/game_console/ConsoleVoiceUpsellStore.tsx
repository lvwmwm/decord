// Module ID: 15684
// Function ID: 119815
// Name: useConsoleVoiceUpsellStore
// Dependencies: []
// Exports: setShowConsoleVoiceSparkles, setVoiceUpsellDismissed

// Module 15684 (useConsoleVoiceUpsellStore)
let closure_2 = Object.freeze({ 1782891439: true, 76525633: true });
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
