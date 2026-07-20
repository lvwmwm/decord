// Module ID: 14948
// Function ID: 112503
// Name: useIsGameServerTabAlwaysOnEnabled
// Dependencies: []
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 14948 (useIsGameServerTabAlwaysOnEnabled)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "accessibilityRole", -1845285747: "valueOf", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  return closure_0.useConfig({ location: useGuildActionRows }).enabled;
};
