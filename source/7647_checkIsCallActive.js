// Module ID: 7647
// Function ID: 61179
// Name: checkIsCallActive
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default, useIsCallActiveNullable

// Module 7647 (checkIsCallActive)
import closure_2 from "result";
import closure_3 from "result";
import { ParticipantTypes } from "result";
import result from "result";

function checkIsCallActive(channelId, id) {
  let isCallActiveResult = callActive.isCallActive(channelId, id);
  if (isCallActiveResult) {
    const participants = participants.getParticipants(channelId);
    isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
  }
  return isCallActiveResult;
}
result = result.fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_2, closure_3];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, arg1), items1);
};
export { checkIsCallActive };
export const useIsCallActiveNullable = function useIsCallActiveNullable(id) {
  const arg1 = id;
  const dependencyMap = arg1;
  const items = [closure_2, closure_3];
  const items1 = [id, arg1];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = callback(arg0, arg1);
    }
    return tmp;
  }, items1);
};
