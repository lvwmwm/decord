// Module ID: 15833
// Function ID: 122194
// Name: isStableStreamParticipant
// Dependencies: [4143, 1194, 4177, 1849, 4148, 620, 566, 4319, 9126, 10052, 2]
// Exports: default, isStableParticipantWithUser, stableParticipantHasVideo

// Module 15833 (isStableStreamParticipant)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
function isStableStreamParticipant(participant) {
  let type;
  if (null != participant) {
    type = participant.type;
  }
  let tmp2 = type === ParticipantTypes.STREAM;
  if (!tmp2) {
    let type1;
    if (null != participant) {
      type1 = participant.type;
    }
    tmp2 = type1 === ParticipantTypes.HIDDEN_STREAM;
  }
  return Boolean(tmp2);
}
function isStableUserParticipant(c16) {
  let type;
  if (null != c16) {
    type = c16.type;
  }
  return Boolean(type === ParticipantTypes.USER);
}
function isStableActivityParticipant(participant) {
  let type;
  if (null != participant) {
    type = participant.type;
  }
  return Boolean(type === ParticipantTypes.ACTIVITY);
}
function areStableParticipantsEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = importDefault(620)(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/utils/useStableParticipant.tsx");

export default function useStableParticipant(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [_isNativeReflectConstruct, closure_6, closure_4, closure_5];
  const items1 = [arg0, arg1, arg2];
  return _require(566).useStateFromStores(items, () => {
    let streamId;
    let streamId2;
    let voiceState;
    if (null != callback) {
      const participant = outer1_3.getParticipant(callback2, callback);
      let tmp;
      if (null != participant) {
        tmp = participant;
      }
      if (null == tmp) {
        const user = outer1_6.getUser(callback);
        if (null != user) {
          let obj = { type: outer1_7.USER, id: callback, user, selfVideo: false, canRenderVideo: false };
          const id = outer1_4.getId();
          obj.userNick = callback(4319).getName(dependencyMap, callback2, user);
          const obj5 = callback(4319);
          obj.userAvatarDecoration = callback(9126).getAvatarDecoration(user, dependencyMap);
          obj.streamId = undefined;
          obj.ringing = false;
          obj.hasVideo = false;
          obj.isSelf = user.id === id;
          return obj;
        }
      } else {
        const tmp24 = callback2(10052)(tmp);
        const type = tmp.type;
        if (outer1_7.ACTIVITY === type) {
          obj = { type: tmp.type, id: callback, applicationId: tmp.applicationId };
          return obj;
        } else {
          if (outer1_7.STREAM !== type) {
            if (outer1_7.HIDDEN_STREAM !== type) {
              if (outer1_7.USER === type) {
                obj = { type: tmp.type, id: callback };
                ({ user: obj.user, voiceState } = tmp);
                let selfVideo;
                const id1 = outer1_4.getId();
                if (null != voiceState) {
                  selfVideo = voiceState.selfVideo;
                }
                obj.selfVideo = null != selfVideo && selfVideo;
                ({ userNick: obj.userNick, userAvatarDecoration: obj.userAvatarDecoration, streamId } = tmp);
                let tmp6;
                if (null != streamId) {
                  tmp6 = streamId;
                }
                obj.streamId = tmp6;
                obj.ringing = tmp.ringing;
                obj.hasVideo = tmp24;
                let tmp7 = tmp24;
                if (tmp24) {
                  tmp7 = !outer1_5.isLocalVideoDisabled(tmp.user.id);
                }
                obj.canRenderVideo = tmp7;
                obj.isSelf = tmp.user.id === id1;
                return obj;
              }
            }
          }
          const obj1 = { type: tmp.type, id: callback };
          ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = tmp);
          let tmp12;
          const id2 = outer1_4.getId();
          if (null != streamId2) {
            tmp12 = streamId2;
          }
          obj1.streamId = tmp12;
          const guildId = tmp.stream.guildId;
          let tmp13;
          if (null != guildId) {
            tmp13 = guildId;
          }
          obj1.streamGuildId = tmp13;
          obj1.hasVideo = tmp24;
          obj1.isSelf = tmp.user.id === id2;
          return obj1;
        }
      }
    }
  }, items1, areStableParticipantsEqual);
};
export { isStableStreamParticipant };
export { isStableUserParticipant };
export { isStableActivityParticipant };
export const isStableParticipantWithUser = function isStableParticipantWithUser(participant) {
  let tmp = isStableStreamParticipant(participant);
  if (!tmp) {
    tmp = isStableUserParticipant(participant);
  }
  return tmp;
};
export const stableParticipantHasVideo = function stableParticipantHasVideo(c16) {
  let tmp = c16;
  const tmp2 = !isStableActivityParticipant(c16);
  if (!tmp2) {
    return tmp2;
  } else if (isStableStreamParticipant(tmp)) {
    tmp = null;
    let selfVideo = null != tmp.streamId;
  } else {
    selfVideo = tmp.selfVideo;
  }
};
