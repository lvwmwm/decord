// Module ID: 19275
// Function ID: 19276
// Name: useMutualGuilds
// Dependencies: [19, 7917, 1385, 504, 8904, 2]
// Exports: useMutualGuildsForMessageRequests

// Module 19275 (useMutualGuilds)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8904 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7917 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export function useMutualGuildsForMessageRequests(userId) {
  let stateFromStoresArray;
  _require = userId;
  const items = [UserStore];
  const obj = require("get initialized");
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
      maybeFetchUserProfileDefault(userId, undefined, { withMutualGuilds: true });
    }
  }, items2);
  return stateFromStoresArray;
}
