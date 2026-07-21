// Module ID: 5336
// Function ID: 45471
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getApplicationConnectionState, getChannelCoverageForOnboarding, getChattableDefaultChannels, getMinimumSetOfDefaultChannelIds, getProviderConnectionState, getSelectedChannelIds, getSelectedRoleIds, isBlockedByOnboarding, isChattableChannelId, isGuildOnboardingSettingsAvailable, showRulesInOnboarding, useChannelCoverageForOnboarding, useChattableDefaultChannels, useGuildOnboardingSettingsAvailable, useIsChattableChannel

// Module 5336 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  arr2 = new Set();
  const item = arr.forEach((options) => {
    options = options.options;
    const item = options.forEach((channelIds) => {
      let tmp = null == channelIds;
      if (!tmp) {
        channelIds = channelIds.channelIds;
        tmp = null == channelIds;
        const arr = channelIds;
      }
      if (!tmp) {
        const item = arr.forEach((arg0) => {
          set.add(arg0);
        });
      }
    });
  });
  const item1 = arr2.forEach((arg0) => set.add(arg0));
  const found = arr.filter((isCategory) => {
    let tmp = !isCategory.isCategory() && !isCategory.isThread();
    if (tmp) {
      tmp = !callback(closure_3[10])(isCategory);
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
    const tmp4 = !arg1(dependencyMap[11]).canChannelBeDefault(channel.guild_id, channel.id);
    if (tmp4) {
      tmp = !tmp4;
    } else {
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = importAll(dependencyMap[12]).canEveryoneRole;
      let SEND_MESSAGES_IN_THREADS = closure_12;
      if (isForumChannelResult) {
        SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
        let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
      }
      const tmp8 = importAll(dependencyMap[12]);
    }
    const obj = arg1(dependencyMap[11]);
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
      let tmp3 = closure_0;
      let tmp4 = closure_3;
      let obj = closure_0(closure_3[11]);
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
      let tmp2 = tmp5;
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
    let tmp4 = importDefault(dependencyMap[14])(arg0[0], arg1[0]);
    if (tmp4) {
      tmp4 = importDefault(dependencyMap[14])(arg0[1], arg1[1]);
    }
    tmp = tmp4;
  }
  return tmp;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[2]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const OnboardingConnectionType = arg1(dependencyMap[5]).OnboardingConnectionType;
({ GuildFeatures: closure_11, Permissions: closure_12 } = arg1(dependencyMap[6]));
const GuildMemberFlags = arg1(dependencyMap[7]).GuildMemberFlags;
const date = new Date(1682488800000);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = function useGuildOnboardingSettingsAvailable(arg0) {
  const arg1 = arg0;
  const items = [closure_8, closure_9];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
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
  });
};
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(guildId) {
  const guild = guild.getGuild(guildId);
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
            let hasFlagResult = importAll(dependencyMap[9]).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            if (hasFlagResult) {
              hasFlagResult = !importAll(dependencyMap[9]).hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
              const obj2 = importAll(dependencyMap[9]);
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
  arr = arg0;
  const items = [closure_6];
  const obj = arr(dependencyMap[8]);
  return getChannelCoverage(arr, arr2, arr(dependencyMap[8]).useStateFromStores(items, () => channels.getChannels(arg0))[closure_7].map((channel) => channel.channel));
};
export const isChattableChannelId = function isChattableChannelId(channelId) {
  return isChattableChannel(channel.getChannel(channelId));
};
export { isChattableChannel };
export const useIsChattableChannel = function useIsChattableChannel(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    let isNotNullishResult = arg0(closure_3[13]).isNotNullish(channel);
    if (isNotNullishResult) {
      isNotNullishResult = callback(channel);
    }
    return isNotNullishResult;
  });
};
export const getMinimumSetOfDefaultChannelIds = function getMinimumSetOfDefaultChannelIds(guildId, defaultChannelIds1, onboardingPromptsForOnboarding, arg3) {
  let fn = arg3;
  defaultChannelIds1 = guildId;
  if (arg3 === undefined) {
    fn = function a() {
      return true;
    };
  }
  const importDefault = fn;
  let importAll;
  const tmp = getFlattenedDefaultChannels(guildId, defaultChannelIds1, (id) => id.id, fn);
  importAll = tmp;
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
      const push = tmp.push;
      const items = [];
      HermesBuiltin.arraySpread(options.reduce((arg0, channelIds) => {
        let arr = arg0;
        if (null == channelIds.channelIds) {
          return [];
        } else {
          const arr2 = callback(closure_0, channelIds.channelIds, (id) => id.id, (arg0) => {
            let tmp = callback(arg0);
            if (tmp) {
              tmp = !closure_2.includes(arg0);
            }
            return tmp;
          });
          if (arr2.length < arr.length) {
            arr = arr2;
          }
          return arr;
        }
      }, closure_19(required, channelIds, (id) => id.id)), 0);
      HermesBuiltin.apply(items, closure_19);
      const tmp2 = required;
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
    function filterChattableChannels(arr, arg1) {
      return arr.filter((arg0) => {
        let channel;
        if (null != arg1[arg0]) {
          channel = tmp2.channel;
        }
        return closure_18(channel);
      });
    }(arr.map((id) => id.id), obj),
    arr
  ];
  return items;
};
export const useChattableDefaultChannels = function useChattableDefaultChannels(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_6];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    let iter2;
    const items = [];
    const items1 = [];
    const tmp = callback(channels.getChannels(arg0)[closure_7]);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_0;
        let tmp3 = closure_3;
        let obj = closure_0(closure_3[11]);
        let canChannelBeDefaultResult = obj.canChannelBeDefault(value.channel.guild_id, value.channel.id);
        if (canChannelBeDefaultResult) {
          let tmp5 = closure_1;
          let hasItem = closure_1.has(value.channel.id);
          if (hasItem) {
            let channel = value.channel;
            hasItem = !channel.isCategory();
          }
          if (!hasItem) {
            let channel2 = value.channel;
            let hasItem1 = !channel2.isThread() && null != value.channel.parent_id;
            if (hasItem1) {
              let tmp8 = closure_1;
              hasItem1 = closure_1.has(value.channel.parent_id);
            }
            hasItem = hasItem1;
          }
          canChannelBeDefaultResult = hasItem;
        }
        if (canChannelBeDefaultResult) {
          {}[value.channel.id] = value;
          let arr = items.push(value.channel);
          let tmp10 = closure_18;
          if (closure_18(value.channel)) {
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
  return new Set(mapped.flat().filter(arg1(dependencyMap[13]).isNotNullish));
};
export const getSelectedChannelIds = function getSelectedChannelIds(found) {
  const mapped = found.map((channelIds) => channelIds.channelIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(arg1(dependencyMap[13]).isNotNullish));
};
export const getProviderConnectionState = function getProviderConnectionState(stateFromStores) {
  const found = stateFromStores.filter((connection_type) => connection_type.connection_type === constants.PROVIDER_CONNECTED_ACCOUNT && connection_type.provider_id);
  const connected = [];
  const arg1 = connected;
  const notConnected = [];
  const importDefault = notConnected;
  const item = found.forEach((provider_id) => {
    provider_id = provider_id.provider_id;
    if (!obj.isNullOrEmpty(provider_id)) {
      const account = account.getAccount(null, provider_id);
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
  const found = stateFromStores.filter((connection_type) => connection_type.connection_type === constants.APPLICATION && connection_type.application_id);
  const connected = [];
  const arg1 = connected;
  const notConnected = [];
  const importDefault = notConnected;
  let closure_2 = arg1(dependencyMap[16]).default;
  const dependencyMap = arg1(dependencyMap[16]).FetchState;
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
