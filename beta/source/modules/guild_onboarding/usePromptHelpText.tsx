// Module ID: 6546
// Function ID: 6547
// Name: usePromptHelpText
// Dependencies: [2045, 2102, 4469, 4479, 1372, 1074, 1115, 504, 4989, 2]
// Exports: default, useCustomizeCommunityPromptHelpText

// Module 6546 (usePromptHelpText)
import Constants from "Constants" /* 1074 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default function usePromptHelpText(arg0) {
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
      const obj = selectedRoleIds(closure_1_1[8]);
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
    const intl = tmp2(1115).intl;
    str = intl.string(tmp2(1115).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      let str6 = "";
      if (0 !== mapped.length) {
        const intl4 = tmp2(1115).intl;
        const format3 = intl4.format;
        const _Math3 = Math;
        const obj3 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
        const Kj5GIT = tmp2(1115).t.Kj5GIT;
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
      const intl2 = tmp2(1115).intl;
      const format = intl2.format;
      const _Math = Math;
      const obj11 = { count: stateFromStoresArray1.length, extraCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook };
      const Rj841R = tmp2(1115).t.Rj841R;
      [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
      str3 = format(Rj841R, obj11);
    }
    let str4 = "";
    if (mapped.length > 0) {
      let str5 = "";
      if (0 !== mapped.length) {
        const intl3 = tmp2(1115).intl;
        const format2 = intl3.format;
        const _Math2 = Math;
        const obj12 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
        const cJZxWf = tmp2(1115).t.cJZxWf;
        [obj5.role1, obj5.role2] = mapped;
        str5 = format2(cJZxWf, obj12);
      }
      str4 = str5;
    }
    str2 = str4;
    str = str3;
  }
};
export const useCustomizeCommunityPromptHelpText = function useCustomizeCommunityPromptHelpText(arg0) {
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
      const obj = selectedRoleIds(closure_1_1[8]);
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
    const intl = tmp2(1115).intl;
    str = intl.string(tmp2(1115).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      const intl4 = tmp2(1115).intl;
      const format3 = intl4.format;
      const _Math4 = Math;
      const obj6 = { count: mapped.length, extraCount: Math.max(mapped.length - 2, 0), role1: null, role2: null, itemHook };
      const vdtNYa = tmp2(1115).t.vdtNYa;
      [obj5.role1, obj5.role2] = mapped;
      str = format3(vdtNYa, obj6);
    }
    return { helpText: str, helpTextAdditional: "" };
  }
  if (stateFromStoresArray1.length > 0) {
    if (0 === mapped.length) {
      const intl3 = tmp2(1115).intl;
      const format2 = intl3.format;
      const _Math3 = Math;
      const obj11 = { count: stateFromStoresArray1.length, extraCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook };
      const ZKywGU = tmp2(1115).t.ZKywGU;
      [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
      str = format2(ZKywGU, obj11);
    }
  }
  const tmp5 = stateFromStoresArray1.length > 0 && mapped.length > 0;
  if (tmp5) {
    const intl2 = tmp2(1115).intl;
    const format = intl2.format;
    const _Math = Math;
    const obj12 = { channelCount: stateFromStoresArray1.length, extraChannelCount: Math.max(stateFromStoresArray1.length - 2, 0), channel1: null, channel2: null, itemHook, roleCount: mapped.length, extraRoleCount: Math.max(mapped.length - 2, 0), role1: null, role2: null };
    const WewRHM = tmp2(1115).t.WewRHM;
    [obj3.channel1, obj3.channel2] = stateFromStoresArray1;
    const _Math2 = Math;
    [obj3.role1, obj3.role2] = mapped;
    str = format(WewRHM, obj12);
  }
};
