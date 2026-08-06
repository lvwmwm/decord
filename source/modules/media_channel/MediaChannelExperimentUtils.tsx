// Module ID: 8916
// Function ID: 8917
// Name: useGuildEligibleForMediaChannels
// Dependencies: [676, 2]
// Exports: useGuildEligibleForMediaChannels

// Module 8916 (useGuildEligibleForMediaChannels)
import { GuildFeatures } from "ME";

const result = require("set").fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

export const useGuildEligibleForMediaChannels = function useGuildEligibleForMediaChannels(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (null == id) {
    return false;
  } else {
    const features = stateFromStores.features;
    return (features.has(GuildFeatures.CREATOR_MONETIZABLE) || features.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) && features.has(GuildFeatures.COMMUNITY) || features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  }
};
