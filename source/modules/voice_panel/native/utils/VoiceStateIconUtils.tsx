// Module ID: 8906
// Function ID: 70167
// Name: isStableVoiceStateEqual
// Dependencies: [4177, 4146, 620, 566, 2]
// Exports: useMuteDeafenIconState, useVideoIconState

// Module 8906 (isStableVoiceStateEqual)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function isStableVoiceStateEqual(arg0, arg1) {
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
function useStableVoiceParticipant(id, guildId) {
  const _require = id;
  let closure_1 = guildId;
  const items = [_isNativeReflectConstruct, closure_4];
  const items1 = [id, guildId];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      const voiceState = outer1_4.getVoiceState(closure_1, closure_0);
      if (null != voiceState) {
        const obj = {};
        ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
        obj.isLocalMute = outer1_3.isLocalMute(voiceState.userId);
        obj.selfMute = voiceState.selfMute;
        return obj;
      }
    }
  }, items1, isStableVoiceStateEqual);
}
function useStableVideoState(id, guildId) {
  const _require = id;
  let closure_1 = guildId;
  const items = [_isNativeReflectConstruct, closure_4];
  const items1 = [guildId, id];
  return _require(566).useStateFromStoresObject(items, () => {
    if (null != closure_0) {
      const voiceState = outer1_4.getVoiceState(closure_1, closure_0);
    }
    if (null != closure_0) {
      if (null != voiceState) {
        const obj = { selfVideo: voiceState.selfVideo };
        let tmp6 = null;
        if (outer1_3.isLocalVideoDisabled(voiceState.userId)) {
          let str = "manual";
          if (outer1_3.isLocalVideoAutoDisabled(voiceState.userId)) {
            str = "auto";
          }
          tmp6 = str;
        }
        obj.localVideoDisabledState = tmp6;
        return obj;
      }
    }
    return { selfVideo: false, localVideoDisabledState: null };
  }, items1);
}
let obj = { DEAFENED_SERVER: 0, [0]: "DEAFENED_SERVER", DEAFENED: 1, [1]: "DEAFENED", MUTED_SERVER: 2, [2]: "MUTED_SERVER", MUTED_LOCAL: 3, [3]: "MUTED_LOCAL", MUTED: 4, [4]: "MUTED" };
obj = { VIDEO_DISABLED_LOCAL_AUTO: 0, [0]: "VIDEO_DISABLED_LOCAL_AUTO", VIDEO_DISABLED_LOCAL: 1, [1]: "VIDEO_DISABLED_LOCAL", VIDEO_ACTIVE: 2, [2]: "VIDEO_ACTIVE" };
const result = require("shallowEqual").fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

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
