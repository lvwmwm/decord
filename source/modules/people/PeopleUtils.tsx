// Module ID: 9049
// Function ID: 71043
// Name: acceptFriendRequest
// Dependencies: []

// Module 9049 (acceptFriendRequest)
function acceptFriendRequest(location) {
  let applicationId;
  let confirmStrangerRequest;
  let userId;
  ({ userId, applicationId, confirmStrangerRequest } = location);
  if (confirmStrangerRequest === undefined) {
    confirmStrangerRequest = false;
  }
  if (null != applicationId) {
    let obj = { userId, applicationId };
    let result = importDefault(dependencyMap[2]).acceptGameFriendRequest(obj);
    const obj4 = importDefault(dependencyMap[2]);
  } else {
    obj = importDefault(dependencyMap[3]);
    obj = { userId, confirmStrangerRequest };
    const obj1 = { location: location.location };
    obj.context = obj1;
    result = obj.acceptFriendRequest(obj);
  }
  return result;
}
function handleFriendRequestAcceptError(body, userId) {
  let code;
  if (null != body) {
    body = body.body;
    if (null != body) {
      code = body.code;
    }
  }
  if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
    let obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, userId: userId.userId };
    let flag = true;
    importDefault(dependencyMap[8]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[8]);
    obj = {
      onConfirm() {
          const obj = {};
          const merged = Object.assign(arg1);
          obj["confirmStrangerRequest"] = true;
          callback(obj);
          if (null != arg1.onConfirm) {
            arg1.onConfirm();
          }
        },
      onCancel() {
          if (null != arg1.onCancel) {
            arg1.onCancel();
          }
        }
    };
    const result = userId(dependencyMap[7]).openAcceptFriendRequestConfirmModal(obj);
    const obj5 = userId(dependencyMap[7]);
  } else {
    flag = false;
    if (tmp2) {
      obj = importDefault(dependencyMap[8]);
      const obj1 = { userId: userId.userId };
      obj.dispatch(obj1);
      flag = false;
    }
    const tmp2 = null != body && body.ok;
  }
  return flag;
}
let closure_3 = importDefault(dependencyMap[0]);
const AbortCodes = arg1(dependencyMap[1]).AbortCodes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default {
  removeFriend(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId, applicationId };
      importDefault(dependencyMap[2]).removeGameFriend(obj);
      const obj3 = importDefault(dependencyMap[2]);
    } else {
      obj = importDefault(dependencyMap[3]);
      obj = { location: tmp };
      obj.removeFriend(userId, obj);
    }
  },
  cancelFriendRequest(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId, applicationId };
      let result = importDefault(dependencyMap[2]).cancelGameFriendRequest(obj);
      const obj3 = importDefault(dependencyMap[2]);
    } else {
      obj = importDefault(dependencyMap[3]);
      obj = { location: tmp };
      result = obj.cancelFriendRequest(userId, obj);
    }
    return result;
  },
  acceptFriendRequest,
  maybeConfirmFriendRequestAccept(userId) {
    userId = userId.userId;
    const arg1 = userId;
    const applicationId = userId.applicationId;
    const importDefault = applicationId;
    const _location = userId.location;
    const dependencyMap = _location;
    ({ onConfirm: closure_3, onCancel: closure_4, onFinally: closure_5 } = userId);
    let obj = arg1(dependencyMap[4]);
    const result = obj.isSettingTeenByDefault(arg1(dependencyMap[5]).SettingsDefaultFeature.FRIEND_REQUEST_STRANGER_CONFIRMATION);
    const result1 = arg1(dependencyMap[6]).isFriendRequestAlertsV2Enabled("maybeConfirmFriendRequestAccept");
    const isStrangerResult = stranger.isStranger(userId);
    if (null == applicationId) {
      if (result) {
        if (false !== isStrangerResult) {
          if (isStrangerResult) {
            obj = {
              onConfirm() {
                        callback3({ userId, applicationId, location: _location, confirmStrangerRequest: true });
                        if (null != callback) {
                          callback();
                        }
                      },
              onCancel() {
                        if (null != callback2) {
                          callback2();
                        }
                      },
              onFinally() {
                        if (null != callback3) {
                          callback3();
                        }
                      }
            };
            const result2 = arg1(dependencyMap[7]).openAcceptFriendRequestConfirmModal(obj);
            const obj4 = arg1(dependencyMap[7]);
          } else {
            obj = { userId, applicationId, location: _location };
            const promise = acceptFriendRequest(obj);
            const nextPromise = acceptFriendRequest(obj).then((arg0) => {
              let tmp = callback4(arg0, { userId, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 });
              if (!tmp) {
                tmp = null == callback;
              }
              if (!tmp) {
                callback();
              }
            });
            acceptFriendRequest(obj).then((arg0) => {
              let tmp = callback4(arg0, { userId, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 });
              if (!tmp) {
                tmp = null == callback;
              }
              if (!tmp) {
                callback();
              }
            }).catch((arg0) => {
              callback4(arg0, { userId, applicationId, location: _location, onConfirm: closure_3, onCancel: closure_4 });
            }).finally(() => {
              if (null != callback3) {
                callback3();
              }
            });
            const catchPromise = acceptFriendRequest(obj).then((arg0) => {
              let tmp = callback4(arg0, { userId, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 });
              if (!tmp) {
                tmp = null == callback;
              }
              if (!tmp) {
                callback();
              }
            }).catch((arg0) => {
              callback4(arg0, { userId, applicationId, location: _location, onConfirm: closure_3, onCancel: closure_4 });
            });
          }
        }
      }
    }
    const obj2 = arg1(dependencyMap[6]);
    return acceptFriendRequest({ userId, applicationId, location: _location, confirmStrangerRequest: true }).then(() => {
      if (null != callback) {
        callback();
      }
      if (null != callback3) {
        callback3();
      }
    });
  }
};
