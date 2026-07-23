// Module ID: 9058
// Function ID: 71123
// Name: showRequestFailedAlert
// Dependencies: [5, 653, 4029, 4470, 1212, 507, 3976, 2]

// Module 9058 (showRequestFailedAlert)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function showRequestFailedAlert(arg0) {
  const aPIError = new require(4029) /* V6OrEarlierAPIError */.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["328j/I"]);
  if (null == anyErrorMessage) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    anyErrorMessage = intl2.string(require(1212) /* getSystemLocale */.t.fEptJP);
  }
  obj.body = anyErrorMessage;
  importDefault(4470).show(obj);
}
function deleteGameRelationship() {
  return _deleteGameRelationship(...arguments);
}
function _deleteGameRelationship() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removeGameFriend() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _cancelGameFriendRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ Endpoints: closure_4, RelationshipTypes: closure_5 } = ME);
const result = require("V6OrEarlierAPIError").fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default {
  removeGameFriend(arg0) {
    return _removeGameFriend(...arguments);
  },
  acceptGameFriendRequest(userId) {
    return (function addGameRelationship(onSuccess) {
      let applicationId;
      let type;
      let userId;
      onSuccess = onSuccess.onSuccess;
      ({ userId, applicationId, type } = onSuccess);
      const HTTP = outer1_0(outer1_2[5]).HTTP;
      const obj = { url: outer1_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type }, oldFormErrors: true, rejectWithError: false };
      const putResult = HTTP.put({ url: outer1_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type }, oldFormErrors: true, rejectWithError: false });
      return HTTP.put({ url: outer1_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type }, oldFormErrors: true, rejectWithError: false }).then(() => {
        onSuccess();
      }).catch((arg0) => {
        outer2_6(arg0);
        return Promise.reject(arg0);
      });
    })({
      userId: userId.userId,
      applicationId: userId.applicationId,
      type: constants.FRIEND,
      onSuccess() {
        const AccessibilityAnnouncer = outer1_0(outer1_2[6]).AccessibilityAnnouncer;
        const intl = outer1_0(outer1_2[4]).intl;
        AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_2[4]).t.taJiuc));
      }
    });
  },
  cancelGameFriendRequest(arg0) {
    return _cancelGameFriendRequest(...arguments);
  }
};
