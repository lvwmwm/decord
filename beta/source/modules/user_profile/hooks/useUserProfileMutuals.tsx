// Module ID: 12099
// Function ID: 12100
// Name: useUserProfileMutuals
// Dependencies: [32, 19, 7072, 5750, 7035, 504, 12, 9089, 2]
// Exports: default

// Module 12099 (useUserProfileMutuals)
import _mod12 from "module_12" /* 12 */;
import react from "react" /* 19 */;
import reactDefault from "react" /* 9089 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, importDefault;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default function useUserProfileMutuals(arg0) {
  let closure_1;
  let flattenedGuildIds;
  let stateFromStores;
  let tmp2;
  let tmp3;
  let userAffinitiesMap;
  _require = arg0;
  let obj = require("get initialized");
  let items = [UserProfileStore];
  const tmp = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [UserProfileStore.getMutualFriendsCount(closure_0.id), UserProfileStore.getMutualFriends(closure_0.id), UserProfileStore.getMutualGuilds(closure_0.id), UserProfileStore.isFetchingProfile(closure_0.id), UserProfileStore.isFetchingFriends(closure_0.id)];
    return items;
  }), 5);
  [tmp2, tmp3] = tmp;
  importDefault = tmp3;
  dependencyMap = tmp4;
  const items1 = [UserAffinitiesV2Store];
  const tmp5 = tmp[3];
  const tmp6 = tmp[4];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
  const items2 = [SortedGuildStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  const items3 = [tmp3, stateFromStores];
  let tmp9 = stateFromStores1(() => {
    let sortByResult = importDefault;
    if (null != importDefault) {
      let num = 2;
      sortByResult = arr;
      if (importDefault.length >= 2) {
        const obj = _mod12;
        sortByResult = obj.sortBy(arr, (user) => {
          const value = stateFromStores.get(user.user.id);
          let num;
          if (value != null) {
            num = value.communicationProbability;
          }
          if (num == null) {
            num = -1;
          }
          return -1 * num;
        });
      }
    }
    return sortByResult;
  }, items3);
  const items4 = [tmp4, stateFromStores1];
  let tmp10 = stateFromStores1(() => {
    if (null != length) {
      if (length.length >= 2) {
        const _Object = Object;
        closure_0 = Object.fromEntries(stateFromStores1.map((item, index) => {
          const items = [item, index];
          return items;
        }));
        const obj = closure_0(length[6]);
        return obj.sortBy(length, (arg0) => {
          length = closure_0[arg0.guild.id];
          if (length == null) {
            length = stateFromStores1.length;
          }
          return length;
        });
      }
    }
    return length;
  }, items4);
  const tmp11 = reactDefault(tmp2);
  const tmp12 = reactDefault(tmp9);
  const tmp13 = reactDefault(tmp10);
  const obj4 = { mutualFriendsCount: tmp2, mutualFriends: tmp9, mutualGuilds: tmp10, isFetching: tmp5, isFetchingFriends: tmp6 };
  if (tmp9 == null) {
    tmp9 = tmp12;
  }
  if (tmp10 == null) {
    tmp10 = tmp13;
  }
  return obj4;
};
