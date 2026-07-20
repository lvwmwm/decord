// Module ID: 8398
// Function ID: 66865
// Name: useGuildEligibleForMediaChannels
// Dependencies: []
// Exports: useGuildEligibleForMediaChannels

// Module 8398 (useGuildEligibleForMediaChannels)
const GuildFeatures = require(dependencyMap[0]).GuildFeatures;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

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
