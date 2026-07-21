// Module ID: 12029
// Function ID: 92959
// Name: useFriendRequestActions
// Dependencies: []
// Exports: useFriendRequestActions

// Module 12029 (useFriendRequestActions)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/people/hooks/useFriendRequestActions.tsx");

export const useFriendRequestActions = function useFriendRequestActions(userId) {
  userId = userId.userId;
  const importDefault = userId;
  const applicationId = userId.applicationId;
  const dependencyMap = applicationId;
  const isGameRelationship = userId.isGameRelationship;
  const React = isGameRelationship;
  const _location = userId.location;
  const onConfirm = userId.onConfirm;
  const onCancel = userId.onCancel;
  const onFinally = userId.onFinally;
  const items = [applicationId, isGameRelationship, _location, userId];
  const obj = {};
  const items1 = [applicationId, isGameRelationship, _location, onCancel, onConfirm, onFinally, userId];
  const callback = React.useCallback(() => {
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
  obj.acceptFriendRequest = React.useCallback(() => {
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
