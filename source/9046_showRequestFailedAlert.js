// Module ID: 9046
// Function ID: 71046
// Name: showRequestFailedAlert
// Dependencies: []

// Module 9046 (showRequestFailedAlert)
function showRequestFailedAlert(arg0) {
  const aPIError = new arg1(dependencyMap[2]).APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.328j/I);
  if (null == anyErrorMessage) {
    const intl2 = arg1(dependencyMap[4]).intl;
    anyErrorMessage = intl2.string(arg1(dependencyMap[4]).t.fEptJP);
  }
  obj.body = anyErrorMessage;
  importDefault(dependencyMap[3]).show(obj);
}
function deleteGameRelationship() {
  return _deleteGameRelationship(...arguments);
}
function _deleteGameRelationship() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteGameRelationship = obj;
  return obj(...arguments);
}
function _removeGameFriend() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _removeGameFriend = obj;
  return obj(...arguments);
}
function _cancelGameFriendRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _cancelGameFriendRequest = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ Endpoints: closure_4, RelationshipTypes: closure_5 } = arg1(dependencyMap[1]));
const obj = {
  removeGameFriend(arg0) {
    return _removeGameFriend(...arguments);
  },
  acceptGameFriendRequest(userId) {
    return function addGameRelationship(onSuccess) {
      let applicationId;
      let type;
      let userId;
      onSuccess = onSuccess.onSuccess;
      ({ userId, applicationId, type } = onSuccess);
      const HTTP = onSuccess(closure_2[5]).HTTP;
      const obj = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type }, oldFormErrors: true, rejectWithError: false };
      const putResult = HTTP.put({ url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type }, oldFormErrors: true, rejectWithError: false });
      return HTTP.put({ url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type }, oldFormErrors: true, rejectWithError: false }).then(() => {
        onSuccess();
      }).catch((arg0) => {
        callback(arg0);
        return Promise.reject(arg0);
      });
    }({
      userId: userId.userId,
      applicationId: userId.applicationId,
      type: constants.FRIEND,
      onSuccess() {
        const AccessibilityAnnouncer = callback(closure_2[6]).AccessibilityAnnouncer;
        const intl = callback(closure_2[4]).intl;
        AccessibilityAnnouncer.announce(intl.string(callback(closure_2[4]).t.taJiuc));
      }
    });
  },
  cancelGameFriendRequest(arg0) {
    return _cancelGameFriendRequest(...arguments);
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default obj;
