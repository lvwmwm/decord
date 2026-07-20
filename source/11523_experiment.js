// Module ID: 11523
// Function ID: 89782
// Name: experiment
// Dependencies: []
// Exports: useIsGameServerPricingEnabled

// Module 11523 (experiment)
const _module = require(dependencyMap[0]);
const items = [{ config: { enabled: true } }];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/premium/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(guildId, useGuildPowerupsChannelListPopout) {
  let obj = require(dependencyMap[1]);
  let enabled = obj.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  obj = { guildId, location: useGuildPowerupsChannelListPopout };
  if (enabled) {
    enabled = experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};
