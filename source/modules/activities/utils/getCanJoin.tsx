// Module ID: 10941
// Function ID: 10942
// Name: getCanJoin
// Dependencies: [676, 10942, 10943, 10944, 10945, 10946, 10947, 10948, 6023, 500, 2]
// Exports: getCanJoin, getCanSync

// Module 10941 (getCanJoin)
import ME from "ME";

let c3;
let c4;
({ ActivityActionTypes: c3, ActivityFlags: c4 } = ME);
const result = require("getPartySize").fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  let message;
  let presenceActivity;
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    if (importDefault(10942)(presenceActivity, message, tmp2.id)) {
      let obj = require(10943) /* getPartySize */;
      const partySize = obj.getPartySize(presenceActivity);
      if (obj2.hasPartySize(partySize)) {
        let tmp6Result = tmp6(10945);
        if (!tmp6Result.isPartyFull(partySize)) {
          tmp6Result = tmp6(10946);
          if (tmp6Result.getIsInParty(tmp, presenceActivity)) {
            return { canJoin: false, remoteJoinPlatform: null };
          } else {
            if (tmp6Result1.getIsAskToJoin(message)) {
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
                  const remoteJoinableActivityPlatform = tmp6(10948).getRemoteJoinableActivityPlatform(presenceActivity);
                  if (null != remoteJoinableActivityPlatform) {
                    obj = { canJoin: true, remoteJoinPlatform: null };
                    obj[1] = remoteJoinableActivityPlatform;
                    return obj;
                  } else if (tmp13(6023)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                    return { canJoin: true, remoteJoinPlatform: null };
                  }
                  const tmp6Result2 = tmp6(10948);
                }
              }
              if (tmp6Result3.platformSupportsActivityJoin()) {
                if (tmp5) {
                  obj = { canJoin: true, remoteJoinPlatform: null };
                }
                return obj;
              }
              obj = { canJoin: false, remoteJoinPlatform: null };
              tmp6Result3 = tmp6(500);
            }
            tmp6Result1 = tmp6(10947);
          }
        }
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
    let tmp6 = importDefault(10942)(activity, arg2, id.id);
    if (tmp6) {
      let tmp8 = tmp4(6023)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = require(500) /* set */.isPlatformEmbedded;
        if (isPlatformEmbedded) {
          isPlatformEmbedded = !tmp9(10946).getIsInParty(tmp8Result, activity);
          const tmp9Result = tmp9(10946);
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
