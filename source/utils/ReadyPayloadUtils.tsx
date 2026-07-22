// Module ID: 12494
// Function ID: 95713
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: hydrateInitialGuild, hydrateReadyPayloadPrioritized, hydrateReadySupplementalPayload, preloadReadyPayloadData

// Module 12494 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
  const require = arg0;
  const items = [];
  const importDefault = items;
  if (null != arr) {
    const item = arr.forEach((user_id) => {
      if (null != user_id) {
        user_id = user_id.user_id;
        if (null != user_id) {
          const _HermesInternal = HermesInternal;
          items(closure_2[8])(null != user_id[user_id], "Missing user[" + user_id + "] in compressed ready payload");
          user_id.user = user_id[user_id];
          const tmp3 = items(closure_2[8]);
          const tmp5 = null != user_id[user_id];
        }
        delete r2.user_id;
        items.push(user_id);
      }
    });
  }
  return items;
}
function hydrateGuild(data_mode) {
  let properties;
  let threads;
  const require = data_mode;
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
      mapped = threads.map((arg0) => callback(arg0, arg0.id));
    }
    if (null == mapped) {
      mapped = [];
    }
    obj.threads = mapped;
    obj.threadMessages = collectThreadMessages(data_mode.threads);
    const obj3 = { op: "full_sync" };
    const channels = data_mode.channels;
    obj3.items = channels.map((arg0) => {
      arg0.guild_id = arg0.id;
      return callback(arg0, arg0.id);
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
      mapped1 = channels1.map((arg0) => callback(arg0, arg0.id));
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
      mapped2 = threads.map((arg0) => callback(arg0, arg0.id));
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
  const require = data_mode;
  if ("partial" !== data_mode.data_mode) {
    let obj = {};
    ({ id: obj4.id, guild_scheduled_events: obj4.guild_scheduled_events, experiments: obj4.experiments, joined_at: obj4.joined_at, last_messages: obj4.lastMessages, member_count: obj4.member_count, members: obj4.members, premium_subscription_count: obj4.premium_subscription_count, properties: obj4.properties } = data_mode);
    obj = { op: "full_sync", items: data_mode.roles };
    obj.roles = obj;
    ({ stage_instances: obj4.stage_instances, threads: threads2 } = data_mode);
    let mapped;
    if (null != threads2) {
      mapped = threads2.map((arg0) => callback(arg0, arg0.id));
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
      arg0.guild_id = arg0.id;
      return callback(arg0, arg0.id);
    });
    obj.channels = obj3;
    let obj4 = obj;
  } else {
    obj4 = { id: data_mode.id };
    const obj5 = { op: "update" };
    const channels1 = data_mode.partial_updates.channels;
    let mapped1;
    if (null != channels1) {
      mapped1 = channels1.map((arg0) => callback(arg0, arg0.id));
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
      mapped2 = threads.map((arg0) => callback(arg0, arg0.id));
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
let closure_3 = require(dependencyMap[0]).createChannelRecordFromServer;
let closure_4 = null;
let closure_5 = {};
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("utils/ReadyPayloadUtils.tsx");

export const hydrateReadySupplementalPayload = function hydrateReadySupplementalPayload(found, identifyStartTime) {
  let guilds;
  let merged_presences;
  ({ guilds, merged_members: closure_0, merged_presences } = found);
  const importDefault = merged_presences;
  let obj = { "Null": "spring", "Null": 0.4, "Null": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(found, obj);
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
      if (null != closure_0) {
        tmp8 = closure_0[arg1];
      }
      const obj = {};
      const tmp = closure_9;
      const tmp2 = closure_5;
      const tmp6 = closure_9;
      const tmp7 = closure_5;
      const tmpResult = closure_9(closure_5, tmp3);
      const merged = Object.assign(voice_states);
      obj["unavailable"] = undefined === voice_states.voice_states;
      obj["presences"] = tmpResult;
      obj["members"] = closure_9(closure_5, tmp8);
      return obj;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  const tmp7 = maybeIncludeInitialGuild(identifyStartTime, guilds, (id) => ({ id: id.id, members: id.members, presences: id.presences, activity_instances: id.activity_instances, voice_states: id.voice_states, unavailable: false }));
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
  const databaseResult = importDefault(dependencyMap[1]).database();
  const obj = importDefault(dependencyMap[1]);
  if (obj2.isCacheEnabled()) {
    let committedVersions = importDefault(dependencyMap[3]).getCommittedVersions();
    const obj3 = importDefault(dependencyMap[3]);
  } else {
    committedVersions = Promise.resolve({});
  }
  const obj2 = require(dependencyMap[2]);
  if (obj4.isCacheEnabled()) {
    let guildIds = importDefault(dependencyMap[4]).getGuildIds();
    const obj5 = importDefault(dependencyMap[4]);
  } else {
    const _Set = Set;
    const set = new Set();
    guildIds = Promise.resolve(set);
  }
  if (null != databaseResult) {
    let okAsyncResult = importDefault(dependencyMap[5]).okAsync(databaseResult);
    const obj6 = importDefault(dependencyMap[5]);
  } else {
    okAsyncResult = Promise.resolve(false);
  }
  const items = [committedVersions, guildIds, okAsyncResult];
  const obj4 = require(dependencyMap[2]);
  return Promise.all(items).then((arg0) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    return { guildVersions, guildChannels, databaseOk };
  });
};
export const hydrateReadyPayloadPrioritized = function hydrateReadyPayloadPrioritized(closure_0, identifyStartTime, closure_1) {
  let guilds;
  let private_channels;
  let users;
  ({ users, private_channels, merged_members: closure_0, guilds } = closure_0);
  let obj = { enableAnalog: -24, enableDigital: null, headroom_db: 1, max_gain_db: "Malaysia" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(closure_0, obj);
  let tmp3 = null != importDefault(dependencyMap[1]).database();
  if (tmp3) {
    tmp3 = false === closure_1.databaseOk;
  }
  if (tmp3) {
    const result = importDefault(dependencyMap[6]).replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok");
    const obj3 = importDefault(dependencyMap[6]);
  }
  const obj2 = importDefault(dependencyMap[1]);
  let closure_5 = importDefault(dependencyMap[7]).keyBy(users, (id) => id.id);
  if (null != private_channels) {
    const item = private_channels.forEach((recipient_ids) => {
      recipient_ids = recipient_ids.recipient_ids;
      if (null != recipient_ids) {
        recipient_ids.recipients = recipient_ids.map((arg0) => {
          callback(closure_2[8])(null != closure_5[arg0], "Missing user in compressed ready payload");
          return closure_5[arg0];
        });
      }
      delete r0.recipient_ids;
    });
  }
  let mapped;
  if (null != guilds) {
    mapped = guilds.map((unavailable) => {
      let tmp = unavailable;
      if (true !== unavailable.unavailable) {
        let tmp6;
        if (null != closure_0) {
          tmp6 = closure_0[arg1];
        }
        unavailable.members = closure_9(closure_5, tmp6);
        tmp = callback(unavailable);
        const tmp2 = closure_9;
        const tmp3 = closure_5;
      }
      return tmp;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  const tmp9 = maybeIncludeInitialGuild(identifyStartTime, guilds, (arg0) => callback(arg0));
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
export const hydrateInitialGuild = function hydrateInitialGuild(hydrateInitialGuildResult, identifyStartTime) {
  let closure_4 = { guild: hydrateInitialGuildResult, identifyTime: identifyStartTime };
  return hydratePreviouslyUnavailableGuild(hydrateInitialGuildResult);
};
export { hydratePreviouslyUnavailableGuild };
