// Module ID: 11959
// Function ID: 11960
// Name: useCanManageGuildDirectoryEntry
// Dependencies: [2064, 2086, 4709, 1085, 558, 576, 504, 2]

// Module 11959 (useCanManageGuildDirectoryEntry)
import Constants from "Constants" /* 1085 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanManageGuildDirectoryEntry(guildId) {
  let first;
  let stateFromStores;
  let stateFromStores1;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = guildId;
  const obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
    cResult[1] = guildId.guildId;
    cResult[2] = S;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
    const items1 = [stateFromStores1];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
  }
  if (cResult[4] !== guildId.channelId) {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
    cResult[4] = guildId.channelId;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  } else {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
  }
  const tmpResult4 = require("get initialized");
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
    const items2 = [PermissionStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    class S {
      constructor() {
        return closure_3.getGuild(closure_0.guildId);
      }
    }
  }
  if (cResult[7] !== stateFromStores) {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
    cResult[7] = stateFromStores;
    cResult[8] = I;
    tmp13 = I;
  } else {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp12, tmp13);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
    const items3 = [PermissionStore];
    cResult[9] = items3;
    tmp15 = items3;
  } else {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
  }
  if (cResult[10] !== stateFromStores1) {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
    cResult[10] = stateFromStores1;
    cResult[11] = tmp17;
    tmp16 = tmp17;
  } else {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp15, tmp16);
  if (cResult[12] === stateFromStores2) {
    class I {
      constructor() {
        return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
      }
    }
  }
  const obj2 = { isEntryAdmin: stateFromStores2, canEdit: stateFromStores2 || stateFromStores3, canRemove: stateFromStores2 || stateFromStores3 };
  cResult[12] = stateFromStores2;
  cResult[13] = stateFromStores2 || stateFromStores3;
  cResult[14] = stateFromStores2 || stateFromStores3;
  cResult[15] = obj2;
}) : (function useCanManageGuildDirectoryEntry(arg0) {
  let closure_0;
  let closure_1;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  dependencyMap = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0.guildId));
  const items1 = [closure_2];
  const obj2 = require("get initialized");
  closure_2 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(closure_0.channelId));
  const items2 = [PermissionStore];
  const obj3 = require("get initialized");
  let stateFromStores = obj3.useStateFromStores(items2, () => PermissionStore.can(Permissions.ADMINISTRATOR, closure_1));
  const items3 = [PermissionStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items3, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_2));
  const obj5 = { isEntryAdmin: stateFromStores, canEdit: stateFromStores || stateFromStores1, canRemove: stateFromStores };
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  return obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanCreateOrAddGuildInDirectory(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return PermissionStore.can(Permissions.SEND_MESSAGES, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useCanCreateOrAddGuildInDirectory(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.SEND_MESSAGES, closure_0));
});
const result = size.fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default tmp2;
export const useCanCreateOrAddGuildInDirectory = tmp3;
