// Module ID: 4324
// Function ID: 37881
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1352, 1194, 1348, 1907, 4051, 1917, 1910, 1838, 4177, 3758, 4217, 4202, 4142, 3767, 1906, 3947, 4325, 1849, 4146, 653, 1355, 3763, 483, 4327, 675, 664, 4328, 4332, 22, 2]
// Exports: collectChannelAnalyticsMetadataFromId, collectVoiceAnalyticsMetadata, getChannelOpenedMetadata, getCustomStatusMetadata, trackWithMetadata

// Module 4324 (_createForOfIteratorHelperLoose)
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";

let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_7;
let closure_8;
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
function countKeys(voiceStates) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      num = num + 1;
      continue;
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
      numRoles = numRoles.getNumRoles(guild.id);
      member = member.getMember(guildId, id.getId());
      channels = channels.getChannels(guildId);
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
        NONE = importAll(3763).NONE;
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
        hasItem = outer1_2(outer1_3[22]).has(tmp2.deny, outer1_27.VIEW_CHANNEL);
        const obj = outer1_2(outer1_3[22]);
      }
      return hasItem;
    }
  }
  if (null == channel) {
    return null;
  } else {
    const guildId = channel.getGuildId();
    if (null == guildId) {
      let obj = {};
      ({ id: obj.channel_id, type: obj.channel_type } = channel);
      let num = 0;
      if (channel.isPrivate()) {
        num = channel.recipients.length;
      }
      obj.channel_size_total = num;
      if (null == guildId) {
        let NONE = importAll(3763).NONE;
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
        guildId = channel.getGuildId();
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
      tmp24 = collectStaticChannelRouteAnalyticsMetadata(0, channel_id);
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
      let tmp2 = friend;
      let sum = num;
      if (friend.isFriend(iter2.value)) {
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
  let closure_0 = channelId;
  const obj = { voice_state_count: 0, video_stream_count: 0, video_enabled: videoEnabled };
  const tmp = obj(22);
  const found = obj(22)(store4.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === closure_0);
  const found1 = found.filter((userId) => userId.userId !== outer1_5.getId());
  const item = found1.forEach((selfVideo) => {
    obj.voice_state_count = obj.voice_state_count + 1;
    if (tmp) {
      obj.video_stream_count = obj.video_stream_count + 1;
    }
  });
  return obj;
}
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_7, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = _isNativeReflectConstruct);
({ GuildFeatures: closure_25, AnalyticsLocations: closure_26, Permissions: closure_27, ActivityTypes: closure_28 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_analytics/AppAnalyticsUtils.tsx");

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
      mediaSessionId = mediaSessionId.getMediaSessionId();
      obj.guild_id = channel.getGuildId();
      obj.media_session_id = mediaSessionId;
      const merged = Object.assign(getVoiceStateMetadata(channel.getGuildId(), channel.id, videoEnabled.isVideoEnabled()));
      const isVideoEnabledResult = videoEnabled.isVideoEnabled();
      const merged1 = Object.assign(require(4327) /* getVoiceAnalyticsMetadataAdditional */.getVoiceAnalyticsMetadataAdditional());
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
          user = user.getUser(channel.recipients[0]);
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
        snapshot = snapshot.getSnapshot(selectedChannelId, 10 * importDefault(664).Millis.SECOND);
        const obj3 = { channel_id: selectedChannelId };
        ({ unread: obj6.channel_was_unread, mentionCount: obj6.channel_mention_count } = snapshot);
        obj3.channel_is_muted = closure_22.isChannelMuted(channel.guild_id, channel.id);
        obj3.channel_is_nsfw = channel.isNSFW();
        obj3.channel_is_spoiler = channel.isSpoilerChannel();
        obj3.channel_resolved_unread_setting = closure_22.resolveUnreadSetting(channel);
        const unreadSetting = closure_22.resolveUnreadSetting(channel);
        obj3.channel_preset = require(4328) /* Presets */.presetFromSettings(unreadSetting, closure_22.resolvedMessageNotifications(channel));
        obj3.guild_id = channel.guild_id;
        ({ guildUnread: obj6.guild_was_unread, guildMentionCount: obj6.guild_mention_count } = snapshot);
        obj3.guild_is_muted = closure_22.isMuted(channel.guild_id);
        obj3.guild_resolved_unread_setting = closure_22.resolveGuildUnreadSetting(guild);
        const obj7 = require(4328) /* Presets */;
        const guildUnreadSetting = closure_22.resolveGuildUnreadSetting(guild);
        obj3.guild_preset = require(4328) /* Presets */.presetFromSettings(guildUnreadSetting, closure_22.getMessageNotifications(channel.guild_id));
        ({ parent_id: obj6.parent_id, parentChannelThreadType: obj6.parent_channel_type } = channel);
        const obj8 = require(4328) /* Presets */;
        obj3.has_pending_member_action = require(4332) /* hasPendingMemberAction */.hasPendingMemberAction(channel.guild_id, selectedChannelId);
        obj3.can_send_message = store3.can(constants3.SEND_MESSAGES, channel);
        obj3.is_app_dm = false;
        return obj3;
      }
    }
  }
};
export { getRecipientFriendCounts };
export { getVoiceStateMetadata };
export const getCustomStatusMetadata = function getCustomStatusMetadata(closure_0) {
  closure_0 = arg1;
  const obj = { custom_status_count: 0 };
  let tmp = obj(22);
  const item = obj(22)(store4.getVoiceStates(closure_0)).forEach((channelId) => {
    let tmp = channelId.channelId === closure_0;
    if (tmp) {
      tmp = null != outer1_16.findActivity(channelId.userId, (type) => type.type === outer2_28.CUSTOM_STATUS);
    }
    if (tmp) {
      obj.custom_status_count = obj.custom_status_count + 1;
    }
  });
  return obj;
};
