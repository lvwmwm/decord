// Module ID: 6814
// Function ID: 6815
// Name: usePromptHelpText
// Dependencies: [2065, 2119, 4750, 4760, 1390, 1085, 1126, 558, 576, 504, 5421, 2]

// Module 6814 (usePromptHelpText)
import Constants from "Constants" /* 1085 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePromptHelpText(selectedChannelIds) {
  let _prompt;
  let first;
  let guild;
  let selectedRoleIds;
  const tmp = selectedRoleIds;
  let obj = selectedRoleIds(selectedChannelIds[8]);
  const cResult = obj.c(23);
  ({ guild, prompt: _prompt, selectedRoleIds } = selectedChannelIds);
  selectedChannelIds = selectedChannelIds.selectedChannelIds;
  const itemHook = selectedChannelIds.itemHook;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp14;
    let tmp19;
    let tmp22;
    let tmp18;
    let tmp17;
    let str3;
    if (cResult[2] === selectedRoleIds) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(selectedChannelIds[9]);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [id, UserStore, RelationshipStore, PermissionStore];
      cResult[5] = items1;
      tmp9 = items1;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== selectedChannelIds) {
      const fn2 = function v() {
        let channel;
        const arr = Array.from(selectedChannelIds);
        const mapped = arr.map((item) => channel.getChannel(item));
        const found = mapped.filter((item) => {
          const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
          return canResult;
        });
        return found.map((item) => {
          const obj = selectedRoleIds(selectedChannelIds[10]);
          return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
        });
      };
      cResult[6] = selectedChannelIds;
      cResult[7] = fn2;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[7];
    }
    const tmpResult2 = tmp(selectedChannelIds[9]);
    const stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp9, tmp14);
    if (cResult[8] === itemHook) {
      let singleSelect;
      const tmp15 = cResult[9];
      if (_prompt != null) {
        singleSelect = _prompt.singleSelect;
      }
      if (tmp15 === singleSelect) {
        if (cResult[10] === stateFromStoresArray1) {
          if (cResult[11] === stateFromStoresArray) {
            tmp17 = cResult[12];
            tmp18 = cResult[13];
          }
          if (cResult[20] === tmp17) {
            let tmp28;
            if (cResult[21] === tmp18) {
              tmp28 = cResult[22];
            }
            return tmp28;
          }
          const obj2 = { helpText: tmp17, helpTextAdditional: tmp18 };
          cResult[20] = tmp17;
          cResult[21] = tmp18;
          cResult[22] = obj2;
          tmp28 = obj2;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function k(name) {
        return "@" + name.name;
      };
      cResult[14] = fn3;
      tmp19 = fn3;
    } else {
      tmp19 = cResult[14];
    }
    let mapped = stateFromStoresArray.map(tmp19);
    let singleSelect1;
    const tmp20 = cResult[15];
    if (_prompt != null) {
      singleSelect1 = _prompt.singleSelect;
    }
    if (tmp20 !== singleSelect1) {
      let singleSelect2;
      if (_prompt != null) {
        singleSelect2 = _prompt.singleSelect;
      }
      let str = "";
      if (!singleSelect2) {
        const intl = tmp(tmp2[6]).intl;
        str = intl.string(tmp(tmp2[6]).t.JshhEl);
      }
      let singleSelect3;
      if (_prompt != null) {
        singleSelect3 = _prompt.singleSelect;
      }
      cResult[15] = singleSelect3;
      cResult[16] = str;
      tmp22 = str;
    } else {
      tmp22 = cResult[16];
    }
    if (0 === stateFromStoresArray1.length) {
      if (mapped.length > 0) {
        let str5 = "";
        if (0 !== mapped.length) {
          const intl4 = tmp(tmp2[6]).intl;
          const format3 = intl4.format;
          const _Math3 = Math;
          const obj3 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
          const Kj5GIT = tmp(tmp2[6]).t.Kj5GIT;
          [obj6.role1, obj6.role2] = mapped;
          str5 = format3(Kj5GIT, obj3);
        }
        tmp22 = str5;
        str3 = "";
      }
      cResult[8] = itemHook;
      let singleSelect4;
      if (_prompt != null) {
        singleSelect4 = _prompt.singleSelect;
      }
      cResult[9] = singleSelect4;
      cResult[10] = stateFromStoresArray1;
      cResult[11] = stateFromStoresArray;
      cResult[12] = tmp22;
      cResult[13] = str3;
      tmp18 = str3;
      tmp17 = tmp22;
    }
    let str2 = "";
    str3 = "";
    if (stateFromStoresArray1.length > 0) {
      if (cResult[17] === itemHook) {
        let tmp25;
        if (cResult[18] === stateFromStoresArray1) {
          tmp25 = cResult[19];
        }
        str3 = str2;
        tmp22 = tmp25;
        if (mapped.length > 0) {
          if (0 !== mapped.length) {
            const intl3 = tmp(tmp2[6]).intl;
            const format2 = intl3.format;
            const _Math2 = Math;
            const obj7 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
            const cJZxWf = tmp(tmp2[6]).t.cJZxWf;
            [obj5.role1, obj5.role2] = mapped;
            str2 = format2(cJZxWf, obj7);
          }
          str3 = str2;
          tmp22 = tmp25;
        }
      }
      let formatResult = str2;
      if (0 !== stateFromStoresArray1.length) {
        const intl2 = tmp(tmp2[6]).intl;
        const format = intl2.format;
        const _Math = Math;
        const obj11 = { count: stateFromStoresArray1.length, extraCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook };
        const Rj841R = tmp(tmp2[6]).t.Rj841R;
        [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
        formatResult = format(Rj841R, obj11);
      }
      cResult[17] = itemHook;
      cResult[18] = stateFromStoresArray1;
      cResult[19] = formatResult;
      tmp25 = formatResult;
    }
  }
  const fn = function p() {
    let manyRoles;
    if (null != id) {
      manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  };
  const items2 = [id, selectedRoleIds];
  cResult[1] = id;
  cResult[2] = selectedRoleIds;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp8 = items2;
  tmp7 = fn;
}) : (function usePromptHelpText(arg0) {
  let _prompt;
  let guild;
  let itemHook;
  let selectedRoleIds;
  let str2;
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let obj = selectedRoleIds(504);
  const items = [GuildRoleStore];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let manyRoles;
    if (null != id) {
      manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  const items2 = [id, UserStore, RelationshipStore, PermissionStore];
  const obj2 = selectedRoleIds(504);
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
    let channel;
    const arr = Array.from(dependencyMap);
    const mapped = arr.map((item) => channel.getChannel(item));
    const found = mapped.filter((item) => {
      const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
      return canResult;
    });
    return found.map((item) => {
      const obj = selectedRoleIds(closure_1_1[10]);
      return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
    });
  });
  let mapped = stateFromStoresArray.map((name) => "@" + name.name);
  let singleSelect;
  if (_prompt != null) {
    singleSelect = _prompt.singleSelect;
  }
  let str = "";
  if (!singleSelect) {
    const intl = tmp2(1126).intl;
    str = intl.string(tmp2(1126).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      let str6 = "";
      if (0 !== mapped.length) {
        const intl4 = tmp2(1126).intl;
        const format3 = intl4.format;
        const _Math3 = Math;
        const obj3 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
        const Kj5GIT = tmp2(1126).t.Kj5GIT;
        [obj6.role1, obj6.role2] = mapped;
        str6 = format3(Kj5GIT, obj3);
      }
      str = str6;
      str2 = "";
    }
    return { helpText: str, helpTextAdditional: str2 };
  }
  str2 = "";
  if (stateFromStoresArray1.length > 0) {
    let str3 = "";
    if (0 !== stateFromStoresArray1.length) {
      const intl2 = tmp2(1126).intl;
      const format = intl2.format;
      const _Math = Math;
      const obj11 = { count: stateFromStoresArray1.length, extraCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook };
      const Rj841R = tmp2(1126).t.Rj841R;
      [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
      str3 = format(Rj841R, obj11);
    }
    let str4 = "";
    if (mapped.length > 0) {
      let str5 = "";
      if (0 !== mapped.length) {
        const intl3 = tmp2(1126).intl;
        const format2 = intl3.format;
        const _Math2 = Math;
        const obj12 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
        const cJZxWf = tmp2(1126).t.cJZxWf;
        [obj5.role1, obj5.role2] = mapped;
        str5 = format2(cJZxWf, obj12);
      }
      str4 = str5;
    }
    str2 = str4;
    str = str3;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCustomizeCommunityPromptHelpText(selectedChannelIds) {
  let _prompt;
  let first;
  let guild;
  let selectedRoleIds;
  const tmp = selectedRoleIds;
  let obj = selectedRoleIds(selectedChannelIds[8]);
  const cResult = obj.c(25);
  ({ guild, prompt: _prompt, selectedRoleIds } = selectedChannelIds);
  selectedChannelIds = selectedChannelIds.selectedChannelIds;
  const itemHook = selectedChannelIds.itemHook;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp14;
    let tmp18;
    let formatResult;
    let tmp17;
    if (cResult[2] === selectedRoleIds) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(selectedChannelIds[9]);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [id, UserStore, RelationshipStore, PermissionStore];
      cResult[5] = items1;
      tmp9 = items1;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== selectedChannelIds) {
      const fn2 = function v() {
        let channel;
        const arr = Array.from(selectedChannelIds);
        const mapped = arr.map((item) => channel.getChannel(item));
        const found = mapped.filter((item) => {
          const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
          return canResult;
        });
        return found.map((item) => {
          const obj = selectedRoleIds(selectedChannelIds[10]);
          return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
        });
      };
      cResult[6] = selectedChannelIds;
      cResult[7] = fn2;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[7];
    }
    const tmpResult2 = tmp(selectedChannelIds[9]);
    const stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp9, tmp14);
    if (cResult[8] === itemHook) {
      let singleSelect;
      const tmp15 = cResult[9];
      if (_prompt != null) {
        singleSelect = _prompt.singleSelect;
      }
      if (tmp15 === singleSelect) {
        if (cResult[10] === stateFromStoresArray1[0]) {
          if (cResult[11] === stateFromStoresArray1[1]) {
            if (cResult[12] === stateFromStoresArray1.length) {
              let tmp27;
              if (cResult[13] === stateFromStoresArray) {
                tmp17 = cResult[14];
              }
              if (cResult[23] !== tmp17) {
                const obj2 = { helpText: tmp17, helpTextAdditional: "" };
                cResult[23] = tmp17;
                cResult[24] = obj2;
                tmp27 = obj2;
              } else {
                tmp27 = cResult[24];
              }
              return tmp27;
            }
          }
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
      cResult[15] = N;
      tmp18 = N;
    } else {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
    }
    let mapped = stateFromStoresArray.map(tmp18);
    const tmp19 = cResult[16];
    if (_prompt != null) {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
    }
    if (tmp19 !== undefined) {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
      if (_prompt != null) {
        class N {
          constructor(name) {
            return "@" + name.name;
          }
        }
      }
      let str = "";
      if (!tmp22) {
        class N {
          constructor(name) {
            return "@" + name.name;
          }
        }
        str = obj4.string(tmp(tmp2[6]).t.JshhEl);
      }
      if (_prompt != null) {
        class N {
          constructor(name) {
            return "@" + name.name;
          }
        }
      }
      cResult[16] = undefined;
      cResult[17] = str;
      formatResult = str;
    } else {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
    }
    if (0 === stateFromStoresArray1.length) {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
      cResult[8] = itemHook;
      if (_prompt != null) {
        class N {
          constructor(name) {
            return "@" + name.name;
          }
        }
      }
      cResult[9] = undefined;
      cResult[10] = stateFromStoresArray1[0];
      cResult[11] = stateFromStoresArray1[1];
      cResult[12] = stateFromStoresArray1.length;
      cResult[13] = stateFromStoresArray;
      cResult[14] = formatResult;
      tmp17 = formatResult;
    }
    if (stateFromStoresArray1.length > 0) {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
    }
    const tmp24 = stateFromStoresArray1.length > 0 && mapped.length > 0;
    if (tmp24) {
      class N {
        constructor(name) {
          return "@" + name.name;
        }
      }
      const format = tmp25.format;
      const _Math = Math;
      const obj3 = { channelCount: stateFromStoresArray1.length, extraChannelCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook, roleCount: mapped.length, extraRoleCount: Math.max(mapped.length - 2, 0), role1: null, role2: null };
      const WewRHM = tmp(tmp2[6]).t.WewRHM;
      [obj5.channel1, obj5.channel2] = stateFromStoresArray1;
      const _Math2 = Math;
      [obj5.role1, obj5.role2] = mapped;
      formatResult = format(WewRHM, obj3);
    }
  }
  const fn = function p() {
    let manyRoles;
    if (null != id) {
      manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  };
  const items2 = [id, selectedRoleIds];
  cResult[1] = id;
  cResult[2] = selectedRoleIds;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp8 = items2;
  tmp7 = fn;
}) : (function useCustomizeCommunityPromptHelpText(arg0) {
  let _prompt;
  let guild;
  let itemHook;
  let selectedRoleIds;
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let obj = selectedRoleIds(504);
  const items = [GuildRoleStore];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let manyRoles;
    if (null != id) {
      manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  const items2 = [id, UserStore, RelationshipStore, PermissionStore];
  const obj2 = selectedRoleIds(504);
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
    let channel;
    const arr = Array.from(dependencyMap);
    const mapped = arr.map((item) => channel.getChannel(item));
    const found = mapped.filter((item) => {
      const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
      return canResult;
    });
    return found.map((item) => {
      const obj = selectedRoleIds(closure_1_1[10]);
      return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
    });
  });
  let mapped = stateFromStoresArray.map((name) => "@" + name.name);
  let singleSelect;
  if (_prompt != null) {
    singleSelect = _prompt.singleSelect;
  }
  let str = "";
  if (!singleSelect) {
    const intl = tmp2(1126).intl;
    str = intl.string(tmp2(1126).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      const intl4 = tmp2(1126).intl;
      const format3 = intl4.format;
      const _Math4 = Math;
      const obj6 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
      const vdtNYa = tmp2(1126).t.vdtNYa;
      [obj5.role1, obj5.role2] = mapped;
      str = format3(vdtNYa, obj6);
    }
    return { helpText: str, helpTextAdditional: "" };
  }
  if (stateFromStoresArray1.length > 0) {
    if (0 === mapped.length) {
      const intl3 = tmp2(1126).intl;
      const format2 = intl3.format;
      const _Math3 = Math;
      const obj11 = { count: stateFromStoresArray1.length, extraCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook };
      const ZKywGU = tmp2(1126).t.ZKywGU;
      [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
      str = format2(ZKywGU, obj11);
    }
  }
  const tmp5 = stateFromStoresArray1.length > 0 && mapped.length > 0;
  if (tmp5) {
    const intl2 = tmp2(1126).intl;
    const format = intl2.format;
    const _Math = Math;
    const obj12 = { channelCount: stateFromStoresArray1.length, extraChannelCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook, roleCount: mapped.length, extraRoleCount: Math.max(mapped.length - 2, 0), role1: null, role2: null };
    const WewRHM = tmp2(1126).t.WewRHM;
    [obj3.channel1, obj3.channel2] = stateFromStoresArray1;
    const _Math2 = Math;
    [obj3.role1, obj3.role2] = mapped;
    str = format(WewRHM, obj12);
  }
});
const result = size.fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default tmp2;
export const useCustomizeCommunityPromptHelpText = tmp3;
