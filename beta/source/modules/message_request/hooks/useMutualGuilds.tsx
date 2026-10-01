// Module ID: 16703
// Function ID: 16704
// Name: useMutualGuilds
// Dependencies: [19, 7035, 1372, 504, 573, 7632, 2]
// Exports: useMutualGuildsForMessageRequests

// Module 16703 (useMutualGuilds)
import DispatcherDefault from "Dispatcher" /* 573 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = function useMutualGuildsForMessageRequests(userId) {
  let stateFromStoresArray;
  _require = userId;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [UserProfileStore];
  const obj2 = require("get initialized");
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const mutualGuilds = UserProfileStore.getMutualGuilds(userId);
    let mapped;
    if (mutualGuilds != null) {
      mapped = mutualGuilds.map((guild) => guild.guild);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  });
  const items2 = [stateFromStoresArray, stateFromStores, userId];
  const effect = react.useEffect(() => {
    const tmp = 0 === stateFromStoresArray.length && null != stateFromStores && null == UserProfileStore.getMutualGuilds(userId);
    if (tmp) {
      const obj = DispatcherDefault;
      obj.wait(() => stateFromStores(stateFromStoresArray[5])(userId, undefined, { withMutualGuilds: true }));
    }
  }, items2);
  return stateFromStoresArray;
};
