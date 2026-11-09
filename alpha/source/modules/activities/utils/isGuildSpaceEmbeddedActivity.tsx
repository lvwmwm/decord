// Module ID: 15813
// Function ID: 15814
// Name: isGuildSpaceEmbeddedActivity
// Dependencies: [4989, 4988, 9828, 5061, 1093, 2]
// Exports: default

// Module 15813 (isGuildSpaceEmbeddedActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5061 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9828 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
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
