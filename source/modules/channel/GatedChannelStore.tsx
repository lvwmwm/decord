// Module ID: 1908
// Function ID: 21475
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1909, 1352, 1911, 1348, 1917, 1910, 1838, 1849, 653, 3749, 3750, 3751, 566, 686, 2]

// Module 1908 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag";
import isChannelAccessDeniedBy from "isChannelAccessDeniedBy";
import initialize from "initialize";
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import { hasPermission } from "GuildRoleRecordTypeTag";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_possibleConstructorReturn";

let closure_15;
let closure_16;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function isSubscriptionGated(role) {
  let guildId;
  let isPreviewingRoles;
  role = role.role;
  ({ guildId, isPreviewingRoles } = role);
  const tmp = !require(3749) /* isSubscriptionRole */.isSubscriptionRole(role);
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp4 = !tmp3;
    if (!isPreviewingRoles) {
      let tmp8;
      if (null != role) {
        tmp8 = role;
      }
      const tmp9 = !require(3749) /* isSubscriptionRole */.isSubscriptionRoleAvailableForPurchase(tmp8);
      let tmp10 = !tmp9;
      if (tmp9) {
        let flag = false;
        if (null != role) {
          currentUser = currentUser.getCurrentUser();
          flag = false;
          if (null != currentUser) {
            member = member.getMember(guildId, currentUser.id);
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
      const obj2 = require(3749) /* isSubscriptionRole */;
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
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let obj2 = require(3750) /* isChannelAccessDeniedBy */;
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
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let obj5 = require(3750) /* isChannelAccessDeniedBy */;
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
  if (null == table[guild_id]) {
    return false;
  } else {
    channel = channel.getChannel(id);
    if (null == channel) {
      return false;
    } else {
      guild = guild.getGuild(channel.getGuildId());
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
  delete tmp2[tmp];
}
function handleGuildRoleUpdate(arg0) {
  delete tmp[tmp2];
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  let tmp = null != channel.guild_id;
  if (tmp) {
    tmp = computeForChannel(channel.guild_id, channel.id);
  }
  return tmp;
}
({ Permissions: closure_15, GuildFeatures: closure_16 } = ME);
let closure_17 = {};
let set = new Set();
let tmp4 = ((Store) => {
  class GatedChannelStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GatedChannelStore);
      obj = outer1_5(GatedChannelStore);
      tmp2 = outer1_4;
      if (outer1_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GatedChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_11, outer1_12, outer1_13, outer1_7, outer1_14);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isChannelGated",
    value(guildId) {
      if (null == guildId) {
        return false;
      } else {
        let obj = outer1_17[guildId];
        if (null == obj) {
          const guild = outer1_13.getGuild(guildId);
          if (null != guild) {
            const _Set = Set;
            const set = new Set();
            outer1_17[guildId] = set;
            const features = guild.features;
            if (features.has(outer1_16.ROLE_SUBSCRIPTIONS_ENABLED)) {
              const mutableGuildChannelsForGuild = outer1_10.getMutableGuildChannelsForGuild(guildId);
              for (const key10008 in mutableGuildChannelsForGuild) {
                let tmp17 = key10008;
                let tmp18 = mutableGuildChannelsForGuild[key10008];
                let tmp19 = outer1_23;
                if (!outer1_23(tmp18, guild)) {
                  continue;
                } else {
                  let addResult = set.add(tmp18.id);
                  continue;
                }
                continue;
              }
            }
          }
          obj = outer1_17[guildId];
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
          isChannelGatedResult = !outer1_18.has(arg0);
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
        const channel = outer1_10.getChannel(channelId);
        let tmp3 = null == channel || null == channel.parent_id;
        if (!tmp3) {
          let type;
          if (null != channel) {
            type = channel.type;
          }
          tmp3 = !outer1_8.has(type);
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
})(require("initialize").Store);
tmp4.displayName = "GatedChannelStore";
tmp4 = new tmp4(require("dispatcher"), {
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
          let tmp3 = computeForChannel;
          if (computeForChannel(value.guild_id, value.id)) {
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
let result = set.fileFinishedImporting("modules/channel/GatedChannelStore.tsx");

export default tmp4;
