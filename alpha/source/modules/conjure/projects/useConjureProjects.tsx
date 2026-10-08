// Module ID: 17266
// Function ID: 17267
// Name: useConjureProjects
// Dependencies: [32, 19, 5436, 7309, 4705, 2086, 4707, 4899, 13073, 11251, 1126, 3827, 558, 576, 6934, 12359, 12378, 1452, 504, 6932, 2]
// Exports: describeConjureProjectRow

// Module 17266 (useConjureProjects)
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureUtils from "ConjureUtils" /* 6932 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6934 */;
import ConjureActivity from "ConjureActivity" /* 12359 */;
import conjureAppInServer from "conjureAppInServer" /* 12378 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import ConjureChatStore from "ConjureChatStore" /* 13073 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map, set;

function conjureEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult = nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every((projectId, index) => null != nextExpiry2.entries[index] && projectId.projectId === nextExpiry2.entries[index].projectId && projectId.activity === nextExpiry2.entries[index].activity && projectId.name === nextExpiry2.entries[index].name && projectId.guildId === nextExpiry2.entries[index].guildId && projectId.guildName === nextExpiry2.entries[index].guildName && projectId.notInServer === nextExpiry2.entries[index].notInServer && projectId.guild === nextExpiry2.entries[index].guild);
  }
  return everyResult;
}
function conjureGuildsEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
  return tmp;
}
function collectEntries(_location) {
  let obj3;
  _require = _location;
  function add(item10061) {
    let name;
    let tmpResult3;
    const obj = set;
    if (!set.has(item10061.id)) {
      const obj2 = ConjureActivity;
      const result = obj2.conjureProjectGuildId(item10061);
      if (null == result) {
        obj.add(item10061.id);
        const isThinkingResult = ConjureChatStore.isThinking(item10061.id);
        let num = ConjureChatStore.getFinishedAt(item10061.id);
        const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
        const tmpResult = ConjureActivity;
        const conjureActivityResult = tmpResult.conjureActivity(obj4);
        if ("done" === conjureActivityResult) {
          if (null != num) {
            const sum = num + tmp(12359).CONJURE_DONE_WINDOW_MS;
            bound = sum;
            if (null != bound) {
              const _Math = Math;
              bound = Math.min(bound, sum);
            }
          }
        }
        let guild = null;
        if (null != result) {
          guild = GuildStore.getGuild(result);
        }
        if (guild == null) {
          guild = null;
        }
        ({ id: obj8.projectId, name: obj8.name } = item10061);
        const obj5 = { project: item10061, projectId: null, name: null, guildId: result, guild, guildName: name, notInServer: "not_in_server" === tmpResult3.readConjureAppServerPresence(item10061), activity: conjureActivityResult, sortTime: num };
        name = undefined;
        const push = items.push;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          name = null;
        }
        tmpResult3 = conjureAppInServer;
        if (null == num) {
          num = 0;
          if (null != item10061.updated_at) {
            const _Date = Date;
            const parsed = Date.parse(item10061.updated_at);
            const _Number = Number;
            let num2 = 0;
            if (!Number.isNaN(parsed)) {
              num2 = parsed;
            }
            num = num2;
          }
        }
        push(obj5);
      } else {
        let value = map.get(result);
        const obj3 = map;
        if (null == value) {
          const obj6 = { guildId: result, location: _location };
          const tmpResult4 = ConjureGuildExperiment;
          const result1 = tmpResult4.isConjureGuildEnabled(obj6);
          const result2 = obj3.set(result, result1);
          value = result1;
        }
      }
    }
  }
  function isEnabled(id) {
    const value = map.get(id);
    const obj = map;
    if (null != value) {
      return value;
    } else {
      const obj3 = { guildId: id, location: _location };
      const obj2 = ConjureGuildExperiment;
      const result = obj2.isConjureGuildEnabled(obj3);
      const result1 = obj.set(id, result);
      return result;
    }
  }
  const now = Date.now();
  map = new Map();
  set = new Set();
  const items = [];
  let bound = null;
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  const iter = ownedProjects[Symbol.iterator]();
  while (iter !== undefined) {
    let addResult = add(iter.next());
    continue;
  }
  const values = Object.values(GuildStore.getGuilds());
  for (const item10042 of values) {
    let tmp6 = item10042;
    let obj = ConjureProjectStore;
    if (ConjureProjectStore.hasFetchedGuildProjects(item10042.id)) {
      if (isEnabled(tmp6.id)) {
        let sharedProjects = obj.getSharedProjects(tmp6.id);
        for (const item10061 of sharedProjects) {
          let addResult1 = add(item10061);
          continue;
        }
      }
    }
    continue;
  }
  let obj2 = { entries: obj3.sortConjureProjects(items), nextExpiry: bound };
  obj3 = require("ConjureActivity");
  return obj2;
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDoneWindowExpiry(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === arg0) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function o() {
    let timeout;
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  };
  const items = [arg0, arg1];
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useDoneWindowExpiry(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    let timeout;
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjects(arg0) {
  let closure_0;
  let first;
  let first1;
  let tmp14;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  [first, tmp6] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, ConjureChatStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, require("ApexExperiment").ApexExperimentStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return collectEntries(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp14 = fn;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === arg0) {
    let tmp15;
    if (cResult[4] === first) {
      tmp15 = cResult[5];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first1, tmp14, tmp15, conjureEntriesEqual);
    const entries = stateFromStores.entries;
    closure_15(stateFromStores.nextExpiry, tmp6);
    return entries;
  }
  const items1 = [arg0, first];
  cResult[3] = arg0;
  cResult[4] = first;
  cResult[5] = items1;
  tmp15 = items1;
}) : (function useConjureProjects(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  [tmp2, tmp3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const items = [ConjureProjectStore, ConjureChatStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[6] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0, tmp2];
  const stateFromStores = useStateFromStores(items, () => collectEntries(closure_0), items1, conjureEntriesEqual);
  const entries = stateFromStores.entries;
  closure_15(stateFromStores.nextExpiry, tmp3);
  return entries;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureEligibleGuilds(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const values = Object.values(GuildStore.getGuilds());
      const found = values.filter((item) => {
        const obj = closure_0(dependencyMap[19]);
        return obj.canStartConjureProject(item, closure_1_0);
      });
      return found.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return tmpResult.useStateFromStores(first, tmp7, tmp8, conjureGuildsEqual);
}) : (function useConjureEligibleGuilds(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, , ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  items[2] = PermissionStore;
  const items1 = [arg0];
  return useStateFromStores(items, () => {
    const values = Object.values(GuildStore.getGuilds());
    const found = values.filter((item) => {
      const obj = closure_0(dependencyMap[19]);
      return obj.canStartConjureProject(item, closure_1_0);
    });
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, conjureGuildsEqual);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureForMeGuildId(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, SelectedGuildStore, require("ApexExperiment").ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let id;
      let obj = GuildStore;
      const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
      if (null != guild) {
        const obj2 = ConjureUtils;
        if (obj2.canAccessConjure(guild, closure_0)) {
          id = guild.id;
        }
        return id;
      }
      const values = Object.values(obj.getGuilds());
      id = undefined;
      const sorted = values.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
      const found = sorted.find((item) => {
        const obj = closure_0(dependencyMap[19]);
        return obj.canAccessConjure(item, closure_1_0);
      });
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = null;
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useConjureForMeGuildId(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, SelectedGuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[2] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0];
  return useStateFromStores(items, () => {
    let id;
    let obj = GuildStore;
    const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    if (null != guild) {
      const obj2 = ConjureUtils;
      if (obj2.canAccessConjure(guild, closure_0)) {
        id = guild.id;
      }
      return id;
    }
    const values = Object.values(obj.getGuilds());
    id = undefined;
    const sorted = values.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    const found = sorted.find((item) => {
      const obj = closure_0(dependencyMap[19]);
      return obj.canAccessConjure(item, closure_1_0);
    });
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      id = null;
    }
  }, items1);
});
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjects.tsx");

export const describeConjureProjectRow = function describeConjureProjectRow(entry) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj;
  let obj11;
  let obj4;
  let obj6;
  if (entry.notInServer) {
    const obj3 = { serverName: intl4.string(_modDef3827["08PzLy"]), label: intl5.formatToPlainString(_modDef3827.pyh2pa, obj4) };
    intl4 = intl6.intl;
    intl5 = intl6.intl;
    obj = obj3;
    obj4 = { name: entry.name };
  } else if (null == entry.guildName) {
    const obj5 = { serverName: intl2.string(_modDef3827["3QFps8"]), label: intl3.formatToPlainString(_modDef3827["2sBOnp"], obj6) };
    intl2 = intl6.intl;
    intl3 = intl6.intl;
    obj = obj5;
    obj6 = { name: entry.name };
  } else {
    obj = { serverName: entry.guildName, label: intl.formatToPlainString(_modDef3827["hd+GF1"], obj11) };
    intl = intl6.intl;
    obj11 = { name: null, server: null };
    ({ name: obj2.name, guildName: obj2.server } = entry);
  }
  return obj;
};
export const useConjureProjects = tmp2;
export const useConjureEligibleGuilds = tmp3;
export const useConjureForMeGuildId = tmp4;
