// Module ID: 12147
// Function ID: 95136
// Name: useFriendRequestActions
// Dependencies: [31, 9057, 2]
// Exports: useFriendRequestActions

// Module 12147 (useFriendRequestActions)
import result from "result";

let result = require("set").fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

export const useFriendRequestActions = function useFriendRequestActions(userId) {
  userId = userId.userId;
  const applicationId = userId.applicationId;
  const isGameRelationship = userId.isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  const items = [applicationId, isGameRelationship, _location, userId];
  let obj = {};
  const items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  const callback = isGameRelationship.useCallback(() => {
    let obj = userId(applicationId[1]);
    obj = { userId };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj.applicationId = tmp;
    obj.location = _location;
    obj.cancelFriendRequest(obj);
  }, items);
  obj.acceptFriendRequest = isGameRelationship.useCallback(() => {
    let obj = userId(applicationId[1]);
    obj = { userId };
    let tmp = null;
    if (isGameRelationship) {
      tmp = applicationId;
    }
    obj.applicationId = tmp;
    obj.location = _location;
    obj.onConfirm = onConfirm;
    obj.onCancel = onCancel;
    obj.onFinally = onFinally;
    const result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items1);
  obj.cancelFriendRequest = callback;
  return obj;
};
