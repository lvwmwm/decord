// Module ID: 10939
// Function ID: 84975
// Name: getRemoteJoinableActivityPlatform
// Dependencies: [5067, 4145, 653, 478, 1360, 10478, 2]
// Exports: getRemoteJoinableActivityPlatform

// Module 10939 (getRemoteJoinableActivityPlatform)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ ActivityFlags: closure_4, ActivityGamePlatforms: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

export const getRemoteJoinableActivityPlatform = function getRemoteJoinableActivityPlatform(presenceActivity) {
  if (null == presenceActivity) {
    return null;
  } else {
    const application_id = presenceActivity.application_id;
    if (null != application_id) {
      const flags2 = presenceActivity.flags;
      let num = 0;
      if (null != flags2) {
        num = flags2;
      }
      if (obj5.hasFlag(num, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
        remoteApplicationActivity = remoteApplicationActivity.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          tmp4 = null;
          if (!obj.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              const flags = remoteApplicationActivity.flags;
              let num4 = 0;
              if (null != flags) {
                num4 = flags;
              }
              let tmp18 = null;
              if (obj4.hasFlag(num4, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                const platform2 = remoteApplicationActivity.platform;
                tmp18 = null;
                if (null != platform2) {
                  tmp18 = platform2;
                }
              }
              tmp4 = tmp18;
              obj4 = require(1360) /* hasFlag */;
            } else {
              tmp4 = null;
              if (!connected.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                if (obj2.isAndroid()) {
                  let tmp12 = platform === constants2.ANDROID;
                } else {
                  const tmp11 = !require(478) /* isWindows */.isIOS();
                  tmp12 = !tmp11;
                  if (!tmp11) {
                    tmp12 = platform === constants2.IOS;
                  }
                  const obj3 = require(478) /* isWindows */;
                }
                tmp4 = null;
                obj2 = require(478) /* isWindows */;
              }
            }
          }
          obj = require(10478) /* _computeActivityPartyPrivacyFlags */;
        }
        return tmp4;
      }
      obj5 = require(1360) /* hasFlag */;
    }
    return null;
  }
};
