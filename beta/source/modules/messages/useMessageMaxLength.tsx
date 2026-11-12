// Module ID: 9898
// Function ID: 9899
// Name: useMessageMaxLength
// Dependencies: [1385, 1072, 2171, 504, 2]
// Exports: default, getMaxMessageLength

// Module 9898 (useMessageMaxLength)
import get_initialized from "get initialized" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
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
export function getMaxMessageLength() {
  const obj = PremiumUtilsDefault;
  return obj.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React3 : hasOwnProperty;
}
