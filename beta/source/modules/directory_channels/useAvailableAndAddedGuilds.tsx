// Module ID: 11801
// Function ID: 11802
// Name: useAvailableAndAddedGuilds
// Dependencies: [5, 32, 19, 2067, 4469, 5750, 11795, 1074, 504, 5298, 11799, 2]
// Exports: default

// Module 11801 (useAvailableAndAddedGuilds)
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11795 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, closure_0, flattenedGuildIds, importDefault;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  let closure_1;
  let closure_2;
  let first;
  let items3;
  let items4;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  [first, closure_2] = react.useState(false);
  let obj = require("get initialized");
  let items = [GuildDirectoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getAdminGuildEntryIds(closure_1));
  let obj2 = require("get initialized");
  const items1 = [SortedGuildStore, GuildStore, PermissionStore];
  const items2 = [arg0];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      const guild = GuildStore.getGuild(item);
      const canResult = null != guild && PermissionStore.can(Permissions.ADMINISTRATOR, guild) && guild.id !== closure_0;
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  require("useMountEffect")(() => {
    const tmp = (async (arg0, value) => {
      let v3;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp;
              closure_2_2(true);
              c1 = 1;
              const obj2 = c2(stateFromStores[10]);
              c2 = 1;
              const obj5 = { value: obj2.fetchGuildEntriesForIds(closure_2_1, stateFromStoresArray.map((id) => id.id)), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2(false);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })();
  });
  let obj3 = {
    availableGuilds: react.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem;
      const obj = stateFromStores;
      if (stateFromStores != null) {
        hasItem = obj.has(id.id);
      }
      return !hasItem;
    }), items3),
    addedGuilds: react.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem;
      const obj = stateFromStores;
      if (stateFromStores != null) {
        hasItem = obj.has(id.id);
      }
      return hasItem;
    }), items4),
    loading: first
  };
  items3 = [stateFromStoresArray, stateFromStores];
  items4 = [stateFromStoresArray, stateFromStores];
  return obj3;
};
