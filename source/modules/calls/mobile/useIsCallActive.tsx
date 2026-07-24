// Module ID: 7757
// Function ID: 61581
// Name: checkIsCallActive
// Dependencies: [4809, 4143, 4148, 566, 2]
// Exports: default, useIsCallActiveNullable

// Module 7757 (checkIsCallActive)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
function checkIsCallActive(channelId, id) {
  let isCallActiveResult = callActive.isCallActive(channelId, id);
  if (isCallActiveResult) {
    participants = participants.getParticipants(channelId);
    isCallActiveResult = participants.some((type) => type.type === outer1_4.USER && !type.ringing);
  }
  return isCallActiveResult;
}
const result = require("ParticipantTypes").fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct, closure_3];
  const items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => outer1_5(closure_0, closure_1), items1);
};
export { checkIsCallActive };
export const useIsCallActiveNullable = function useIsCallActiveNullable(id) {
  const _require = id;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct, closure_3];
  const items1 = [id, arg1];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = outer1_5(closure_0, closure_1);
    }
    return tmp;
  }, items1);
};
