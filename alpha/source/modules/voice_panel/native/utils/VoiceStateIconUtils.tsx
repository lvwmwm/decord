// Module ID: 9215
// Function ID: 9216
// Name: VoiceStateIconUtils
// Dependencies: [2007, 5674, 558, 504, 9216, 2]
// Exports: useMuteDeafenIconState, useStableVideoState, useStableVoiceParticipant, useVideoIconState

// Module 9215 (VoiceStateIconUtils)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import useLocalSelfMuteDeaf from "useLocalSelfMuteDeaf" /* 9216 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f94014 = () => {
  if (null != id) {
    const withLocalSelfMuteDeaf = useLocalSelfMuteDeaf.withLocalSelfMuteDeaf;
    useLocalSelfMuteDeaf;
    const voiceState = VoiceStateStore.getVoiceState(guildId, tmp);
    const obj = useLocalSelfMuteDeaf;
    const result = withLocalSelfMuteDeaf(voiceState, obj.getLocalSelfMuteDeaf());
    if (null != result) {
      ({ deaf: obj2.deaf, selfDeaf: obj2.selfDeaf, mute: obj2.mute } = result);
      const obj3 = { deaf: null, selfDeaf: null, mute: null, isLocalMute: MediaEngineStore.isLocalMute(result.userId), selfMute: result.selfMute };
      return obj3;
    }
  }
};
const f94015 = () => {
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
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

export { MuteDeafenIconState };
export const VideoIconState = obj2;
export function useStableVoiceParticipant(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [VoiceStateStore, MediaEngineStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f94014, items1, isStableVoiceStateEqual);
}
export function useMuteDeafenIconState(id, guildId) {
  _require = id;
  let closure_1 = guildId;
  let obj = require("get initialized");
  const items = [VoiceStateStore, MediaEngineStore];
  const items1 = [id, guildId];
  const stateFromStores = obj.useStateFromStores(items, f94014, items1, isStableVoiceStateEqual);
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
}
export function useStableVideoState(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, f94015, items1);
}
export function useVideoIconState(id, guildId) {
  _require = id;
  let closure_1 = guildId;
  let obj = require("get initialized");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [guildId, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f94015, items1);
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
}
