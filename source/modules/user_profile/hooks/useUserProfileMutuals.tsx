// Module ID: 11663
// Function ID: 90568
// Name: useUserProfileMutuals
// Dependencies: [57, 31, 6901, 4970, 6855, 566, 22, 8510, 2]
// Exports: default

// Module 11663 (useUserProfileMutuals)
import _slicedToArray from "_slicedToArray";
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default function useUserProfileMutuals(arg0) {
  const _require = arg0;
  let obj = _require(566);
  let items = [closure_7];
  const tmp = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_7.getMutualFriendsCount(lib.id), outer1_7.getMutualFriends(lib.id), outer1_7.getMutualGuilds(lib.id), outer1_7.isFetchingProfile(lib.id), outer1_7.isFetchingFriends(lib.id)];
    return items;
  }), 5);
  const first = tmp[0];
  const importDefault = tmp3;
  const dependencyMap = tmp4;
  const items1 = [_isNativeReflectConstruct];
  stateFromStores = _require(566).useStateFromStores(items1, () => outer1_5.getUserAffinitiesMap());
  const obj2 = _require(566);
  const items2 = [closure_6];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => outer1_6.getFlattenedGuildIds());
  const items3 = [tmp[1], stateFromStores];
  const tmp7 = stateFromStores1(() => {
    if (null != tmp3) {
      if (tmp3.length >= 2) {
        let sortByResult = lib(tmp4[6]).sortBy(tmp3, (user) => {
          const value = outer1_3.get(user.user.id);
          let prop;
          if (null != value) {
            prop = value.communicationProbability;
          }
          let num = -1;
          if (null != prop) {
            num = prop;
          }
          return -1 * num;
        });
        const obj = lib(tmp4[6]);
      }
      return sortByResult;
    }
    sortByResult = tmp3;
  }, items3);
  const items4 = [tmp[2], stateFromStores1];
  const tmp8 = stateFromStores1(() => {
    if (null != tmp4) {
      if (tmp4.length >= 2) {
        const _Object = Object;
        const lib = Object.fromEntries(stateFromStores1.map((arg0, arg1) => {
          const items = [arg0, arg1];
          return items;
        }));
        return lib(lib[6]).sortBy(lib, (arg0) => {
          let length = table[arg0.guild.id];
          if (null == length) {
            length = outer1_4.length;
          }
          return length;
        });
      }
    }
    return tmp4;
  }, items4);
  let tmp9 = importDefault(8510)(first);
  let tmp10 = importDefault(8510)(tmp7);
  let tmp11 = importDefault(8510)(tmp8);
  obj = {};
  if (null != first) {
    tmp9 = first;
  }
  obj.mutualFriendsCount = tmp9;
  if (null != tmp7) {
    tmp10 = tmp7;
  }
  obj.mutualFriends = tmp10;
  if (null != tmp8) {
    tmp11 = tmp8;
  }
  obj.mutualGuilds = tmp11;
  obj.isFetching = tmp[3];
  obj.isFetchingFriends = tmp[4];
  return obj;
};
