// Module ID: 9911
// Function ID: 76665
// Name: _addOrUpdateSavedMessage
// Dependencies: [5, 9532, 653, 9912, 9536, 7949, 7951, 9913, 4470, 1212, 9914, 9533, 3831, 7507, 4094, 9933, 2]
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
