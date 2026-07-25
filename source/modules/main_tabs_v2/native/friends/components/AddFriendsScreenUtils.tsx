// Module ID: 14969
// Function ID: 114115
// Name: _sendWave
// Dependencies: [5, 1348, 653, 4124, 8988, 4141, 3831, 1212, 11362, 5685, 8850, 2]
// Exports: acceptIncomingRequest, addContactSuggestion, dismissIncomingRequest, sendWave

// Module 14969 (_sendWave)
import module_4141 from "module_4141";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
function _sendWave() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx");

export const dismissIncomingRequest = function dismissIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(8988);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(8988);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
};
export const sendWave = function sendWave(id, arg1, arg2) {
  return _sendWave(...arguments);
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj = importDefault(8850);
  obj = { userId: user.id, context: obj, type: undefined, fromFriendSuggestion: true };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.addRelationship(obj);
};
