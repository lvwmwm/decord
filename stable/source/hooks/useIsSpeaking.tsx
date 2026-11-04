// Module ID: 6813
// Function ID: 6814
// Name: useIsSpeaking
// Dependencies: [6038, 4906, 6717, 5662, 558, 576, 504, 2]
// Exports: getIsSpeaking

// Module 6813 (useIsSpeaking)
import SoundboardStore from "SoundboardStore" /* 6038 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
import SpeakingStore from "SpeakingStore" /* 6717 */;
import VoiceStateStore from "VoiceStateStore" /* 5662 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSpeaking(userId) {
  let checkIsMuted;
  let checkSoundSharing;
  let context;
  let first;
  let mute;
  let tmp14;
  let tmp9;
  let tmp = userId;
  const obj = userId(context[5]);
  const cResult = obj.c(15);
  userId = userId.userId;
  ({ checkSoundSharing, checkIsMuted, context } = userId);
  let closure_2 = tmp4;
  let tmp5 = undefined !== checkIsMuted && checkIsMuted;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, mute];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function c() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let voiceStateForChannel = null;
      if (null != voiceChannelId) {
        voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
      }
      return voiceStateForChannel;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(context[6]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (tmp5) {
    mute = undefined;
    if (stateFromStores != null) {
      mute = stateFromStores.mute;
    }
    if (!mute) {
      let selfMute;
      if (stateFromStores != null) {
        selfMute = stateFromStores.selfMute;
      }
      mute = selfMute;
    }
    tmp5 = mute;
  }
  mute = tmp5;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SpeakingStore];
    cResult[3] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === context) {
    if (cResult[5] === tmp5) {
      let tmp16;
      let tmp18;
      if (cResult[6] === userId) {
        tmp16 = cResult[7];
      }
      const tmpResult3 = tmp(context[6]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp14, tmp16);
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SpeakingStore];
        cResult[8] = items2;
        tmp18 = items2;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === (undefined !== checkSoundSharing && checkSoundSharing)) {
        let tmp20;
        if (cResult[10] === userId) {
          tmp20 = cResult[11];
        }
        const tmpResult4 = tmp(context[6]);
        const stateFromStores2 = tmpResult4.useStateFromStores(tmp18, tmp20);
        if (cResult[12] === stateFromStores2) {
          let tmp22;
          if (cResult[13] === stateFromStores1) {
            tmp22 = cResult[14];
          }
          return tmp22;
        }
        cResult[12] = stateFromStores2;
        class V {
          constructor() {
            const tmp = SpeakingStore.isSoundSharing(userId) && closure_2;
            return tmp;
          }
        }
        cResult[13] = stateFromStores1;
        cResult[14] = stateFromStores1 || stateFromStores2;
        tmp22 = tmp23;
      }
      class V {
        constructor() {
          const tmp = SpeakingStore.isSoundSharing(userId) && closure_2;
          return tmp;
        }
      }
      cResult[9] = undefined !== checkSoundSharing && checkSoundSharing;
      cResult[10] = userId;
      cResult[11] = V;
      tmp20 = V;
    }
  }
  const fn2 = function v() {
    const isSpeakingResult = SpeakingStore.isSpeaking(userId, context) && !mute;
    return isSpeakingResult;
  };
  cResult[4] = context;
  cResult[5] = tmp5;
  cResult[6] = userId;
  cResult[7] = fn2;
  tmp16 = fn2;
}) : (function useIsSpeaking(checkIsMuted) {
  let checkSoundSharing;
  ({ userId: require, checkSoundSharing } = checkIsMuted);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkIsMuted.checkIsMuted;
  if (flag === undefined) {
    flag = false;
  }
  const context = checkIsMuted.context;
  flag = undefined;
  let tmp = require;
  const items = [VoiceStateStore, flag];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, require);
    }
    return voiceStateForChannel;
  });
  if (flag) {
    let mute;
    if (stateFromStores != null) {
      mute = stateFromStores.mute;
    }
    if (!mute) {
      let selfMute;
      if (stateFromStores != null) {
        selfMute = stateFromStores.selfMute;
      }
      mute = selfMute;
    }
    flag = mute;
  }
  const items1 = [SpeakingStore];
  const tmpResult = tmp(checkSoundSharing[6]);
  let stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    const isSpeakingResult = SpeakingStore.isSpeaking(require, context) && !flag;
    return isSpeakingResult;
  });
  const items2 = [SpeakingStore];
  const tmpResult2 = tmp(checkSoundSharing[6]);
  if (!stateFromStores1) {
    stateFromStores1 = tmpResult2.useStateFromStores(items2, () => {
      const tmp = SpeakingStore.isSoundSharing(require) && checkSoundSharing;
      return tmp;
    });
  }
  return stateFromStores1;
});
const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default tmp2;
export const getIsSpeaking = function getIsSpeaking(checkIsMuted) {
  let checkSoundSharing;
  let obj;
  let obj2;
  let obj3;
  let userId;
  ({ userId, checkSoundSharing } = checkIsMuted);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkIsMuted.checkIsMuted;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = arg1;
  const context = checkIsMuted.context;
  if (arg1 === undefined) {
    const items = [VoiceStateStore, SelectedChannelStore, SpeakingStore, SoundboardStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const voiceChannelId = obj2.getVoiceChannelId();
  let voiceStateForChannel = null;
  if (null != voiceChannelId) {
    voiceStateForChannel = obj.getVoiceStateForChannel(voiceChannelId, userId);
  }
  if (flag) {
    let mute;
    if (voiceStateForChannel != null) {
      mute = voiceStateForChannel.mute;
    }
    if (!mute) {
      let selfMute;
      if (voiceStateForChannel != null) {
        selfMute = voiceStateForChannel.selfMute;
      }
      mute = selfMute;
    }
    flag = mute;
  }
  let tmp10 = obj3.isSpeaking(userId, context) && !flag;
  const tmp11 = obj3.isSoundSharing(userId) && checkSoundSharing;
  if (!tmp10) {
    tmp10 = tmp11;
  }
  return tmp10;
};
