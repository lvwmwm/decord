// Module ID: 15014
// Function ID: 114293
// Name: _sendWave
// Dependencies: [5, 1348, 653, 4158, 9032, 4175, 3865, 1212, 11401, 5695, 8894, 2]
// Exports: acceptIncomingRequest, addContactSuggestion, dismissIncomingRequest, sendWave

// Module 15014 (_sendWave)
import module_4175 from "module_4175";
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
  let obj = importDefault(9032);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(9032);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
};
export const sendWave = function sendWave(id, arg1, arg2) {
  return _sendWave(...arguments);
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj = importDefault(8894);
  obj = { userId: user.id, context: obj, type: undefined, fromFriendSuggestion: true };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.addRelationship(obj);
};
