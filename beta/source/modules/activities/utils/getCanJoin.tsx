// Module ID: 12182
// Function ID: 12183
// Name: getCanJoin
// Dependencies: [1071, 12183, 12184, 12185, 12186, 12187, 12188, 12189, 8061, 1378, 2]
// Exports: getCanJoin, getCanSync

// Module 12182 (getCanJoin)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import isInviteActiveDefault from "isInviteActive" /* 12183 */;
import _slicedToArray from "_slicedToArray" /* 12184 */;
import hasPartySize from "hasPartySize" /* 12185 */;
import isPartyFull from "isPartyFull" /* 12186 */;
import getIsInParty from "getIsInParty" /* 12187 */;
import getIsAskToJoin from "getIsAskToJoin" /* 12188 */;
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform" /* 12189 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export function getCanJoin(currentUserId) {
  let message;
  let presenceActivity;
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    const tmp13 = importDefault;
    if (isInviteActiveDefault(presenceActivity, message, tmp2.id)) {
      const obj = _slicedToArray;
      const partySize = obj.getPartySize(presenceActivity);
      const obj2 = hasPartySize;
      if (obj2.hasPartySize(partySize)) {
        const tmp6Result = isPartyFull;
        if (!tmp6Result.isPartyFull(partySize)) {
          const tmp6Result5 = getIsInParty;
          if (tmp6Result5.getIsInParty(tmp, presenceActivity)) {
            return { canJoin: false, remoteJoinPlatform: null };
          } else {
            const tmp6Result6 = getIsAskToJoin;
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
                  const tmp6Result7 = getRemoteJoinableActivityPlatform;
                  const remoteJoinableActivityPlatform = tmp6Result7.getRemoteJoinableActivityPlatform(presenceActivity);
                  if (null != remoteJoinableActivityPlatform) {
                    return { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                  } else if (tmp13(8061)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                    return { canJoin: true, remoteJoinPlatform: null };
                  }
                }
              }
              const tmp6Result8 = PlatformUtils;
              if (tmp6Result8.platformSupportsActivityJoin()) {
                let obj4;
                if (tmp5) {
                  obj4 = { canJoin: true, remoteJoinPlatform: null };
                }
                return obj4;
              }
              obj4 = { canJoin: false, remoteJoinPlatform: null };
            }
          }
        }
      }
      return { canJoin: false, remoteJoinPlatform: null };
    } else {
      return { canJoin: false, remoteJoinPlatform: null };
    }
  }
}
export function getCanSync(activity, tmp7Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    let tmp6 = isInviteActiveDefault(activity, arg2, id.id);
    const tmp4 = importDefault;
    if (tmp6) {
      let tmp8 = tmp4(8061)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = PlatformUtils.isPlatformEmbedded;
        const tmp9 = require;
        if (isPlatformEmbedded) {
          const tmp9Result = tmp9(12187);
          isPlatformEmbedded = !tmp9Result.getIsInParty(tmp7Result, activity);
        }
        tmp8 = isPlatformEmbedded;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
  }
  return tmp;
}
