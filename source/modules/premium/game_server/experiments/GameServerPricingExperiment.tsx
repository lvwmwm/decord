// Module ID: 11601
// Function ID: 11602
// Name: experiment
// Dependencies: [4101, 4100, 2]
// Exports: useIsGameServerPricingEnabled

// Module 11601 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/premium/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(guildId, useGuildPowerupsChannelListPopout) {
  let obj = require(4100) /* experiment */;
  let enabled = obj.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  obj = { guildId, location: useGuildPowerupsChannelListPopout };
  if (enabled) {
    enabled = experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};
