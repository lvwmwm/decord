// Module ID: 15761
// Function ID: 15762
// Name: isGuildSpaceEmbeddedActivity
// Dependencies: [5019, 5018, 9844, 5091, 1093, 2]
// Exports: default

// Module 15761 (isGuildSpaceEmbeddedActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5091 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9844 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
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
