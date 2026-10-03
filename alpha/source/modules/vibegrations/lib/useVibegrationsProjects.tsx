// Module ID: 16940
// Function ID: 16941
// Name: useVibegrationsProjects
// Dependencies: [32, 19, 2074, 4509, 12905, 8699, 558, 576, 6748, 12265, 1440, 504, 6746, 2]

// Module 16940 (useVibegrationsProjects)
import react2 from "react" /* 576 */;
import VibegrationsGuildExperiment from "VibegrationsGuildExperiment" /* 6748 */;
import VibegrationsActivity from "VibegrationsActivity" /* 12265 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map, set;

function vibegrationsEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult = nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every((projectId, index) => null != nextExpiry2.entries[index] && projectId.projectId === nextExpiry2.entries[index].projectId && projectId.activity === nextExpiry2.entries[index].activity && projectId.name === nextExpiry2.entries[index].name && projectId.guildId === nextExpiry2.entries[index].guildId && projectId.guildName === nextExpiry2.entries[index].guildName && projectId.guild === nextExpiry2.entries[index].guild);
  }
  return everyResult;
}
function vibegrationsGuildsEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
  return tmp;
}
function collectEntries(_location) {
  let now;
  let obj3;
  _require = _location;
  function add(item10061) {
    let name;
    const obj = set;
    if (!set.has(item10061.id)) {
      const obj2 = VibegrationsActivity;
      const result = obj2.vibegrationsProjectGuildId(item10061);
      if (null == result) {
        obj.add(item10061.id);
        const isThinkingResult = VibegrationsChatStore.isThinking(item10061.id);
        let num = VibegrationsChatStore.getFinishedAt(item10061.id);
        const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
        const tmpResult = VibegrationsActivity;
        const vibegrationsActivityResult = tmpResult.vibegrationsActivity(obj4);
        if ("done" === vibegrationsActivityResult) {
          if (null != num) {
            const sum = num + tmp(12265).VIBEGRATIONS_DONE_WINDOW_MS;
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
        const obj5 = { project: item10061, projectId: null, name: null, guildId: result, guild, guildName: name, activity: vibegrationsActivityResult, sortTime: num };
        ({ id: obj8.projectId, name: obj8.name } = item10061);
        name = undefined;
        const push = items.push;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          name = null;
        }
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
          const tmpResult2 = VibegrationsGuildExperiment;
          const result1 = tmpResult2.isVibegrationsGuildEnabled(obj6);
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
      const obj2 = VibegrationsGuildExperiment;
      const result = obj2.isVibegrationsGuildEnabled(obj3);
      const result1 = obj.set(id, result);
      return result;
    }
  }
  dependencyMap = Date.now();
  map = new Map();
  set = new Set();
  const items = [];
  let bound = null;
  const ownedProjects = VibegrationsProjectStore.getOwnedProjects();
  const iter = ownedProjects[Symbol.iterator]();
  while (iter !== undefined) {
    let addResult = add(iter.next());
    continue;
  }
  const values = Object.values(items.getGuilds());
  for (const item10042 of values) {
    let tmp6 = item10042;
    let obj = VibegrationsProjectStore;
    if (VibegrationsProjectStore.hasFetchedGuildProjects(item10042.id)) {
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
  let obj2 = { entries: obj3.sortVibegrationsProjects(items), nextExpiry: bound };
  obj3 = require("VibegrationsActivity");
  return obj2;
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
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
}) : ((arg0, arg1) => {
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let first1;
  let tmp11;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  [first, tmp6] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore, VibegrationsChatStore, GuildStore, require("ApexExperiment").ApexExperimentStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function v() {
      return collectEntries(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === arg0) {
    let tmp12;
    if (cResult[4] === first) {
      tmp12 = cResult[5];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first1, tmp11, tmp12, vibegrationsEntriesEqual);
    const entries = stateFromStores.entries;
    closure_10(stateFromStores.nextExpiry, tmp6);
    return entries;
  }
  const items1 = [arg0, first];
  cResult[3] = arg0;
  cResult[4] = first;
  cResult[5] = items1;
  tmp12 = items1;
}) : ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  [tmp2, tmp3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const items = [VibegrationsProjectStore, VibegrationsChatStore, GuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[3] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0, tmp2];
  const stateFromStores = useStateFromStores(items, () => collectEntries(closure_0), items1, vibegrationsEntriesEqual);
  const entries = stateFromStores.entries;
  closure_10(stateFromStores.nextExpiry, tmp3);
  return entries;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const fn = function l() {
      const values = Object.values(GuildStore.getGuilds());
      const found = values.filter((item) => {
        const obj = closure_0(dependencyMap[12]);
        return obj.canStartVibegrationsProject(item, closure_1_0);
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
  return tmpResult.useStateFromStores(first, tmp7, tmp8, vibegrationsGuildsEqual);
}) : ((arg0) => {
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
      const obj = closure_0(dependencyMap[12]);
      return obj.canStartVibegrationsProject(item, closure_1_0);
    });
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, vibegrationsGuildsEqual);
});
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsProjects.tsx");

export const useVibegrationsProjects = tmp2;
export const useVibegrationsEligibleGuilds = tmp3;
