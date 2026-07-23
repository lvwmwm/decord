// Module ID: 15564
// Function ID: 120031
// Name: useMutualGuildsForMessageRequests
// Dependencies: [31, 6856, 1849, 566, 686, 7888, 2]
// Exports: useMutualGuildsForMessageRequests

// Module 15564 (useMutualGuildsForMessageRequests)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = function useMutualGuildsForMessageRequests(userId) {
  const _require = userId;
  const items = [closure_5];
  const stateFromStores = _require(stateFromStoresArray[3]).useStateFromStores(items, () => outer1_5.getUser(closure_0));
  let obj = _require(stateFromStoresArray[3]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStoresArray = _require(stateFromStoresArray[3]).useStateFromStoresArray(items1, () => {
    const mutualGuilds = outer1_4.getMutualGuilds(closure_0);
    let mapped;
    if (null != mutualGuilds) {
      mapped = mutualGuilds.map((guild) => guild.guild);
    }
    if (null == mapped) {
      mapped = [];
    }
    return mapped;
  });
  const items2 = [stateFromStoresArray, stateFromStores, userId];
  const effect = React.useEffect(() => {
    let tmp = 0 === stateFromStoresArray.length;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == outer1_4.getMutualGuilds(closure_0);
    }
    if (tmp) {
      stateFromStores(stateFromStoresArray[4]).wait(() => stateFromStores(stateFromStoresArray[5])(outer1_0, undefined, { withMutualGuilds: true }));
      const obj = stateFromStores(stateFromStoresArray[4]);
    }
  }, items2);
  return stateFromStoresArray;
};
