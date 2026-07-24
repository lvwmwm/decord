// Module ID: 14959
// Function ID: 113988
// Name: _sendWave
// Dependencies: [5, 1348, 653, 4123, 9096, 4140, 3830, 1212, 11399, 6691, 8962, 2]
// Exports: acceptIncomingRequest, addContactSuggestion, dismissIncomingRequest, sendWave

// Module 14959 (_sendWave)
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
  let obj = importDefault(9096);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(9096);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
};
export const sendWave = function sendWave(id, arg1, arg2) {
  return _sendWave(...arguments);
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj = importDefault(8962);
  obj = { userId: user.id, context: obj, type: undefined, fromFriendSuggestion: true };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.addRelationship(obj);
};
