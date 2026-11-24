// Module ID: 14759
// Function ID: 14760
// Name: isGuildSpaceEmbeddedActivity
// Dependencies: [4762, 4761, 7074, 4834, 1092, 2]
// Exports: default

// Module 14759 (isGuildSpaceEmbeddedActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4834 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7074 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGuildSpaceEmbeddedActivity.tsx");

export default function isGuildSpaceEmbeddedActivity(platform) {
  if (platform.platform === ActivityGamePlatforms.ActivityGamePlatforms.EMBEDDED) {
    if (null != platform.application_id) {
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const value = selfEmbeddedActivities.get(platform.application_id);
      let _location;
      const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
      embeddedActivityLocationUtils;
      if (value != null) {
        _location = value.location;
      }
      const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
      let tmp5 = null != embeddedActivityLocationChannelId;
      if (tmp5) {
        const basicChannel = ChannelStore.getBasicChannel(embeddedActivityLocationChannelId);
        let type;
        if (basicChannel != null) {
          type = basicChannel.type;
        }
        tmp5 = type === tmp(1092).ChannelTypes.GUILD_SPACE;
      }
      return tmp5;
    }
  }
  return false;
};
