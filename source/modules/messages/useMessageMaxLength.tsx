// Module ID: 8462
// Function ID: 8463
// Name: useMessageMaxLength
// Dependencies: [1922, 676, 4039, 589, 2]
// Exports: default, getMaxMessageLength

// Module 8462 (useMessageMaxLength)
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ MAX_MESSAGE_LENGTH_PREMIUM: c4, MAX_MESSAGE_LENGTH: c5 } = ME);
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(table[2]).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5);
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return importDefault(4039).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5;
};
