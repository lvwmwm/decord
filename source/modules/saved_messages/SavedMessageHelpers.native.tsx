// Module ID: 9871
// Function ID: 76474
// Name: _addOrUpdateSavedMessage
// Dependencies: [5, 9489, 653, 9872, 9493, 6145, 6147, 9873, 4471, 1212, 9874, 9490, 3832, 6673, 4095, 9893, 2]
// Exports: addOrUpdateSavedMessage, removeSavedMessage

// Module 9871 (_addOrUpdateSavedMessage)
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
