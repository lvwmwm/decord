// Module ID: 10883
// Function ID: 84555
// Name: getCanJoin
// Dependencies: [653, 10884, 10885, 10886, 10887, 10888, 10889, 10890, 5973, 477, 2]
// Exports: getCanJoin, getCanSync

// Module 10883 (getCanJoin)
import ME from "ME";

let closure_3;
let closure_4;
({ ActivityActionTypes: closure_3, ActivityFlags: closure_4 } = ME);
const result = require("getPartySize").fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  let message;
  let presenceActivity;
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else if (importDefault(10884)(presenceActivity, message, tmp2.id)) {
    let obj = require(10885) /* getPartySize */;
    const partySize = obj.getPartySize(presenceActivity);
    if (obj2.hasPartySize(partySize)) {
      if (!obj3.isPartyFull(partySize)) {
        if (obj4.getIsInParty(tmp, presenceActivity)) {
          return { canJoin: false, remoteJoinPlatform: null };
        } else {
          if (obj5.getIsAskToJoin(message)) {
            return { canJoin: false, remoteJoinPlatform: null };
          } else {
            if (tmp3) {
              if (tmp4) {
                return { canJoin: true, remoteJoinPlatform: null };
              }
            }
            const activity = message.activity;
            let type;
            if (null != activity) {
              type = activity.type;
            }
            if (type === constants.JOIN) {
              if (null != presenceActivity) {
                const remoteJoinableActivityPlatform = require(10890) /* getRemoteJoinableActivityPlatform */.getRemoteJoinableActivityPlatform(presenceActivity);
                if (null != remoteJoinableActivityPlatform) {
                  obj = { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                  return obj;
                } else if (importDefault(5973)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                  return { canJoin: true, remoteJoinPlatform: null };
                }
                const obj6 = require(10890) /* getRemoteJoinableActivityPlatform */;
              }
            }
            if (obj7.platformSupportsActivityJoin()) {
              if (tmp5) {
                obj = { canJoin: true, remoteJoinPlatform: null };
              }
              return obj;
            }
            obj = { canJoin: false, remoteJoinPlatform: null };
            obj7 = require(477) /* set */;
          }
          obj5 = require(10889) /* getIsAskToJoin */;
        }
        obj4 = require(10888) /* getIsInParty */;
      }
      obj3 = require(10887) /* isPartyFull */;
    }
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    return { canJoin: false, remoteJoinPlatform: null };
  }
};
export const getCanSync = function getCanSync(activity, tmp8Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    const tmp6 = !importDefault(10884)(activity, arg2, id.id);
    let tmp7 = !tmp6;
    if (!tmp6) {
      const tmp11 = !importDefault(5973)(activity, constants2.SYNC);
      let tmp12 = !tmp11;
      if (!tmp11) {
        const tmp15 = !require(477) /* set */.isPlatformEmbedded;
        let tmp16 = !tmp15;
        if (!tmp15) {
          tmp16 = !require(10888) /* getIsInParty */.getIsInParty(tmp8Result, activity);
          const obj = require(10888) /* getIsInParty */;
        }
        tmp12 = tmp16;
      }
      tmp7 = tmp12;
    }
    tmp = tmp7;
  }
  return tmp;
};
