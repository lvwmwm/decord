// Module ID: 12608
// Function ID: 97869
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1352, 1882, 6892, 6896, 1902, 6897, 1898, 22, 44, 2]
// Exports: hydrateInitialGuild, hydrateReadyPayloadPrioritized, hydrateReadySupplementalPayload, preloadReadyPayloadData

// Module 12608 (_createForOfIteratorHelperLoose)
import { createChannelRecordFromServer as closure_3 } from "_callSuper";

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
function maybeIncludeInitialGuild(identifyStartTime, guilds, arg2) {
  let tmp = null;
  if (null != _null) {
    tmp = null;
    if (_null.identifyTime === identifyStartTime) {
      if (null == guilds) {
        tmp = arg2(_null.guild);
      } else {
        tmp = null;
      }
    }
  }
  return tmp;
}
function restoreUsers(arg0, arr) {
  let closure_0 = arg0;
  const items = [];
  if (null != arr) {
    const item = arr.forEach((user_id) => {
      if (null != user_id) {
        user_id = user_id.user_id;
        if (null != user_id) {
          const _HermesInternal = HermesInternal;
          items(outer1_2[8])(null != dependencyMap[user_id], "Missing user[" + user_id + "] in compressed ready payload");
          user_id.user = dependencyMap[user_id];
          const tmp4 = items(outer1_2[8]);
          const tmp6 = null != dependencyMap[user_id];
        }
        delete tmp.user_id;
        items.push(user_id);
      }
    });
  }
  return items;
}
function hydrateGuild(data_mode) {
  let properties;
  let threads;
  let closure_0 = data_mode;
  if ("partial" !== data_mode.data_mode) {
    let obj = {};
    ({ id: obj4.id, data_mode: obj4.dataMode } = data_mode);
    obj = { op: "full_sync", items: data_mode.emojis };
    obj.emojis = obj;
    ({ guild_scheduled_events: obj4.guild_scheduled_events, experiments: obj4.experiments, joined_at: obj4.joined_at, last_messages: obj4.lastMessages, member_count: obj4.member_count, members: obj4.members, premium_subscription_count: obj4.premium_subscription_count, properties: obj4.properties } = data_mode);
    const obj1 = { op: "full_sync", items: data_mode.roles };
    obj.roles = obj1;
    obj.stage_instances = data_mode.stage_instances;
    const obj2 = { op: "full_sync", items: data_mode.stickers };
    obj.stickers = obj2;
    threads = data_mode.threads;
    let mapped;
    if (null != threads) {
      mapped = threads.map((arg0) => outer1_3(arg0, data_mode.id));
    }
    if (null == mapped) {
      mapped = [];
    }
    obj.threads = mapped;
    obj.threadMessages = collectThreadMessages(data_mode.threads);
    const obj3 = { op: "full_sync" };
    const channels = data_mode.channels;
    obj3.items = channels.map((arg0) => {
      arg0.guild_id = data_mode.id;
      return outer1_3(arg0, data_mode.id);
    });
    obj.channels = obj3;
    ({ version: obj4.version, has_threads_subscription: obj4.hasThreadsSubscription } = data_mode);
    let obj4 = obj;
  } else {
    obj4 = {};
    ({ id: obj9.id, data_mode: obj9.dataMode } = data_mode);
    const obj5 = { op: "update" };
    const channels1 = data_mode.partial_updates.channels;
    let mapped1;
    if (null != channels1) {
      mapped1 = channels1.map((arg0) => outer1_3(arg0, data_mode.id));
    }
    if (null == mapped1) {
      mapped1 = [];
    }
    obj5.writes = mapped1;
    let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
    if (null == deleted_channel_ids) {
      deleted_channel_ids = [];
    }
    obj5.deletes = deleted_channel_ids;
    obj4.channels = obj5;
    obj4.channelTimestampUpdates = data_mode.channel_updates;
    obj = { op: "update" };
    let emojis = data_mode.partial_updates.emojis;
    if (null == emojis) {
      emojis = [];
    }
    obj.writes = emojis;
    let deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
    if (null == deleted_emoji_ids) {
      deleted_emoji_ids = [];
    }
    obj.deletes = deleted_emoji_ids;
    obj4.emojis = obj;
    ({ guild_scheduled_events: obj9.guild_scheduled_events, experiments: obj9.experiments, joined_at: obj9.joined_at, last_messages: obj9.lastMessages, member_count: obj9.member_count, members: obj9.members, premium_subscription_count: obj9.premium_subscription_count, properties } = data_mode);
    let tmp = null;
    if (null != properties) {
      tmp = properties;
    }
    obj4.properties = tmp;
    const obj6 = { op: "update" };
    let roles = data_mode.partial_updates.roles;
    if (null == roles) {
      roles = [];
    }
    obj6.writes = roles;
    let deleted_role_ids = data_mode.partial_updates.deleted_role_ids;
    if (null == deleted_role_ids) {
      deleted_role_ids = [];
    }
    obj6.deletes = deleted_role_ids;
    obj4.roles = obj6;
    obj4.stage_instances = data_mode.stage_instances;
    const obj7 = { op: "update" };
    let stickers = data_mode.partial_updates.stickers;
    if (null == stickers) {
      stickers = [];
    }
    obj7.writes = stickers;
    let deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
    if (null == deleted_sticker_ids) {
      deleted_sticker_ids = [];
    }
    obj7.deletes = deleted_sticker_ids;
    obj4.stickers = obj7;
    ({ unable_to_sync_deletes: obj9.unableToSyncDeletes, threads } = data_mode);
    let mapped2;
    if (null != threads) {
      mapped2 = threads.map((arg0) => outer1_3(arg0, data_mode.id));
    }
    if (null == mapped2) {
      mapped2 = [];
    }
    obj4.threads = mapped2;
    obj4.threadMessages = collectThreadMessages(data_mode.threads);
    ({ version: obj9.version, has_threads_subscription: obj9.hasThreadsSubscription } = data_mode);
  }
  return obj4;
}
function hydratePreviouslyUnavailableGuild(data_mode) {
  let properties;
  let threads;
  let threads2;
  let closure_0 = data_mode;
  if ("partial" !== data_mode.data_mode) {
    let obj = {};
    ({ id: obj4.id, guild_scheduled_events: obj4.guild_scheduled_events, experiments: obj4.experiments, joined_at: obj4.joined_at, last_messages: obj4.lastMessages, member_count: obj4.member_count, members: obj4.members, premium_subscription_count: obj4.premium_subscription_count, properties: obj4.properties } = data_mode);
    obj = { op: "full_sync", items: data_mode.roles };
    obj.roles = obj;
    ({ stage_instances: obj4.stage_instances, threads: threads2 } = data_mode);
    let mapped;
    if (null != threads2) {
      mapped = threads2.map((arg0) => outer1_3(arg0, data_mode.id));
    }
    if (null == mapped) {
      mapped = [];
    }
    obj.threads = mapped;
    obj.threadMessages = collectThreadMessages(data_mode.threads);
    ({ presences: obj4.presences, activity_instances: obj4.activity_instances, voice_states: obj4.voice_states, version: obj4.version, has_threads_subscription: obj4.hasThreadsSubscription } = data_mode);
    const obj1 = { op: "full_sync", items: data_mode.emojis };
    obj.emojis = obj1;
    const obj2 = { op: "full_sync", items: data_mode.stickers };
    obj.stickers = obj2;
    const obj3 = { op: "full_sync" };
    const channels = data_mode.channels;
    obj3.items = channels.map((arg0) => {
      arg0.guild_id = data_mode.id;
      return outer1_3(arg0, data_mode.id);
    });
    obj.channels = obj3;
    let obj4 = obj;
  } else {
    obj4 = { id: data_mode.id };
    const obj5 = { op: "update" };
    const channels1 = data_mode.partial_updates.channels;
    let mapped1;
    if (null != channels1) {
      mapped1 = channels1.map((arg0) => outer1_3(arg0, data_mode.id));
    }
    if (null == mapped1) {
      mapped1 = [];
    }
    obj5.writes = mapped1;
    let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
    if (null == deleted_channel_ids) {
      deleted_channel_ids = [];
    }
    obj5.deletes = deleted_channel_ids;
    obj4.channels = obj5;
    ({ channel_updates: obj9.channelTimestampUpdates, activity_instances: obj9.activity_instances } = data_mode);
    obj = { op: "update" };
    let emojis = data_mode.partial_updates.emojis;
    if (null == emojis) {
      emojis = [];
    }
    obj.writes = emojis;
    let deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
    if (null == deleted_emoji_ids) {
      deleted_emoji_ids = [];
    }
    obj.deletes = deleted_emoji_ids;
    obj4.emojis = obj;
    ({ guild_scheduled_events: obj9.guild_scheduled_events, experiments: obj9.experiments, joined_at: obj9.joined_at, last_messages: obj9.lastMessages, member_count: obj9.member_count, members: obj9.members, premium_subscription_count: obj9.premium_subscription_count, presences: obj9.presences, properties } = data_mode);
    let tmp = null;
    if (null != properties) {
      tmp = properties;
    }
    obj4.properties = tmp;
    const obj6 = { op: "update" };
    let roles = data_mode.partial_updates.roles;
    if (null == roles) {
      roles = [];
    }
    obj6.writes = roles;
    let deleted_role_ids = data_mode.partial_updates.deleted_role_ids;
    if (null == deleted_role_ids) {
      deleted_role_ids = [];
    }
    obj6.deletes = deleted_role_ids;
    obj4.roles = obj6;
    obj4.stage_instances = data_mode.stage_instances;
    const obj7 = { op: "update" };
    let stickers = data_mode.partial_updates.stickers;
    if (null == stickers) {
      stickers = [];
    }
    obj7.writes = stickers;
    let deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
    if (null == deleted_sticker_ids) {
      deleted_sticker_ids = [];
    }
    obj7.deletes = deleted_sticker_ids;
    obj4.stickers = obj7;
    ({ unable_to_sync_deletes: obj9.unableToSyncDeletes, threads } = data_mode);
    let mapped2;
    if (null != threads) {
      mapped2 = threads.map((arg0) => outer1_3(arg0, data_mode.id));
    }
    if (null == mapped2) {
      mapped2 = [];
    }
    obj4.threads = mapped2;
    obj4.threadMessages = collectThreadMessages(data_mode.threads);
    ({ voice_states: obj9.voice_states, version: obj9.version, has_threads_subscription: obj9.hasThreadsSubscription } = data_mode);
  }
  return obj4;
}
function collectThreadMessages(threads) {
  let iter2;
  const items = [];
  if (null != threads) {
    const tmp2 = _createForOfIteratorHelperLoose(threads);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value.most_recent_message) {
          let arr = items.push(value.most_recent_message);
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
  }
  return items;
}
let c4 = null;
let closure_5 = {};
let result = require("isCacheEnabled").fileFinishedImporting("utils/ReadyPayloadUtils.tsx");

export const hydrateReadySupplementalPayload = function hydrateReadySupplementalPayload(outer2_0, identifyStartTime) {
  let guilds;
  let merged_presences;
  let require;
  ({ guilds, merged_members: require, merged_presences } = outer2_0);
  let obj = { guilds: 0, merged_members: 0, merged_presences: 0 };
  Object.setPrototypeOf(null);
  let merged = Object.assign(outer2_0, obj);
  let friends;
  if (null != merged_presences) {
    friends = merged_presences.friends;
  }
  let mapped;
  if (null != guilds) {
    mapped = guilds.map((voice_states) => {
      let tmp3;
      if (null != merged_presences) {
        tmp3 = merged_presences.guilds[arg1];
      }
      let tmp8;
      if (null != table) {
        tmp8 = table[arg1];
      }
      const obj = {};
      const tmp = outer1_9;
      const tmp2 = closure_5;
      const tmp6 = outer1_9;
      const tmp7 = closure_5;
      const tmpResult = outer1_9(closure_5, tmp3);
      const merged = Object.assign(voice_states);
      obj["unavailable"] = undefined === voice_states.voice_states;
      obj["presences"] = tmpResult;
      obj["members"] = outer1_9(closure_5, tmp8);
      return obj;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  let tmp7 = maybeIncludeInitialGuild(identifyStartTime, guilds, (id) => ({ id: id.id, members: id.members, presences: id.presences, activity_instances: id.activity_instances, voice_states: id.voice_states, unavailable: false }));
  if (null != tmp7) {
    mapped.push(tmp7);
  }
  let closure_5 = {};
  obj = {};
  const merged1 = Object.assign(merged);
  obj["presences"] = restoreUsers(closure_5, friends);
  obj["guilds"] = mapped;
  return obj;
};
export const preloadReadyPayloadData = function preloadReadyPayloadData() {
  const databaseResult = importDefault(1882).database();
  const obj = importDefault(1882);
  if (obj2.isCacheEnabled()) {
    let committedVersions = importDefault(6896).getCommittedVersions();
    const obj3 = importDefault(6896);
  } else {
    committedVersions = Promise.resolve({});
  }
  obj2 = require(6892) /* isCacheEnabled */;
  if (obj4.isCacheEnabled()) {
    let guildIds = importDefault(1902).getGuildIds();
    const obj5 = importDefault(1902);
  } else {
    const _Set = Set;
    const set = new Set();
    guildIds = Promise.resolve(set);
  }
  if (null != databaseResult) {
    let okAsyncResult = importDefault(6897).okAsync(databaseResult);
    const obj6 = importDefault(6897);
  } else {
    okAsyncResult = Promise.resolve(false);
  }
  const items = [committedVersions, guildIds, okAsyncResult];
  obj4 = require(6892) /* isCacheEnabled */;
  return Promise.all(items).then((arg0) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    return { guildVersions, guildChannels, databaseOk };
  });
};
export const hydrateReadyPayloadPrioritized = function hydrateReadyPayloadPrioritized(outer2_0, identifyStartTime, outer2_1) {
  let guilds;
  let private_channels;
  let require;
  let users;
  ({ users, private_channels, merged_members: require, guilds } = outer2_0);
  let obj = { users: 0, private_channels: 0, merged_members: 0, guilds: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(outer2_0, obj);
  let tmp3 = null != importDefault(1882).database();
  if (tmp3) {
    tmp3 = false === outer2_1.databaseOk;
  }
  if (tmp3) {
    const result = importDefault(1898).replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok");
    const obj3 = importDefault(1898);
  }
  const obj2 = importDefault(1882);
  let closure_5 = importDefault(22).keyBy(users, (id) => id.id);
  if (null != private_channels) {
    const item = private_channels.forEach((recipient_ids) => {
      recipient_ids = recipient_ids.recipient_ids;
      if (null != recipient_ids) {
        recipient_ids.recipients = recipient_ids.map((arg0) => {
          outer2_1(outer2_2[8])(null != dependencyMap[arg0], "Missing user in compressed ready payload");
          return dependencyMap[arg0];
        });
      }
      delete tmp.recipient_ids;
    });
  }
  let mapped;
  if (null != guilds) {
    mapped = guilds.map((unavailable) => {
      let tmp = unavailable;
      if (true !== unavailable.unavailable) {
        let tmp6;
        if (null != table) {
          tmp6 = table[arg1];
        }
        unavailable.members = outer1_9(closure_5, tmp6);
        tmp = outer1_10(unavailable);
        const tmp2 = outer1_9;
        const tmp3 = closure_5;
      }
      return tmp;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  const tmp9 = maybeIncludeInitialGuild(identifyStartTime, guilds, (arg0) => outer1_10(arg0));
  if (null != tmp9) {
    mapped.push(tmp9);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["users"] = users;
  obj["presences"] = [];
  obj["guilds"] = mapped;
  if (null == private_channels) {
    private_channels = [];
  }
  obj["private_channels"] = private_channels;
  return obj;
};
export const hydrateInitialGuild = function hydrateInitialGuild(outer1_0, identifyStartTime) {
  const obj = { guild: outer1_0, identifyTime: identifyStartTime };
  return hydratePreviouslyUnavailableGuild(outer1_0);
};
export { hydratePreviouslyUnavailableGuild };
