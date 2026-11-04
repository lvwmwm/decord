// Module ID: 9027
// Function ID: 9028
// Name: MediaChannelExperimentUtils
// Dependencies: [1072, 2]
// Exports: useGuildEligibleForMediaChannels

// Module 9027 (MediaChannelExperimentUtils)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

export function useGuildEligibleForMediaChannels(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (null == id) {
    return false;
  } else {
    const features = stateFromStores.features;
    const tmp3 = (features.has(GuildFeatures.CREATOR_MONETIZABLE) || features.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) && features.has(GuildFeatures.COMMUNITY) || features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return tmp3;
  }
}
