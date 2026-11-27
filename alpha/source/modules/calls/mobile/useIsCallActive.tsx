// Module ID: 10622
// Function ID: 10623
// Name: useIsCallActive
// Dependencies: [6940, 6933, 5693, 504, 2]
// Exports: checkIsCallActive, default, useIsCallActiveNullable

// Module 10622 (useIsCallActive)
import CallConstants from "CallConstants" /* 5693 */;
import CallStore from "CallStore" /* 6940 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f98118 = (type) => type.type === constants.USER && !type.ringing;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [CallStore, ChannelRTCStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
    const tmp = closure_0;
    if (isCallActiveResult) {
      const participants = ChannelRTCStore.getParticipants(tmp);
      isCallActiveResult = participants.some(f98118);
    }
    return isCallActiveResult;
  }, items1);
};
export function checkIsCallActive(channelId, id) {
  let isCallActiveResult = CallStore.isCallActive(channelId, id);
  if (isCallActiveResult) {
    const participants = ChannelRTCStore.getParticipants(channelId);
    isCallActiveResult = participants.some(f98118);
  }
  return isCallActiveResult;
}
export function useIsCallActiveNullable(id, arg1) {
  let closure_1;
  _require = id;
  dependencyMap = arg1;
  const items = [CallStore, ChannelRTCStore];
  const items1 = [id, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != id;
    if (tmp2) {
      let isCallActiveResult = CallStore.isCallActive(tmp, closure_1);
      if (isCallActiveResult) {
        const participants = ChannelRTCStore.getParticipants(tmp);
        isCallActiveResult = participants.some(f98118);
      }
      tmp2 = isCallActiveResult;
    }
    return tmp2;
  }, items1);
}
