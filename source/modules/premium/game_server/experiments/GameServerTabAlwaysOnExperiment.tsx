// Module ID: 15129
// Function ID: 115093
// Name: useIsGameServerTabAlwaysOnEnabled
// Dependencies: [1428, 2]
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 15129 (useIsGameServerTabAlwaysOnEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  return closure_0.useConfig({ location: useGuildActionRows }).enabled;
};
