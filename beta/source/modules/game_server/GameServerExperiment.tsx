// Module ID: 4747
// Function ID: 4748
// Name: GameServerExperiment
// Dependencies: [4748, 2]
// Exports: getGameServerEnabled, useGameServerEnabled

// Module 4747 (GameServerExperiment)
import createExperiment from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2025-08_portkey_enabled", label: "GameServer Enabled", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable GameServer", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(c0, maybeGetGameServerHostingGuildEligiblePopoutDCF) {
  const obj = { guildId: c0, location: maybeGetGameServerHostingGuildEligiblePopoutDCF };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  const obj = { guildId, location: GuildPowerupsBoostCount };
  return experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
};
