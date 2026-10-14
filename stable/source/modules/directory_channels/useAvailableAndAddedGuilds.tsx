// Module ID: 11946
// Function ID: 11947
// Name: useAvailableAndAddedGuilds
// Dependencies: [5, 32, 19, 2074, 4509, 5616, 11940, 1085, 558, 576, 504, 11944, 5590, 2]

// Module 11946 (useAvailableAndAddedGuilds)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11940 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, closure_0, flattenedGuildIds, importDefault;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_1;
  let first;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp8;
  _require = arg0;
  importDefault = arg1;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(24);
  [tmp5, importAll] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildDirectoryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    cResult[1] = arg1;
    cResult[2] = G;
    tmp8 = G;
  } else {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
  }
  const tmpResult = tmp(stateFromStores[10]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    const items1 = [SortedGuildStore, , ];
    items1[1] = GuildStore;
    items1[2] = PermissionStore;
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
  }
  if (cResult[4] !== arg0) {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = tmp15;
    cResult[6] = items2;
    tmp14 = items2;
    tmp13 = tmp15;
  } else {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    tmp14 = cResult[6];
  }
  const tmpResult2 = tmp(stateFromStores[10]);
  const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp10, tmp13, tmp14);
  if (cResult[7] === stateFromStoresArray) {
    let tmp19;
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    require("useMountEffect")(R);
    if (cResult[10] === stateFromStores) {
      let tmp22;
      class G {
        constructor() {
          return closure_10.getAdminGuildEntryIds(closure_1);
        }
      }
      if (cResult[15] === stateFromStores) {
        class G {
          constructor() {
            return closure_10.getAdminGuildEntryIds(closure_1);
          }
        }
        if (cResult[20] === tmp21) {
          class G {
            constructor() {
              return closure_10.getAdminGuildEntryIds(closure_1);
            }
          }
        }
        let obj2 = { availableGuilds: tmp18, addedGuilds: tmp21, loading: tmp5 };
        cResult[20] = tmp21;
        cResult[21] = tmp18;
        cResult[22] = tmp5;
        cResult[23] = obj2;
      }
      if (cResult[18] !== stateFromStores) {
        class P {
          constructor(arg0) {
            obj = closure_3;
            hasItem = undefined;
            if (closure_3 != null) {
              tmp2 = arg0;
              hasItem = obj.has(arg0.id);
            }
            return hasItem;
          }
        }
        cResult[18] = stateFromStores;
        cResult[19] = P;
        tmp22 = P;
      } else {
        class P {
          constructor(arg0) {
            obj = closure_3;
            hasItem = undefined;
            if (closure_3 != null) {
              tmp2 = arg0;
              hasItem = obj.has(arg0.id);
            }
            return hasItem;
          }
        }
      }
      const found = stateFromStoresArray.filter(tmp22);
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStoresArray;
      cResult[17] = found;
    }
    if (cResult[13] !== stateFromStores) {
      class P {
        constructor(arg0) {
          obj = closure_3;
          hasItem = undefined;
          if (closure_3 != null) {
            tmp2 = arg0;
            hasItem = obj.has(arg0.id);
          }
          return hasItem;
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = O;
      tmp19 = O;
    } else {
      class P {
        constructor(arg0) {
          obj = closure_3;
          hasItem = undefined;
          if (closure_3 != null) {
            tmp2 = arg0;
            hasItem = obj.has(arg0.id);
          }
          return hasItem;
        }
      }
    }
    const found1 = stateFromStoresArray.filter(tmp19);
    cResult[10] = stateFromStores;
    cResult[11] = stateFromStoresArray;
    cResult[12] = found1;
  }
  class R {
    constructor() {
      tmp = closure_4(function() { /* body not rendered: F141994 */ })();
      return;
    }
  }
  cResult[7] = stateFromStoresArray;
  cResult[8] = arg1;
  cResult[9] = R;
}) : ((arg0, arg1) => {
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
          return { value: "IconComponent", done: null };
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
              const obj2 = c2(stateFromStores[11]);
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
            return { value: "IconComponent", done: null };
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
});
const result = size.fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default tmp2;
