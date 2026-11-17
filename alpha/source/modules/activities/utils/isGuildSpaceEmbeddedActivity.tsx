// Module ID: 16026
// Function ID: 16027
// Name: isGuildSpaceEmbeddedActivity
// Dependencies: [5159, 5158, 7482, 5231, 1093, 2]
// Exports: default

// Module 16026 (isGuildSpaceEmbeddedActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5231 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7482 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5158 */;
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
        tmp5 = type === tmp(1093).ChannelTypes.GUILD_SPACE;
      }
      return tmp5;
    }
  }
  return false;
};
