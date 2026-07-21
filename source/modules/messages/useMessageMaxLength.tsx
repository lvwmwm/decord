// Module ID: 7927
// Function ID: 63284
// Name: getMaxMessageLength_
// Dependencies: [0, 4294967295, 0, 0, 0]
// Exports: default, getMaxMessageLength

// Module 7927 (getMaxMessageLength_)
import __exportStarResult1 from "__exportStarResult1";

function getMaxMessageLength_(__exportStarResult1) {
  return importDefault(dependencyMap[2]).canUseIncreasedMessageLength(__exportStarResult1.getCurrentUser()) ? closure_4 : closure_5;
}
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = require("__exportStarResult1").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [__exportStarResult1];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(__exportStarResult1));
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return getMaxMessageLength_(__exportStarResult1);
};
