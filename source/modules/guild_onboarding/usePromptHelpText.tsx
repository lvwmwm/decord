// Module ID: 5146
// Function ID: 44860
// Name: formatRoleString
// Dependencies: [1348, 1910, 3758, 3767, 1849, 653, 1212, 566, 4320, 2]
// Exports: default, useCustomizeCommunityPromptHelpText

// Module 5146 (formatRoleString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function formatRoleString(mapped, itemHook, arg2) {
  let num = 0;
  if (0 === mapped.length) {
    return "";
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    let t = require(1212) /* getSystemLocale */.t;
    t = { count: mapped.length };
    const _Math = Math;
    t.extraCount = Math.max(mapped.length - 2, num);
    t.role1 = mapped[num];
    t.role2 = mapped[1];
    num = itemHook;
    t.itemHook = itemHook;
    intl.format(arg2 ? t.cJZxWf : t.Kj5GIT, t);
    const tmp = arg2 ? t.cJZxWf : t.Kj5GIT;
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default function usePromptHelpText(arg0) {
  let _prompt;
  let dependencyMap;
  let guild;
  let itemHook;
  let selectedRoleIds;
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  id = undefined;
  if (null != guild) {
    id = guild.id;
  }
  let obj = selectedRoleIds(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = outer1_3.getManyRoles(id, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  const items2 = [id, closure_6, closure_5, closure_4];
  const stateFromStoresArray1 = selectedRoleIds(566).useStateFromStoresArray(items2, () => {
    const mapped = Array.from(closure_1).map((channelId) => id.getChannel(channelId));
    const found = mapped.filter((channel) => {
      let canResult = null != channel;
      if (canResult) {
        canResult = outer2_4.can(outer2_7.VIEW_CHANNEL, channel);
      }
      return canResult;
    });
    return found.map((channel) => selectedRoleIds(outer2_1[8]).computeChannelName(channel, outer2_6, outer2_5, true));
  });
  let mapped = stateFromStoresArray.map((name) => "@" + name.name);
  if (null == _prompt) {
    const intl = selectedRoleIds(1212).intl;
    let str = intl.string(selectedRoleIds(1212).t.JshhEl);
  } else {
    str = "";
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      str = formatRoleString(mapped, itemHook);
      let str3 = "";
    }
    obj = { helpText: str, helpTextAdditional: str3 };
    return obj;
  }
  let str2 = "";
  str3 = "";
  if (stateFromStoresArray1.length > 0) {
    let formatResult = str2;
    if (0 !== stateFromStoresArray1.length) {
      const intl2 = selectedRoleIds(1212).intl;
      obj = { count: stateFromStoresArray1.length };
      const _Math = Math;
      obj.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
      obj.channel1 = stateFromStoresArray1[0];
      obj.channel2 = stateFromStoresArray1[1];
      obj.itemHook = itemHook;
      formatResult = intl2.format(selectedRoleIds(1212).t.Rj841R, obj);
    }
    if (mapped.length > 0) {
      str2 = formatRoleString(mapped, itemHook, true);
    }
    str3 = str2;
    str = formatResult;
  }
};
export const useCustomizeCommunityPromptHelpText = function useCustomizeCommunityPromptHelpText(arg0) {
  let _prompt;
  let dependencyMap;
  let guild;
  let itemHook;
  let selectedRoleIds;
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  id = undefined;
  if (null != guild) {
    id = guild.id;
  }
  let obj = selectedRoleIds(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = outer1_3.getManyRoles(id, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  let obj1 = selectedRoleIds(566);
  const items2 = [id, closure_6, closure_5, closure_4];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items2, () => {
    const mapped = Array.from(closure_1).map((channelId) => id.getChannel(channelId));
    const found = mapped.filter((channel) => {
      let canResult = null != channel;
      if (canResult) {
        canResult = outer2_4.can(outer2_7.VIEW_CHANNEL, channel);
      }
      return canResult;
    });
    return found.map((channel) => selectedRoleIds(outer2_1[8]).computeChannelName(channel, outer2_6, outer2_5, true));
  });
  let mapped = stateFromStoresArray.map((name) => "@" + name.name);
  if (null == _prompt) {
    const intl = selectedRoleIds(1212).intl;
    let str = intl.string(selectedRoleIds(1212).t.JshhEl);
  } else {
    str = "";
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      const intl4 = selectedRoleIds(1212).intl;
      obj = { count: mapped.length };
      const _Math4 = Math;
      obj.extraCount = Math.max(mapped.length - 2, 0);
      obj.role1 = mapped[0];
      obj.role2 = mapped[1];
      obj.itemHook = itemHook;
      str = intl4.format(selectedRoleIds(1212).t.vdtNYa, obj);
    }
    obj = { helpText: str, helpTextAdditional: "" };
    return obj;
  }
  if (stateFromStoresArray1.length > 0) {
    if (0 === mapped.length) {
      const intl3 = selectedRoleIds(1212).intl;
      obj1 = { count: stateFromStoresArray1.length };
      const _Math3 = Math;
      obj1.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
      obj1.channel1 = stateFromStoresArray1[0];
      obj1.channel2 = stateFromStoresArray1[1];
      obj1.itemHook = itemHook;
      str = intl3.format(selectedRoleIds(1212).t.ZKywGU, obj1);
    }
  }
  if (tmp4) {
    const intl2 = selectedRoleIds(1212).intl;
    const obj2 = { channelCount: stateFromStoresArray1.length };
    const _Math = Math;
    obj2.extraChannelCount = Math.max(stateFromStoresArray1.length - 2, 0);
    obj2.channel1 = stateFromStoresArray1[0];
    obj2.channel2 = stateFromStoresArray1[1];
    obj2.itemHook = itemHook;
    obj2.roleCount = mapped.length;
    const _Math2 = Math;
    obj2.extraRoleCount = Math.max(mapped.length - 2, 0);
    [obj3.role1, obj3.role2] = mapped;
    str = intl2.format(selectedRoleIds(1212).t.WewRHM, obj2);
  }
};
