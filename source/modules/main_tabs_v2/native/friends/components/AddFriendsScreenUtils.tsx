// Module ID: 14796
// Function ID: 111499
// Name: _sendWave
// Dependencies: []
// Exports: acceptIncomingRequest, addContactSuggestion, dismissIncomingRequest, sendWave

// Module 14796 (_sendWave)
function _sendWave() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendWave = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticsSections = arg1(dependencyMap[2]).AnalyticsSections;
const MessageSendLocation = arg1(dependencyMap[3]).MessageSendLocation;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx");

export const dismissIncomingRequest = function dismissIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(dependencyMap[4]);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.cancelFriendRequest(obj);
};
export const acceptIncomingRequest = function acceptIncomingRequest(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let obj = importDefault(dependencyMap[4]);
  obj = { userId, applicationId, location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  const result = obj.maybeConfirmFriendRequestAccept(obj);
};
export const sendWave = function sendWave(id, arg1, arg2) {
  return _sendWave(...arguments);
};
export const addContactSuggestion = function addContactSuggestion(user) {
  let obj = importDefault(dependencyMap[10]);
  obj = { userId: user.id, context: obj, type: undefined, fromFriendSuggestion: true };
  obj = { location: AnalyticsSections.FRIENDS_ADD_FRIENDS_MODAL };
  obj.addRelationship(obj);
};
