// Module ID: 9913
// Function ID: 76678
// Name: _upsertSavedMessage
// Dependencies: [5, 9532, 653, 507, 9533, 686, 4351, 2]
// Exports: deleteSavedMessage, fetchAndUpdateSavedMessages, upsertSavedMessage

// Module 9913 (_upsertSavedMessage)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _upsertSavedMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteSavedMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchAndUpdateSavedMessages() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ME").fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

export const upsertSavedMessage = function upsertSavedMessage() {
  return _upsertSavedMessage(...arguments);
};
export const deleteSavedMessage = function deleteSavedMessage(merged) {
  return _deleteSavedMessage(...arguments);
};
export const fetchAndUpdateSavedMessages = function fetchAndUpdateSavedMessages() {
  return _fetchAndUpdateSavedMessages(...arguments);
};
