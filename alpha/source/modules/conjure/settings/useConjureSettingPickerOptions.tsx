// Module ID: 17002
// Function ID: 17003
// Name: useConjureSettingPickerOptions
// Dependencies: [19, 4707, 4719, 1390, 10617, 558, 576, 6939, 504, 17003, 5418, 5406, 2]
// Exports: conjureSettingPickedIds, withSavedPicks

// Module 17002 (useConjureSettingPickerOptions)
import NicknameUtils from "NicknameUtils" /* 5406 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4707 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSettingsGuildId(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function u() {
    const obj = ConjureUtils;
    return obj.conjureSettingsGuildId(ConjureProjectStore.getProject(closure_0), closure_1);
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function useConjureSettingsGuildId(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg1, arg0];
  return obj.useStateFromStores(items, () => {
    const obj = ConjureUtils;
    return obj.conjureSettingsGuildId(ConjureProjectStore.getProject(closure_0), closure_1);
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
function conjureSettingPickedIds(value) {
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSettingPickerOptions(arg0, type) {
  let closure_0;
  let first;
  _require = arg0;
  dependencyMap = type;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === type.type) {
    let tmp6;
    let tmp7;
    let tmp14;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    let tmp11 = null;
    const useConjureGuildRoles = tmp(17003).useConjureGuildRoles;
    tmp(17003);
    if ("role" === type.type) {
      tmp11 = arg0;
    }
    const conjureGuildRoles = useConjureGuildRoles(tmp11);
    let tmp13 = null;
    const useConjureGuildMemberUsers = tmp(17003).useConjureGuildMemberUsers;
    tmp(17003);
    if ("user" === type.type) {
      tmp13 = arg0;
    }
    const conjureGuildMemberUsers = useConjureGuildMemberUsers(tmp13);
    type = type.type;
    if ("channel" === type) {
      let items1;
      if (cResult[5] === stateFromStores) {
        let tmp21;
        if (cResult[6] === type.channel_filter) {
          tmp21 = cResult[7];
        }
        tmp14 = tmp21;
      }
      if (null == stateFromStores) {
        items1 = [];
      } else {
        const tmpResult6 = tmp(6939);
        const result = tmpResult6.conjureSettingChannels(stateFromStores, type.channel_filter);
        items1 = result.map((id) => {
          let obj2;
          const obj = { id: id.id, label: obj2.computeChannelName(id, UserStore, RelationshipStore, true) };
          obj2 = closure_0(type[10]);
          return obj;
        });
      }
      cResult[5] = stateFromStores;
      cResult[6] = type.channel_filter;
      cResult[7] = items1;
      tmp21 = items1;
    } else if ("role" === type) {
      let tmp18;
      if (cResult[8] !== conjureGuildRoles) {
        let tmp19;
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function _(id) {
            return { id: id.id, label: id.name };
          };
          cResult[10] = fn3;
          tmp19 = fn3;
        } else {
          tmp19 = cResult[10];
        }
        const mapped = conjureGuildRoles.map(tmp19);
        cResult[8] = conjureGuildRoles;
        cResult[9] = mapped;
        tmp18 = mapped;
      } else {
        tmp18 = cResult[9];
      }
      tmp14 = tmp18;
    } else if ("user" === type) {
      let tmp16;
      if (cResult[11] === arg0) {
        let tmp15;
        if (cResult[12] === conjureGuildMemberUsers) {
          tmp15 = cResult[13];
        }
        tmp14 = tmp15;
      }
      if (cResult[14] !== arg0) {
        const fn2 = function k(id) {
          let obj2;
          const obj = { id: id.id, label: obj2.getName(closure_0, null, id) };
          obj2 = NicknameUtils;
          return obj;
        };
        cResult[14] = arg0;
        cResult[15] = fn2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[15];
      }
      const mapped1 = conjureGuildMemberUsers.map(tmp16);
      cResult[11] = arg0;
      cResult[12] = conjureGuildMemberUsers;
      cResult[13] = mapped1;
      tmp15 = mapped1;
    } else {
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [];
        cResult[16] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[16];
      }
    }
    return tmp14;
  }
  const fn = function c() {
    let channels = null;
    if (null != closure_0) {
      channels = null;
      if ("channel" === type.type) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  };
  const items3 = [arg0, type.type];
  cResult[1] = type.type;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp7 = items3;
  tmp6 = fn;
}) : (function useConjureSettingPickerOptions(arg0, type) {
  let closure_0;
  let conjureGuildRoles;
  _require = arg0;
  dependencyMap = type;
  const tmp = _require;
  let obj = require("get initialized");
  let items = [conjureGuildRoles];
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
  const useConjureGuildMemberUsers = tmp(17003).useConjureGuildMemberUsers;
  tmp(17003);
  if ("user" === type.type) {
    tmp8 = arg0;
  }
  const conjureGuildMemberUsers = useConjureGuildMemberUsers(tmp8);
  const items2 = [stateFromStores, , , , , ];
  ({ channel_filter: arr3[1], type: arr3[2] } = type);
  items2[3] = arg0;
  items2[4] = conjureGuildRoles;
  items2[5] = conjureGuildMemberUsers;
  return stateFromStores.useMemo(() => {
    type = type.type;
    if ("channel" === type) {
      let items;
      if (null == stateFromStores) {
        items = [];
      } else {
        let obj = ConjureUtils;
        const result = obj.conjureSettingChannels(tmp4, tmp.channel_filter);
        items = result.map((id) => {
          let obj2;
          const obj = { id: id.id, label: obj2.computeChannelName(id, closure_1_5, conjureGuildMemberUsers, true) };
          obj2 = closure_1_0(type[10]);
          return obj;
        });
      }
      return items;
    } else if ("role" === type) {
      return conjureGuildRoles.map((id) => ({ id: id.id, label: id.name }));
    } else if ("user" === type) {
      return conjureGuildMemberUsers.map((id) => {
        let obj2;
        const obj = { id: id.id, label: obj2.getName(closure_1_0, null, id) };
        obj2 = closure_0(type[11]);
        return obj;
      });
    } else {
      return [];
    }
  }, items2);
});
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingPickerOptions.tsx");

export default tmp3;
export { conjureSettingPickedIds };
export const withSavedPicks = function withSavedPicks(arr, value, cResult) {
  let items3;
  let closure_0 = arr;
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
        found = cResult(item);
      }
      return found;
    }), 0);
    HermesBuiltin.arraySpread(items3, arr.filter((id) => !arr.includes(id.id)), arraySpreadResult3);
  }
  return items3;
};
export const useConjureSettingsGuildId = tmp2;
