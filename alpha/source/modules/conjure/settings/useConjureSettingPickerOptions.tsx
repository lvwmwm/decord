// Module ID: 12493
// Function ID: 12494
// Name: useConjureSettingPickerOptions
// Dependencies: [19, 4944, 4956, 5069, 1383, 6844, 504, 7419, 12494, 5652, 6041, 2]
// Exports: conjureSettingPickedIds, default, useConjureSettingsGuildId, withPickCap, withSavedPicks

// Module 12493 (useConjureSettingPickerOptions)
import ConjureUtils from "ConjureUtils" /* 7419 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import StreamerModeStore from "StreamerModeStore" /* 5069 */;
import UserStore from "UserStore" /* 1383 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingPickerOptions.tsx");

export default function useConjureSettingPickerOptions(arg0, type) {
  let closure_0;
  let conjureGuildRoles;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = type;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [conjureGuildRoles];
  const items1 = [arg0, type.type];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  conjureGuildRoles = useConjureGuildRoles(tmp5);
  let tmp8 = null;
  const useConjureGuildMemberUsers = tmp(12494).useConjureGuildMemberUsers;
  tmp(12494);
  if ("user" === type.type) {
    tmp8 = arg0;
  }
  const conjureGuildMemberUsers = useConjureGuildMemberUsers(tmp8);
  const items2 = [stateFromStores1];
  const tmpResult2 = tmp(504);
  stateFromStores1 = tmpResult2.useStateFromStores(items2, () => stateFromStores1.hidePersonalInformation);
  const items3 = [stateFromStores, , , , , , ];
  ({ channel_filter: arr4[1], type: arr4[2] } = type);
  items3[3] = arg0;
  items3[4] = stateFromStores1;
  items3[5] = conjureGuildRoles;
  items3[6] = conjureGuildMemberUsers;
  return stateFromStores.useMemo(() => {
    type = type.type;
    if ("channel" === type) {
      let mapped = null;
      if (null != stateFromStores) {
        let obj = ConjureUtils;
        let result = obj.conjureSettingChannels(tmp4, tmp.channel_filter);
        mapped = result.map((id) => {
          let obj2;
          const obj = { id: id.id, label: obj2.computeChannelName(id, closure_1_6, conjureGuildMemberUsers) };
          obj2 = closure_1_0(type[9]);
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
        const obj = closure_0(type[8]);
        const result = obj.conjureMemberUsername(id, stateFromStores1);
        const obj2 = { id: id.id, label: obj3.getName(closure_1_0, null, id) };
        obj3 = closure_0(type[10]);
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
export function withPickCap(arr, arg1) {
  let mapped;
  let closure_0 = arg1;
  if (arg1.length < 25) {
    const items = [];
    HermesBuiltin.arraySpread(items, arr, 0);
    mapped = items;
  } else {
    mapped = arr.map((id) => {
      let tmp = id;
      if (!closure_0.includes(id.id)) {
        const obj = { disabled: true };
        const merged = Object.assign(id);
        tmp = obj;
      }
      return tmp;
    });
  }
  return mapped;
}
export function useConjureSettingsGuildId(projectId, isPreview) {
  _require = projectId;
  dependencyMap = isPreview;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [isPreview, projectId];
  return obj.useStateFromStores(items, () => {
    const obj = ConjureUtils;
    return obj.conjureSettingsGuildId(ConjureProjectStore.getProject(projectId), isPreview);
  }, items1);
}
