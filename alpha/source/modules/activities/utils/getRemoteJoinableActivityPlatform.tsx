// Module ID: 11824
// Function ID: 11825
// Name: getRemoteJoinableActivityPlatform
// Dependencies: [7397, 5886, 1072, 1357, 9870, 1398, 11671, 2]
// Exports: getRemoteJoinableActivityPlatform

// Module 11824 (getRemoteJoinableActivityPlatform)
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import FlagUtils from "FlagUtils" /* 1398 */;
import ActivityFlagUtils from "ActivityFlagUtils" /* 11671 */;
import ConnectedAppsStore from "ConnectedAppsStore" /* 7397 */;
import SessionsStore from "SessionsStore" /* 5886 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

export function getRemoteJoinableActivityPlatform(presenceActivity) {
  if (null == presenceActivity) {
    return null;
  } else {
    const application_id = presenceActivity.application_id;
    if (null != application_id) {
      let num = presenceActivity.flags;
      const hasFlag2 = FlagUtils.hasFlag;
      FlagUtils;
      if (num == null) {
        num = 0;
      }
      const tmp = ActivityFlags;
      if (hasFlag2(num, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
        const remoteApplicationActivity = SessionsStore.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          tmp4 = null;
          const tmp9Result = ActivityFlagUtils;
          if (!tmp9Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              let num2 = remoteApplicationActivity.flags;
              const hasFlag = FlagUtils.hasFlag;
              FlagUtils;
              if (num2 == null) {
                num2 = 0;
              }
              let tmp7 = null;
              if (hasFlag(num2, tmp.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                let platform1 = remoteApplicationActivity.platform;
                if (platform1 == null) {
                  platform1 = null;
                }
                tmp7 = platform1;
              }
              tmp4 = tmp7;
            } else {
              tmp4 = null;
              if (!ConnectedAppsStore.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                const tmp9Result5 = utils_PlatformUtils;
                if (tmp9Result5.isAndroid()) {
                  platform === tmp9(9870).ActivityGamePlatforms.ANDROID;
                } else {
                  const tmp9Result6 = utils_PlatformUtils;
                  tmp9Result6.isIOS() && platform === tmp9(9870).ActivityGamePlatforms.IOS;
                }
                tmp4 = null;
              }
            }
          }
        }
        return tmp4;
      }
    }
    return null;
  }
}
