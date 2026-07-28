// Module ID: 9911
// Function ID: 76604
// Name: _addOrUpdateSavedMessage
// Dependencies: [5, 9529, 653, 9912, 9533, 6179, 6181, 9913, 4505, 1212, 9914, 9530, 3866, 6709, 4129, 9933, 2]
// Exports: addOrUpdateSavedMessage, removeSavedMessage

// Module 9911 (_addOrUpdateSavedMessage)
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AbortCodes } from "ME";
import { SAVED_MESSAGES_MAX } from "SAVED_MESSAGES_MAX";

const require = arg1;
function _addOrUpdateSavedMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removeSavedMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ME").fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage(arg0) {
  return _addOrUpdateSavedMessage(...arguments);
};
export const removeSavedMessage = function removeSavedMessage(saveData) {
  return _removeSavedMessage(...arguments);
};
