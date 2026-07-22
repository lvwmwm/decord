// Module ID: 4320
// Function ID: 37849
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: collectChannelAnalyticsMetadataFromId, collectVoiceAnalyticsMetadata, getChannelOpenedMetadata, getCustomStatusMetadata, trackWithMetadata

// Module 4320 (_createForOfIteratorHelperLoose)
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
function countKeys(voiceStates) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      num = num + 1;
      // continue
    }
  }
  return num2;
}
function collectGuildAnalyticsMetadata(guildId) {
  if (null == guildId) {
    return null;
  } else {
    const guild = store2.getGuild(guildId);
    if (null == guild) {
      return null;
    } else {
      const numRoles = numRoles.getNumRoles(guild.id);
      const member = member.getMember(guildId, id.getId());
      const channels = channels.getChannels(guildId);
      const obj = { guild_id: guild.id };
      const voiceStates = store4.getVoiceStates(guildId);
      obj.guild_size_total = memberCount.getMemberCount(guildId);
      obj.guild_num_channels = channels[closure_7].length + channels[closure_8].length;
      obj.guild_num_text_channels = channels[closure_7].length;
      obj.guild_num_voice_channels = channels[closure_8].length;
      obj.guild_num_roles = numRoles;
      let num = 0;
      if (null != member) {
        num = member.roles.length;
      }
      obj.guild_member_num_roles = num;
      let NONE = store3.getGuildPermissions(guild);
      if (null == NONE) {
        NONE = importAll(dependencyMap[21]).NONE;
      }
      obj.guild_member_perms = String(NONE);
      const features = guild.features;
      obj.guild_is_vip = features.has(constants.VIP_REGIONS);
      obj.is_member = null != member;
      obj.num_voice_channels_active = countKeys(voiceStates);
      return obj;
    }
  }
}
function collectStaticChannelRouteAnalyticsMetadata(arg0, channel_id) {
  return { channel_static_route: channel_id, channel_hidden: false };
}
function collectChannelAnalyticsMetadata(channel) {
  function isHidden(channel) {
    if (null == guildId) {
      return false;
    } else if (null == channel) {
      return false;
    } else {
      let hasItem = null != tmp2;
      if (hasItem) {
        hasItem = callback(closure_3[22]).has(tmp2.deny, constants.VIEW_CHANNEL);
        const obj = callback(closure_3[22]);
      }
      return hasItem;
    }
  }
  if (null == channel) {
    return null;
  } else {
    const guildId = channel.getGuildId();
    const require = guildId;
    if (null == guildId) {
      const obj = {};
      ({ id: obj.channel_id, type: obj.channel_type } = channel);
      let num = 0;
      if (channel.isPrivate()) {
        num = channel.recipients.length;
      }
      obj.channel_size_total = num;
      if (null == guildId) {
        let NONE = importAll(dependencyMap[21]).NONE;
      } else {
        NONE = store3.getChannelPermissions(channel);
      }
      obj.channel_member_perms = String(NONE);
      obj.channel_hidden = false;
      return obj;
    } else {
      if (!THREAD_CHANNEL_TYPES.has(channel.type)) {
        let isHiddenResult = isHidden(channel);
      }
      isHiddenResult = isHidden(store.getChannel(channel.parent_id));
    }
  }
}
function trackWithMetadata(TEXT_AREA_CTA_CLICKED, trackWithMetadataResult, hasItem) {
  let obj = trackWithMetadataResult;
  let flag = hasItem;
  if (trackWithMetadataResult === undefined) {
    obj = {};
  }
  if (flag === undefined) {
    flag = false;
  }
  let num = 24;
  if (!obj2.isThrottled(TEXT_AREA_CTA_CLICKED)) {
    let tmp2 = !tmp;
    if ("location" in obj) {
      tmp2 = obj.location !== constants2.GUILD_CREATE_INVITE_SUGGESTION;
    }
    if ("guild_id" in obj) {
      let guild_id = obj.guild_id;
    } else {
      guild_id = null;
      if (tmp2) {
        guild_id = guildId.getGuildId();
      }
    }
    if ("channel_id" in obj) {
      let channel_id = obj.channel_id;
    } else {
      channel_id = null;
      if (tmp2) {
        channel_id = channelId.getChannelId(guild_id);
      }
    }
    const channel = store.getChannel(channel_id);
    if (null == channel) {
      let tmp15 = null;
      if (null != guild_id) {
        tmp15 = guild_id;
      }
      let tmp11 = tmp15;
    } else {
      tmp11 = null;
      if (!channel.isPrivate()) {
        const guildId = channel.getGuildId();
        let tmp13 = guild_id;
        if (null != guildId) {
          tmp13 = guildId;
        }
        let tmp14 = null;
        if (null != tmp13) {
          tmp14 = tmp13;
        }
        tmp11 = tmp14;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(collectGuildAnalyticsMetadata(tmp11));
    if (null != guild_id) {
      if (null != channel_id) {
        const merged2 = Object.assign(tmp24);
        num = importDefault(dependencyMap[num]);
        obj = { flush: flag };
        num.track(TEXT_AREA_CTA_CLICKED, obj, obj);
      }
      let tmp24 = collectStaticChannelRouteAnalyticsMetadata(0, channel_id);
    }
    tmp24 = collectChannelAnalyticsMetadata(channel);
  }
}
function getRecipientFriendCounts(recipients) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(recipients);
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  let num2 = 0;
  if (!iter.done) {
    do {
      let tmp2 = closure_19;
      let sum = num;
      if (closure_19.isFriend(iter2.value)) {
        sum = num + 1;
      }
      iter3 = tmp();
      num = sum;
      iter2 = iter3;
      num2 = sum;
    } while (!iter3.done);
  }
  const obj = { friendCount: num2, nonFriendCount: recipients.length - num2 };
  return obj;
}
function getVoiceStateMetadata(guildId, channelId, videoEnabled) {
  const require = channelId;
  const obj = { marginLeft: "%FunctionPrototype%", marginRight: "paddingStart", video_enabled: videoEnabled };
  const importDefault = obj;
  const tmp = importDefault(dependencyMap[28]);
  const found = importDefault(dependencyMap[28])(store4.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === arg1);
  const found1 = found.filter((userId) => userId.userId !== id.getId());
  const item = found1.forEach((selfVideo) => {
    obj.voice_state_count = obj.voice_state_count + 1;
    if (tmp) {
      obj.video_stream_count = obj.video_stream_count + 1;
    }
  });
  return obj;
}
const THREAD_CHANNEL_TYPES = require(dependencyMap[0]).THREAD_CHANNEL_TYPES;
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_7, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = _module);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = importDefault(dependencyMap[10]);
let closure_17 = importDefault(dependencyMap[11]);
let closure_18 = importDefault(dependencyMap[12]);
let closure_19 = importDefault(dependencyMap[13]);
let closure_20 = importDefault(dependencyMap[14]);
let closure_21 = importDefault(dependencyMap[15]);
let closure_22 = importDefault(dependencyMap[16]);
let closure_23 = importDefault(dependencyMap[17]);
let closure_24 = importDefault(dependencyMap[18]);
const _module1 = require(dependencyMap[19]);
({ GuildFeatures: closure_25, AnalyticsLocations: closure_26, Permissions: closure_27, ActivityTypes: closure_28 } = _module1);
const isStaticChannelRoute = require(dependencyMap[20]).isStaticChannelRoute;
const _module2 = require(dependencyMap[29]);
const result = _module2.fileFinishedImporting("modules/app_analytics/AppAnalyticsUtils.tsx");

export default { trackWithMetadata, getVoiceStateMetadata };
export { collectGuildAnalyticsMetadata };
export { collectStaticChannelRouteAnalyticsMetadata };
export const collectChannelAnalyticsMetadataFromId = function collectChannelAnalyticsMetadataFromId(channelId) {
  if (null == channelId) {
    return null;
  } else {
    const channel = store.getChannel(channelId);
    let tmp3 = null;
    if (null != channel) {
      tmp3 = collectChannelAnalyticsMetadata(channel);
    }
    return tmp3;
  }
};
export { collectChannelAnalyticsMetadata };
export const collectVoiceAnalyticsMetadata = function collectVoiceAnalyticsMetadata(id) {
  if (null == id) {
    return null;
  } else {
    const channel = store.getChannel(id);
    if (null == channel) {
      return null;
    } else {
      const obj = {};
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const mediaSessionId = mediaSessionId.getMediaSessionId();
      obj.guild_id = channel.getGuildId();
      obj.media_session_id = mediaSessionId;
      const merged = Object.assign(getVoiceStateMetadata(channel.getGuildId(), channel.id, videoEnabled.isVideoEnabled()));
      const isVideoEnabledResult = videoEnabled.isVideoEnabled();
      const merged1 = Object.assign(require(dependencyMap[23]).getVoiceAnalyticsMetadataAdditional());
      return obj;
    }
  }
};
export { trackWithMetadata };
export const getChannelOpenedMetadata = function getChannelOpenedMetadata(selectedChannelId) {
  if (isStaticChannelRoute(selectedChannelId)) {
    let obj = { channel_static_route: selectedChannelId };
    return obj;
  } else {
    const channel = store.getChannel(selectedChannelId);
    if (null == channel) {
      obj = { channel_id: selectedChannelId };
      return obj;
    } else {
      const guild = store2.getGuild(channel.guild_id);
      if (null == guild) {
        let flag = false;
        if (channel.isDM()) {
          const user = user.getUser(channel.recipients[0]);
          flag = false;
          if (null != user) {
            flag = user.bot;
          }
        }
        if (channel.isDM()) {
          let tmp5 = getRecipientFriendCounts(channel.recipients);
        } else {
          tmp5 = null;
        }
        const obj1 = { channel_id: selectedChannelId, is_app_dm: flag };
        let tmp7 = null;
        if (null != tmp5) {
          ({ friendCount: obj3.friend_recipient_count, nonFriendCount: obj3.non_friend_recipient_count } = tmp5);
          tmp7 = {};
          const obj2 = {};
        }
        const merged = Object.assign(tmp7);
        return obj1;
      } else {
        const snapshot = snapshot.getSnapshot(selectedChannelId, 10 * importDefault(dependencyMap[25]).Millis.SECOND);
        const obj3 = { channel_id: selectedChannelId };
        ({ unread: obj6.channel_was_unread, mentionCount: obj6.channel_mention_count } = snapshot);
        obj3.channel_is_muted = closure_22.isChannelMuted(channel.guild_id, channel.id);
        obj3.channel_is_nsfw = channel.isNSFW();
        obj3.channel_is_spoiler = channel.isSpoilerChannel();
        obj3.channel_resolved_unread_setting = closure_22.resolveUnreadSetting(channel);
        const unreadSetting = closure_22.resolveUnreadSetting(channel);
        obj3.channel_preset = require(dependencyMap[26]).presetFromSettings(unreadSetting, closure_22.resolvedMessageNotifications(channel));
        obj3.guild_id = channel.guild_id;
        ({ guildUnread: obj6.guild_was_unread, guildMentionCount: obj6.guild_mention_count } = snapshot);
        obj3.guild_is_muted = closure_22.isMuted(channel.guild_id);
        obj3.guild_resolved_unread_setting = closure_22.resolveGuildUnreadSetting(guild);
        const obj7 = require(dependencyMap[26]);
        const guildUnreadSetting = closure_22.resolveGuildUnreadSetting(guild);
        obj3.guild_preset = require(dependencyMap[26]).presetFromSettings(guildUnreadSetting, closure_22.getMessageNotifications(channel.guild_id));
        ({ parent_id: obj6.parent_id, parentChannelThreadType: obj6.parent_channel_type } = channel);
        const obj8 = require(dependencyMap[26]);
        obj3.has_pending_member_action = require(dependencyMap[27]).hasPendingMemberAction(channel.guild_id, selectedChannelId);
        obj3.can_send_message = store3.can(constants3.SEND_MESSAGES, channel);
        obj3.is_app_dm = false;
        return obj3;
      }
    }
  }
};
export { getRecipientFriendCounts };
export { getVoiceStateMetadata };
export const getCustomStatusMetadata = function getCustomStatusMetadata(guildId) {
  const require = arg1;
  const obj = { custom_status_count: 0 };
  const importDefault = obj;
  const tmp = importDefault(dependencyMap[28]);
  const item = importDefault(dependencyMap[28])(store4.getVoiceStates(guildId)).forEach((channelId) => {
    let tmp = channelId.channelId === arg1;
    if (tmp) {
      tmp = null != closure_16.findActivity(channelId.userId, (type) => type.type === constants.CUSTOM_STATUS);
    }
    if (tmp) {
      obj.custom_status_count = obj.custom_status_count + 1;
    }
  });
  return obj;
};
