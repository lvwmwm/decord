// Module ID: 10272
// Function ID: 10273
// Name: useDeafStates
// Dependencies: [502, 1996, 4777, 558, 568, 504, 2]
// Exports: getDeafStates

// Module 10272 (useDeafStates)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
function getDeafStates(channel, VoiceStateStore, MediaEngineStore, AuthenticationStore) {
  let obj = VoiceStateStore;
  if (VoiceStateStore === undefined) {
    obj = VoiceStateStore;
  }
  let obj2 = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj2 = MediaEngineStore;
  }
  let obj3 = AuthenticationStore;
  if (AuthenticationStore === undefined) {
    obj3 = AuthenticationStore;
  }
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = obj.getVoiceState(guildId, obj3.getId());
  }
  const obj4 = { selfDeaf: obj2.isSelfDeaf(), deaf: null };
  let flag;
  if (voiceState != null) {
    flag = voiceState.deaf;
  }
  if (flag == null) {
    flag = false;
  }
  obj4.deaf = flag;
  return obj4;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (VoiceStateStore !== undefined) {
        if (obj3 !== undefined) {
          if (obj4 !== undefined) {
            let voiceState = null;
            if (null != obj) {
              const guildId = obj.getGuildId();
              voiceState = VoiceStateStore.getVoiceState(guildId, obj4.getId());
            }
            const obj5 = { selfDeaf: obj3.isSelfDeaf(), deaf: null };
            let flag;
            if (voiceState != null) {
              flag = voiceState.deaf;
            }
            if (flag == null) {
              flag = false;
            }
            obj5.deaf = flag;
            return obj5;
          }
        }
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    if (VoiceStateStore !== undefined) {
      if (obj3 !== undefined) {
        if (obj4 !== undefined) {
          let voiceState = null;
          if (null != obj) {
            const guildId = obj.getGuildId();
            voiceState = VoiceStateStore.getVoiceState(guildId, obj4.getId());
          }
          const obj5 = { selfDeaf: obj3.isSelfDeaf(), deaf: null };
          let flag;
          if (voiceState != null) {
            flag = voiceState.deaf;
          }
          if (flag == null) {
            flag = false;
          }
          obj5.deaf = flag;
          return obj5;
        }
      }
    }
  }, items1);
});
export { getDeafStates };
