// Module ID: 9478
// Function ID: 9479
// Name: useDeafStates
// Dependencies: [502, 1993, 4855, 504, 2]
// Exports: default, getDeafStates

// Module 9478 (useDeafStates)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default function useDeafStates(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let flag;
    const tmp = VoiceStateStore;
    if (VoiceStateStore !== undefined) {
      if (MediaEngineStore !== undefined) {
        if (AuthenticationStore !== undefined) {
          let voiceState = null;
          if (null != closure_0) {
            const getVoiceState = tmp.getVoiceState;
            const guildId = obj.getGuildId();
            voiceState = getVoiceState(guildId, obj3.getId());
          }
          const obj4 = { selfDeaf: MediaEngineStore.isSelfDeaf(), deaf: flag };
          flag = undefined;
          if (voiceState != null) {
            flag = voiceState.deaf;
          }
          if (flag == null) {
            flag = false;
          }
          return obj4;
        }
      }
    }
  }, items1);
};
export const getDeafStates = function getDeafStates(channel, arg1, arg2, callback3) {
  let flag;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = VoiceStateStore;
  }
  let obj = arg2;
  if (arg2 === undefined) {
    obj = MediaEngineStore;
  }
  let obj2 = callback3;
  if (callback3 === undefined) {
    obj2 = AuthenticationStore;
  }
  let voiceState = null;
  if (null != channel) {
    const getVoiceState = tmp.getVoiceState;
    const guildId = channel.getGuildId();
    voiceState = getVoiceState(guildId, obj2.getId());
  }
  const obj3 = { selfDeaf: obj.isSelfDeaf(), deaf: flag };
  flag = undefined;
  if (voiceState != null) {
    flag = voiceState.deaf;
  }
  if (flag == null) {
    flag = false;
  }
  return obj3;
};
