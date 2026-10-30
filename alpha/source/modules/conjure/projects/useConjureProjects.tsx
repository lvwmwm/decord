// Module ID: 12561
// Function ID: 12562
// Name: useConjureProjects
// Dependencies: [32, 19, 2040, 7765, 4939, 4880, 4941, 5040, 10831, 6838, 6873, 12033, 504, 1448, 7413, 2]
// Exports: useConjureEligibleGuilds, useConjureForMeGuildId, useConjureProjects

// Module 12561 (useConjureProjects)
import ConjureUtils from "ConjureUtils" /* 7413 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map, set;

function conjureEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult = nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every((projectId, index) => null != nextExpiry2.entries[index] && projectId.projectId === nextExpiry2.entries[index].projectId && projectId.activity === nextExpiry2.entries[index].activity && projectId.name === nextExpiry2.entries[index].name && projectId.project.updated_at === nextExpiry2.entries[index].project.updated_at && projectId.guildId === nextExpiry2.entries[index].guildId && projectId.guildName === nextExpiry2.entries[index].guildName && projectId.owned === nextExpiry2.entries[index].owned && projectId.guild === nextExpiry2.entries[index].guild);
  }
  return everyResult;
}
function conjureGuildsEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
  return tmp;
}
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjects.tsx");

export function useConjureProjects(ConjureClarificationProjectPicker) {
  let first;
  let tmp3;
  _require = ConjureClarificationProjectPicker;
  [first, tmp3] = react.useState(0);
  let items = [ConjureProjectStore, ConjureChatStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp4 = require("get initialized");
  items[6] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [ConjureClarificationProjectPicker, first];
  const stateFromStores = useStateFromStores(items, () => {
    function collectEntries(_location) {
      let obj3;
      function add(item10063, owned) {
        let name;
        const obj = set;
        if (!set.has(item10063.id)) {
          const obj2 = ConjureClarificationProjectPicker(closure_2_1[11]);
          const result = obj2.conjureProjectGuildId(item10063);
          if (null == result) {
            obj.add(item10063.id);
            const isThinkingResult = closure_2_10.isThinking(item10063.id);
            let num = closure_2_10.getFinishedAt(item10063.id);
            const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
            const tmpResult = ConjureClarificationProjectPicker(closure_2_1[11]);
            const conjureActivityResult = tmpResult.conjureActivity(obj4);
            if ("done" === conjureActivityResult) {
              if (null != num) {
                const sum = num + tmp(tmp2[11]).CONJURE_DONE_WINDOW_MS;
                bound = sum;
                if (null != bound) {
                  const _Math = Math;
                  bound = Math.min(bound, sum);
                }
              }
            }
            let guild = null;
            if (null != result) {
              guild = closure_2_7.getGuild(result);
            }
            if (guild == null) {
              guild = null;
            }
            const obj5 = { project: item10063, projectId: null, name: null, guildId: result, guild, guildName: name, owned, activity: conjureActivityResult, sortTime: num };
            ({ id: obj8.projectId, name: obj8.name } = item10063);
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
              if (null != item10063.updated_at) {
                const _Date = Date;
                const parsed = Date.parse(item10063.updated_at);
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
              const tmpResult2 = ConjureClarificationProjectPicker(closure_2_1[10]);
              const result1 = tmpResult2.isConjureGuildEnabled(obj6);
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
          const obj2 = ConjureClarificationProjectPicker(closure_2_1[10]);
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
      const ownedProjects = closure_11.getOwnedProjects();
      const iter = ownedProjects[Symbol.iterator]();
      while (iter !== undefined) {
        let addResult = add(iter.next(), true);
        continue;
      }
      const values = Object.values(closure_7.getGuilds());
      const iter2 = values[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp7 = nextResult;
        let obj = closure_11;
        if (closure_11.hasFetchedGuildProjects(nextResult.id)) {
          if (isEnabled(tmp7.id)) {
            let sharedProjects = obj.getSharedProjects(tmp7.id);
            for (const item10063 of sharedProjects) {
              let addResult1 = add(item10063, false);
              continue;
            }
          }
        }
        continue;
      }
      let obj2 = { entries: obj3.sortConjureProjects(items), nextExpiry: bound };
      obj3 = _location(now[11]);
      return obj2;
    }
    return collectEntries(ConjureClarificationProjectPicker);
  }, items1, conjureEntriesEqual);
  const nextExpiry = stateFromStores.nextExpiry;
  let closure_1 = tmp3;
  const items2 = [nextExpiry, tmp3];
  const entries = stateFromStores.entries;
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items2);
  return entries;
}
export function useConjureEligibleGuilds(ConjureClarificationEntityPicker) {
  _require = ConjureClarificationEntityPicker;
  const items = [GuildStore, , ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  items[2] = PermissionStore;
  const items1 = [ConjureClarificationEntityPicker];
  return useStateFromStores(items, () => {
    const values = Object.values(GuildStore.getGuilds());
    const found = values.filter((item) => {
      const obj = closure_0(dependencyMap[14]);
      return obj.canStartConjureProject(item, closure_1_0);
    });
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, conjureGuildsEqual);
}
export function useConjureForMeGuildId(ConjureHomeScreen) {
  _require = ConjureHomeScreen;
  const items = [GuildStore, SelectedGuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[2] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [ConjureHomeScreen];
  return useStateFromStores(items, () => {
    let id;
    let obj = GuildStore;
    const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    if (null != guild) {
      const obj2 = ConjureUtils;
      if (obj2.canAccessConjure(guild, ConjureHomeScreen)) {
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
      const obj = closure_0(dependencyMap[14]);
      return obj.canAccessConjure(item, closure_1_0);
    });
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      id = null;
    }
  }, items1);
}
