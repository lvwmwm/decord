// Module ID: 10902
// Function ID: 84737
// Name: getRemoteJoinableActivityPlatform
// Dependencies: []
// Exports: getRemoteJoinableActivityPlatform

// Module 10902 (getRemoteJoinableActivityPlatform)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ ActivityFlags: closure_4, ActivityGamePlatforms: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

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
        const remoteApplicationActivity = remoteApplicationActivity.getRemoteApplicationActivity(application_id);
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
              const obj4 = arg1(dependencyMap[4]);
            } else {
              tmp4 = null;
              if (!connected.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                if (obj2.isAndroid()) {
                  let tmp12 = platform === constants2.ANDROID;
                } else {
                  const tmp11 = !arg1(dependencyMap[3]).isIOS();
                  tmp12 = !tmp11;
                  if (!tmp11) {
                    tmp12 = platform === constants2.IOS;
                  }
                  const obj3 = arg1(dependencyMap[3]);
                }
                tmp4 = null;
                const obj2 = arg1(dependencyMap[3]);
              }
            }
          }
          const obj = arg1(dependencyMap[5]);
        }
        return tmp4;
      }
      const obj5 = arg1(dependencyMap[4]);
    }
    return null;
  }
};
