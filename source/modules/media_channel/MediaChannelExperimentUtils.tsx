// Module ID: 8249
// Function ID: 65927
// Name: useGuildEligibleForMediaChannels
// Dependencies: [653, 2]
// Exports: useGuildEligibleForMediaChannels

// Module 8249 (useGuildEligibleForMediaChannels)
import { GuildFeatures } from "ME";

const result = require("set").fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

export const useGuildEligibleForMediaChannels = function useGuildEligibleForMediaChannels(stateFromStores) {
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  if (null == id) {
    return false;
  } else {
    const features = stateFromStores.features;
    let hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE);
    if (!hasItem) {
      hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    if (hasItem) {
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    if (!hasItem) {
      hasItem = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return hasItem;
  }
};
