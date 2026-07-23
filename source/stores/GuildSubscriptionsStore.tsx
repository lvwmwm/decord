// Module ID: 5657
// Function ID: 48417
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 4044, 3759, 4811, 1194, 5658, 5659, 1348, 4469, 1917, 1838, 4202, 3767, 1906, 3947, 653, 5662, 686, 22, 5077, 566, 2]

// Module 5657 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { EVERYONE_CHANNEL_ID } from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_createForOfIteratorHelperLoose";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "validateGuildId";

let ChannelSections;
let closure_24;
let closure_25;
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
function prune(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let obj = {};
  const item = importDefaultResult.forEach((arg0) => {
    let tmp = arg0 === outer1_23.getGuildId();
    if (!tmp) {
      tmp = arg0 === outer1_20.getGuildId();
    }
    if (!tmp) {
      const channel = outer1_16.getChannel(outer1_22.getChannelId());
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      tmp = arg0 === guildId;
    }
    if (!tmp) {
      let tmp9 = null != outer1_3;
      if (tmp9) {
        tmp9 = outer1_3.guildId === arg0;
      }
      tmp = tmp9;
    }
    if (!tmp) {
      outer1_26.clearWithoutFlushing(arg0, closure_0);
      if (closure_1) {
        obj[arg0] = outer1_26.get(arg0);
      }
    }
  });
  if (!obj2.isEmpty(obj)) {
    obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH" };
    obj.subscriptions = obj;
    importDefault(obj[22]).dispatch(obj);
    const obj3 = importDefault(obj[22]);
  }
}
function subscribe(guildId, channelId) {
  let tmp = guildId;
  if (obj.isFavoritesGuildId(guildId)) {
    tmp = guildId;
    if (null != channelId) {
      const channel = store.getChannel(channelId);
      guildId = undefined;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      tmp = guildId;
      if (null != guildId) {
        tmp = guildId;
      }
    }
  }
  importDefaultResult.subscribeToGuild(tmp);
  return false;
}
function handleConnectionOpenOrResumed(type) {
  let obj;
  let set;
  let dependencyMap;
  if ("CONNECTION_OPEN" === type.type) {
    prune(true, false);
  }
  const guildId = store3.getGuildId();
  if (null != guildId) {
    subscribe(guildId, store2.getChannelId(guildId));
  }
  obj = {};
  set = new Set(closure_11.lurkingGuildIds());
  dependencyMap = closure_11.mostRecentLurkedGuildId();
  const item = importDefaultResult.forEach((guildId) => {
    if (null == outer1_19.getGuild(guildId)) {
      outer1_26.clearWithoutFlushing(guildId, true);
    } else {
      let hasItem = set.has(guildId);
      if (hasItem) {
        hasItem = guildId !== closure_2;
      }
      if (!hasItem) {
        obj[guildId] = outer1_26.get(guildId);
      }
    }
  });
  if (!obj2.isEmpty(obj)) {
    obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH" };
    obj.subscriptions = obj;
    set(686).dispatch(obj);
    const obj3 = set(686);
  }
}
function handleChannelSelect(guildId) {
  guildId = guildId.guildId;
  let flag = !closure_17.isUnavailable(guildId);
  if (flag) {
    subscribe(guildId, guildId.channelId);
    flag = false;
  }
  return flag;
}
function resubscribe() {
  const guildId = store3.getGuildId();
  subscribe(guildId, store2.getChannelId());
  return false;
}
function handleSpotifyUpdate() {
  syncingWith = syncingWith.getSyncingWith();
  if (null == syncingWith) {
    if (null != obj) {
      importDefaultResult.unsubscribeUser(obj.guildId, obj.userId);
      obj = null;
    }
  } else {
    const userId = syncingWith.userId;
    if (null != obj) {
      if (obj.userId === userId) {
        return false;
      }
    }
    if (friend.isFriend(userId)) {
      return false;
    } else {
      const memberOfResult = closure_18.memberOf(userId);
      if (0 === memberOfResult.length) {
        return false;
      } else {
        const first = callback3(memberOfResult, 1)[0];
        obj = { guildId: first, userId };
        importDefaultResult.subscribeUser(first, userId);
      }
    }
  }
  return false;
}
({ ChannelSections, ChannelTypes: closure_24, FAVORITES: closure_25 } = ME);
importDefaultResult = new importDefaultResult((subscriptions) => {
  for (const key10004 in arg0) {
    let tmp6 = key10004;
    let tmp7 = guild;
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
      let tmp3 = closure_17;
      isUnavailableResult = closure_17.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  let obj = importDefault(686);
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
let tmp5 = ((Store) => {
  class GuildSubscriptionsStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, GuildSubscriptionsStore);
      obj = outer1_7(GuildSubscriptionsStore);
      tmp2 = outer1_6;
      if (outer1_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildSubscriptionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_15, outer1_16, outer1_10, outer1_17, outer1_18, outer1_19, outer1_11, outer1_20, outer1_21, outer1_22, outer1_23, outer1_12);
      const items = [outer1_12];
      this.syncWith(items, outer1_33);
      const items1 = [outer1_15];
      this.syncWith(items1, outer1_32);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getSubscribedThreadIds",
    value() {
      return outer1_26.getSubscribedThreadIds();
    }
  };
  items[1] = obj;
  obj = {
    key: "isSubscribedToThreads",
    value(arg0) {
      return outer1_26.isSubscribedToThreads(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSubscribedToAnyMember",
    value(arg0) {
      return outer1_26.isSubscribedToAnyMember(arg0);
    }
  };
  items[4] = {
    key: "isSubscribedToMemberUpdates",
    value(arg0) {
      return outer1_26.isSubscribedToMemberUpdates(arg0);
    }
  };
  items[5] = {
    key: "isSubscribedToAnyGuildChannel",
    value(arg0) {
      const channels = outer1_26.get(arg0).channels;
      let tmp = null != channels;
      if (tmp) {
        const _Object = Object;
        tmp = Object.keys(channels).length > 0;
      }
      return tmp;
    }
  };
  return callback(GuildSubscriptionsStore, items);
})(require("initialize").Store);
tmp5.displayName = "GuildSubscriptionsStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    prune(false, false);
  },
  IDLE: function handleIdle(idle) {
    if (idle.idle) {
      prune(false, true);
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    importDefaultResult.reset();
  },
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_SELECT: handleChannelSelect,
  GUILD_CREATE: function handleGuildCreate(guild) {
    if (guild.guild.id === store3.getGuildId()) {
      resubscribe();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    importDefaultResult.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    let require;
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((arg0) => {
      if (arg0 !== outer1_13.getId()) {
        outer1_26.subscribeUser(closure_0, arg0);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    let require;
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((arg0) => {
      outer1_26.unsubscribeUser(closure_0, arg0);
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function handleAddMemberUpdatesGuildSubscription(guildId) {
    const result = importDefaultResult.subscribeToMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function handleRemoveMemberUpdatesGuildSubscription(guildId) {
    const result = importDefaultResult.unsubscribeFromMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function handleChannel(arg0) {
    let channelId;
    let guildId;
    let ranges;
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      let flag = importDefaultResult.subscribeChannel(guildId, channelId, ranges);
    } else {
      let parent_id = store.getChannel(channelId);
      flag = false;
      if (null != parent_id) {
        guildId = parent_id.getGuildId();
        let tmp2 = guildId !== guildId;
        if (tmp2) {
          tmp2 = guildId === closure_25;
        }
        if (tmp2) {
          importDefaultResult.subscribeToGuild(guildId);
        }
        if (null != parent_id) {
          if (parent_id.isThread()) {
            if (parent_id.type === constants.ANNOUNCEMENT_THREAD) {
              parent_id = parent_id.parent_id;
              let subscribeChannelResult = importDefaultResult.subscribeChannel(guildId, parent_id, ranges);
            } else {
              const tmp8 = !parent_id.isActiveThread();
              subscribeChannelResult = !tmp8;
              if (!tmp8) {
                subscribeChannelResult = importDefaultResult.subscribeThreadMemberList(guildId, channelId, store2.getChannelId());
              }
            }
          }
        }
        flag = importDefaultResult.subscribeChannel(guildId, channelId, ranges);
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return importDefaultResult.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(guildId) {
    subscribe(guildId.guildId, guildId.channelId);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(guildId) {
    subscribe(guildId.guildId, guildId.channelId);
    return false;
  },
  INBOX_OPEN: function handleInboxOpen(guildIds) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(guildIds.guildIds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value) {
          let tmp2 = importDefaultResult;
          let subscribeToGuildResult = importDefaultResult.subscribeToGuild(value);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    return false;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    let guild_id;
    let id;
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      let result = importDefaultResult.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      let tmp = !channel.isActiveThread();
      if (!tmp) {
        tmp = store2.getChannelId() !== channel.id;
      }
      result = !tmp;
      if (!tmp) {
        ({ guild_id, id } = channel);
        const result1 = importDefaultResult.subscribeThreadMemberList(guild_id, id, store2.getChannelId());
      }
    }
    return result;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    return importDefaultResult.unsubscribeThreadMemberList(channel.guild_id, channel.id);
  },
  THREAD_LIST_SYNC: resubscribe
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default tmp5;
