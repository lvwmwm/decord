// Module ID: 4039
// Function ID: 33632
// Name: experiment
// Dependencies: []
// Exports: getGameServerEnabled, useGameServerEnabled

// Module 4039 (experiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": true, "Bool(false)": true, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.getCurrentConfig({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.useExperiment({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};
