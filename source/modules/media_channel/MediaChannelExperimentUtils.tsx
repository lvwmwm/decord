// Module ID: 9642
// Function ID: 9643
// Name: useGuildEligibleForMediaChannels
// Dependencies: [676, 2]
// Exports: useGuildEligibleForMediaChannels

// Module 9642 (useGuildEligibleForMediaChannels)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const GuildFeatures = ME.GuildFeatures;
const result = set.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

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
