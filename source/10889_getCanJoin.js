// Module ID: 10889
// Function ID: 84677
// Name: getCanJoin
// Dependencies: []
// Exports: getCanJoin, getCanSync

// Module 10889 (getCanJoin)
const _module = require(dependencyMap[0]);
({ ActivityActionTypes: closure_3, ActivityFlags: closure_4 } = _module);
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  let message;
  let presenceActivity;
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, avatar: 0.0000000000000000000000000000000000000000000000015576649385897736 };
  } else if (importDefault(dependencyMap[1])(presenceActivity, message, tmp2.id)) {
    let obj = require(dependencyMap[2]);
    const partySize = obj.getPartySize(presenceActivity);
    if (obj2.hasPartySize(partySize)) {
      if (!obj3.isPartyFull(partySize)) {
        if (obj4.getIsInParty(tmp, presenceActivity)) {
          return { id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, avatar: 0.0000000000000000000000000000000000000000000000015576649385897736 };
        } else {
          if (obj5.getIsAskToJoin(message)) {
            return { id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, avatar: 0.0000000000000000000000000000000000000000000000015576649385897736 };
          } else {
            if (tmp3) {
              if (tmp4) {
                return {};
              }
            }
            const activity = message.activity;
            let type;
            if (null != activity) {
              type = activity.type;
            }
            if (type === constants.JOIN) {
              if (null != presenceActivity) {
                const remoteJoinableActivityPlatform = require(dependencyMap[7]).getRemoteJoinableActivityPlatform(presenceActivity);
                if (null != remoteJoinableActivityPlatform) {
                  obj = { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                  return obj;
                } else if (importDefault(dependencyMap[8])(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                  return {};
                }
                const obj6 = require(dependencyMap[7]);
              }
            }
            if (obj7.platformSupportsActivityJoin()) {
              if (tmp5) {
                obj = {};
              }
              return obj;
            }
            obj = { id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, avatar: 0.0000000000000000000000000000000000000000000000015576649385897736 };
            const obj7 = require(dependencyMap[9]);
          }
          const obj5 = require(dependencyMap[6]);
        }
        const obj4 = require(dependencyMap[5]);
      }
      const obj3 = require(dependencyMap[4]);
    }
    return { id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, avatar: 0.0000000000000000000000000000000000000000000000015576649385897736 };
  } else {
    return { id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, avatar: 0.0000000000000000000000000000000000000000000000015576649385897736 };
  }
};
export const getCanSync = function getCanSync(activity, tmp8Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    const tmp6 = !importDefault(dependencyMap[1])(activity, arg2, id.id);
    let tmp7 = !tmp6;
    if (!tmp6) {
      const tmp11 = !importDefault(dependencyMap[8])(activity, constants2.SYNC);
      let tmp12 = !tmp11;
      if (!tmp11) {
        const tmp15 = !require(dependencyMap[9]).isPlatformEmbedded;
        let tmp16 = !tmp15;
        if (!tmp15) {
          tmp16 = !require(dependencyMap[5]).getIsInParty(tmp8Result, activity);
          const obj = require(dependencyMap[5]);
        }
        tmp12 = tmp16;
      }
      tmp7 = tmp12;
    }
    tmp = tmp7;
  }
  return tmp;
};
