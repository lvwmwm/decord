// Module ID: 6527
// Function ID: 6528
// Name: GuildOnboardingUtils
// Dependencies: [2045, 5593, 4467, 2067, 4469, 6522, 1074, 4455, 504, 1385, 5373, 6523, 4474, 1370, 558, 2011, 6528, 2]
// Exports: getApplicationConnectionState, getChannelCoverageForOnboarding, getChattableDefaultChannels, getMinimumSetOfDefaultChannelIds, getProviderConnectionState, getSelectedChannelIds, getSelectedRoleIds, isBlockedByOnboarding, isChattableChannelId, isGuildOnboardingSettingsAvailable, showRulesInOnboarding, useChannelCoverageForOnboarding, useChattableDefaultChannels, useGuildOnboardingSettingsAvailable, useIsChattableChannel

// Module 6527 (GuildOnboardingUtils)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import StringUtils from "StringUtils" /* 2011 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4467 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5373 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6522 */;
import DefaultChannelUtils from "DefaultChannelUtils" /* 6523 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, application_id, authStore, navigation, provider_id, set;

let closure_12;
let unpackModuleId;
const f82391 = (isCategory) => {
  const isCategoryResult = isCategory.isCategory();
  const tmp2 = !isCategoryResult && !isCategory.isThread() && !isRoleRequiredDefault(isCategory);
  return tmp2;
};
function isChattableChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    const obj = DefaultChannelUtils;
    let canChannelBeDefaultResult = obj.canChannelBeDefault(channel.guild_id, channel.id);
    if (canChannelBeDefaultResult) {
      let canEveryoneRoleResult;
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
      PermissionUtilsAll;
      if (isForumChannelResult) {
        canEveryoneRoleResult = canEveryoneRole(tmp8.SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(tmp8.SEND_MESSAGES, channel);
      }
      canChannelBeDefaultResult = canEveryoneRoleResult;
    }
    tmp = canChannelBeDefaultResult;
  }
  return tmp;
}
function getFlattenedDefaultChannels(arg0, arr, arg2, fn) {
  fn = arg2;
  if (arg2 === undefined) {
    fn = function u(arg0) {
      return arg0;
    };
  }
  let fn2 = fn;
  if (fn === undefined) {
    fn2 = function s() {
      return true;
    };
  }
  const items = [];
  const iter = GuildChannelStore.getChannels(arg0)[closure_7][Symbol.iterator]();
  while (iter !== undefined) {
    let channel = iter.next().channel;
    let obj = channel;
    let obj2 = DefaultChannelUtils;
    if (obj2.canChannelBeDefault(channel.guild_id, channel.id)) {
      if (!arr.includes(obj.id)) {
        if (!obj.isThread()) {
        }
      }
      let fnResult = fn(obj);
      let tmp10 = fnResult;
      if (fn2(fnResult)) {
        arr = items.push(tmp10);
      }
    }
    continue;
  }
  return items;
}
function areStatesEqual(arg0, arg1) {
  let tmp = arg0[0].length === arg1[0].length && arg0[1].length === arg1[1].length;
  if (tmp) {
    tmp = shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
    shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
  }
  return tmp;
}
let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const OnboardingConnectionType = GuildOnboardingPromptsConstants.OnboardingConnectionType;
({ GuildFeatures: unpackModuleId, Permissions: closure_12 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let date = new Date(1682488800000);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = function useGuildOnboardingSettingsAvailable(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(unpackModuleId.COMMUNITY);
    }
    let tmp4 = hasItem;
    const canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
    const canResult1 = PermissionStore.can(constants.MANAGE_ROLES, guild);
    if (tmp4) {
      tmp4 = canResult;
    }
    if (tmp4) {
      tmp4 = canResult1;
    }
    return tmp4;
  });
};
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(unpackModuleId.COMMUNITY);
  }
  let tmp4 = hasItem;
  const canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  const canResult1 = PermissionStore.can(constants2.MANAGE_ROLES, guild);
  if (tmp4) {
    tmp4 = canResult;
  }
  if (tmp4) {
    tmp4 = canResult1;
  }
  return tmp4;
};
export const isBlockedByOnboarding = function isBlockedByOnboarding(guild, selfMember) {
  if (null != guild) {
    const features = guild.features;
    if (features.has(unpackModuleId.GUILD_ONBOARDING)) {
      if (null != selfMember) {
        if (null != selfMember.joinedAt) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date(selfMember.joinedAt);
          if (date < date) {
            return false;
          } else {
            let num = selfMember.flags;
            if (num == null) {
              num = 0;
            }
            const obj = FlagUtilsAll;
            let hasFlagResult = obj.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            const tmp2 = importAll;
            const tmp4 = GuildMemberFlags;
            if (hasFlagResult) {
              const tmp2Result = tmp2(1385);
              hasFlagResult = !tmp2Result.hasFlag(num, tmp4.COMPLETED_ONBOARDING);
            }
            return hasFlagResult;
          }
        }
      }
      return false;
    }
  }
  return false;
};
export const showRulesInOnboarding = function showRulesInOnboarding(stateFromStores2, stateFromStores) {
  let hasItem = null != stateFromStores2;
  if (hasItem) {
    const features = stateFromStores2.features;
    hasItem = features.has(unpackModuleId.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    const features2 = stateFromStores2.features;
    hasItem = features2.has(unpackModuleId.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  return !hasItem && null != stateFromStores;
};
export const getChannelCoverageForOnboarding = function getChannelCoverageForOnboarding(guildId, arr, defaultChannelIds) {
  arr = GuildChannelStore.getChannels(guildId)[closure_7];
  const mapped = arr.map((channel) => channel.channel);
  new Set();
  const item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      if (channelIds != null) {
        channelIds = channelIds.channelIds;
        if (channelIds != null) {
          const item = channelIds.forEach((item) => {
            set.add(item);
          });
        }
      }
    });
  });
  const item1 = defaultChannelIds.forEach((item) => set.add(item));
  const found = mapped.filter(f82391);
  const items = [
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && obj.has(id.parent_id);
        null != id.parent_id && set.has(id.parent_id);
      }
      return hasItem;
    }),
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && obj.has(id.parent_id);
        null != id.parent_id && set.has(id.parent_id);
      }
      return !hasItem;
    })
  ];
  return items;
};
export const useChannelCoverageForOnboarding = function useChannelCoverageForOnboarding(arg0, arr, arr2) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [GuildChannelStore];
  arr2 = obj.useStateFromStores(items, () => GuildChannelStore.getChannels(closure_0))[closure_7];
  const mapped = arr2.map((channel) => channel.channel);
  set = new Set();
  let item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      if (channelIds != null) {
        channelIds = channelIds.channelIds;
        if (channelIds != null) {
          const item = channelIds.forEach((item) => {
            set.add(item);
          });
        }
      }
    });
  });
  const item1 = arr2.forEach((item) => set.add(item));
  const found = mapped.filter(f82391);
  const items1 = [
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && obj.has(id.parent_id);
        null != id.parent_id && set.has(id.parent_id);
      }
      return hasItem;
    }),
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && obj.has(id.parent_id);
        null != id.parent_id && set.has(id.parent_id);
      }
      return !hasItem;
    })
  ];
  return items1;
};
export const isChattableChannelId = function isChattableChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    const obj2 = DefaultChannelUtils;
    let canChannelBeDefaultResult = obj2.canChannelBeDefault(channel.guild_id, channel.id);
    if (canChannelBeDefaultResult) {
      let canEveryoneRoleResult;
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
      PermissionUtilsAll;
      if (isForumChannelResult) {
        canEveryoneRoleResult = canEveryoneRole(tmp8.SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(tmp8.SEND_MESSAGES, channel);
      }
      canChannelBeDefaultResult = canEveryoneRoleResult;
    }
    tmp = canChannelBeDefaultResult;
  }
  return tmp;
};
export { isChattableChannel };
export const useIsChattableChannel = function useIsChattableChannel(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    const obj2 = GlobalUtils;
    let isNotNullishResult = obj2.isNotNullish(channel);
    if (isNotNullishResult) {
      let tmp5 = null != channel;
      if (tmp5) {
        const tmpResult = DefaultChannelUtils;
        let canChannelBeDefaultResult = tmpResult.canChannelBeDefault(channel.guild_id, channel.id);
        if (canChannelBeDefaultResult) {
          let canEveryoneRoleResult;
          const isForumChannelResult = channel.isForumChannel();
          const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
          PermissionUtilsAll;
          if (isForumChannelResult) {
            canEveryoneRoleResult = canEveryoneRole(tmp10.SEND_MESSAGES_IN_THREADS, channel);
          } else {
            canEveryoneRoleResult = canEveryoneRole(tmp10.SEND_MESSAGES, channel);
          }
          canChannelBeDefaultResult = canEveryoneRoleResult;
        }
        tmp5 = canChannelBeDefaultResult;
      }
      isNotNullishResult = tmp5;
    }
    return isNotNullishResult;
  });
};
export const getMinimumSetOfDefaultChannelIds = function getMinimumSetOfDefaultChannelIds(arg0, arr, onboardingPromptsForOnboarding, arg3) {
  let closure_0 = arg0;
  let fn = arg3;
  if (arg3 === undefined) {
    fn = function o() {
      return true;
    };
  }
  let tmp = getFlattenedDefaultChannels(arg0, arr, (id) => id.id, fn);
  navigation = tmp;
  const item = onboardingPromptsForOnboarding.forEach((required) => {
    if (required.required) {
      const first = required.options[0];
      let channelIds;
      const tmp2 = getFlattenedDefaultChannels;
      const tmp3 = closure_0;
      if (first != null) {
        channelIds = first.channelIds;
      }
      if (channelIds == null) {
        channelIds = [];
      }
      const options = required.options;
      const push = navigation.push;
      const items = [];
      HermesBuiltin.arraySpread(items, options.reduce((acc, channelIds) => {
        if (null == channelIds.channelIds) {
          return [];
        } else {
          let tmp = acc;
          const arr = getFlattenedDefaultChannels(closure_1_0, channelIds.channelIds, (id) => id.id, (arg0) => {
            const tmp = closure_1_1(arg0) && !closure_1_2.includes(arg0);
            return tmp;
          });
          if (arr.length < acc.length) {
            tmp = arr;
          }
          return tmp;
        }
      }, tmp2(tmp3, channelIds, (id) => id.id)), 0);
      HermesBuiltin.apply(push, items, navigation);
    }
  });
  return tmp;
};
export const getChattableDefaultChannels = function getChattableDefaultChannels(arg0, arr) {
  function filterChattableChannels(arr, arg1) {
    let closure_0 = arg1;
    return arr.filter((item) => {
      let channel;
      if (closure_0[item] != null) {
        channel = tmp.channel;
      }
      let tmp3 = null != channel;
      if (tmp3) {
        const obj = require("DefaultChannelUtils");
        let canChannelBeDefaultResult = obj.canChannelBeDefault(channel.guild_id, channel.id);
        if (canChannelBeDefaultResult) {
          let canEveryoneRoleResult;
          const isForumChannelResult = channel.isForumChannel();
          const canEveryoneRole = require("PermissionUtils").canEveryoneRole;
          PermissionUtilsAll;
          if (isForumChannelResult) {
            canEveryoneRoleResult = canEveryoneRole(tmp10.SEND_MESSAGES_IN_THREADS, channel);
          } else {
            canEveryoneRoleResult = canEveryoneRole(tmp10.SEND_MESSAGES, channel);
          }
          canChannelBeDefaultResult = canEveryoneRoleResult;
        }
        tmp3 = canChannelBeDefaultResult;
      }
      return tmp3;
    });
  }
  arr = getFlattenedDefaultChannels(arg0, arr);
  const tmp = GuildChannelStore.getChannels(arg0)[closure_7];
  let obj = {};
  for (const item10015 of tmp) {
    obj[item10015.channel.id] = item10015;
    continue;
  }
  const items = [filterChattableChannels(arr.map((id) => id.id), obj), arr];
  return items;
};
export const useChattableDefaultChannels = function useChattableDefaultChannels(arg0, arg1) {
  let closure_0;
  _require = arg0;
  set = arg1;
  let obj = require("get initialized");
  let items = [GuildChannelStore];
  let items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    const items = [];
    const items1 = [];
    const iter = GuildChannelStore.getChannels(closure_0)[closure_7][Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = DefaultChannelUtils;
      let canChannelBeDefaultResult = obj.canChannelBeDefault(nextResult.channel.guild_id, nextResult.channel.id);
      if (canChannelBeDefaultResult) {
        let obj2 = set;
        let hasItem = set.has(tmp2.channel.id);
        if (hasItem) {
          let channel = tmp2.channel;
          hasItem = !channel.isCategory();
        }
        if (!hasItem) {
          let channel2 = tmp2.channel;
          let isThreadResult = channel2.isThread();
          let hasItem1 = !isThreadResult;
          if (hasItem1) {
            hasItem1 = null != tmp2.channel.parent_id;
          }
          if (hasItem1) {
            hasItem1 = obj2.has(tmp2.channel.parent_id);
          }
          hasItem = hasItem1;
        }
        canChannelBeDefaultResult = hasItem;
      }
      if (canChannelBeDefaultResult) {
        ({}[tmp2.channel.id]) = tmp2;
        let arr = items.push(tmp2.channel);
        if (isChattableChannel(tmp2.channel)) {
          let arr2 = items1.push(tmp2.channel.id);
        }
      }
      continue;
    }
    const items2 = [items1, items];
    return items2;
  }, items1, areStatesEqual);
};
export const getSelectedRoleIds = function getSelectedRoleIds(selectedOptions) {
  const mapped = selectedOptions.map((roleIds) => roleIds.roleIds);
  const flatResult = mapped.flat();
  set = new Set(flatResult.filter(GlobalUtils.isNotNullish));
  return set;
};
export const getSelectedChannelIds = function getSelectedChannelIds(selectedOptions) {
  const mapped = selectedOptions.map((channelIds) => channelIds.channelIds);
  const flatResult = mapped.flat();
  set = new Set(flatResult.filter(GlobalUtils.isNotNullish));
  return set;
};
export const getProviderConnectionState = function getProviderConnectionState(stateFromStores) {
  const found = stateFromStores.filter((connection_type) => {
    let BooleanResult = connection_type.connection_type === constants.PROVIDER_CONNECTED_ACCOUNT;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(connection_type.provider_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  const item = found.forEach((provider_id) => {
    provider_id = provider_id.provider_id;
    const obj = StringUtils;
    if (!obj.isNullOrEmpty(provider_id)) {
      const account = ConnectedAccountsStore.getAccount(null, provider_id);
      if (null != account) {
        if (!account.revoked) {
          connected.push(provider_id);
        }
      }
      notConnected.push(provider_id);
    }
  });
  return { connected, notConnected };
};
export const getApplicationConnectionState = function getApplicationConnectionState(stateFromStores) {
  let FetchState;
  const found = stateFromStores.filter((connection_type) => {
    let BooleanResult = connection_type.connection_type === constants.APPLICATION;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(connection_type.application_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  authStore = connected(FetchState[16]).default;
  FetchState = connected(FetchState[16]).FetchState;
  const item = found.forEach((application_id) => {
    application_id = application_id.application_id;
    const obj = StringUtils;
    if (!obj.isNullOrEmpty(application_id)) {
      const newestTokenForApplication = authStore.getNewestTokenForApplication(application_id);
      if (authStore.getFetchStateForApplication(application_id) === FetchState.FETCHED) {
        if (null != newestTokenForApplication) {
          connected.push(application_id);
        }
      }
      notConnected.push(application_id);
    }
  });
  return { connected, notConnected };
};
