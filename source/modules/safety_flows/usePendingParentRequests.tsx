// Module ID: 16573
// Function ID: 129267
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 6769, 1849, 6770, 566, 7123, 11061, 2]
// Exports: useDerivedPendingRequests, usePendingRequestListController, usePendingRequestResolution

// Module 16573 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UserLinkStatus } from "items";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = function useDerivedPendingRequests(pending_requests, stateFromStores1) {
  const _require = pending_requests;
  const dependencyMap = stateFromStores1;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getLinkedUsers());
  let obj = _require(566);
  const items1 = [closure_5];
  stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const currentUser = outer1_5.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores1, stateFromStores, stateFromStores1, pending_requests];
  return stateFromStores1.useMemo(() => {
    if (closure_1) {
      const _Map = Map;
      const map = new Map(pending_requests.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      let items = [];
      const _Object = Object;
      const values = Object.values(stateFromStores);
      let num = 0;
      if (0 < values.length) {
        do {
          let tmp15 = values[num];
          let tmp16 = tmp9;
          let tmp17 = tmp10;
          let tmp18 = tmp11;
          let tmp19 = tmp12;
          let tmp20 = tmp13;
          let tmp21 = tmp14;
          if (null != tmp15) {
            let tmp30 = outer1_6;
            tmp16 = tmp9;
            tmp17 = tmp10;
            tmp18 = tmp11;
            tmp19 = tmp12;
            tmp20 = tmp13;
            tmp21 = tmp14;
            if (tmp15.link_status === outer1_6.PENDING) {
              let tmp31 = stateFromStores1;
              tmp16 = tmp9;
              tmp17 = tmp10;
              tmp18 = tmp11;
              tmp19 = tmp12;
              tmp20 = tmp13;
              tmp21 = tmp14;
              if (tmp15.requestor_id !== stateFromStores1) {
                let tmp32 = outer1_5;
                let user = outer1_5.getUser(tmp15.user_id);
                let value = map.get(tmp15.user_id);
                let obj = { parent_id: tmp15.user_id };
                let username;
                if (null != user) {
                  username = user.username;
                }
                let tmp23 = username;
                if (null == username) {
                  let parent_username;
                  if (null != value) {
                    parent_username = value.parent_username;
                  }
                  tmp23 = parent_username;
                }
                let user_id = tmp23;
                if (null == tmp23) {
                  user_id = tmp15.user_id;
                }
                obj.parent_username = user_id;
                let avatar;
                if (null != user) {
                  avatar = user.avatar;
                }
                let tmp26 = avatar;
                if (null == avatar) {
                  let parent_avatar;
                  if (null != value) {
                    parent_avatar = value.parent_avatar;
                  }
                  tmp26 = parent_avatar;
                }
                let tmp28 = null;
                if (null != tmp26) {
                  tmp28 = tmp26;
                }
                obj.parent_avatar = tmp28;
                obj.created_at = tmp15.created_at;
                let arr = items.push(obj);
                tmp16 = tmp23;
                tmp17 = username;
                tmp18 = tmp26;
                tmp19 = avatar;
                tmp20 = user;
                tmp21 = value;
              }
            }
          }
          num = num + 1;
          tmp9 = tmp16;
          tmp10 = tmp17;
          tmp11 = tmp18;
          tmp12 = tmp19;
          tmp13 = tmp20;
          tmp14 = tmp21;
        } while (num < values.length);
      }
      return items;
    } else {
      return pending_requests;
    }
  }, items2);
};
export const usePendingRequestListController = function usePendingRequestListController(pendingRequests) {
  let c6;
  let c7;
  let dependencyMap;
  let isAcceptLoading;
  let isDeclineLoading;
  let linkedUsersProcessed;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError: dependencyMap } = pendingRequests);
  let c5;
  c6 = undefined;
  c7 = undefined;
  let callback;
  let obj = pendingRequests(7123);
  const hasMaxConnections = obj.useHasMaxConnections();
  let tmp2 = callback(acceptLinkRequest.useState(null), 2);
  callback = tmp2[1];
  obj = {
    onSuccess() {
      return callback2(null);
    },
    onError() {
      callback2(null);
      callback();
    }
  };
  const familyCenterActions = pendingRequests(11061).useFamilyCenterActions(obj);
  acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let tmp4 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp4 = isDeclineLoading;
  }
  c5 = tmp4;
  const obj2 = pendingRequests(11061);
  [c6, c7] = callback(acceptLinkRequest.useState(() => new Set()), 2);
  callback = acceptLinkRequest.useCallback((arg0) => {
    let closure_0 = arg0;
    _undefined2((has) => {
      if (has.has(closure_0)) {
        return has;
      } else {
        const _Set = Set;
        const set = new Set(has);
        set.add(closure_0);
        return set;
      }
    });
  }, []);
  let items = [tmp4, callback, acceptLinkRequest];
  const items1 = [tmp4, callback, declineLinkRequest];
  const callback1 = acceptLinkRequest.useCallback((arg0) => {
    if (!c5) {
      callback(arg0);
      callback2(arg0);
      acceptLinkRequest(arg0);
    }
  }, items);
  const callback2 = acceptLinkRequest.useCallback((arg0) => {
    if (!c5) {
      callback(arg0);
      callback2(arg0);
      declineLinkRequest(arg0);
    }
  }, items1);
  const tmp5 = callback(acceptLinkRequest.useState(() => new Set()), 2);
  [tmp10, tmp11] = callback(acceptLinkRequest.useState(pendingRequests), 2);
  const tmp9 = callback(acceptLinkRequest.useState(pendingRequests), 2);
  [tmp13, tmp14] = callback(acceptLinkRequest.useState(pendingRequests), 2);
  const tmp12 = callback(acceptLinkRequest.useState(pendingRequests), 2);
  if (linkedUsersProcessed) {
    if (!tmp15[0]) {
      tmp16(true);
      tmp14(pendingRequests);
      tmp11((arg0) => {
        let done;
        let iter2;
        const map = new Map();
        const tmp = _undefined2(arg0);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp2 = _undefined;
            if (_undefined.has(value.parent_id)) {
              let result = map.set(value.parent_id, value);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
        const tmp4 = _undefined2(pendingRequests);
        let iter3 = tmp4();
        if (!iter3.done) {
          do {
            value = iter3.value;
            let result1 = map.set(value.parent_id, value);
            let iter4 = tmp4();
            iter3 = iter4;
            done = iter4.done;
          } while (!done);
        }
        return Array.from(map.values());
      });
    }
    obj = { seenRequests: tmp10, hasMaxConnections, actioningUserId: tmp2[0], isAcceptLoading, isDeclineLoading, actionsDisabled: tmp4, handleAccept: callback1, handleDecline: callback2 };
    return obj;
  }
  if (pendingRequests !== tmp13) {
    tmp14(pendingRequests);
    tmp11((arr) => {
      let done;
      const map = new Map(arr.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      const tmp = _undefined2(pendingRequests);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let result = map.set(value.parent_id, value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return Array.from(map.values());
    });
  }
};
export const usePendingRequestResolution = function usePendingRequestResolution(parent_id) {
  const _require = parent_id;
  let obj = _require(stateFromStores[5]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = outer1_4.getLinkedUsers()[closure_0];
    let link_status;
    if (null != tmp) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  const tmp2 = callback(React.useState(() => {
    let str = "connected";
    if (stateFromStores !== outer1_6.ACTIVE) {
      if (null == stateFromStores) {
        let str2 = null;
      } else {
        str2 = "declined";
      }
      str = str2;
    }
    return str;
  }), 2);
  const first = tmp2[0];
  const tmp5 = callback(React.useState(stateFromStores), 2);
  const first1 = tmp5[0];
  if (stateFromStores !== first1) {
    tmp5[1](stateFromStores);
    if (stateFromStores === UserLinkStatus.ACTIVE) {
      tmp4("connected");
    } else if (stateFromStores === UserLinkStatus.PENDING) {
      tmp4(null);
    } else {
      let tmp11 = null != stateFromStores;
      if (!tmp11) {
        let tmp12 = null != first1;
        if (tmp12) {
          tmp12 = first1 !== UserLinkStatus.ACTIVE;
        }
        tmp11 = tmp12;
      }
      if (tmp11) {
        tmp4("declined");
      }
    }
  }
  let tmp18 = "connected" === first;
  obj = { isConnected: tmp18, isDeclined: "declined" === first };
  if (!tmp18) {
    tmp18 = tmp19;
  }
  obj.isResolved = tmp18;
  return obj;
};
