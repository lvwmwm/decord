// Module ID: 18213
// Function ID: 18214
// Name: useVoiceChannelGames
// Dependencies: [19, 502, 5169, 5977, 1392, 558, 576, 9081, 504, 9082, 8463, 2]

// Module 18213 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 8463 */;
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9081 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5169 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5977 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, set;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelGames(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp3 = dependencyMap;
  let tmp4 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, , ];
    let tmp8 = SelfPresenceStore;
    items[1] = SelfPresenceStore;
    let tmp9 = PresenceStore;
    items[2] = PresenceStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp10;
    let tmp11;
    let tmp17;
    let tmp16;
    if (cResult[2] === arg0) {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    let tmp12 = tmp;
    let tmp13 = tmp3;
    const tmp2Result = require("get initialized");
    const stateFromStoresArray = tmp2Result.useStateFromStoresArray(first, tmp10, tmp11);
    const tmp2Result3 = require("useGetGameForAppId");
    const getGamesForAppIds = tmp2Result3.useGetGamesForAppIds(stateFromStoresArray);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      const fn2 = function _() {
        currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return nsfwAllowed;
      };
      cResult[5] = items1;
      cResult[6] = fn2;
      tmp17 = fn2;
      tmp16 = items1;
    } else {
      tmp16 = cResult[5];
      tmp17 = cResult[6];
    }
    const tmp2Result4 = require("get initialized");
    const stateFromStores = tmp2Result4.useStateFromStores(tmp16, tmp17);
    if (cResult[7] === getGamesForAppIds) {
      let tmp22;
      if (cResult[8] === stateFromStores) {
        tmp22 = cResult[9];
      }
      return tmp22;
    }
    const items2 = [];
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    for (const item10074 of getGamesForAppIds) {
      let tmp26 = item10074;
      let obj6 = require("useGameProfileObscured");
      let result = obj6.isGameProfileObscured(item10074, stateFromStores);
      if (!result) {
        result = set.has(tmp26.id);
      }
      if (!result) {
        let addResult = set.add(tmp26.id);
        let arr = items2.push(tmp26.id);
      }
      continue;
    }
    cResult[7] = getGamesForAppIds;
    cResult[8] = stateFromStores;
    cResult[9] = items2;
    tmp22 = items2;
  }
  const fn = function f() {
    const id = AuthenticationStore.getId();
    set = new Set();
    const iter = closure_0[Symbol.iterator]();
    while (iter !== undefined) {
      let user = iter.next().user;
      if (user.id === id) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp3.id, closure_1);
      }
      for (const item10033 of activities) {
        let tmp11 = item10033;
        let tmp14 = isPlayingGameActivityDefault(item10033);
        if (tmp14) {
          tmp14 = null != tmp11.application_id;
        }
        if (tmp14) {
          let addResult = set.add(tmp11.application_id);
        }
        continue;
      }
      continue;
    }
    return Array.from(set);
  };
  const items3 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp11 = items3;
  tmp10 = fn;
}) : (function useVoiceChannelGames(arg0, arg1) {
  let closure_0;
  let getGamesForAppIds;
  _require = arg0;
  let closure_1 = arg1;
  let items = [AuthenticationStore, SelfPresenceStore, PresenceStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const id = AuthenticationStore.getId();
    set = new Set();
    const iter = closure_0[Symbol.iterator]();
    while (iter !== undefined) {
      let user = iter.next().user;
      if (user.id === id) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp3.id, closure_1);
      }
      for (const item10033 of activities) {
        let tmp11 = item10033;
        let tmp14 = isPlayingGameActivityDefault(item10033);
        if (tmp14) {
          tmp14 = null != tmp11.application_id;
        }
        if (tmp14) {
          let addResult = set.add(tmp11.application_id);
        }
        continue;
      }
      continue;
    }
    return Array.from(set);
  }, items1);
  let obj2 = require("useGetGameForAppId");
  getGamesForAppIds = obj2.useGetGamesForAppIds(stateFromStoresArray);
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items3 = [getGamesForAppIds, stateFromStores];
  return stateFromStores.useMemo(() => {
    const items = [];
    set = new Set();
    for (const item10013 of getGamesForAppIds) {
      let tmp = item10013;
      let obj2 = useGameProfileObscured;
      let result = obj2.isGameProfileObscured(item10013, stateFromStores);
      if (!result) {
        result = set.has(tmp.id);
      }
      if (!result) {
        let addResult = set.add(tmp.id);
        let arr = items.push(tmp.id);
      }
      continue;
    }
    return items;
  }, items3);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default tmp2;
