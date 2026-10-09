// Module ID: 18569
// Function ID: 18570
// Name: usePendingParentRequests
// Dependencies: [32, 19, 7252, 1390, 7253, 558, 576, 504, 7720, 11484, 2]

// Module 18569 (usePendingParentRequests)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7253 */;
import useUserLinks from "useUserLinks" /* 7720 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, map, set;

let tmp;
const useFamilyCenterActions = tmp(11484);
const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDerivedPendingRequests(arr, arg1) {
  let avatar;
  let linkedUsers;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let username;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [FamilyCenterStore];
    const fn = function c() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function p() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  let tmp12 = arr;
  if (arg1) {
    let obj4;
    if (cResult[4] !== arr) {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function h(parent_id) {
          const items = [parent_id.parent_id, parent_id];
          return items;
        };
        cResult[6] = fn3;
        tmp13 = fn3;
      } else {
        tmp13 = cResult[6];
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(arr.map(tmp13));
      cResult[4] = arr;
      cResult[5] = map;
      obj4 = map;
    } else {
      obj4 = cResult[5];
    }
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === stateFromStores) {
        let tmp16;
        if (cResult[9] === obj4) {
          tmp16 = cResult[10];
        }
        tmp12 = tmp16;
      }
    }
    const items2 = [];
    const _Object = Object;
    const values = Object.values(stateFromStores);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp23 = nextResult;
      if (null != nextResult) {
        if (tmp23.link_status === UserLinkStatus.PENDING) {
          if (tmp23.requestor_id !== stateFromStores1) {
            let user = UserStore.getUser(tmp23.user_id);
            let tmp40 = user;
            let value = obj4.get(tmp23.user_id);
            let obj2 = { parent_id: tmp23.user_id, parent_username: username, parent_avatar: avatar, created_at: tmp23.created_at };
            username = undefined;
            let push = items2.push;
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
              username = tmp23.user_id;
            }
            avatar = undefined;
            if (tmp40 != null) {
              avatar = tmp40.avatar;
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
            arr = push(obj2);
          }
        }
      }
      continue;
    }
    cResult[7] = stateFromStores1;
    cResult[8] = stateFromStores;
    cResult[9] = obj4;
    cResult[10] = items2;
    tmp16 = items2;
  }
  return tmp12;
}) : (function useDerivedPendingRequests(arg0, arg1) {
  let closure_0;
  let closure_1;
  let linkedUsers;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  let items = [FamilyCenterStore];
  const stateFromStores = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [arg1, stateFromStores, stateFromStores1, arg0];
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
      map = new Map(closure_0.map((parent_id) => {
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
              let arr = push(obj);
            }
          }
        }
        continue;
      }
      return items;
    } else {
      return closure_0;
    }
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingRequestListController(pendingRequests) {
  let closure_129_2;
  let closure_129_6;
  let closure_129_7;
  let first;
  let isAcceptLoading;
  let isDeclineLoading;
  let linkedUsersProcessed;
  let onActionError;
  let tmp12;
  let tmp14;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp7;
  let tmp9;
  let tmp = require;
  let tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(20);
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError } = pendingRequests);
  const obj2 = useUserLinks;
  const hasMaxConnections = obj2.useHasMaxConnections();
  [tmp7, closure_129_2] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return closure_1_2(null);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onActionError) {
    const obj4 = {
      onSuccess: first,
      onError() {
          closure_1_2(null);
          onActionError();
        }
    };
    cResult[1] = onActionError;
    cResult[2] = obj4;
    tmp9 = obj4;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = useFamilyCenterActions;
  const familyCenterActions = tmpResult.useFamilyCenterActions(tmp9);
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let closure_5 = tmp11;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      set = new Set();
      return set;
    };
    cResult[3] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
  }
  [closure_129_6, closure_129_7] = _slicedToArray(react.useState(tmp12), 2);
  _slicedToArray(react.useState(tmp12), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function b(arg0) {
      let closure_0 = arg0;
      let tmp = closure_1_7(function(has) {
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
    };
    cResult[4] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[4];
  }
  let closure_8 = tmp14;
  if (cResult[5] === acceptLinkRequest) {
    let tmp15;
    if (cResult[6] === (isAcceptLoading || isDeclineLoading)) {
      tmp15 = cResult[7];
    }
    if (cResult[8] === declineLinkRequest) {
      let tmp16;
      if (cResult[9] === (isAcceptLoading || isDeclineLoading)) {
        tmp16 = cResult[10];
      }
      [tmp18, tmp19] = _slicedToArray(react.useState(pendingRequests), 2);
      _slicedToArray(react.useState(pendingRequests), 2);
      [tmp21, tmp22] = _slicedToArray(react.useState(pendingRequests), 2);
      _slicedToArray(react.useState(pendingRequests), 2);
      const tmp5Result6 = _slicedToArray(react.useState(linkedUsersProcessed), 2);
      if (linkedUsersProcessed) {
        if (!tmp5Result6[0]) {
          tmp24(true);
          tmp22(pendingRequests);
          tmp19((arg0) => {
            map = new Map();
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp2 = nextResult;
              if (set.has(nextResult.parent_id)) {
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
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp15) {
            if (cResult[13] === tmp16) {
              if (cResult[14] === hasMaxConnections) {
                if (cResult[15] === isAcceptLoading) {
                  if (cResult[16] === isDeclineLoading) {
                    if (cResult[17] === (isAcceptLoading || isDeclineLoading)) {
                      let tmp30;
                      if (cResult[18] === tmp18) {
                        tmp30 = cResult[19];
                      }
                      return tmp30;
                    }
                  }
                }
              }
            }
          }
        }
        const obj5 = { seenRequests: tmp18, hasMaxConnections, actioningUserId: tmp7, isAcceptLoading, isDeclineLoading, actionsDisabled: isAcceptLoading || isDeclineLoading, handleAccept: tmp15, handleDecline: tmp16 };
        cResult[11] = tmp7;
        cResult[12] = tmp15;
        cResult[13] = tmp16;
        cResult[14] = hasMaxConnections;
        cResult[15] = isAcceptLoading;
        cResult[16] = isDeclineLoading;
        cResult[17] = isAcceptLoading || isDeclineLoading;
        cResult[18] = tmp18;
        cResult[19] = obj5;
        tmp30 = obj5;
      }
      if (pendingRequests !== tmp21) {
        tmp22(pendingRequests);
        tmp19((arr) => {
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
    }
    const fn4 = function w(arg0) {
      const tmp = closure_5;
      if (!tmp) {
        closure_8(arg0);
        closure_1_2(arg0);
        declineLinkRequest(arg0);
      }
    };
    cResult[8] = declineLinkRequest;
    cResult[9] = isAcceptLoading || isDeclineLoading;
    cResult[10] = fn4;
    tmp16 = fn4;
  }
  class M {
    constructor(arg0) {
      const tmp = closure_5;
      if (!tmp) {
        closure_8(arg0);
        closure_1_2(arg0);
        acceptLinkRequest(arg0);
      }
    }
  }
  cResult[5] = acceptLinkRequest;
  cResult[6] = isAcceptLoading || isDeclineLoading;
  cResult[7] = M;
  tmp15 = M;
}) : (function usePendingRequestListController(pendingRequests) {
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
  const f135030 = () => {
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
  [c6, c7] = tmp2(react.useState(f135030), 2);
  tmp2(react.useState(f135030), 2);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingRequestResolution(arg0) {
  let closure_0;
  let first;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(9);
  const tmp2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const tmp = FamilyCenterStore.getLinkedUsers()[closure_0];
      let link_status;
      if (tmp != null) {
        link_status = tmp.link_status;
      }
      return link_status;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[7]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function v() {
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
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  [tmp10, tmp11] = react.useState(tmp8);
  _slicedToArray(react.useState(tmp8), 2);
  const tmp12 = _slicedToArray(react.useState(stateFromStores), 2);
  const first1 = tmp12[0];
  if (stateFromStores !== first1) {
    tmp12[1](stateFromStores);
    if (stateFromStores === UserLinkStatus.ACTIVE) {
      let str2 = "connected";
      tmp11("connected");
    } else if (stateFromStores === UserLinkStatus.PENDING) {
      tmp11(null);
    } else {
      let tmp17 = null != stateFromStores;
      if (!tmp17) {
        tmp17 = null != first1 && first1 !== UserLinkStatus.ACTIVE;
      }
      if (tmp17) {
        let str = "declined";
        tmp11("declined");
      }
    }
  }
  if (cResult[5] === "connected" === tmp10) {
    if (cResult[6] === "declined" === tmp10) {
      let tmp26;
      if (cResult[7] === ("connected" === tmp10 || "declined" === tmp10)) {
        tmp26 = cResult[8];
      }
      return tmp26;
    }
  }
  const obj2 = { isConnected: "connected" === tmp10, isDeclined: "declined" === tmp10, isResolved: "connected" === tmp10 || "declined" === tmp10 };
  cResult[5] = "connected" === tmp10;
  cResult[6] = "declined" === tmp10;
  cResult[7] = "connected" === tmp10 || "declined" === tmp10;
  cResult[8] = obj2;
  tmp26 = obj2;
}) : (function usePendingRequestResolution(arg0) {
  let closure_0;
  let stateFromStores;
  let tmp3;
  let tmp4;
  const f135039 = () => {
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
  _require = arg0;
  const items = [FamilyCenterStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = FamilyCenterStore.getLinkedUsers()[closure_0];
    let link_status;
    if (tmp != null) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  [tmp3, tmp4] = _slicedToArray(react.useState(f135039), 2);
  const tmp2 = _slicedToArray(react.useState(f135039), 2);
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
});
let result = size.fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = tmp2;
export const usePendingRequestListController = tmp3;
export const usePendingRequestResolution = tmp4;
