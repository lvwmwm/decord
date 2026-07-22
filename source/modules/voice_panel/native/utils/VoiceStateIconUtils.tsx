// Module ID: 8860
// Function ID: 69911
// Name: isStableVoiceStateEqual
// Dependencies: []
// Exports: useMuteDeafenIconState, useVideoIconState

// Module 8860 (isStableVoiceStateEqual)
function isStableVoiceStateEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = importDefault(dependencyMap[2])(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
function useStableVoiceParticipant(id, guildId) {
  guildId = id;
  const importDefault = guildId;
  const items = [closure_3, closure_4];
  const items1 = [id, guildId];
  return guildId(dependencyMap[3]).useStateFromStores(items, () => {
    if (null != arg0) {
      const voiceState = voiceState.getVoiceState(arg1, arg0);
      if (null != voiceState) {
        const obj = {};
        ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
        obj.isLocalMute = localMute.isLocalMute(voiceState.userId);
        obj.selfMute = voiceState.selfMute;
        return obj;
      }
    }
  }, items1, isStableVoiceStateEqual);
}
function useStableVideoState(id, guildId) {
  guildId = id;
  const importDefault = guildId;
  const items = [closure_3, closure_4];
  const items1 = [guildId, id];
  return guildId(dependencyMap[3]).useStateFromStoresObject(items, () => {
    if (null != arg0) {
      const voiceState = voiceState.getVoiceState(arg1, arg0);
    }
    if (null != arg0) {
      if (null != voiceState) {
        const obj = { selfVideo: voiceState.selfVideo };
        let tmp6 = null;
        if (closure_3.isLocalVideoDisabled(voiceState.userId)) {
          let str = "manual";
          if (closure_3.isLocalVideoAutoDisabled(voiceState.userId)) {
            str = "auto";
          }
          tmp6 = str;
        }
        obj.localVideoDisabledState = tmp6;
        return obj;
      }
    }
    return { 9223372036854775807: "L", 9223372036854775807: "L" };
  }, items1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let obj = { DEAFENED_SERVER: 0, [0]: "DEAFENED_SERVER", DEAFENED: 1, [1]: "DEAFENED", MUTED_SERVER: 2, [2]: "MUTED_SERVER", MUTED_LOCAL: 3, [3]: "MUTED_LOCAL", MUTED: 4, [4]: "MUTED" };
obj = { VIDEO_DISABLED_LOCAL_AUTO: 0, [0]: "VIDEO_DISABLED_LOCAL_AUTO", VIDEO_DISABLED_LOCAL: 1, [1]: "VIDEO_DISABLED_LOCAL", VIDEO_ACTIVE: 2, [2]: "VIDEO_ACTIVE" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

export const MuteDeafenIconState = obj;
export const VideoIconState = obj;
export { useStableVoiceParticipant };
export const useMuteDeafenIconState = function useMuteDeafenIconState(id, guildId) {
  const tmp = useStableVoiceParticipant(id, guildId);
  if (null == tmp) {
    return null;
  } else if (tmp.deaf) {
    let DEAFENED_SERVER = obj.DEAFENED_SERVER;
  } else if (tmp.selfDeaf) {
    DEAFENED_SERVER = obj.DEAFENED;
  } else if (tmp.mute) {
    DEAFENED_SERVER = obj.MUTED_SERVER;
  } else if (tmp.isLocalMute) {
    DEAFENED_SERVER = obj.MUTED_LOCAL;
  } else {
    DEAFENED_SERVER = null;
    if (tmp.selfMute) {
      DEAFENED_SERVER = obj.MUTED;
    }
  }
};
export { useStableVideoState };
export const useVideoIconState = function useVideoIconState(id, guildId) {
  const tmp = useStableVideoState(id, guildId);
  let tmp2 = null;
  if (null != tmp) {
    if (!tmp.selfVideo) {
      tmp2 = null;
    } else if ("auto" === tmp.localVideoDisabledState) {
      let VIDEO_ACTIVE = obj.VIDEO_DISABLED_LOCAL_AUTO;
    } else if ("manual" === tmp.localVideoDisabledState) {
      VIDEO_ACTIVE = obj.VIDEO_DISABLED_LOCAL;
    } else {
      VIDEO_ACTIVE = obj.VIDEO_ACTIVE;
    }
  }
  return tmp2;
};
