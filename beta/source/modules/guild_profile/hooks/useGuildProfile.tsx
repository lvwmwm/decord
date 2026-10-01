// Module ID: 9029
// Function ID: 9030
// Name: useGuildProfile
// Dependencies: [5, 19, 9028, 504, 9030, 2]
// Exports: useGuildProfile

// Module 9029 (useGuildProfile)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildProfileStore from "GuildProfileStore" /* 9028 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  let items2;
  let stateFromStores1;
  _require = guildId;
  let obj = require("get initialized");
  const items = [GuildProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildProfileStore.getProfile(guildId));
  let obj2 = require("get initialized");
  const items1 = [GuildProfileStore];
  let obj3 = {
    guildProfile: stateFromStores,
    fetchGuildProfile: react.useCallback(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj3;
      guildId = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_1;
          let flag;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp4;
              closure_1 = tmp;
              flag = guildId;
              if (guildId === undefined) {
                flag = false;
              }
              c3 = 1;
              c4 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c3 = 2;
              c4 = 1;
              const obj6 = { value: obj3.getGuildProfile(closure_130_0, flag), done: false };
              obj3 = guildId(closure_1[4]);
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    }), items2),
    fetchStatus: stateFromStores1
  };
  stateFromStores1 = obj2.useStateFromStores(items1, () => GuildProfileStore.getFetchStatus(guildId));
  items2 = [guildId];
  return obj3;
};
