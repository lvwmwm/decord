// Module ID: 14912
// Function ID: 113667
// Name: _sendWave
// Dependencies: [5, 1348, 653, 4123, 9057, 4140, 3830, 1212, 11370, 6691, 8923, 2]
// Exports: acceptIncomingRequest, addContactSuggestion, dismissIncomingRequest, sendWave

// Module 14912 (_sendWave)
import module_4140 from "module_4140";
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
  let obj = importDefault(9057);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(9057);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
};
export const sendWave = function sendWave(id, arg1, arg2) {
  return _sendWave(...arguments);
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj = importDefault(8923);
  obj = { userId: user.id, context: obj, type: undefined, fromFriendSuggestion: true };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.addRelationship(obj);
};
