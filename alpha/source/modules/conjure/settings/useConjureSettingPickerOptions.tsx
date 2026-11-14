// Module ID: 13214
// Function ID: 13215
// Name: useConjureSettingPickerOptions
// Dependencies: [32, 19, 5236, 5177, 5248, 5373, 1388, 7017, 504, 7260, 7018, 1113, 4131, 12, 13215, 5954, 6351, 2]
// Exports: conjureSettingPickedIds, default, useConjureSettingsGuildId, useConjureSettingsServers, withPickCap, withSavedPicks

// Module 13214 (useConjureSettingPickerOptions)
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import ConjureUtils from "ConjureUtils" /* 7260 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildStore from "GuildStore" /* 5177 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import StreamerModeStore from "StreamerModeStore" /* 5373 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild, project;

let closure_11 = [];
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingPickerOptions.tsx");

export default function useConjureSettingPickerOptions(arg0, type) {
  let closure_0;
  let stateFromStores;
  let stateFromStores1;
  _require = arg0;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  const items1 = [arg0, type.type];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channels = null;
    if (null != closure_0) {
      channels = null;
      if ("channel" === type.type) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  }, items1);
  const tmp4 = require("conjureGuildPickerSources");
  let tmp5 = null;
  const useConjureGuildRoles = tmp4.useConjureGuildRoles;
  if ("role" === type.type) {
    tmp5 = arg0;
  }
  const conjureGuildRoles = useConjureGuildRoles(tmp5);
  let tmp8 = null;
  const useConjureGuildMemberUsers = tmp(tmp2[14]).useConjureGuildMemberUsers;
  tmp(stateFromStores[14]);
  if ("user" === type.type) {
    tmp8 = arg0;
  }
  const conjureGuildMemberUsers = useConjureGuildMemberUsers(tmp8);
  const items2 = [StreamerModeStore];
  const tmpResult2 = tmp(stateFromStores[8]);
  stateFromStores1 = tmpResult2.useStateFromStores(items2, () => StreamerModeStore.hidePersonalInformation);
  const items3 = [stateFromStores, , , , , , ];
  ({ channel_filter: arr4[1], type: arr4[2] } = type);
  items3[3] = arg0;
  items3[4] = stateFromStores1;
  items3[5] = conjureGuildRoles;
  items3[6] = conjureGuildMemberUsers;
  return conjureGuildMemberUsers.useMemo(() => {
    type = type.type;
    if ("channel" === type) {
      let mapped = null;
      if (null != stateFromStores) {
        let obj = ConjureUtils;
        let result = obj.conjureSettingChannels(tmp4, tmp.channel_filter);
        mapped = result.map((id) => {
          let obj2;
          const obj = { id: id.id, label: obj2.computeChannelName(id, closure_1_9, closure_1_7) };
          obj2 = closure_1_0(stateFromStores[15]);
          return obj;
        });
      }
      return mapped;
    } else if ("role" === type) {
      return conjureGuildRoles.map((id) => ({ id: id.id, label: id.name }));
    } else if ("user" === type) {
      return conjureGuildMemberUsers.map((id) => {
        let obj3;
        let obj4;
        const obj = closure_0(stateFromStores[14]);
        const result = obj.conjureMemberUsername(id, stateFromStores1);
        const obj2 = { id: id.id, label: obj3.getName(closure_1_0, null, id) };
        obj3 = closure_0(stateFromStores[16]);
        if ("" === result) {
          obj4 = {};
        } else {
          obj4 = { description: result };
        }
        const merged = Object.assign(obj4);
        return obj2;
      });
    } else {
      return [];
    }
  }, items3);
};
export const MAX_CONJURE_SETTING_PICKS = 25;
export function conjureSettingPickedIds(value) {
  let tmp = value;
  if (!Array.isArray(value)) {
    if (typeof value === "string") {
      let items1;
      if ("" !== value) {
        const items = [value];
        items1 = items;
      }
      tmp = items1;
    }
    items1 = [];
  }
  return tmp;
}
export function withSavedPicks(arr, value, arg2) {
  let items3;
  let closure_0 = arr;
  let closure_1 = arg2;
  arr = value;
  if (!Array.isArray(value)) {
    if (typeof value === "string") {
      let items1;
      if ("" !== value) {
        const items = [value];
        items1 = items;
      }
      arr = items1;
    }
    items1 = [];
  }
  if (0 === arr.length) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, arr, 0);
    items3 = items2;
  } else {
    items3 = [];
    const arraySpreadResult3 = HermesBuiltin.arraySpread(items3, arr.map((item) => {
      let closure_0 = item;
      let found = closure_0.find((id) => id.id === closure_0);
      if (found == null) {
        found = closure_1(item);
      }
      return found;
    }), 0);
    HermesBuiltin.arraySpread(items3, arr.filter((id) => !arr.includes(id.id)), arraySpreadResult3);
  }
  return items3;
}
export function withPickCap(items1, first1) {
  let mapped;
  if (first1.length < 25) {
    const items = [];
    HermesBuiltin.arraySpread(items, items1, 0);
    mapped = items;
  } else {
    mapped = items1.map((id) => {
      let tmp = id;
      if (!first1.includes(id.id)) {
        const obj = { disabled: true };
        const merged = Object.assign(id);
        tmp = obj;
      }
      return tmp;
    });
  }
  return mapped;
}
export function useConjureSettingsGuildId(projectId, flag) {
  _require = projectId;
  let closure_1 = flag;
  const items = [ConjureProjectStore];
  const items1 = [flag, projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const obj = projectId(dependencyMap[9]);
    return obj.conjureSettingsGuildId(project.getProject(projectId), closure_1);
  }, items1);
}
export function useConjureSettingsServers(projectId, flag) {
  _require = projectId;
  let obj = require("get initialized");
  const items = [ConjureProjectStore, GuildStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let mapped;
    project = ConjureProjectStore.getProject(projectId);
    if (null == project) {
      mapped = closure_11;
    } else {
      let obj = ConjureProjectTypes;
      const result = obj.conjureProjectServerIds(project);
      mapped = result.map((guildId) => {
        let name;
        const obj = { guildId, name };
        guild = guild.getGuild(guildId);
        name = undefined;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          const intl = projectId(closure_1_2[11]).intl;
          name = intl.string(stateFromStores(closure_1_2[12])["6bhivN"]);
        }
        return obj;
      });
    }
    return mapped;
  }, items1, require("module_12").isEqual);
  _require = projectId;
  let closure_1 = flag;
  const items2 = [ConjureProjectStore];
  const items3 = [flag, projectId];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const obj = projectId(dependencyMap[9]);
    return obj.conjureSettingsGuildId(project.getProject(projectId), closure_1);
  }, items3);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  const items4 = [tmp3[0], stateFromStores1];
  const tmp4 = tmp3[1];
  let found = items4.find((item) => {
    let closure_0 = item;
    const someResult = null != item && stateFromStores.some((guildId) => guildId.guildId === closure_0);
    return someResult;
  });
  const obj3 = { servers: stateFromStores, serverId: found, setServerId: tmp4 };
  if (found == null) {
    const first = stateFromStores[0];
    let guildId;
    if (first != null) {
      guildId = first.guildId;
    }
    found = guildId;
  }
  if (found == null) {
    found = null;
  }
  return obj3;
}
