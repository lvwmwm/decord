// Module ID: 11917
// Function ID: 11918
// Name: getCanJoin
// Dependencies: [1078, 11918, 11919, 11920, 11921, 11922, 11923, 11924, 7589, 1368, 2]
// Exports: getCanJoin, getCanSync

// Module 11917 (getCanJoin)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import isInviteActiveDefault from "isInviteActive" /* 11918 */;
import getPartySize from "getPartySize" /* 11919 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    if (isInviteActiveDefault(presenceActivity, message, tmp2.id)) {
      const partySize = getPartySize.getPartySize(presenceActivity);
      if (obj2.hasPartySize(partySize)) {
        if (!tmp6Result.isPartyFull(partySize)) {
          if (tmp6Result5.getIsInParty(tmp, presenceActivity)) {
            return { canJoin: false, remoteJoinPlatform: null };
          } else {
            if (tmp6Result6.getIsAskToJoin(message)) {
              return { canJoin: false, remoteJoinPlatform: null };
            } else {
              if (tmp3) {
                if (tmp4) {
                  return { canJoin: true, remoteJoinPlatform: null };
                }
              }
              const activity = message.activity;
              let type;
              if (activity != null) {
                type = activity.type;
              }
              if (type === constants.JOIN) {
                if (null != presenceActivity) {
                  const remoteJoinableActivityPlatform = tmp6(11924).getRemoteJoinableActivityPlatform(presenceActivity);
                  if (null != remoteJoinableActivityPlatform) {
                    const obj3 = { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                    return obj3;
                  } else if (tmp13(7589)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                    return { canJoin: true, remoteJoinPlatform: null };
                  }
                  const tmp6Result7 = tmp6(11924);
                }
              }
              if (tmp6Result8.platformSupportsActivityJoin()) {
                if (tmp5) {
                  let obj4 = { canJoin: true, remoteJoinPlatform: null };
                }
                return obj4;
              }
              obj4 = { canJoin: false, remoteJoinPlatform: null };
              tmp6Result8 = tmp6(1368);
            }
            tmp6Result6 = tmp6(11923);
          }
          tmp6Result5 = tmp6(11922);
        }
        tmp6Result = tmp6(11921);
      }
      return { canJoin: false, remoteJoinPlatform: null };
    } else {
      return { canJoin: false, remoteJoinPlatform: null };
    }
    tmp13 = importDefault;
  }
};
export const getCanSync = function getCanSync(activity, tmp8Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    let tmp6 = isInviteActiveDefault(activity, arg2, id.id);
    if (tmp6) {
      let tmp8 = tmp4(7589)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = PlatformUtils.isPlatformEmbedded;
        if (isPlatformEmbedded) {
          isPlatformEmbedded = !tmp9(11922).getIsInParty(tmp8Result, activity);
          const tmp9Result = tmp9(11922);
        }
        tmp8 = isPlatformEmbedded;
        tmp9 = require;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
    tmp4 = importDefault;
  }
  return tmp;
};
