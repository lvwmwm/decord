// Module ID: 12466
// Function ID: 12467
// Name: useAvailableAndAddedGuilds
// Dependencies: [5, 32, 19, 2067, 4399, 5657, 12460, 1078, 558, 568, 504, 12464, 5203, 2]

// Module 12466 (useAvailableAndAddedGuilds)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import SortedGuildStore from "SortedGuildStore" /* 5657 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 12460 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1078).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(24);
  let obj = require("c");
  [r10017, importAll] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildDirectoryStore];
    cResult[0] = items;
    let first = items;
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
    const tmp7 = G;
  } else {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    const items1 = [SortedGuildStore, GuildStore, PermissionStore];
    cResult[3] = items1;
    const tmp9 = items1;
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
    cResult[5] = tmp14;
    cResult[6] = items2;
    let tmp13 = items2;
    const tmp12 = tmp14;
  } else {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult = require("initialize");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp9, tmp12, tmp13);
  if (cResult[7] === stateFromStoresArray) {
    class G {
      constructor() {
        return closure_10.getAdminGuildEntryIds(closure_1);
      }
    }
    require("useMountEffect")(R);
    if (cResult[10] === stateFromStores) {
      class G {
        constructor() {
          return closure_10.getAdminGuildEntryIds(closure_1);
        }
      }
    }
    if (cResult[13] !== stateFromStores) {
      class O {
        constructor(arg0) {
          obj = closure_3;
          hasItem = undefined;
          if (closure_3 != null) {
            tmp2 = arg0;
            hasItem = obj.has(arg0.id);
          }
          return !hasItem;
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = O;
      const tmp17 = O;
    } else {
      class O {
        constructor(arg0) {
          obj = closure_3;
          hasItem = undefined;
          if (closure_3 != null) {
            tmp2 = arg0;
            hasItem = obj.has(arg0.id);
          }
          return !hasItem;
        }
      }
    }
    const found = stateFromStoresArray.filter(tmp17);
    cResult[10] = stateFromStores;
    cResult[11] = stateFromStoresArray;
    cResult[12] = found;
  }
  class R {
    constructor() {
      tmp = closure_4(/* F140847 */ function() { ... })();
      return;
    }
  }
  cResult[7] = stateFromStoresArray;
  cResult[8] = arg1;
  cResult[9] = R;
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  let items = [GuildDirectoryStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildDirectoryStore.getAdminGuildEntryIds(closure_1));
  let obj = require("initialize");
  const items1 = [SortedGuildStore, GuildStore, PermissionStore];
  const items2 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      guild = GuildStore.getGuild(item);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
      }
      if (canResult) {
        canResult = guild.id !== closure_0;
      }
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  require("useMountEffect")(() => {
    (async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp2;
              closure_2_2(true);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: v3(stateFromStores[11]).fetchGuildEntriesForIds(closure_2_1, stateFromStoresArray.map((id) => id.id)), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2(false);
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          v3 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  let obj3 = { availableGuilds: null, addedGuilds: null, loading: tmp[0] };
  const items3 = [stateFromStoresArray, stateFromStores];
  obj3.availableGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return !hasItem;
  }), items3);
  const items4 = [stateFromStoresArray, stateFromStores];
  obj3.addedGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return hasItem;
  }), items4);
  return obj3;
});
