// Module ID: 17708
// Function ID: 17709
// Name: usePendingParentRequests
// Dependencies: [32, 19, 6957, 1372, 6958, 504, 8105, 11395, 2]
// Exports: useDerivedPendingRequests, usePendingRequestListController, usePendingRequestResolution

// Module 17708 (usePendingParentRequests)
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import useUserLinks from "useUserLinks" /* 8105 */;
import useFamilyCenterActions from "useFamilyCenterActions" /* 11395 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, map, set;

const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
let result = size.fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = function useDerivedPendingRequests(arr, stateFromStores1) {
  let linkedUsers;
  _require = arr;
  dependencyMap = stateFromStores1;
  let obj = require("get initialized");
  let items = [FamilyCenterStore];
  const stateFromStores = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [UserStore];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores1, stateFromStores, stateFromStores1, arr];
  return stateFromStores1.useMemo(function() {
    let avatar;
    let username;
    const tmp = closure_1;
    if (tmp) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      let items = [];
      const _Object = Object;
      map = new Map(arr.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      const values = Object.values(stateFromStores);
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp13 = nextResult;
        if (null != nextResult) {
          if (tmp13.link_status === UserLinkStatus.PENDING) {
            if (tmp13.requestor_id !== stateFromStores1) {
              let user = UserStore.getUser(tmp13.user_id);
              let tmp31 = user;
              let value = map.get(tmp13.user_id);
              let obj = { parent_id: tmp13.user_id, parent_username: username, parent_avatar: avatar, created_at: tmp13.created_at };
              username = undefined;
              let push = items.push;
              if (user != null) {
                username = user.username;
              }
              if (username == null) {
                let parent_username;
                if (value != null) {
                  parent_username = value.parent_username;
                }
                username = parent_username;
              }
              if (username == null) {
                username = tmp13.user_id;
              }
              avatar = undefined;
              if (tmp31 != null) {
                avatar = tmp31.avatar;
              }
              if (avatar == null) {
                let parent_avatar;
                if (value != null) {
                  parent_avatar = value.parent_avatar;
                }
                avatar = parent_avatar;
              }
              if (avatar == null) {
                avatar = null;
              }
              arr = push(obj);
            }
          }
        }
        continue;
      }
      return items;
    } else {
      return arr;
    }
  }, items2);
};
export const usePendingRequestListController = function usePendingRequestListController(pendingRequests) {
  let c2;
  let c6;
  let c7;
  let closure_129_1;
  let isAcceptLoading;
  let isDeclineLoading;
  let linkedUsersProcessed;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp4;
  const f108711 = () => {
    set = new Set();
    return set;
  };
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError: closure_129_1 } = pendingRequests);
  c2 = undefined;
  c6 = undefined;
  c7 = undefined;
  const obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  let tmp2 = _slicedToArray;
  let tmp3 = _slicedToArray(react.useState(null), 2);
  [tmp4, c2] = tmp3;
  const obj3 = useFamilyCenterActions;
  const obj4 = {
    onSuccess() {
      return _undefined(null);
    },
    onError() {
      _undefined(null);
      closure_1_1();
    }
  };
  const familyCenterActions = obj3.useFamilyCenterActions(obj4);
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let closure_5 = tmp6;
  [c6, c7] = tmp2(react.useState(f108711), 2);
  tmp2(react.useState(f108711), 2);
  const callback = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = _undefined3(function(has) {
      const tmp = closure_0;
      if (has.has(closure_0)) {
        return has;
      } else {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(has);
        set.add(tmp);
        return set;
      }
    });
  }, []);
  let items = [tmp6, callback, acceptLinkRequest];
  const items1 = [tmp6, callback, declineLinkRequest];
  const callback1 = obj2.useCallback((arg0) => {
    const tmp = closure_5;
    if (!tmp) {
      callback(arg0);
      _undefined(arg0);
      acceptLinkRequest(arg0);
    }
  }, items);
  const callback2 = obj2.useCallback((arg0) => {
    const tmp = closure_5;
    if (!tmp) {
      callback(arg0);
      _undefined(arg0);
      declineLinkRequest(arg0);
    }
  }, items1);
  [tmp12, tmp13] = tmp2(react.useState(pendingRequests), 2);
  tmp2(react.useState(pendingRequests), 2);
  [tmp15, tmp16] = tmp2(react.useState(pendingRequests), 2);
  tmp2(react.useState(pendingRequests), 2);
  const tmp2Result6 = tmp2(react.useState(linkedUsersProcessed), 2);
  if (linkedUsersProcessed) {
    if (!tmp2Result6[0]) {
      tmp18(true);
      tmp16(pendingRequests);
      tmp13((arg0) => {
        map = new Map();
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if (_undefined2.has(nextResult.parent_id)) {
            let result = map.set(tmp2.parent_id, tmp2);
          }
          continue;
        }
        for (const item10027 of pendingRequests) {
          let result1 = map.set(item10027.parent_id, item10027);
          continue;
        }
        return Array.from(map.values());
      });
    }
    return { seenRequests: tmp12, hasMaxConnections, actioningUserId: tmp4, isAcceptLoading, isDeclineLoading, actionsDisabled: isAcceptLoading || isDeclineLoading, handleAccept: callback1, handleDecline: callback2 };
  }
  if (pendingRequests !== tmp15) {
    tmp16(pendingRequests);
    tmp13((arr) => {
      map = new Map(arr.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      for (const item10015 of pendingRequests) {
        let result = map.set(item10015.parent_id, item10015);
        continue;
      }
      return Array.from(map.values());
    });
  }
};
export const usePendingRequestResolution = function usePendingRequestResolution(parent_id) {
  let stateFromStores;
  let tmp3;
  let tmp4;
  const f108718 = () => {
    let str = "connected";
    if (stateFromStores !== UserLinkStatus.ACTIVE) {
      let str2;
      if (null == stateFromStores) {
        str2 = null;
      } else {
        str2 = "declined";
      }
      str = str2;
    }
    return str;
  };
  _require = parent_id;
  const items = [FamilyCenterStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = FamilyCenterStore.getLinkedUsers()[parent_id];
    let link_status;
    if (tmp != null) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  [tmp3, tmp4] = _slicedToArray(react.useState(f108718), 2);
  const tmp2 = _slicedToArray(react.useState(f108718), 2);
  const tmp5 = _slicedToArray(react.useState(stateFromStores), 2);
  const first = tmp5[0];
  if (stateFromStores !== first) {
    tmp5[1](stateFromStores);
    if (stateFromStores === UserLinkStatus.ACTIVE) {
      let str2 = "connected";
      tmp4("connected");
    } else if (stateFromStores === UserLinkStatus.PENDING) {
      tmp4(null);
    } else {
      let tmp10 = null != stateFromStores;
      if (!tmp10) {
        tmp10 = null != first && first !== UserLinkStatus.ACTIVE;
      }
      if (tmp10) {
        let str = "declined";
        tmp4("declined");
      }
    }
  }
  let tmp16 = "connected" === tmp3;
  const obj2 = { isConnected: tmp16, isDeclined: "declined" === tmp3, isResolved: tmp16 };
  if (!tmp16) {
    tmp16 = tmp17;
  }
  return obj2;
};
