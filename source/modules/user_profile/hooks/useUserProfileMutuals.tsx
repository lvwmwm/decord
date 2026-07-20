// Module ID: 11618
// Function ID: 90233
// Name: useUserProfileMutuals
// Dependencies: []
// Exports: default

// Module 11618 (useUserProfileMutuals)
let closure_3 = importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[1]).useMemo;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default function useUserProfileMutuals(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_7];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getMutualFriendsCount(arg0.id), store.getMutualFriends(arg0.id), store.getMutualGuilds(arg0.id), store.isFetchingProfile(arg0.id), store.isFetchingFriends(arg0.id)];
    return items;
  }), 5);
  const first = tmp[0];
  const importDefault = tmp3;
  const dependencyMap = tmp4;
  const items1 = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
  const callback = stateFromStores;
  const obj2 = arg1(dependencyMap[5]);
  const items2 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  const useMemo = stateFromStores1;
  const items3 = [tmp[1], stateFromStores];
  const tmp7 = useMemo(() => {
    if (null != tmp3) {
      if (tmp3.length >= 2) {
        let sortByResult = arg0(tmp4[6]).sortBy(tmp3, (user) => {
          const value = closure_3.get(user.user.id);
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
        const obj = arg0(tmp4[6]);
      }
      return sortByResult;
    }
    sortByResult = tmp3;
  }, items3);
  const items4 = [tmp[2], stateFromStores1];
  const tmp8 = useMemo(() => {
    if (null != tmp4) {
      if (tmp4.length >= 2) {
        const _Object = Object;
        const callback = Object.fromEntries(stateFromStores1.map((arg0, arg1) => {
          const items = [arg0, arg1];
          return items;
        }));
        return callback(callback[6]).sortBy(callback, (arg0) => {
          let length = closure_0[arg0.guild.id];
          if (null == length) {
            length = length.length;
          }
          return length;
        });
      }
    }
    return tmp4;
  }, items4);
  let tmp9 = importDefault(dependencyMap[7])(first);
  let tmp10 = importDefault(dependencyMap[7])(tmp7);
  let tmp11 = importDefault(dependencyMap[7])(tmp8);
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
