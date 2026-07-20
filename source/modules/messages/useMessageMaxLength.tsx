// Module ID: 7923
// Function ID: 63272
// Name: getMaxMessageLength_
// Dependencies: []
// Exports: default, getMaxMessageLength

// Module 7923 (getMaxMessageLength_)
function getMaxMessageLength_(closure_3) {
  return importDefault(dependencyMap[2]).canUseIncreasedMessageLength(closure_3.getCurrentUser()) ? closure_4 : closure_5;
}
let closure_3 = importDefault(dependencyMap[0]);
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(closure_3));
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return getMaxMessageLength_(closure_3);
};
