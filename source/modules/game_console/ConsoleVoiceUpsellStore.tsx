// Module ID: 15666
// Function ID: 119709
// Name: useConsoleVoiceUpsellStore
// Dependencies: []
// Exports: setShowConsoleVoiceSparkles, setVoiceUpsellDismissed

// Module 15666 (useConsoleVoiceUpsellStore)
let closure_2 = Object.freeze({});
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
