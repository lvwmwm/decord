// Module ID: 6757
// Function ID: 52645
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1347, 1908, 6758, 5039, 3760, 1316, 1194, 5076, 1348, 6759, 4162, 3758, 4142, 1906, 4325, 662, 6760, 22, 1327, 3748, 21, 566, 686, 2]

// Module 6757 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "_superPropGet";

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
function handleReset() {
  const channelId = store2.getChannelId();
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
  let tmp3 = channelId !== channelId;
  if (!tmp3) {
    tmp3 = voiceChannelId !== voiceChannelId;
  }
  let flag = tmp3;
  if (tmp3) {
    const items = [channelId, voiceChannelId, channelId, voiceChannelId];
    const obj = importDefault(22)(items);
    const item = importDefault(22)(items).uniq().forEach((arg0) => {
      if (null != arg0) {
        const result = outer1_26.nonPositionalChannelIdUpdate(arg0);
      }
    });
    flag = true;
    const uniqResult = importDefault(22)(items).uniq();
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
let c24 = null;
let c25 = null;
importDefaultResult = new importDefaultResult();
let tmp4 = ((Store) => {
  class ChannelListStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ChannelListStore);
      obj = outer1_6(ChannelListStore);
      tmp2 = outer1_5;
      if (outer1_27()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelListStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_14, outer1_15, outer1_16, outer1_17, outer1_8, outer1_18, outer1_9, outer1_10, outer1_12, outer1_19, outer1_20, outer1_21, outer1_22, outer1_13);
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
      const guild = outer1_26.getGuild(guildId, guildActionRows, channelNoticeRows);
      return { guildChannelsVersion: guild.version, guildChannels: guild };
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildWithoutChangingGuildActionRows",
    value(arg0) {
      const guildChannelRowsOnly = outer1_26.getGuildChannelRowsOnly(arg0);
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
        const guildChannelRowsOnly = outer1_26.getGuildChannelRowsOnly(arg0);
        const categoryFromSection = guildChannelRowsOnly.getCategoryFromSection(guildChannelRowsOnly.recentsSectionNumber);
        return categoryFromSection.getShownChannelIds().length;
      }
    }
  };
  return callback(ChannelListStore, items);
})(require("initialize").Store);
tmp4.displayName = "ChannelListStore";
tmp4 = new tmp4(require("dispatcher"), {
  APPLICATION_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATION_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATION_FETCH: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_FAIL: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH_SUCCESS: handleRecomputeAllSubtitles,
  APPLICATIONS_FETCH: handleRecomputeAllSubtitles,
  BACKGROUND_SYNC: handleReset,
  BULK_ACK: function handleBulkAck(channels) {
    const _require = false;
    const mapped = importDefault(22)(channels.channels).map((channelId) => {
      const channel = outer1_16.getChannel(channelId.channelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    });
    const found = mapped.filter(_require(1327).isNotNullish);
    const arr = importDefault(22)(channels.channels);
    const item = found.uniq().forEach((arg0) => {
      if (outer1_26.clearGuildId(arg0)) {
        let c0 = true;
      }
    });
    return _require;
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
    let c0 = false;
    const mapped = importDefault(22)(channels.channels).map((guild_id) => guild_id.guild_id);
    const arr = importDefault(22)(channels.channels);
    const item = mapped.uniq().forEach((arg0) => {
      if (outer1_26.clearGuildId(arg0)) {
        let c0 = true;
      }
    });
    return c0;
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
    const embeddedActivityLocationGuildId = require(3748) /* getEmbeddedActivityLocationChannelId */.getEmbeddedActivityLocationGuildId(instance.location);
    const obj = require(3748) /* getEmbeddedActivityLocationChannelId */;
    return importDefaultResult.updateSubtitles(embeddedActivityLocationGuildId, require(3748) /* getEmbeddedActivityLocationChannelId */.getEmbeddedActivityLocationChannelId(instance.location));
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
    const item = channels.forEach((guildId) => outer1_26.clearGuildId(guildId.guildId));
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
    const item = userGuildSettings.forEach((guild_id) => outer1_26.clearGuildId(guild_id.guild_id));
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: handleRebuildGuildId,
  USER_GUILD_SETTINGS_GUILD_UPDATE: handleRebuildGuildId,
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsProtoUpdate(settings) {
    settings = settings.settings;
    let guilds;
    let importDefault;
    if (settings.type !== UserSettingsTypes.PRELOADED_USER_SETTINGS) {
      return false;
    } else {
      guilds = settings.proto.guilds;
      guilds = undefined;
      if (null != guilds) {
        guilds = guilds.guilds;
      }
      importDefault = false;
      if (null != guilds) {
        const keys = importDefault(21).keys(guilds);
        const item = keys.forEach((arg0) => {
          if (null != guilds[arg0].guildRecentsDismissedAt) {
            c1 = outer1_26.updateRecentsCategory(arg0) || c1;
            const tmp2 = outer1_26.updateRecentsCategory(arg0) || c1;
          }
        });
        const obj = importDefault(21);
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
          let tmp5 = importDefaultResult;
          if (importDefaultResult.nonPositionalChannelIdUpdate(oldChannelId)) {
            flag = true;
          }
          let addResult = set.add(oldChannelId);
          flag2 = flag;
        }
        let tmp7 = null == channelId || set.has(channelId);
        let tmp8 = flag2;
        if (!tmp7) {
          let tmp9 = importDefaultResult;
          if (importDefaultResult.nonPositionalChannelIdUpdate(channelId)) {
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
    let result = null != c24;
    if (result) {
      result = importDefaultResult.nonPositionalChannelIdUpdate(c24);
    }
    return result;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_sidebar/ChannelListStore.tsx");

export default tmp4;
