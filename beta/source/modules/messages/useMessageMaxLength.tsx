// Module ID: 8605
// Function ID: 8606
// Name: useMessageMaxLength
// Dependencies: [1372, 1074, 4488, 504, 2]
// Exports: default, getMaxMessageLength

// Module 8605 (useMessageMaxLength)
import get_initialized from "get initialized" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  let currentUser;
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const obj = PremiumUtilsDefault;
    return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5;
  });
};
export const getMaxMessageLength = function getMaxMessageLength() {
  const obj = PremiumUtilsDefault;
  return obj.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React3 : hasOwnProperty;
};
