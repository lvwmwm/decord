// Module ID: 12094
// Function ID: 12095
// Name: getRemoteJoinableActivityPlatform
// Dependencies: [7439, 4845, 1074, 1365, 1385, 9711, 2]
// Exports: getRemoteJoinableActivityPlatform

// Module 12094 (getRemoteJoinableActivityPlatform)
import FlagUtils from "FlagUtils" /* 1385 */;
import ConnectedAppsStore from "ConnectedAppsStore" /* 7439 */;
import SessionsStore from "SessionsStore" /* 4845 */;

require = fn;
const Constants = fn(1074);
({ ActivityFlags: closure_4, ActivityGamePlatforms: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

export const getRemoteJoinableActivityPlatform = function getRemoteJoinableActivityPlatform(presenceActivity) {
  if (null == presenceActivity) {
    return null;
  } else {
    const application_id = presenceActivity.application_id;
    if (null != application_id) {
      let num = presenceActivity.flags;
      if (num == null) {
        num = 0;
      }
      if (obj5.hasFlag(num, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
        const remoteApplicationActivity = SessionsStore.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          tmp4 = null;
          if (!tmp11Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              let num2 = remoteApplicationActivity.flags;
              if (num2 == null) {
                num2 = 0;
              }
              let tmp9 = null;
              if (tmp11Result4.hasFlag(num2, tmp.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                let platform1 = remoteApplicationActivity.platform;
                if (platform1 == null) {
                  platform1 = null;
                }
                tmp9 = platform1;
              }
              tmp4 = tmp9;
              tmp11Result4 = tmp11(1385);
            } else {
              tmp4 = null;
              if (!ConnectedAppsStore.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                if (tmp11Result5.isAndroid()) {
                  let isIOSResult = platform === constants2.ANDROID;
                } else {
                  isIOSResult = tmp11(1365).isIOS();
                  if (isIOSResult) {
                    isIOSResult = platform === constants2.IOS;
                  }
                  const tmp11Result6 = tmp11(1365);
                }
                tmp4 = null;
                tmp11Result5 = tmp11(1365);
              }
            }
          }
          tmp11Result = tmp11(9711);
        }
        return tmp4;
      }
      obj5 = FlagUtils;
      tmp = constants;
    }
    return null;
  }
};
