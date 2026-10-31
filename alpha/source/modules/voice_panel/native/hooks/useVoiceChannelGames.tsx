// Module ID: 19271
// Function ID: 19272
// Name: useVoiceChannelGames
// Dependencies: [19, 502, 5761, 6570, 1383, 504, 9292, 9293, 8682, 2]
// Exports: default

// Module 19271 (useVoiceChannelGames)
import useGameProfileObscured from "useGameProfileObscured" /* 8682 */;
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9292 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, set;

let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1) {
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
};
