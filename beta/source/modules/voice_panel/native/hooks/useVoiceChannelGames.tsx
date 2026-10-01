// Module ID: 16986
// Function ID: 16987
// Name: useVoiceChannelGames
// Dependencies: [19, 502, 4876, 5591, 1372, 504, 9192, 9193, 5423, 2]
// Exports: default

// Module 16986 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 5423 */;
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9192 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, set;

let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1, arg2) {
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
};
