// Module ID: 8021
// Function ID: 63656
// Name: getMaxMessageLength_
// Dependencies: [1849, 653, 3776, 566, 2]
// Exports: default, getMaxMessageLength

// Module 8021 (getMaxMessageLength_)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function getMaxMessageLength_(_isNativeReflectConstruct) {
  return importDefault(3776).canUseIncreasedMessageLength(_isNativeReflectConstruct.getCurrentUser()) ? closure_4 : closure_5;
}
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: closure_5 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_6(outer1_3));
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return getMaxMessageLength_(_isNativeReflectConstruct);
};
