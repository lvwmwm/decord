// Module ID: 9863
// Function ID: 9864
// Name: MediaChannelExperimentUtils
// Dependencies: [1074, 2]
// Exports: useGuildEligibleForMediaChannels

// Module 9863 (MediaChannelExperimentUtils)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

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
