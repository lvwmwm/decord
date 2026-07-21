// Module ID: 14958
// Function ID: 112561
// Name: useIsGameServerTabAlwaysOnEnabled
// Dependencies: []
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 14958 (useIsGameServerTabAlwaysOnEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  return closure_0.useConfig({ location: useGuildActionRows }).enabled;
};
