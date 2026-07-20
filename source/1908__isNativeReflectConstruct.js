// Module ID: 1908
// Function ID: 21468
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1908 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function isSubscriptionGated(role) {
  let guildId;
  let isPreviewingRoles;
  role = role.role;
  ({ guildId, isPreviewingRoles } = role);
  const tmp = !arg1(dependencyMap[14]).isSubscriptionRole(role);
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp4 = !tmp3;
    if (!isPreviewingRoles) {
      let tmp8;
      if (null != role) {
        tmp8 = role;
      }
      const tmp9 = !arg1(dependencyMap[14]).isSubscriptionRoleAvailableForPurchase(tmp8);
      let tmp10 = !tmp9;
      if (tmp9) {
        let flag = false;
        if (null != role) {
          const currentUser = currentUser.getCurrentUser();
          flag = false;
          if (null != currentUser) {
            const member = member.getMember(guildId, currentUser.id);
            let hasItem = null != member;
            if (hasItem) {
              const roles = member.roles;
              hasItem = roles.includes(role.id);
            }
            flag = hasItem;
          }
        }
        tmp10 = flag;
      }
      tmp4 = tmp10;
      const obj2 = arg1(dependencyMap[14]);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function isChannelSubscriptionGatedInGuild(channel, guild) {
  const features = guild.features;
  if (!features.has(constants2.CREATOR_MONETIZABLE)) {
    const features2 = guild.features;
    if (!features2.has(constants2.CREATOR_MONETIZABLE_PROVISIONAL)) {
      return false;
    }
  }
  const isViewingServerShopResult = viewingServerShop.isViewingServerShop(guild.id);
  const keys = Object.keys(channel.permissionOverwrites);
  let num = 0;
  if (0 < keys.length) {
    while (true) {
      let tmp3 = keys[num];
      let tmp4 = store;
      let tmp5 = isSubscriptionGated;
      let obj = { guildId: guild.id, role: store.getRole(guild.id, tmp3), isPreviewingRoles: isViewingServerShopResult };
      if (isSubscriptionGated(obj)) {
        let tmp6 = guild;
        let tmp7 = dependencyMap;
        let obj2 = guild(dependencyMap[15]);
        if (obj2.isChannelAccessGrantedBy(channel, channel.permissionOverwrites[tmp3])) {
          break;
        }
      }
      num = num + 1;
    }
    return true;
  }
  const tmp8 = !hasPermission(store.getEveryoneRole(guild), constants.VIEW_CHANNEL);
  if (tmp8) {
    if (!obj3.isChannelAccessDeniedBy(channel, channel.permissionOverwrites[guild.id])) {
      const tmp11 = _createForOfIteratorHelperLoose(store.getSortedRoles(guild.id));
      let iter = tmp11();
      if (!iter.done) {
        while (true) {
          let value = iter.value;
          let tmp12 = isSubscriptionGated;
          obj = { guildId: guild.id, role: value, isPreviewingRoles: isViewingServerShopResult };
          if (isSubscriptionGated(obj)) {
            let tmp13 = guild;
            let tmp14 = dependencyMap;
            let obj5 = guild(dependencyMap[15]);
            if (obj5.hasViewChannelPermission(value)) {
              break;
            }
          }
          let iter2 = tmp11();
          iter = iter2;
        }
        return true;
      }
    }
  }
  return false;
}
function computeForChannel(guild_id, id) {
  if (null == closure_17[guild_id]) {
    return false;
  } else {
    const channel = channel.getChannel(id);
    if (null == channel) {
      return false;
    } else {
      const guild = guild.getGuild(channel.getGuildId());
      if (null == guild) {
        return false;
      } else {
        const hasItem = obj.has(id);
        const tmp6 = isChannelSubscriptionGatedInGuild(channel, guild);
        let flag = hasItem !== tmp6;
        if (flag) {
          if (tmp6) {
            obj.add(id);
            flag = true;
          } else {
            obj.delete(id);
            flag = true;
          }
        }
        return flag;
      }
    }
  }
}
function handleInitialize() {
  let closure_17 = {};
  set.clear();
}
function handleGuildUpdate(arg0) {
  delete r1[r0];
}
function handleGuildRoleUpdate(arg0) {
  delete r0[r1];
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  let tmp = null != channel.guild_id;
  if (tmp) {
    tmp = computeForChannel(channel.guild_id, channel.id);
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const THREAD_CHANNEL_TYPES = arg1(dependencyMap[6]).THREAD_CHANNEL_TYPES;
const hasPermission = arg1(dependencyMap[7]).hasPermission;
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
({ Permissions: closure_15, GuildFeatures: closure_16 } = arg1(dependencyMap[13]));
let closure_17 = {};
const set = new Set();
let tmp4 = (Store) => {
  class GatedChannelStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GatedChannelStore);
      obj = closure_5(GatedChannelStore);
      tmp2 = closure_4;
      if (closure_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GatedChannelStore;
  callback2(GatedChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11, closure_12, closure_13, closure_7, closure_14);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isChannelGated",
    value(guildId) {
      if (null == guildId) {
        return false;
      } else {
        let obj = closure_17[guildId];
        if (null == obj) {
          const guild = guild.getGuild(guildId);
          if (null != guild) {
            const _Set = Set;
            const set = new Set();
            closure_17[guildId] = set;
            const features = guild.features;
            if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
              const mutableGuildChannelsForGuild = store.getMutableGuildChannelsForGuild(guildId);
              for (const key10008 in mutableGuildChannelsForGuild) {
                let tmp17 = key10008;
                let tmp18 = mutableGuildChannelsForGuild[key10008];
                let tmp19 = closure_23;
                if (!closure_23(tmp18, guild)) {
                  continue;
                } else {
                  let addResult = set.add(tmp18.id);
                  // continue
                }
                continue;
              }
            }
          }
          obj = closure_17[guildId];
        }
        let hasItem = null != obj;
        if (hasItem) {
          hasItem = obj.has(arg1);
        }
        return hasItem;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isChannelGatedAndVisible",
    value(arg0, arg1) {
      const self = this;
      let tmp = null != arg0;
      if (tmp) {
        let isChannelGatedResult = self.isChannelGated(arg0, arg1);
        if (isChannelGatedResult) {
          isChannelGatedResult = !set2.has(arg0);
        }
        tmp = isChannelGatedResult;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isChannelOrThreadParentGated",
    value(arg0, channelId) {
      const self = this;
      if (null == arg0) {
        return false;
      } else if (self.isChannelGated(arg0, channelId)) {
        return true;
      } else {
        const channel = store.getChannel(channelId);
        let tmp3 = null == channel || null == channel.parent_id;
        if (!tmp3) {
          let type;
          if (null != channel) {
            type = channel.type;
          }
          tmp3 = !set.has(type);
        }
        let result = !tmp3;
        if (!tmp3) {
          result = self.isChannelOrThreadParentGated(arg0, channel.parent_id);
        }
        return result;
      }
    }
  };
  return callback(GatedChannelStore, items);
}(importDefault(dependencyMap[17]).Store);
tmp4.displayName = "GatedChannelStore";
tmp4 = new tmp4(importDefault(dependencyMap[18]), {
  CONNECTION_OPEN: handleInitialize,
  OVERLAY_INITIALIZE: handleInitialize,
  CACHE_LOADED_LAZY: handleInitialize,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_DELETE: handleGuildUpdate,
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  CHANNEL_CREATE: handleChannelUpdate,
  CHANNEL_DELETE: handleChannelUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = flag;
        if (null != value.guild_id) {
          let tmp3 = closure_24;
          if (closure_24(value.guild_id, value.id)) {
            flag = true;
          }
          tmp2 = flag;
        }
        iter3 = tmp();
        flag = tmp2;
        iter2 = iter3;
        flag2 = tmp2;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function handleRoleSubscriptionsRestrictionsUpdate(guildId) {
    guildId = guildId.guildId;
    if (obj.isRestrictedFromShowingGuildPurchaseEntryPoints(guildId.restrictions)) {
      obj2.add(guildId);
    } else {
      obj2.delete(guildId);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleRoleSubscriptionsRestrictionsFetchFailure(guildId) {
    set.add(guildId.guildId);
  }
});
const obj = {
  CONNECTION_OPEN: handleInitialize,
  OVERLAY_INITIALIZE: handleInitialize,
  CACHE_LOADED_LAZY: handleInitialize,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_DELETE: handleGuildUpdate,
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  CHANNEL_CREATE: handleChannelUpdate,
  CHANNEL_DELETE: handleChannelUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = flag;
        if (null != value.guild_id) {
          let tmp3 = closure_24;
          if (closure_24(value.guild_id, value.id)) {
            flag = true;
          }
          tmp2 = flag;
        }
        iter3 = tmp();
        flag = tmp2;
        iter2 = iter3;
        flag2 = tmp2;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function handleRoleSubscriptionsRestrictionsUpdate(guildId) {
    guildId = guildId.guildId;
    if (obj.isRestrictedFromShowingGuildPurchaseEntryPoints(guildId.restrictions)) {
      obj2.add(guildId);
    } else {
      obj2.delete(guildId);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleRoleSubscriptionsRestrictionsFetchFailure(guildId) {
    set.add(guildId.guildId);
  }
};
const tmp2 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/channel/GatedChannelStore.tsx");

export default tmp4;
