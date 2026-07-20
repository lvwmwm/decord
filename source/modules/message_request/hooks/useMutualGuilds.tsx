// Module ID: 15429
// Function ID: 117751
// Name: useMutualGuildsForMessageRequests
// Dependencies: []
// Exports: useMutualGuildsForMessageRequests

// Module 15429 (useMutualGuildsForMessageRequests)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = function useMutualGuildsForMessageRequests(userId) {
  const arg1 = userId;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => user.getUser(arg0));
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_4];
  const stateFromStoresArray = arg1(dependencyMap[3]).useStateFromStoresArray(items1, () => {
    const mutualGuilds = store.getMutualGuilds(arg0);
    let mapped;
    if (null != mutualGuilds) {
      mapped = mutualGuilds.map((guild) => guild.guild);
    }
    if (null == mapped) {
      mapped = [];
    }
    return mapped;
  });
  const dependencyMap = stateFromStoresArray;
  const items2 = [stateFromStoresArray, stateFromStores, userId];
  const effect = React.useEffect(() => {
    let tmp = 0 === stateFromStoresArray.length;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == store.getMutualGuilds(arg0);
    }
    if (tmp) {
      stateFromStores(stateFromStoresArray[4]).wait(() => callback(closure_2[5])(closure_0, undefined, { withMutualGuilds: true }));
      const obj = stateFromStores(stateFromStoresArray[4]);
    }
  }, items2);
  return stateFromStoresArray;
};
