// Module ID: 17367
// Function ID: 17368
// Name: useMutualGuilds
// Dependencies: [19, 7309, 1389, 558, 576, 504, 584, 8287, 2]

// Module 17367 (useMutualGuilds)
import DispatcherDefault from "Dispatcher" /* 584 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMutualGuildsForMessageRequests(arg0) {
  let closure_0;
  let first;
  let stateFromStoresArray;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return UserStore.getUser(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(stateFromStoresArray[5]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function f() {
      const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
      let mapped;
      if (mutualGuilds != null) {
        mapped = mutualGuilds.map((guild) => guild.guild);
      }
      if (mapped == null) {
        mapped = [];
      }
      return mapped;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult2 = tmp(stateFromStoresArray[5]);
  stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp8, tmp10);
  if (cResult[6] === stateFromStoresArray) {
    if (cResult[7] === stateFromStores) {
      let tmp12;
      let tmp13;
      if (cResult[8] === arg0) {
        tmp12 = cResult[9];
        tmp13 = cResult[10];
      }
      const effect = react.useEffect(tmp12, tmp13);
      return stateFromStoresArray;
    }
  }
  class S {
    constructor() {
      const tmp = 0 === stateFromStoresArray.length && null != stateFromStores && null == UserProfileStore.getMutualGuilds(closure_0);
      if (tmp) {
        const obj = DispatcherDefault;
        obj.wait(() => stateFromStores(stateFromStoresArray[7])(closure_1_0, undefined, { withMutualGuilds: true }));
      }
    }
  }
  const items2 = [stateFromStoresArray, stateFromStores, arg0];
  cResult[6] = stateFromStoresArray;
  cResult[7] = stateFromStores;
  cResult[8] = arg0;
  cResult[9] = S;
  cResult[10] = items2;
  tmp13 = items2;
  tmp12 = S;
}) : (function useMutualGuildsForMessageRequests(arg0) {
  let closure_0;
  let stateFromStoresArray;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0));
  const items1 = [UserProfileStore];
  const obj2 = require("get initialized");
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
    let mapped;
    if (mutualGuilds != null) {
      mapped = mutualGuilds.map((guild) => guild.guild);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  });
  const items2 = [stateFromStoresArray, stateFromStores, arg0];
  const effect = react.useEffect(() => {
    const tmp = 0 === stateFromStoresArray.length && null != stateFromStores && null == UserProfileStore.getMutualGuilds(closure_0);
    if (tmp) {
      const obj = DispatcherDefault;
      obj.wait(() => stateFromStores(stateFromStoresArray[7])(closure_1_0, undefined, { withMutualGuilds: true }));
    }
  }, items2);
  return stateFromStoresArray;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = tmp2;
