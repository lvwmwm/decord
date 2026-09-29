// Module ID: 12792
// Function ID: 12793
// Name: GameServerPricingExperiment
// Dependencies: [4701, 4700, 2]
// Exports: useIsGameServerPricingEnabled

// Module 12792 (GameServerPricingExperiment)
import GameServerExperiment from "GameServerExperiment" /* 4700 */;
import createExperiment from "module_4701" /* 4701 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(guildId, useGuildPowerupsChannelListPopout) {
  let enabled = GameServerExperiment.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  if (enabled) {
    enabled = experiment.useExperiment(obj2, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};
