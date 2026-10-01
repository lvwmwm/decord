// Module ID: 9133
// Function ID: 9134
// Name: VoiceStateIconUtils
// Dependencies: [1993, 4855, 558, 504, 2]
// Exports: useMuteDeafenIconState, useStableVideoState, useStableVoiceParticipant, useVideoIconState

// Module 9133 (VoiceStateIconUtils)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f88194 = () => {
  if (null != id) {
    const voiceState = VoiceStateStore.getVoiceState(guildId, tmp);
    if (null != voiceState) {
      const obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: MediaEngineStore.isLocalMute(voiceState.userId), selfMute: voiceState.selfMute };
      ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
      return obj;
    }
  }
};
const f88195 = () => {
  let tmp5;
  let voiceState;
  if (null != id) {
    voiceState = VoiceStateStore.getVoiceState(guildId, tmp);
  }
  if (null != id) {
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
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

export { MuteDeafenIconState };
export const VideoIconState = obj2;
export const useStableVoiceParticipant = function useStableVoiceParticipant(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f88194, items1, isStableVoiceStateEqual);
};
export const useMuteDeafenIconState = function useMuteDeafenIconState(id, guildId) {
  _require = id;
  let closure_1 = guildId;
  let obj = require("get initialized");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [id, guildId];
  const stateFromStores = obj.useStateFromStores(items, f88194, items1, isStableVoiceStateEqual);
  let tmp2 = null;
  if (null != stateFromStores) {
    let DEAFENED_SERVER;
    if (stateFromStores.deaf) {
      DEAFENED_SERVER = obj.DEAFENED_SERVER;
    } else if (stateFromStores.selfDeaf) {
      DEAFENED_SERVER = obj.DEAFENED;
    } else if (stateFromStores.mute) {
      DEAFENED_SERVER = obj.MUTED_SERVER;
    } else if (stateFromStores.isLocalMute) {
      DEAFENED_SERVER = obj.MUTED_LOCAL;
    } else {
      DEAFENED_SERVER = null;
      if (stateFromStores.selfMute) {
        DEAFENED_SERVER = obj.MUTED;
      }
    }
    tmp2 = DEAFENED_SERVER;
  }
  return tmp2;
};
export const useStableVideoState = function useStableVideoState(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, f88195, items1);
};
export const useVideoIconState = function useVideoIconState(id, guildId) {
  _require = id;
  let closure_1 = guildId;
  let obj = require("get initialized");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [guildId, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f88195, items1);
  let tmp2 = null;
  if (null != stateFromStoresObject) {
    let tmp3 = null;
    if (stateFromStoresObject.selfVideo) {
      let VIDEO_ACTIVE;
      let str = "auto";
      if ("auto" === stateFromStoresObject.localVideoDisabledState) {
        VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL_AUTO;
      } else if ("manual" === stateFromStoresObject.localVideoDisabledState) {
        let tmp5 = obj2;
        VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL;
      } else {
        VIDEO_ACTIVE = obj2.VIDEO_ACTIVE;
      }
      tmp3 = VIDEO_ACTIVE;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
