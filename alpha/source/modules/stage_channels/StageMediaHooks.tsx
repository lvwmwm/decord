// Module ID: 5895
// Function ID: 5896
// Name: StageMediaHooks
// Dependencies: [2087, 5113, 5896, 558, 576, 504, 5950, 2]
// Exports: getStageHasMedia, getStageHasStream, isStageVideoEnabled

// Module 5895 (StageMediaHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 5950 */;
import GuildStore from "GuildStore" /* 2087 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f92209 = (type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStageHasMedia(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  const tmp4 = closure_5(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return closure_3.hasVideo(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = S;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = S;
  } else {
    class S {
      constructor() {
        return closure_3.hasVideo(closure_0);
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const tmp9 = tmpResult.useStateFromStores(first, tmp7, tmp8) || tmp4;
  return tmp9;
}) : (function useStageHasMedia(arg0) {
  let closure_0;
  _require = arg0;
  const items = [VoiceStateStore];
  const items1 = [arg0];
  const tmp = closure_5(arg0);
  const obj = require("get initialized");
  const tmp2 = obj.useStateFromStores(items, () => VoiceStateStore.hasVideo(closure_0), items1) || tmp;
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStageHasStream(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelParticipantStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        mutableParticipants = closure_4.getMutableParticipants(closure_0, closure_0(closure_1[6]).StageChannelParticipantNamedIndex.SPEAKER);
        return null != mutableParticipants.find(() => { /* body not rendered: F139186 */ });
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = S;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        mutableParticipants = closure_4.getMutableParticipants(closure_0, closure_0(closure_1[6]).StageChannelParticipantNamedIndex.SPEAKER);
        return null != mutableParticipants.find(() => { /* body not rendered: F139186 */ });
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useStageHasStream(arg0) {
  let closure_0;
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.STREAM);
  }, items1);
});
let closure_5 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsStageVideoEnabled(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return closure_2.getGuild(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = S;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return closure_2.getGuild(closure_0);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null != stateFromStores;
  if (tmp8) {
    class S {
      constructor() {
        return closure_2.getGuild(closure_0);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return closure_2.getGuild(closure_0);
        }
      }
    }
    if (tmp9 == null) {
      class S {
        constructor() {
          return closure_2.getGuild(closure_0);
        }
      }
    }
    tmp8 = tmp9 > 0;
  }
  return tmp8;
}) : (function useIsStageVideoEnabled(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
});
function getStageHasStream(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find(f92209);
}
const result = size.fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = tmp2;
export const useStageHasStream = tmp3;
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const hasVideoResult = null != mutableParticipants.find(f92209) || VoiceStateStore.hasVideo(id);
  return hasVideoResult;
};
export { getStageHasStream };
export const useIsStageVideoEnabled = tmp4;
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  const guild = GuildStore.getGuild(guild_id);
  let tmp2 = null != guild;
  if (tmp2) {
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
