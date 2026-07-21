// Module ID: 15658
// Function ID: 119617
// Name: isStableStreamParticipant
// Dependencies: []
// Exports: default, isStableParticipantWithUser, stableParticipantHasVideo

// Module 15658 (isStableStreamParticipant)
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
function isStableUserParticipant(tmp29Result) {
  let type;
  if (null != tmp29Result) {
    type = tmp29Result.type;
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
      tmp3 = importDefault(dependencyMap[5])(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ParticipantTypes = arg1(dependencyMap[4]).ParticipantTypes;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/voice_panel/native/utils/useStableParticipant.tsx");

export default function useStableParticipant(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [closure_3, closure_6, closure_4, closure_5];
  const items1 = [arg0, arg1, arg2];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => {
    let streamId;
    let streamId2;
    let voiceState;
    if (null != arg0) {
      const participant = participant.getParticipant(arg1, arg0);
      let tmp;
      if (null != participant) {
        tmp = participant;
      }
      if (null == tmp) {
        const user = user.getUser(arg0);
        if (null != user) {
          let obj = { type: constants.USER, id: arg0, user, selfVideo: false, canRenderVideo: false };
          const id = store.getId();
          obj.userNick = arg0(arg2[7]).getName(arg2, arg1, user);
          const obj5 = arg0(arg2[7]);
          obj.userAvatarDecoration = arg0(arg2[8]).getAvatarDecoration(user, arg2);
          obj.streamId = undefined;
          obj.ringing = false;
          obj.hasVideo = false;
          obj.isSelf = user.id === id;
          return obj;
        }
      } else {
        const tmp24 = arg1(arg2[9])(tmp);
        const type = tmp.type;
        if (constants.ACTIVITY === type) {
          obj = { type: tmp.type, id: arg0, applicationId: tmp.applicationId };
          return obj;
        } else {
          if (constants.STREAM !== type) {
            if (constants.HIDDEN_STREAM !== type) {
              if (constants.USER === type) {
                obj = { type: tmp.type, id: arg0 };
                ({ user: obj.user, voiceState } = tmp);
                let selfVideo;
                const id1 = store.getId();
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
                  tmp7 = !localVideoDisabled.isLocalVideoDisabled(tmp.user.id);
                }
                obj.canRenderVideo = tmp7;
                obj.isSelf = tmp.user.id === id1;
                return obj;
              }
            }
          }
          const obj1 = { type: tmp.type, id: arg0 };
          ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = tmp);
          let tmp12;
          const id2 = store.getId();
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
export const stableParticipantHasVideo = function stableParticipantHasVideo(tmp29Result) {
  let tmp = tmp29Result;
  const tmp2 = !isStableActivityParticipant(tmp29Result);
  if (!tmp2) {
    return tmp2;
  } else if (isStableStreamParticipant(tmp)) {
    tmp = null;
    let selfVideo = null != tmp.streamId;
  } else {
    selfVideo = tmp.selfVideo;
  }
};
