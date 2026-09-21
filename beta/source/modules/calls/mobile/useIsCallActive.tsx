// Module ID: 8244
// Function ID: 8245
// Name: useIsCallActive
// Dependencies: [5497, 4774, 4779, 558, 568, 504, 2]
// Exports: checkIsCallActive

// Module 8244 (useIsCallActive)
import CallStore from "CallStore" /* 5497 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;

const require = globalThis.__r;

const require = fn;
const ParticipantTypes = fn(4779).ParticipantTypes;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore, ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return require("initialize").useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function o() {
    let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
    if (isCallActiveResult) {
      const participants = ChannelRTCStore.getParticipants(closure_0);
      isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
    }
    return isCallActiveResult;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [CallStore, ChannelRTCStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
    if (isCallActiveResult) {
      const participants = ChannelRTCStore.getParticipants(closure_0);
      isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
    }
    return isCallActiveResult;
  }, items1);
});
function checkIsCallActive(channelId, id) {
  let isCallActiveResult = CallStore.isCallActive(channelId, id);
  if (isCallActiveResult) {
    const participants = ChannelRTCStore.getParticipants(channelId);
    isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
  }
  return isCallActiveResult;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default tmp2;
export { checkIsCallActive };
export const useIsCallActiveNullable = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore, ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return require("initialize").useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function o() {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isCallActiveResult = CallStore.isCallActive(tmp, closure_1);
      if (isCallActiveResult) {
        const participants = ChannelRTCStore.getParticipants(tmp);
        isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
      }
      tmp2 = isCallActiveResult;
    }
    return tmp2;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [CallStore, ChannelRTCStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isCallActiveResult = CallStore.isCallActive(tmp, closure_1);
      if (isCallActiveResult) {
        const participants = ChannelRTCStore.getParticipants(tmp);
        isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
      }
      tmp2 = isCallActiveResult;
    }
    return tmp2;
  }, items1);
});
