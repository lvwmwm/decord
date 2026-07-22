// Module ID: 15447
// Function ID: 117857
// Name: useMutualGuildsForMessageRequests
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: useMutualGuildsForMessageRequests

// Module 15447 (useMutualGuildsForMessageRequests)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

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
