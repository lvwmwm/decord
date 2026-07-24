// Module ID: 4041
// Function ID: 33649
// Name: items
// Dependencies: [4042, 2]
// Exports: getGameServerEnabled, useGameServerEnabled

// Module 4041 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2025-08_portkey_enabled", label: "GameServer Enabled", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable GameServer", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.getCurrentConfig({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  return experiment.useExperiment({ guildId, location: GuildPowerupsBoostCount }, { autoTrackExposure: false }).enabled;
};
