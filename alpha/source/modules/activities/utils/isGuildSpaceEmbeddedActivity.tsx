// Module ID: 14713
// Function ID: 14714
// Name: isGuildSpaceEmbeddedActivity
// Dependencies: [4861, 4860, 7734, 4933, 1092, 2]
// Exports: default

// Module 14713 (isGuildSpaceEmbeddedActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4933 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7734 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4860 */;
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
