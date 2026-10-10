// Module ID: 17070
// Function ID: 17071
// Name: useConjureSettingPickerOptions
// Dependencies: [19, 4748, 4760, 4963, 1390, 10651, 558, 576, 6945, 504, 17071, 5421, 5409, 2]
// Exports: conjureSettingPickedIds, withSavedPicks

// Module 17070 (useConjureSettingPickerOptions)
import NicknameUtils from "NicknameUtils" /* 5409 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import conjureGuildPickerSources from "conjureGuildPickerSources" /* 17071 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import StreamerModeStore from "StreamerModeStore" /* 4963 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;
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
  const cResult = obj.c(21);
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
    let tmp16;
    let tmp15;
    let tmp19;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    let tmp11 = null;
    const useConjureGuildRoles = tmp(17071).useConjureGuildRoles;
    tmp(17071);
    if ("role" === type.type) {
      tmp11 = arg0;
    }
    const conjureGuildRoles = useConjureGuildRoles(tmp11);
    let tmp13 = null;
    const useConjureGuildMemberUsers = tmp(17071).useConjureGuildMemberUsers;
    tmp(17071);
    if ("user" === type.type) {
      tmp13 = arg0;
    }
    const conjureGuildMemberUsers = useConjureGuildMemberUsers(tmp13);
    class S {
      constructor() {
        let channels = null;
        if (null != closure_0) {
          channels = null;
          if ("channel" === type.type) {
            channels = GuildChannelStore.getChannels(tmp);
          }
        }
        return channels;
      }
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [StreamerModeStore];
      const fn = function j() {
        return StreamerModeStore.hidePersonalInformation;
      };
      cResult[5] = items1;
      cResult[6] = fn;
      tmp16 = fn;
      tmp15 = items1;
    } else {
      tmp15 = cResult[5];
      tmp16 = cResult[6];
    }
    const tmpResult7 = tmp(504);
    const stateFromStores1 = tmpResult7.useStateFromStores(tmp15, tmp16);
    type = type.type;
    if ("channel" === type) {
      if (cResult[7] === stateFromStores) {
        let tmp23;
        if (cResult[8] === type.channel_filter) {
          tmp23 = cResult[9];
        }
        tmp19 = tmp23;
      }
      let mapped = null;
      if (null != stateFromStores) {
        const tmpResult8 = tmp(6945);
        let result = tmpResult8.conjureSettingChannels(stateFromStores, type.channel_filter);
        mapped = result.map((id) => {
          let obj2;
          const obj = { id: id.id, label: obj2.computeChannelName(id, UserStore, RelationshipStore) };
          obj2 = closure_0(type[11]);
          return obj;
        });
      }
      cResult[7] = stateFromStores;
      cResult[8] = type.channel_filter;
      cResult[9] = mapped;
      tmp23 = mapped;
    } else if ("role" === type) {
      let tmp20;
      if (cResult[10] !== conjureGuildRoles) {
        let tmp21;
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(id) {
              return { id: id.id, label: id.name };
            }
          }
          cResult[12] = I;
          tmp21 = I;
        } else {
          class I {
            constructor(id) {
              return { id: id.id, label: id.name };
            }
          }
        }
        const mapped1 = conjureGuildRoles.map(tmp21);
        cResult[10] = conjureGuildRoles;
        cResult[11] = mapped1;
        tmp20 = mapped1;
      } else {
        class I {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
      }
      tmp19 = tmp20;
    } else {
      class I {
        constructor(id) {
          return { id: id.id, label: id.name };
        }
      }
    }
    return tmp19;
  }
  class S {
    constructor() {
      let channels = null;
      if (null != closure_0) {
        channels = null;
        if ("channel" === type.type) {
          channels = GuildChannelStore.getChannels(tmp);
        }
      }
      return channels;
    }
  }
  const items2 = [arg0, type.type];
  cResult[1] = type.type;
  cResult[2] = arg0;
  cResult[3] = S;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = S;
}) : (function useConjureSettingPickerOptions(arg0, type) {
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
  const useConjureGuildMemberUsers = tmp(17071).useConjureGuildMemberUsers;
  tmp(17071);
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
          obj2 = closure_1_0(type[11]);
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
        const obj = closure_0(type[10]);
        const result = obj.conjureMemberUsername(id, stateFromStores1);
        const obj2 = { id: id.id, label: obj3.getName(closure_1_0, null, id) };
        obj3 = closure_0(type[12]);
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
