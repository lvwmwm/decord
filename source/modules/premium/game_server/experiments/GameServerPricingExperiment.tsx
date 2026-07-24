// Module ID: 11571
// Function ID: 90124
// Name: items
// Dependencies: [4042, 4041, 2]
// Exports: useIsGameServerPricingEnabled

// Module 11571 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable Game Server Pricing", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(guildId, useGuildPowerupsChannelListPopout) {
  let obj = require(4041) /* items */;
  let enabled = obj.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  obj = { guildId, location: useGuildPowerupsChannelListPopout };
  if (enabled) {
    enabled = experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};
