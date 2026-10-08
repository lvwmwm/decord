// Module ID: 8772
// Function ID: 8773
// Name: VoiceStateIconUtils
// Dependencies: [2011, 5111, 568, 558, 576, 504, 2]

// Module 8772 (VoiceStateIconUtils)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isStableVoiceStateEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
    const tmp3 = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
  }
  return tmp;
}
const MuteDeafenIconState = { DEAFENED_SERVER: 0, [0]: "DEAFENED_SERVER", DEAFENED: 1, [1]: "DEAFENED", MUTED_SERVER: 2, [2]: "MUTED_SERVER", MUTED_LOCAL: 3, [3]: "MUTED_LOCAL", MUTED: 4, [4]: "MUTED" };
let obj2 = { VIDEO_DISABLED_LOCAL_AUTO: 0, [0]: "VIDEO_DISABLED_LOCAL_AUTO", VIDEO_DISABLED_LOCAL: 1, [1]: "VIDEO_DISABLED_LOCAL", VIDEO_ACTIVE: 2, [2]: "VIDEO_ACTIVE" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStableVoiceParticipant(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, VoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7, tmp8, isStableVoiceStateEqual);
  }
  const fn = function s() {
    if (null != closure_0) {
      const voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
      if (null != voiceState) {
        const obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: MediaEngineStore.isLocalMute(voiceState.userId), selfMute: voiceState.selfMute };
        ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
        return obj;
      }
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function useStableVoiceParticipant(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      const voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
      if (null != voiceState) {
        const obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: MediaEngineStore.isLocalMute(voiceState.userId), selfMute: voiceState.selfMute };
        ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
        return obj;
      }
    }
  }, items1, isStableVoiceStateEqual);
});
let closure_8 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMuteDeafenIconState(arg0, arg1) {
  const tmp = closure_8(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    let DEAFENED_SERVER;
    if (tmp.deaf) {
      DEAFENED_SERVER = obj.DEAFENED_SERVER;
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
    tmp2 = DEAFENED_SERVER;
  }
  return tmp2;
}) : (function useMuteDeafenIconState(arg0, arg1) {
  const tmp = closure_8(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    let DEAFENED_SERVER;
    if (tmp.deaf) {
      DEAFENED_SERVER = obj.DEAFENED_SERVER;
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
    tmp2 = DEAFENED_SERVER;
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStableVideoState(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = MediaEngineStore;
    const items = [MediaEngineStore, VoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
  }
  const fn = function s() {
    let tmp5;
    let voiceState;
    if (null != closure_0) {
      voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
    }
    if (null != closure_0) {
      if (null != voiceState) {
        obj2 = { selfVideo: voiceState.selfVideo, localVideoDisabledState: tmp5 };
        tmp5 = null;
        const obj = MediaEngineStore;
        if (MediaEngineStore.isLocalVideoDisabled(voiceState.userId)) {
          let str = "manual";
          if (obj.isLocalVideoAutoDisabled(voiceState.userId)) {
            str = "auto";
          }
          tmp5 = str;
        }
        return obj2;
      }
    }
    return { selfVideo: false, localVideoDisabledState: null };
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function useStableVideoState(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg1, arg0];
  return obj.useStateFromStoresObject(items, () => {
    let tmp5;
    let voiceState;
    if (null != closure_0) {
      voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
    }
    if (null != closure_0) {
      if (null != voiceState) {
        obj2 = { selfVideo: voiceState.selfVideo, localVideoDisabledState: tmp5 };
        tmp5 = null;
        const obj = MediaEngineStore;
        if (MediaEngineStore.isLocalVideoDisabled(voiceState.userId)) {
          let str = "manual";
          if (obj.isLocalVideoAutoDisabled(voiceState.userId)) {
            str = "auto";
          }
          tmp5 = str;
        }
        return obj2;
      }
    }
    return { selfVideo: false, localVideoDisabledState: null };
  }, items1);
});
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoIconState(arg0, arg1) {
  const tmp = closure_9(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    let tmp3 = null;
    if (tmp.selfVideo) {
      let VIDEO_ACTIVE;
      if ("auto" === tmp.localVideoDisabledState) {
        VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL_AUTO;
      } else if ("manual" === tmp.localVideoDisabledState) {
        VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL;
      } else {
        VIDEO_ACTIVE = obj2.VIDEO_ACTIVE;
      }
      tmp3 = VIDEO_ACTIVE;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}) : (function useVideoIconState(arg0, arg1) {
  const tmp = closure_9(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    let tmp3 = null;
    if (tmp.selfVideo) {
      let VIDEO_ACTIVE;
      if ("auto" === tmp.localVideoDisabledState) {
        VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL_AUTO;
      } else if ("manual" === tmp.localVideoDisabledState) {
        VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL;
      } else {
        VIDEO_ACTIVE = obj2.VIDEO_ACTIVE;
      }
      tmp3 = VIDEO_ACTIVE;
    }
    tmp2 = tmp3;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

export { MuteDeafenIconState };
export const VideoIconState = obj2;
export const useStableVoiceParticipant = tmp2;
export const useMuteDeafenIconState = tmp3;
export const useStableVideoState = tmp4;
export const useVideoIconState = tmp5;
