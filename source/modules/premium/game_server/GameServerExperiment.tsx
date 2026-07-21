// Module ID: 4039
// Function ID: 33637
// Name: items
// Dependencies: []
// Exports: getGameServerEnabled, useGameServerEnabled

// Module 4039 (items)
const _module = require(dependencyMap[0]);
let obj = { "Bool(false)": "isArray", "Bool(false)": "Array", "Bool(false)": "application", defaultConfig: { enabled: false } };
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: true, 炖锅: true, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.getCurrentConfig({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.useExperiment({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};
