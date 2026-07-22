// Module ID: 6752
// Function ID: 52591
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6752 (_isNativeReflectConstruct)
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
function handleReset() {
  const channelId = store2.getChannelId();
  let closure_24 = channelId;
  const voiceChannelId = store2.getVoiceChannelId();
  return importDefaultResult.clear();
}
function handleGuildAction(guild) {
  return importDefaultResult.clearGuildId(guild.guild.id);
}
function handleChannelAction(channel) {
  return importDefaultResult.clearGuildId(channel.channel.guild_id);
}
function handleRebuildGuildId(guildId) {
  return importDefaultResult.clearGuildId(guildId.guildId);
}
function handleReadStateChange(channelId) {
  return importDefaultResult.nonPositionalChannelIdUpdate(channelId.channelId);
}
function handleThreadUpdate(channel) {
  return importDefaultResult.nonPositionalChannelIdUpdate(channel.channel.id);
}
function handleThreadMemberUpdate(id) {
  return importDefaultResult.nonPositionalChannelIdUpdate(id.id);
}
function handleChannelSelect() {
  const channelId = store2.getChannelId();
  const voiceChannelId = store2.getVoiceChannelId();
  let tmp3 = closure_24 !== channelId;
  if (!tmp3) {
    tmp3 = closure_25 !== voiceChannelId;
  }
  let flag = tmp3;
  if (tmp3) {
    const items = [closure_24, closure_25, channelId, voiceChannelId];
    const obj = importDefault(dependencyMap[22])(items);
    const item = importDefault(dependencyMap[22])(items).uniq().forEach((arg0) => {
      if (null != arg0) {
        const result = closure_26.nonPositionalChannelIdUpdate(arg0);
      }
    });
    closure_24 = channelId;
    closure_25 = voiceChannelId;
    flag = true;
    const uniqResult = importDefault(dependencyMap[22])(items).uniq();
  }
  return flag;
}
function handleCategoryChange(id) {
  id = id.id;
  const channel = store.getChannel(id);
  if (null == channel) {
    let clearGuildIdResult = importDefaultResult.clearGuildId(id);
  } else {
    clearGuildIdResult = importDefaultResult.clearGuildId(channel.guild_id);
  }
  return clearGuildIdResult;
}
function handleVoiceChannelsChange(guildId) {
  return importDefaultResult.clearGuildId(guildId.guildId);
}
function handleRecomputeAllSubtitles() {
  return importDefaultResult.updateSubtitles();
}
function handleGuildScheduledEventUpdate(guildScheduledEvent) {
  return importDefaultResult.updateSubtitles(guildScheduledEvent.guildScheduledEvent.guild_id);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
let closure_21 = importDefault(dependencyMap[18]);
let closure_22 = importDefault(dependencyMap[19]);
const UserSettingsTypes = arg1(dependencyMap[20]).UserSettingsTypes;
let closure_24 = null;
let closure_25 = null;
let importDefaultResult = importDefault(dependencyMap[21]);
importDefaultResult = new importDefaultResult();
let tmp4 = (Store) => {
  class ChannelListStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ChannelListStore);
      obj = closure_6(ChannelListStore);
      tmp2 = closure_5;
      if (closure_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ChannelListStore;
  callback3(ChannelListStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_14, closure_15, closure_16, closure_17, closure_8, closure_18, closure_9, closure_10, closure_12, closure_19, closure_20, closure_21, closure_22, closure_13);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getGuild",
    value(guildId, guildActionRows) {
      guildActionRows = undefined;
      if (null != guildActionRows) {
        guildActionRows = guildActionRows.guildActionRows;
      }
      if (null == guildActionRows) {
        guildActionRows = [];
      }
      let channelNoticeRows;
      if (null != guildActionRows) {
        channelNoticeRows = guildActionRows.channelNoticeRows;
      }
      if (null == channelNoticeRows) {
        channelNoticeRows = [];
      }
      const guild = store.getGuild(guildId, guildActionRows, channelNoticeRows);
      return { guildChannelsVersion: guild.version, guildChannels: guild };
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildWithoutChangingGuildActionRows",
    value(arg0) {
      const guildChannelRowsOnly = store.getGuildChannelRowsOnly(arg0);
      return { guildChannelsVersion: guildChannelRowsOnly.version, guildChannels: guildChannelRowsOnly };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "recentsChannelCount",
    value(arg0) {
      if (null == arg0) {
        return 0;
      } else {
        const guildChannelRowsOnly = store.getGuildChannelRowsOnly(arg0);
        const categoryFromSection = guildChannelRowsOnly.getCategoryFromSection(guildChannelRowsOnly.recentsSectionNumber);
        return categoryFromSection.getShownChannelIds().length;
      }
    }
  };
  return callback2(ChannelListStore, items);
}(importDefault(dependencyMap[26]).Store);
tmp4.displayName = "ChannelListStore";
tmp4 = new tmp4(importDefault(dependencyMap[27]), {
  APPLICATION_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATION_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATION_FETCH: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH: handleRecomputeAllSubtitles,
  BACKGROUND_SYNC: handleReset,
  BULK_ACK: function handleBulkAck(channels) {
    const callback = false;
    const mapped = importDefault(dependencyMap[22])(channels.channels).map((channelId) => {
      const channel = channel.getChannel(channelId.channelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    });
    const found = mapped.filter(callback(dependencyMap[23]).isNotNullish);
    const arr = importDefault(dependencyMap[22])(channels.channels);
    const item = found.uniq().forEach((arg0) => {
      if (closure_26.clearGuildId(arg0)) {
        let closure_0 = true;
      }
    });
    return callback;
  },
  BULK_CLEAR_RECENTS: handleRebuildGuildId,
  CACHE_LOADED_LAZY: handleReset,
  CATEGORY_COLLAPSE_ALL: handleRebuildGuildId,
  CATEGORY_COLLAPSE: handleCategoryChange,
  CATEGORY_EXPAND_ALL: handleRebuildGuildId,
  CATEGORY_EXPAND: handleCategoryChange,
  CHANNEL_ACK: handleReadStateChange,
  CHANNEL_COLLAPSE: function handleChannelCollapse(channelId) {
    const channel = store.getChannel(channelId.channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return importDefaultResult.clearGuildId(guild_id);
  },
  CHANNEL_CREATE: handleChannelAction,
  CHANNEL_DELETE: handleChannelAction,
  CHANNEL_LOCAL_ACK: handleReadStateChange,
  CHANNEL_MUTE_EXPIRED: handleRebuildGuildId,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: handleReadStateChange,
  CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_INFO: function handleChannelInfo(guildId) {
    return importDefaultResult.clearGuildId(guildId.guildId);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let closure_0 = false;
    const mapped = importDefault(dependencyMap[22])(channels.channels).map((guild_id) => guild_id.guild_id);
    const arr = importDefault(dependencyMap[22])(channels.channels);
    const item = mapped.uniq().forEach((arg0) => {
      if (closure_26.clearGuildId(arg0)) {
        let closure_0 = true;
      }
    });
    return closure_0;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleRecomputeAllSubtitles,
  CONNECTION_OPEN: handleReset,
  CURRENT_USER_UPDATE: handleReset,
  DECAY_READ_STATES: handleReset,
  DEV_TOOLS_DESIGN_TOGGLE_SET: handleReset,
  DISABLE_AUTOMATIC_ACK: handleReadStateChange,
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(channelId) {
    return importDefaultResult.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    const embeddedActivityLocationGuildId = arg1(dependencyMap[24]).getEmbeddedActivityLocationGuildId(instance.location);
    const obj = arg1(dependencyMap[24]);
    return importDefaultResult.updateSubtitles(embeddedActivityLocationGuildId, arg1(dependencyMap[24]).getEmbeddedActivityLocationChannelId(instance.location));
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart() {
    handleRecomputeAllSubtitles();
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: handleRecomputeAllSubtitles,
  ENABLE_AUTOMATIC_ACK: handleReadStateChange,
  FETCH_GUILD_EVENTS_FOR_GUILD: function handleFetchGuildEventsForGuild(guildId) {
    return importDefaultResult.updateSubtitles(guildId.guildId);
  },
  GAMES_DATABASE_FETCH_FAIL: handleRecomputeAllSubtitles,
  GAMES_DATABASE_FETCH: handleRecomputeAllSubtitles,
  GAMES_DATABASE_UPDATE: handleRecomputeAllSubtitles,
  GUILD_APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  GUILD_CREATE: handleGuildAction,
  GUILD_DELETE: handleGuildAction,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    let guildId;
    let user;
    ({ guildId, user } = arg0);
    let clearGuildIdResult = id.getId() === user.id;
    if (clearGuildIdResult) {
      clearGuildIdResult = importDefaultResult.clearGuildId(guildId);
    }
    return clearGuildIdResult;
  },
  GUILD_MUTE_EXPIRED: handleRebuildGuildId,
  GUILD_ROLE_CREATE: handleRebuildGuildId,
  GUILD_ROLE_DELETE: handleRebuildGuildId,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: handleRebuildGuildId,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: handleRebuildGuildId,
  GUILD_ROLE_UPDATE: handleRebuildGuildId,
  GUILD_SCHEDULED_EVENT_CREATE: handleGuildScheduledEventUpdate,
  GUILD_SCHEDULED_EVENT_DELETE: handleGuildScheduledEventUpdate,
  GUILD_SCHEDULED_EVENT_UPDATE: handleGuildScheduledEventUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: handleRebuildGuildId,
  GUILD_UPDATE: handleGuildAction,
  IMPERSONATE_STOP: handleRebuildGuildId,
  IMPERSONATE_UPDATE: handleRebuildGuildId,
  LOAD_CHANNELS: function handleLoadChannels(channels) {
    channels = channels.channels;
    const item = channels.forEach((guildId) => closure_26.clearGuildId(guildId.guildId));
  },
  LOAD_MESSAGES_SUCCESS: handleReadStateChange,
  MESSAGE_ACK: handleReadStateChange,
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    return importDefaultResult.nonPositionalChannelIdUpdate(channelId.channelId);
  },
  MESSAGE_DELETE_BULK: handleReadStateChange,
  MESSAGE_DELETE: handleReadStateChange,
  NOTIFICATION_SETTINGS_UPDATE: handleReset,
  OVERLAY_INITIALIZE: handleReset,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    return importDefaultResult.clearGuildId(guildId.guildId);
  },
  RECOMPUTE_READ_STATES: handleReset,
  RESORT_THREADS: handleReadStateChange,
  SET_RECENTLY_ACTIVE_COLLAPSED: handleReset,
  THREAD_CREATE: handleThreadUpdate,
  THREAD_DELETE: function handleThreadDelete(channel) {
    return importDefaultResult.nonPositionalChannelUpdate(channel.channel);
  },
  THREAD_LIST_SYNC: handleRebuildGuildId,
  THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  THREAD_MEMBERS_UPDATE: handleThreadMemberUpdate,
  THREAD_UPDATE: handleThreadUpdate,
  TRY_ACK: handleReadStateChange,
  UPDATE_CHANNEL_DIMENSIONS: handleReadStateChange,
  UPDATE_CHANNEL_LIST_SUBTITLES: function handleUpdateSubtitles(guildId) {
    importDefaultResult.updateSubtitles(guildId.guildId);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: handleRebuildGuildId,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => closure_26.clearGuildId(guild_id.guild_id));
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_GUILD_UPDATE: handleRebuildGuildId,
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsProtoUpdate(settings) {
    settings = settings.settings;
    let arg1;
    let importDefault;
    if (settings.type !== UserSettingsTypes.PRELOADED_USER_SETTINGS) {
      return false;
    } else {
      let guilds = settings.proto.guilds;
      guilds = undefined;
      if (null != guilds) {
        guilds = guilds.guilds;
      }
      arg1 = guilds;
      importDefault = false;
      if (null != guilds) {
        const keys = importDefault(dependencyMap[25]).keys(guilds);
        const item = keys.forEach((arg0) => {
          if (null != guilds[arg0].guildRecentsDismissedAt) {
            closure_1 = closure_26.updateRecentsCategory(arg0) || closure_1;
            const tmp2 = closure_26.updateRecentsCategory(arg0) || closure_1;
          }
        });
        const obj = importDefault(dependencyMap[25]);
      }
      return importDefault;
    }
  },
  VOICE_CATEGORY_COLLAPSE: handleVoiceChannelsChange,
  VOICE_CATEGORY_EXPAND: handleVoiceChannelsChange,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(id) {
    return importDefaultResult.nonPositionalChannelIdUpdate(id.id);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let channelId;
    let iter3;
    let oldChannelId;
    const tmp = handleChannelSelect();
    const set = new Set();
    const tmp2 = _createForOfIteratorHelperLoose(voiceStates.voiceStates);
    const iter = tmp2();
    let iter2 = iter;
    let flag = tmp;
    let tmp3 = tmp;
    if (!iter.done) {
      do {
        ({ channelId, oldChannelId } = iter2.value);
        let tmp4 = null == oldChannelId || set.has(oldChannelId);
        let flag2 = flag;
        if (!tmp4) {
          let tmp5 = closure_26;
          if (closure_26.nonPositionalChannelIdUpdate(oldChannelId)) {
            flag = true;
          }
          let addResult = set.add(oldChannelId);
          flag2 = flag;
        }
        let tmp7 = null == channelId || set.has(channelId);
        let tmp8 = flag2;
        if (!tmp7) {
          let tmp9 = closure_26;
          if (closure_26.nonPositionalChannelIdUpdate(channelId)) {
            flag2 = true;
          }
          let addResult1 = set.add(channelId);
          tmp8 = flag2;
        }
        iter3 = tmp2();
        flag = tmp8;
        iter2 = iter3;
        tmp3 = tmp8;
      } while (!iter3.done);
    }
    return tmp3;
  },
  WINDOW_FOCUS: function handleCurrentChannelReadStateChange() {
    let result = null != closure_24;
    if (result) {
      result = importDefaultResult.nonPositionalChannelIdUpdate(closure_24);
    }
    return result;
  }
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_sidebar/ChannelListStore.tsx");

export default tmp4;
