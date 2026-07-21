// Module ID: 15673
// Function ID: 119733
// Name: useConsoleVoiceUpsellStore
// Dependencies: []
// Exports: setShowConsoleVoiceSparkles, setVoiceUpsellDismissed

// Module 15673 (useConsoleVoiceUpsellStore)
let closure_2 = Object.freeze({ GameServerProviderType: null, UNKNOWN_GIFT_CODE: null });
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
