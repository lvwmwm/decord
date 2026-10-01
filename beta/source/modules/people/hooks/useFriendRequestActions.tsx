// Module ID: 12690
// Function ID: 12691
// Name: useFriendRequestActions
// Dependencies: [19, 10330, 2]
// Exports: useFriendRequestActions

// Module 12690 (useFriendRequestActions)
import PeopleUtilsDefault from "PeopleUtils" /* 10330 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

export const useFriendRequestActions = function useFriendRequestActions(userId) {
  let callback;
  let items1;
  userId = userId.userId;
  const applicationId = userId.applicationId;
  const isGameRelationship = userId.isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  const items = [applicationId, isGameRelationship, _location, userId];
  let obj = {
    acceptFriendRequest: isGameRelationship.useCallback(() => {
      let tmp2;
      const obj = { userId, applicationId: tmp2, location: _location, onConfirm, onCancel, onFinally };
      tmp2 = null;
      const maybeConfirmFriendRequestAccept = PeopleUtilsDefault.maybeConfirmFriendRequestAccept;
      PeopleUtilsDefault;
      if (isGameRelationship) {
        tmp2 = applicationId;
      }
      const result = maybeConfirmFriendRequestAccept(obj);
    }, items1),
    cancelFriendRequest: callback
  };
  items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  callback = isGameRelationship.useCallback(() => {
    let tmp2;
    const obj = { userId, applicationId: tmp2, location: _location };
    tmp2 = null;
    const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
    PeopleUtilsDefault;
    if (isGameRelationship) {
      tmp2 = applicationId;
    }
    cancelFriendRequest(obj);
  }, items);
  return obj;
};
