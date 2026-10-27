// Module ID: 11347
// Function ID: 11348
// Name: getCanJoin
// Dependencies: [1087, 11348, 11350, 11351, 11352, 11353, 11354, 11355, 7409, 1384, 2]
// Exports: getCanJoin, getCanSync

// Module 11347 (getCanJoin)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import isInviteActiveDefault from "isInviteActive" /* 11348 */;
import _slicedToArray from "_slicedToArray" /* 11350 */;
import hasPartySize from "hasPartySize" /* 11351 */;
import isPartyFull from "isPartyFull" /* 11352 */;
import getIsInParty from "getIsInParty" /* 11353 */;
import getIsAskToJoin from "getIsAskToJoin" /* 11354 */;
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform" /* 11355 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
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
                  } else if (tmp13(7409)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
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
};
export const getCanSync = function getCanSync(activity, tmp7Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    let tmp6 = isInviteActiveDefault(activity, arg2, id.id);
    const tmp4 = importDefault;
    if (tmp6) {
      let tmp8 = tmp4(7409)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = PlatformUtils.isPlatformEmbedded;
        const tmp9 = require;
        if (isPlatformEmbedded) {
          const tmp9Result = tmp9(11353);
          isPlatformEmbedded = !tmp9Result.getIsInParty(tmp7Result, activity);
        }
        tmp8 = isPlatformEmbedded;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
  }
  return tmp;
};
