// Module ID: 16433
// Function ID: 126956
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useDerivedPendingRequests, usePendingRequestListController, usePendingRequestResolution

// Module 16433 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const UserLinkStatus = arg1(dependencyMap[4]).UserLinkStatus;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = function useDerivedPendingRequests(pending_requests, stateFromStores1) {
  stateFromStores1 = pending_requests;
  const dependencyMap = stateFromStores1;
  const items = [closure_4];
  const stateFromStores = stateFromStores1(dependencyMap[5]).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  let closure_2 = stateFromStores;
  const obj = stateFromStores1(dependencyMap[5]);
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores1(dependencyMap[5]).useStateFromStores(items1, () => {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const React = stateFromStores1;
  const items2 = [stateFromStores1, stateFromStores, stateFromStores1, pending_requests];
  return React.useMemo(() => {
    if (arg1) {
      const _Map = Map;
      const map = new Map(arg0.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      const items = [];
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
            let tmp30 = closure_6;
            tmp16 = tmp9;
            tmp17 = tmp10;
            tmp18 = tmp11;
            tmp19 = tmp12;
            tmp20 = tmp13;
            tmp21 = tmp14;
            if (tmp15.link_status === closure_6.PENDING) {
              let tmp31 = closure_3;
              tmp16 = tmp9;
              tmp17 = tmp10;
              tmp18 = tmp11;
              tmp19 = tmp12;
              tmp20 = tmp13;
              tmp21 = tmp14;
              if (tmp15.requestor_id !== closure_3) {
                let tmp32 = closure_5;
                let user = closure_5.getUser(tmp15.user_id);
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
          let tmp9 = tmp16;
          let tmp10 = tmp17;
          let tmp11 = tmp18;
          let tmp12 = tmp19;
          let tmp13 = tmp20;
          let tmp14 = tmp21;
        } while (num < values.length);
      }
      return items;
    } else {
      return arg0;
    }
  }, items2);
};
export const usePendingRequestListController = function usePendingRequestListController(pendingRequests) {
  let isAcceptLoading;
  let isDeclineLoading;
  let linkedUsersProcessed;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  pendingRequests = pendingRequests.pendingRequests;
  const arg1 = pendingRequests;
  ({ linkedUsersProcessed, onActionError: closure_1 } = pendingRequests);
  let closure_5;
  let closure_6;
  let closure_7;
  let _arrayLikeToArray;
  let obj = arg1(dependencyMap[6]);
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp2 = callback(React.useState(null), 2);
  let callback = tmp2[1];
  obj = {
    onSuccess() {
      return callback2(null);
    },
    onError() {
      callback2(null);
      callback();
    }
  };
  const familyCenterActions = arg1(dependencyMap[7]).useFamilyCenterActions(obj);
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const React = acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  let closure_4 = declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let tmp4 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp4 = isDeclineLoading;
  }
  closure_5 = tmp4;
  const obj2 = arg1(dependencyMap[7]);
  [closure_6, closure_7] = callback(React.useState(() => new Set()), 2);
  callback = React.useCallback((arg0) => {
    const pendingRequests = arg0;
    _undefined((has) => {
      if (has.has(has)) {
        return has;
      } else {
        const _Set = Set;
        const set = new Set(has);
        set.add(has);
        return set;
      }
    });
  }, []);
  _arrayLikeToArray = callback;
  const items = [tmp4, callback, acceptLinkRequest];
  const items1 = [tmp4, callback, declineLinkRequest];
  const callback1 = React.useCallback((arg0) => {
    if (!tmp4) {
      callback(arg0);
      acceptLinkRequest(arg0);
      const tmp4 = callback2(arg0);
    }
  }, items);
  const callback2 = React.useCallback((arg0) => {
    if (!tmp4) {
      callback(arg0);
      declineLinkRequest(arg0);
      const tmp4 = callback2(arg0);
    }
  }, items1);
  const tmp5 = callback(React.useState(() => new Set()), 2);
  [tmp10, tmp11] = callback(React.useState(pendingRequests), 2);
  const tmp9 = callback(React.useState(pendingRequests), 2);
  [tmp13, tmp14] = callback(React.useState(pendingRequests), 2);
  const tmp12 = callback(React.useState(pendingRequests), 2);
  if (linkedUsersProcessed) {
    if (!tmp15[0]) {
      tmp16(true);
      tmp14(pendingRequests);
      tmp11((arg0) => {
        let done;
        let iter2;
        const map = new Map();
        const tmp = _undefined(arg0);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp2 = closure_6;
            if (closure_6.has(value.parent_id)) {
              let result = map.set(value.parent_id, value);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
        const tmp4 = _undefined(pendingRequests);
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
      const tmp = _undefined(pendingRequests);
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
  const arg1 = parent_id;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = linkedUsers.getLinkedUsers()[closure_0];
    let link_status;
    if (null != tmp) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  const dependencyMap = stateFromStores;
  const tmp2 = callback(React.useState(() => {
    let str = "connected";
    if (stateFromStores !== constants.ACTIVE) {
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
