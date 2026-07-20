// Module ID: 5651
// Function ID: 48332
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5651 (_isNativeReflectConstruct)
let ChannelSections;
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
function prune(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = {};
  const dependencyMap = obj;
  const item = importDefaultResult.forEach((arg0) => {
    let tmp = arg0 === guildId3.getGuildId();
    if (!tmp) {
      tmp = arg0 === guildId2.getGuildId();
    }
    if (!tmp) {
      const channel = channel.getChannel(channelId.getChannelId());
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      tmp = arg0 === guildId;
    }
    if (!tmp) {
      let tmp9 = null != guildId;
      if (tmp9) {
        tmp9 = guildId.guildId === arg0;
      }
      tmp = tmp9;
    }
    if (!tmp) {
      closure_26.clearWithoutFlushing(arg0, arg0);
      if (arg1) {
        obj[arg0] = closure_26.get(arg0);
      }
    }
  });
  if (!obj2.isEmpty(obj)) {
    obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH" };
    obj.subscriptions = obj;
    importDefault(dependencyMap[22]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[22]);
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
  let arg1;
  let importDefault;
  let closure_2;
  if ("CONNECTION_OPEN" === type.type) {
    prune(true, false);
  }
  const guildId = store3.getGuildId();
  if (null != guildId) {
    subscribe(guildId, store2.getChannelId(guildId));
  }
  let obj = {};
  arg1 = obj;
  importDefault = new Set(closure_11.lurkingGuildIds());
  closure_2 = closure_11.mostRecentLurkedGuildId();
  const item = importDefaultResult.forEach((guildId) => {
    if (null == guild.getGuild(guildId)) {
      closure_26.clearWithoutFlushing(guildId, true);
    } else {
      let hasItem = set.has(guildId);
      if (hasItem) {
        hasItem = guildId !== closure_2;
      }
      if (!hasItem) {
        obj[guildId] = closure_26.get(guildId);
      }
    }
  });
  const set = new Set(closure_11.lurkingGuildIds());
  if (!obj2.isEmpty(obj)) {
    obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH" };
    obj.subscriptions = obj;
    importDefault(closure_2[22]).dispatch(obj);
    const obj3 = importDefault(closure_2[22]);
  }
}
function handleChannelSelect(guildId) {
  guildId = guildId.guildId;
  let flag = !unavailable.isUnavailable(guildId);
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
  const syncingWith = syncingWith.getSyncingWith();
  if (null == syncingWith) {
    if (null != obj) {
      importDefaultResult.unsubscribeUser(obj.guildId, obj.userId);
      let obj = null;
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const EVERYONE_CHANNEL_ID = arg1(dependencyMap[10]).EVERYONE_CHANNEL_ID;
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
let closure_21 = importDefault(dependencyMap[17]);
let closure_22 = importDefault(dependencyMap[18]);
let closure_23 = importDefault(dependencyMap[19]);
({ ChannelSections, ChannelTypes: closure_24, FAVORITES: closure_25 } = arg1(dependencyMap[20]));
let importDefaultResult = importDefault(dependencyMap[21]);
importDefaultResult = new importDefaultResult((subscriptions) => {
  for (const key10004 in arg0) {
    let tmp4 = key10004;
    let tmp5 = closure_19;
    let isUnavailableResult = null != closure_19.getGuild(key10004);
    if (!isUnavailableResult) {
      let tmp = closure_17;
      isUnavailableResult = closure_17.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete r4[r8];
      // continue
    }
    continue;
  }
  let obj = importDefault(dependencyMap[22]);
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
let tmp5 = (Store) => {
  class GuildSubscriptionsStore {
    constructor() {
      self = this;
      tmp = closure_4(this, GuildSubscriptionsStore);
      obj = closure_7(GuildSubscriptionsStore);
      tmp2 = closure_6;
      if (closure_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildSubscriptionsStore;
  callback2(GuildSubscriptionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_15, closure_16, closure_10, closure_17, closure_18, closure_19, closure_11, closure_20, closure_21, closure_22, closure_23, closure_12);
      const items = [closure_12];
      this.syncWith(items, closure_33);
      const items1 = [closure_15];
      this.syncWith(items1, closure_32);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getSubscribedThreadIds",
    value() {
      return store.getSubscribedThreadIds();
    }
  };
  items[1] = obj;
  obj = {
    key: "isSubscribedToThreads",
    value(arg0) {
      return store.isSubscribedToThreads(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSubscribedToAnyMember",
    value(arg0) {
      return store.isSubscribedToAnyMember(arg0);
    }
  };
  items[4] = {
    key: "isSubscribedToMemberUpdates",
    value(arg0) {
      return store.isSubscribedToMemberUpdates(arg0);
    }
  };
  items[5] = {
    key: "isSubscribedToAnyGuildChannel",
    value(arg0) {
      const channels = store.get(arg0).channels;
      let tmp = null != channels;
      if (tmp) {
        const _Object = Object;
        tmp = Object.keys(channels).length > 0;
      }
      return tmp;
    }
  };
  return callback(GuildSubscriptionsStore, items);
}(importDefault(dependencyMap[25]).Store);
tmp5.displayName = "GuildSubscriptionsStore";
tmp5 = new tmp5(importDefault(dependencyMap[22]), {
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
    let userIds;
    ({ guildId: closure_0, userIds } = arg0);
    const item = userIds.forEach((arg0) => {
      if (arg0 !== id.getId()) {
        closure_26.subscribeUser(closure_0, arg0);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    let userIds;
    ({ guildId: closure_0, userIds } = arg0);
    const item = userIds.forEach((arg0) => {
      closure_26.unsubscribeUser(closure_0, arg0);
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
  INBOX_OPEN: function handleInboxOpen(guildIds) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(guildIds.guildIds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value) {
          let tmp2 = closure_26;
          let subscribeToGuildResult = closure_26.subscribeToGuild(value);
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
const obj = {
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
    let userIds;
    ({ guildId: closure_0, userIds } = arg0);
    const item = userIds.forEach((arg0) => {
      if (arg0 !== id.getId()) {
        closure_26.subscribeUser(closure_0, arg0);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    let userIds;
    ({ guildId: closure_0, userIds } = arg0);
    const item = userIds.forEach((arg0) => {
      closure_26.unsubscribeUser(closure_0, arg0);
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
  INBOX_OPEN: function handleInboxOpen(guildIds) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(guildIds.guildIds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value) {
          let tmp2 = closure_26;
          let subscribeToGuildResult = closure_26.subscribeToGuild(value);
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
};
const tmp2 = arg1(dependencyMap[20]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default tmp5;
