// Module ID: 9943
// Function ID: 76859
// Name: _addOrUpdateSavedMessage
// Dependencies: [5, 9568, 653, 9944, 9572, 8036, 8038, 9945, 4470, 1212, 9946, 9569, 3831, 7577, 4094, 9965, 2]
// Exports: addOrUpdateSavedMessage, removeSavedMessage

// Module 9943 (_addOrUpdateSavedMessage)
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
