// Module ID: 9702
// Function ID: 9703
// Name: useDeafStates
// Dependencies: [502, 1999, 4909, 558, 576, 504, 2]
// Exports: getDeafStates

// Module 9702 (useDeafStates)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
}) : ((arg0) => {
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
});
function getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore) {
  let flag;
  let tmp = VoiceStateStore;
  if (VoiceStateStore === undefined) {
    tmp = VoiceStateStore;
  }
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  let obj2 = AuthenticationStore;
  if (AuthenticationStore === undefined) {
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
}
const result = size.fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default tmp2;
export { getDeafStates };
