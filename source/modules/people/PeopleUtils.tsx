// Module ID: 9096
// Function ID: 71323
// Name: acceptFriendRequest
// Dependencies: [3767, 653, 9097, 8962, 3809, 3816, 9098, 9099, 686, 2]

// Module 9096 (acceptFriendRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AbortCodes } from "ME";

const require = arg1;
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
    let result = importDefault(9097).acceptGameFriendRequest(obj);
    const obj4 = importDefault(9097);
  } else {
    obj = importDefault(8962);
    obj = { userId, confirmStrangerRequest };
    const obj1 = { location: location.location };
    obj.context = obj1;
    result = obj.acceptFriendRequest(obj);
  }
  return result;
}
function handleFriendRequestAcceptError(body, userId) {
  const _require = userId;
  let code;
  if (null != body) {
    body = body.body;
    if (null != body) {
      code = body.code;
    }
  }
  if (code === AbortCodes.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
    let obj = { type: "UPDATE_STRANGER_STATUS", userId: userId.userId, isStranger: true };
    let flag = true;
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
    obj = {
      onConfirm() {
          const obj = {};
          const merged = Object.assign(userId);
          obj["confirmStrangerRequest"] = true;
          outer1_5(obj);
          if (null != userId.onConfirm) {
            userId.onConfirm();
          }
        },
      onCancel() {
          if (null != userId.onCancel) {
            userId.onCancel();
          }
        }
    };
    const result = _require(9099).openAcceptFriendRequestConfirmModal(obj);
    const obj5 = _require(9099);
  } else {
    flag = false;
    if (tmp2) {
      obj = importDefault(686);
      const obj1 = { type: "UPDATE_STRANGER_STATUS", userId: userId.userId, isStranger: false };
      obj.dispatch(obj1);
      flag = false;
    }
    tmp2 = null != body && body.ok;
  }
  return flag;
}
let result = require("showRequestFailedAlert").fileFinishedImporting("modules/people/PeopleUtils.tsx");

export default {
  removeFriend(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (null != applicationId) {
      let obj = { userId, applicationId };
      importDefault(9097).removeGameFriend(obj);
      const obj3 = importDefault(9097);
    } else {
      obj = importDefault(8962);
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
      let result = importDefault(9097).cancelGameFriendRequest(obj);
      const obj3 = importDefault(9097);
    } else {
      obj = importDefault(8962);
      obj = { location: tmp };
      result = obj.cancelFriendRequest(userId, obj);
    }
    return result;
  },
  acceptFriendRequest,
  maybeConfirmFriendRequestAccept(userId) {
    let AbortCodes;
    let acceptFriendRequest;
    let _isNativeReflectConstruct;
    userId = userId.userId;
    const applicationId = userId.applicationId;
    const _location = userId.location;
    ({ onConfirm: _isNativeReflectConstruct, onCancel: AbortCodes, onFinally: acceptFriendRequest } = userId);
    let obj = userId(_location[4]);
    const result = obj.isSettingTeenByDefault(userId(_location[5]).SettingsDefaultFeature.FRIEND_REQUEST_STRANGER_CONFIRMATION);
    const result1 = userId(_location[6]).isFriendRequestAlertsV2Enabled("maybeConfirmFriendRequestAccept");
    const isStrangerResult = stranger.isStranger(userId);
    if (null == applicationId) {
      if (result) {
        if (false !== isStrangerResult) {
          if (isStrangerResult) {
            obj = {
              onConfirm() {
                        outer1_5({ userId, applicationId, location: _location, confirmStrangerRequest: true });
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
            const result2 = userId(_location[7]).openAcceptFriendRequestConfirmModal(obj);
            const obj4 = userId(_location[7]);
          } else {
            obj = { userId, applicationId, location: _location };
            const promise = acceptFriendRequest(obj);
            const nextPromise = acceptFriendRequest(obj).then((arg0) => {
              let tmp = outer1_6(arg0, { userId, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 });
              if (!tmp) {
                tmp = null == callback;
              }
              if (!tmp) {
                callback();
              }
            });
            acceptFriendRequest(obj).then((arg0) => {
              let tmp = outer1_6(arg0, { userId, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 });
              if (!tmp) {
                tmp = null == callback;
              }
              if (!tmp) {
                callback();
              }
            }).catch((arg0) => {
              outer1_6(arg0, { userId, applicationId, location: _location, onConfirm: _isNativeReflectConstruct, onCancel: closure_4 });
            }).finally(() => {
              if (null != callback3) {
                callback3();
              }
            });
            const catchPromise = acceptFriendRequest(obj).then((arg0) => {
              let tmp = outer1_6(arg0, { userId, applicationId, location: _location, onConfirm: callback, onCancel: closure_4 });
              if (!tmp) {
                tmp = null == callback;
              }
              if (!tmp) {
                callback();
              }
            }).catch((arg0) => {
              outer1_6(arg0, { userId, applicationId, location: _location, onConfirm: _isNativeReflectConstruct, onCancel: closure_4 });
            });
          }
        }
      }
    }
    const obj2 = userId(_location[6]);
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
