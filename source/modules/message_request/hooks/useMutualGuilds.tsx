// Module ID: 15439
// Function ID: 117814
// Name: useMutualGuildsForMessageRequests
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: useMutualGuildsForMessageRequests

// Module 15439 (useMutualGuildsForMessageRequests)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

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
