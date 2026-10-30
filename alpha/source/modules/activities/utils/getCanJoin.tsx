// Module ID: 11642
// Function ID: 11643
// Name: getCanJoin
// Dependencies: [1072, 11643, 11645, 11646, 11647, 11648, 11649, 11650, 7477, 1376, 2]
// Exports: getCanJoin, getCanSync

// Module 11642 (getCanJoin)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import isInviteActiveDefault from "isInviteActive" /* 11643 */;
import _slicedToArray from "_slicedToArray" /* 11645 */;
import hasPartySize from "hasPartySize" /* 11646 */;
import isPartyFull from "isPartyFull" /* 11647 */;
import getIsInParty from "getIsInParty" /* 11648 */;
import getIsAskToJoin from "getIsAskToJoin" /* 11649 */;
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform" /* 11650 */;
import Constants from "Constants" /* 1072 */;
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
                  } else if (tmp13(7477)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
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
      let tmp8 = tmp4(7477)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = PlatformUtils.isPlatformEmbedded;
        const tmp9 = require;
        if (isPlatformEmbedded) {
          const tmp9Result = tmp9(11648);
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
