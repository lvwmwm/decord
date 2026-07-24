// Module ID: 5065
// Function ID: 43911
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1348, 4812, 1907, 1838, 3758, 5059, 653, 3746, 566, 1360, 4623, 5060, 3763, 1327, 620, 1832, 5066, 2]
// Exports: getApplicationConnectionState, getChannelCoverageForOnboarding, getChattableDefaultChannels, getMinimumSetOfDefaultChannelIds, getProviderConnectionState, getSelectedChannelIds, getSelectedRoleIds, isBlockedByOnboarding, isChattableChannelId, isGuildOnboardingSettingsAvailable, showRulesInOnboarding, useChannelCoverageForOnboarding, useChattableDefaultChannels, useGuildOnboardingSettingsAvailable, useIsChattableChannel

// Module 5065 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import { OnboardingConnectionType } from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";

let closure_11;
let closure_12;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getChannelCoverage(arr, arr2, arr) {
  const set = new Set();
  let item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      let tmp = null == channelIds;
      if (!tmp) {
        channelIds = channelIds.channelIds;
        tmp = null == channelIds;
        const arr = channelIds;
      }
      if (!tmp) {
        const item = arr.forEach((arg0) => {
          outer2_0.add(arg0);
        });
      }
    });
  });
  const item1 = arr2.forEach((arg0) => set.add(arg0));
  const found = arr.filter((isCategory) => {
    let tmp = !isCategory.isCategory() && !isCategory.isThread();
    if (tmp) {
      tmp = !outer1_1(outer1_3[10])(isCategory);
    }
    return tmp;
  });
  const items = [
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        let hasItem1 = null != id.parent_id;
        if (hasItem1) {
          hasItem1 = set.has(id.parent_id);
        }
        hasItem = hasItem1;
      }
      return hasItem;
    }),
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        let hasItem1 = null != id.parent_id;
        if (hasItem1) {
          hasItem1 = set.has(id.parent_id);
        }
        hasItem = hasItem1;
      }
      return !hasItem;
    })
  ];
  return items;
}
function isChattableChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    const tmp4 = !require(5060) /* getDefaultPermissionsForChannel */.canChannelBeDefault(channel.guild_id, channel.id);
    if (tmp4) {
      tmp = !tmp4;
    } else {
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = importAll(3763).canEveryoneRole;
      let SEND_MESSAGES_IN_THREADS = closure_12;
      if (isForumChannelResult) {
        SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
        let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
      }
      const tmp8 = importAll(3763);
    }
    const obj = require(5060) /* getDefaultPermissionsForChannel */;
  }
  return tmp;
}
function getFlattenedDefaultChannels(guildId, arr, arg2, fn) {
  let iter3;
  fn = arg2;
  let fn2 = fn;
  if (arg2 === undefined) {
    fn = function r(channel) {
      return channel;
    };
  }
  if (fn2 === undefined) {
    fn2 = function l(fnResult) {
      return true;
    };
  }
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(store.getChannels(guildId)[closure_7]);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let channel = iter2.value.channel;
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let obj = require(5060) /* getDefaultPermissionsForChannel */;
      let tmp5 = tmp2;
      if (obj.canChannelBeDefault(channel.guild_id, channel.id)) {
        if (!arr.includes(channel.id)) {
          tmp5 = tmp2;
          if (!channel.isThread()) {
            tmp5 = tmp2;
            if (null != channel.parent_id) {
              tmp5 = tmp2;
            }
          }
        }
        let fnResult = fn(channel);
        tmp5 = fnResult;
        if (fn2(fnResult)) {
          arr = items.push(fnResult);
          tmp5 = fnResult;
        }
      }
      iter3 = tmp();
      tmp2 = tmp5;
      iter2 = iter3;
    } while (!iter3.done);
  }
  return items;
}
function areStatesEqual(arg0, arg1) {
  let tmp = arg0[0].length === arg1[0].length;
  if (tmp) {
    tmp = arg0[1].length === arg1[1].length;
  }
  if (tmp) {
    let tmp4 = importDefault(620)(arg0[0], arg1[0]);
    if (tmp4) {
      tmp4 = importDefault(620)(arg0[1], arg1[1]);
    }
    tmp = tmp4;
  }
  return tmp;
}
({ GuildFeatures: closure_11, Permissions: closure_12 } = ME);
let date = new Date(1682488800000);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = function useGuildOnboardingSettingsAvailable(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, closure_9];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_8.getGuild(closure_0);
    let tmp2 = null == guild;
    if (!tmp2) {
      const features = guild.features;
      tmp2 = !features.has(outer1_11.COMMUNITY);
    }
    let tmp4 = !tmp2;
    const canResult = outer1_9.can(outer1_12.MANAGE_GUILD, guild);
    if (!tmp2) {
      tmp4 = canResult;
    }
    if (tmp4) {
      tmp4 = canResult1;
    }
    return tmp4;
  });
};
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(closure_0) {
  guild = guild.getGuild(closure_0);
  let tmp2 = null == guild;
  if (!tmp2) {
    const features = guild.features;
    tmp2 = !features.has(constants.COMMUNITY);
  }
  let tmp4 = !tmp2;
  const canResult = closure_9.can(constants2.MANAGE_GUILD, guild);
  if (!tmp2) {
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
    if (features.has(constants.GUILD_ONBOARDING)) {
      if (null != selfMember) {
        if (null != selfMember.joinedAt) {
          const _Date = Date;
          const date = new Date(selfMember.joinedAt);
          if (date < date) {
            return false;
          } else {
            const flags = selfMember.flags;
            let num = 0;
            if (null != flags) {
              num = flags;
            }
            let hasFlagResult = importAll(1360).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            if (hasFlagResult) {
              hasFlagResult = !importAll(1360).hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
              const obj2 = importAll(1360);
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
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    const features2 = stateFromStores2.features;
    hasItem = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  let tmp4 = !hasItem;
  if (tmp4) {
    tmp4 = null != stateFromStores;
  }
  return tmp4;
};
export const getChannelCoverageForOnboarding = function getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds) {
  return getChannelCoverage(prompts, defaultChannelIds, store.getChannels(guildId)[closure_7].map((channel) => channel.channel));
};
export const useChannelCoverageForOnboarding = function useChannelCoverageForOnboarding(arg0, arr, arr2) {
  const _require = arg0;
  const items = [closure_6];
  const obj = _require(566);
  return getChannelCoverage(arr, arr2, _require(566).useStateFromStores(items, () => outer1_6.getChannels(closure_0))[closure_7].map((channel) => channel.channel));
};
export const isChattableChannelId = function isChattableChannelId(channelId) {
  return isChattableChannel(channel.getChannel(channelId));
};
export { isChattableChannel };
export const useIsChattableChannel = function useIsChattableChannel(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(callback);
    let isNotNullishResult = callback(outer1_3[13]).isNotNullish(channel);
    if (isNotNullishResult) {
      isNotNullishResult = outer1_18(channel);
    }
    return isNotNullishResult;
  });
};
export const getMinimumSetOfDefaultChannelIds = function getMinimumSetOfDefaultChannelIds(guildId, defaultChannelIds1, onboardingPromptsForOnboarding, arg3) {
  let fn = arg3;
  let closure_0 = guildId;
  if (arg3 === undefined) {
    fn = function a() {
      return true;
    };
  }
  let c2;
  let tmp = getFlattenedDefaultChannels(guildId, defaultChannelIds1, (id) => id.id, fn);
  c2 = tmp;
  const item = onboardingPromptsForOnboarding.forEach((required) => {
    if (required.required) {
      const first = required.options[0];
      let channelIds;
      if (null != first) {
        channelIds = first.channelIds;
      }
      if (null == channelIds) {
        channelIds = [];
      }
      const options = required.options;
      const push = _undefined.push;
      const items = [];
      HermesBuiltin.arraySpread(options.reduce((arg0, channelIds) => {
        let arr = arg0;
        if (null == channelIds.channelIds) {
          return [];
        } else {
          const arr2 = outer2_19(outer1_0, channelIds.channelIds, (id) => id.id, (arg0) => {
            let tmp = outer2_1(arg0);
            if (tmp) {
              tmp = !outer2_2.includes(arg0);
            }
            return tmp;
          });
          if (arr2.length < arr.length) {
            arr = arr2;
          }
          return arr;
        }
      }, outer1_19(closure_0, channelIds, (id) => id.id)), 0);
      HermesBuiltin.apply(items, _undefined);
      let tmp = outer1_19;
      const tmp2 = closure_0;
    }
  });
  return tmp;
};
export const getChattableDefaultChannels = function getChattableDefaultChannels(guildId, arr) {
  let done;
  arr = getFlattenedDefaultChannels(guildId, arr);
  const obj = {};
  const tmp = _createForOfIteratorHelperLoose(store.getChannels(guildId)[closure_7]);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      obj[value.channel.id] = value;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  const items = [
    (function filterChattableChannels(arr, arg1) {
      let closure_0 = arg1;
      return arr.filter((arg0) => {
        let channel;
        if (null != table[arg0]) {
          channel = tmp2.channel;
        }
        return outer2_18(channel);
      });
    })(arr.map((id) => id.id), obj),
    arr
  ];
  return items;
};
export const useChattableDefaultChannels = function useChattableDefaultChannels(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [closure_6];
  let items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => {
    let iter2;
    const items = [];
    const items1 = [];
    const tmp = outer1_15(outer1_6.getChannels(callback)[outer1_7]);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = callback;
        let tmp3 = outer1_3;
        let obj = callback(outer1_3[11]);
        let canChannelBeDefaultResult = obj.canChannelBeDefault(value.channel.guild_id, value.channel.id);
        if (canChannelBeDefaultResult) {
          let tmp5 = set;
          let hasItem = set.has(value.channel.id);
          if (hasItem) {
            let channel = value.channel;
            hasItem = !channel.isCategory();
          }
          if (!hasItem) {
            let channel2 = value.channel;
            let hasItem1 = !channel2.isThread() && null != value.channel.parent_id;
            if (hasItem1) {
              let tmp8 = set;
              hasItem1 = set.has(value.channel.parent_id);
            }
            hasItem = hasItem1;
          }
          canChannelBeDefaultResult = hasItem;
        }
        if (canChannelBeDefaultResult) {
          {}[value.channel.id] = value;
          let arr = items.push(value.channel);
          let tmp10 = outer1_18;
          if (outer1_18(value.channel)) {
            arr = items1.push(value.channel.id);
          }
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    const items2 = [items1, items];
    return items2;
  }, items1, areStatesEqual);
};
export const getSelectedRoleIds = function getSelectedRoleIds(found) {
  const mapped = found.map((roleIds) => roleIds.roleIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish));
};
export const getSelectedChannelIds = function getSelectedChannelIds(found) {
  const mapped = found.map((channelIds) => channelIds.channelIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish));
};
export const getProviderConnectionState = function getProviderConnectionState(stateFromStores) {
  const found = stateFromStores.filter((connection_type) => connection_type.connection_type === outer1_10.PROVIDER_CONNECTED_ACCOUNT && connection_type.provider_id);
  const connected = [];
  const notConnected = [];
  const item = found.forEach((provider_id) => {
    provider_id = provider_id.provider_id;
    if (!obj.isNullOrEmpty(provider_id)) {
      const account = outer1_5.getAccount(null, provider_id);
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
  const found = stateFromStores.filter((connection_type) => connection_type.connection_type === outer1_10.APPLICATION && connection_type.application_id);
  const connected = [];
  const notConnected = [];
  let closure_2 = connected(FetchState[16]).default;
  FetchState = connected(FetchState[16]).FetchState;
  const item = found.forEach((application_id) => {
    application_id = application_id.application_id;
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
