// Module ID: 7661
// Function ID: 61236
// Name: checkIsCallActive
// Dependencies: [4117954560, 4076863517, 33554446, 1996488704, 6]
// Exports: default, useIsCallActiveNullable

// Module 7661 (checkIsCallActive)
import _classCallCheck from "_classCallCheck";

function checkIsCallActive(channelId, id) {
  let isCallActiveResult = callActive.isCallActive(channelId, id);
  if (isCallActiveResult) {
    const participants = participants.getParticipants(channelId);
    isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
  }
  return isCallActiveResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ParticipantTypes = arg1(dependencyMap[2]).ParticipantTypes;
const result = _classCallCheck.fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

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
