// Module ID: 16944
// Function ID: 16945
// Name: useVoiceChannelGames
// Dependencies: [19, 502, 4877, 5592, 1378, 558, 576, 9169, 504, 9170, 5424, 2]

// Module 16944 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 5424 */;
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9169 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4877 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5592 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, set;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, , ];
    items[1] = SelfPresenceStore;
    items[2] = PresenceStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg2) {
    if (cResult[2] === arg1) {
      let tmp10;
      let tmp11;
      let tmp17;
      let tmp16;
      if (cResult[3] === arg0) {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      let tmp12 = tmp;
      let tmp13 = tmp3;
      const tmp2Result = require("get initialized");
      const stateFromStoresArray = tmp2Result.useStateFromStoresArray(first, tmp10, tmp11);
      const tmp2Result3 = require("useGetGameForAppId");
      const getGamesForAppIds = tmp2Result3.useGetGamesForAppIds(stateFromStoresArray);
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp18 = UserStore;
        const items1 = [UserStore];
        class A {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let nsfwAllowed;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        cResult[6] = items1;
        cResult[7] = A;
        tmp17 = A;
        tmp16 = items1;
      } else {
        tmp16 = cResult[6];
        tmp17 = cResult[7];
      }
      let tmp19 = tmp;
      let tmp20 = tmp3;
      const tmp2Result4 = require("get initialized");
      const stateFromStores = tmp2Result4.useStateFromStores(tmp16, tmp17);
      if (cResult[8] === getGamesForAppIds) {
        let tmp22;
        if (cResult[9] === stateFromStores) {
          tmp22 = cResult[10];
        }
        return tmp22;
      }
      const items2 = [];
      let _Set = Set;
      let self = this;
      let self2 = this;
      set = new Set();
      let tmp23 = set;
      let tmp24 = getGamesForAppIds;
      for (const item10077 of getGamesForAppIds) {
        let tmp26 = item10077;
        class A {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let nsfwAllowed;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        let obj6 = require("useGameProfileObscured");
        let result = obj6.isGameProfileObscured(item10077, stateFromStores);
        if (!result) {
          result = set.has(tmp26.id);
        }
        if (!result) {
          let addResult = set.add(tmp26.id);
          let arr = items2.push(tmp26.id);
        }
        continue;
      }
      cResult[8] = getGamesForAppIds;
      cResult[9] = stateFromStores;
      cResult[10] = items2;
      tmp22 = items2;
    }
  }
  const fn = function v() {
    const tmp = closure_2;
    if (tmp) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const id = AuthenticationStore.getId();
      set = new Set();
      const iter = closure_0[Symbol.iterator]();
      while (iter !== undefined) {
        let user = iter.next().user;
        if (user.id === id) {
          let activities = SelfPresenceStore.getActivities();
        } else {
          activities = PresenceStore.getActivities(tmp11.id, closure_1);
        }
        for (const item10035 of activities) {
          let tmp19 = item10035;
          let tmp22 = isPlayingGameActivityDefault(item10035);
          if (tmp22) {
            tmp22 = null != tmp19.application_id;
          }
          if (tmp22) {
            let addResult = set.add(tmp19.application_id);
          }
          continue;
        }
        continue;
      }
      const _Array = Array;
      return Array.from(set);
    } else {
      return [];
    }
  };
  const items3 = [arg0, arg1, arg2];
  cResult[1] = arg2;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items3;
  tmp11 = items3;
  tmp10 = fn;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let items = [stateFromStores, SelfPresenceStore, PresenceStore];
  const items1 = [arg0, arg1, arg2];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, function() {
    const tmp = closure_2;
    if (tmp) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const id = AuthenticationStore.getId();
      set = new Set();
      const iter = closure_0[Symbol.iterator]();
      while (iter !== undefined) {
        let user = iter.next().user;
        if (user.id === id) {
          let activities = SelfPresenceStore.getActivities();
        } else {
          activities = PresenceStore.getActivities(tmp11.id, closure_1);
        }
        for (const item10035 of activities) {
          let tmp19 = item10035;
          let tmp22 = isPlayingGameActivityDefault(item10035);
          if (tmp22) {
            tmp22 = null != tmp19.application_id;
          }
          if (tmp22) {
            let addResult = set.add(tmp19.application_id);
          }
          continue;
        }
        continue;
      }
      const _Array = Array;
      return Array.from(set);
    } else {
      return [];
    }
  }, items1);
  let obj2 = require("useGetGameForAppId");
  const getGamesForAppIds = obj2.useGetGamesForAppIds(stateFromStoresArray);
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items3 = [getGamesForAppIds, stateFromStores];
  return getGamesForAppIds.useMemo(() => {
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
