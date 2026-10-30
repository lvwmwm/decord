// Module ID: 5243
// Function ID: 5244
// Name: GameServerExperiment
// Dependencies: [5231, 2]
// Exports: getGameServerEnabled, useGameServerEnabled

// Module 5243 (GameServerExperiment)
import createExperiment from "module_5231" /* 5231 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2025-08_portkey_enabled", label: "GameServer Enabled", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable GameServer", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export function getGameServerEnabled(c0, maybeGetGameServerHostingGuildEligiblePopoutDCF) {
  const obj = { guildId: c0, location: maybeGetGameServerHostingGuildEligiblePopoutDCF };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: false }).enabled;
}
export function useGameServerEnabled(guildId, GuildPowerupsBoostCount) {
  const obj = { guildId, location: GuildPowerupsBoostCount };
  return experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
}
