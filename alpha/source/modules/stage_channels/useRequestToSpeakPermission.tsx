// Module ID: 10995
// Function ID: 10996
// Name: useRequestToSpeakPermission
// Dependencies: [32, 19, 2065, 1085, 558, 576, 504, 4755, 7487, 2]

// Module 10995 (useRequestToSpeakPermission)
import Constants from "Constants" /* 1085 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7487 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestToSpeakPermission(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let items2;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = S;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
    const obj3 = stateFromStores(4755);
    cResult[4] = stateFromStores;
    cResult[5] = obj3.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
    const canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  } else {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
  }
  [tmp13, tmp14] = react.useState(tmp9);
  dependencyMap = tmp14;
  _slicedToArray(react.useState(tmp9), 2);
  if (tmp9 !== tmp13) {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp16;
  } else {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
  }
  if (cResult[8] === tmp13) {
    class S {
      constructor() {
        return closure_5.getChannel(closure_0);
      }
    }
    return items2;
  }
  items2 = [tmp13, tmp15];
  cResult[8] = tmp13;
  cResult[9] = tmp15;
  cResult[10] = items2;
}) : (function useRequestToSpeakPermission(arg0) {
  let closure_0;
  let closure_2;
  let tmp4;
  let tmp5;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0), items1);
  const obj2 = stateFromStores(4755);
  const canEveryoneRoleResult = obj2.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  [tmp4, tmp5] = _slicedToArray(react.useState(canEveryoneRoleResult), 2);
  dependencyMap = tmp5;
  const tmp3 = _slicedToArray(react.useState(canEveryoneRoleResult), 2);
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    function setRequestToSpeakEnabled(arg0) {
      if (null != stateFromStores) {
        tmp5(arg0);
        const obj = StageChannelActionCreators;
        const result = obj.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
      }
    }
  ];
  return items2;
});
let result = size.fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = tmp2;
