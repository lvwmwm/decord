// Module ID: 5143
// Function ID: 44841
// Name: formatRoleString
// Dependencies: []
// Exports: default, useCustomizeCommunityPromptHelpText

// Module 5143 (formatRoleString)
function formatRoleString(mapped, itemHook, arg2) {
  let num = 0;
  if (0 === mapped.length) {
    return "";
  } else {
    const intl = itemHook(dependencyMap[6]).intl;
    let t = itemHook(dependencyMap[6]).t;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const Permissions = arg1(dependencyMap[5]).Permissions;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default function usePromptHelpText(arg0) {
  let _prompt;
  let guild;
  let itemHook;
  let selectedRoleIds;
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  const arg1 = selectedRoleIds;
  ({ selectedChannelIds: closure_1, itemHook } = arg0);
  let closure_2;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  closure_2 = id;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_3];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = manyRoles.getManyRoles(id, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  const items2 = [closure_2, closure_6, closure_5, closure_4];
  const stateFromStoresArray1 = arg1(dependencyMap[7]).useStateFromStoresArray(items2, () => {
    const mapped = Array.from(closure_1).map((channelId) => channel.getChannel(channelId));
    const found = mapped.filter((channel) => {
      let canResult = null != channel;
      if (canResult) {
        canResult = closure_4.can(constants.VIEW_CHANNEL, channel);
      }
      return canResult;
    });
    return found.map((channel) => callback(closure_1[8]).computeChannelName(channel, closure_6, closure_5, true));
  });
  const mapped = stateFromStoresArray.map((name) => "@" + name.name);
  if (null == _prompt) {
    const intl = arg1(dependencyMap[6]).intl;
    let str = intl.string(arg1(dependencyMap[6]).t.JshhEl);
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
      const intl2 = arg1(dependencyMap[6]).intl;
      obj = { count: stateFromStoresArray1.length };
      const _Math = Math;
      obj.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
      obj.channel1 = stateFromStoresArray1[0];
      obj.channel2 = stateFromStoresArray1[1];
      obj.itemHook = itemHook;
      formatResult = intl2.format(arg1(dependencyMap[6]).t.Rj841R, obj);
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
  let guild;
  let itemHook;
  let selectedRoleIds;
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  const arg1 = selectedRoleIds;
  ({ selectedChannelIds: closure_1, itemHook } = arg0);
  let closure_2;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  closure_2 = id;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_3];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = manyRoles.getManyRoles(id, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  let obj1 = arg1(dependencyMap[7]);
  const items2 = [closure_2, closure_6, closure_5, closure_4];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items2, () => {
    const mapped = Array.from(closure_1).map((channelId) => channel.getChannel(channelId));
    const found = mapped.filter((channel) => {
      let canResult = null != channel;
      if (canResult) {
        canResult = closure_4.can(constants.VIEW_CHANNEL, channel);
      }
      return canResult;
    });
    return found.map((channel) => callback(closure_1[8]).computeChannelName(channel, closure_6, closure_5, true));
  });
  const mapped = stateFromStoresArray.map((name) => "@" + name.name);
  if (null == _prompt) {
    const intl = arg1(dependencyMap[6]).intl;
    let str = intl.string(arg1(dependencyMap[6]).t.JshhEl);
  } else {
    str = "";
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      const intl4 = arg1(dependencyMap[6]).intl;
      obj = { count: mapped.length };
      const _Math4 = Math;
      obj.extraCount = Math.max(mapped.length - 2, 0);
      obj.role1 = mapped[0];
      obj.role2 = mapped[1];
      obj.itemHook = itemHook;
      str = intl4.format(arg1(dependencyMap[6]).t.vdtNYa, obj);
    }
    obj = { helpText: str, helpTextAdditional: "" };
    return obj;
  }
  if (stateFromStoresArray1.length > 0) {
    if (0 === mapped.length) {
      const intl3 = arg1(dependencyMap[6]).intl;
      obj1 = { count: stateFromStoresArray1.length };
      const _Math3 = Math;
      obj1.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
      obj1.channel1 = stateFromStoresArray1[0];
      obj1.channel2 = stateFromStoresArray1[1];
      obj1.itemHook = itemHook;
      str = intl3.format(arg1(dependencyMap[6]).t.ZKywGU, obj1);
    }
  }
  if (tmp4) {
    const intl2 = arg1(dependencyMap[6]).intl;
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
    str = intl2.format(arg1(dependencyMap[6]).t.WewRHM, obj2);
  }
};
