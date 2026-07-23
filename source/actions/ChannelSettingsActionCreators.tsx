// Module ID: 7596
// Function ID: 60790
// Name: init
// Dependencies: [5, 7597, 1348, 653, 686, 3982, 7007, 507, 5717, 2]
// Exports: deleteChannel, open, removeLinkedLobby, saveChannel, selectPermissionOverwrite, setSection, updateChannel, updateVoiceChannelStatus

// Module 7596 (init)
import getRootNavigationRef from "getRootNavigationRef";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let Layers;
let closure_6;
let closure_7;
const require = arg1;
function init(channelId, location, subsection) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
  obj.dispatch(obj);
}
function open(channelId) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      init(channelId, arg1, arg2);
      let OVERVIEW = section.getSection();
      if (null == OVERVIEW) {
        OVERVIEW = constants.OVERVIEW;
      }
      obj = { channelId, initialRouteName: OVERVIEW, source: "channel-settings-action-creators-open" };
      rootNavigationRef.navigate("sidebar", obj);
    }
  }
}
function close() {
  importDefault(686).dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function setSection(section) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_SETTINGS_SET_SECTION", section };
  obj.dispatch(obj);
}
function selectPermissionOverwrite(overwriteId) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId };
  obj.dispatch(obj);
}
function updateChannel(arg0) {
  let autoArchiveDuration;
  let availableTags;
  let bitrate;
  let defaultAutoArchiveDuration;
  let defaultForumLayout;
  let defaultReactionEmoji;
  let defaultSortOrder;
  let defaultTagSetting;
  let defaultThreadRateLimitPerUser;
  let flags;
  let iconEmoji;
  let invitable;
  let locked;
  let name;
  let nsfw;
  let rateLimitPerUser;
  let rtcRegion;
  let template;
  let themeColor;
  let topic;
  let type;
  let userLimit;
  let videoQualityMode;
  ({ name, type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor } = arg0);
  importDefault(686).dispatch({ type: "CHANNEL_SETTINGS_UPDATE", name, channelType: type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor });
}
function saveChannel(id, arg1) {
  return _saveChannel(...arguments);
}
async function _saveChannel(arg0, arg1, arg2) {
  let iter = (function*(channelId) {
    let autoArchiveDuration;
    let availableTags;
    let bitrate;
    let defaultAutoArchiveDuration;
    let defaultForumLayout;
    let defaultReactionEmoji;
    let defaultSortOrder;
    let defaultTagSetting;
    let defaultThreadRateLimitPerUser;
    let flags;
    let iconEmoji;
    let invitable;
    let locked;
    let name;
    let nsfw;
    let permissionOverwrites;
    let position;
    let rateLimitPerUser;
    let rtcRegion;
    let template;
    let themeColor;
    let topic;
    let type;
    let userLimit;
    let videoQualityMode;
    let closure_0 = channelId;
    ({ defaultReactionEmoji, availableTags, iconEmoji } = arg1);
    let channel;
    ({ name, type, position, topic, bitrate, userLimit, nsfw, flags, permissionOverwrites, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, defaultSortOrder, defaultForumLayout, defaultTagSetting, themeColor } = arg1);
    yield undefined;
    channel = outer2_5.getChannel(channelId);
    let obj = outer2_1(outer2_2[4]);
    obj.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" });
    let obj1 = outer2_1(outer2_2[6]);
    yield obj1.unarchiveThreadIfNecessary(channelId);
    const HTTP = outer2_0(outer2_2[7]).HTTP;
    obj = { url: outer2_6.CHANNEL(channelId) };
    obj = { name, type, position, topic, bitrate, user_limit: userLimit, nsfw, flags, permission_overwrites: permissionOverwrites, rate_limit_per_user: rateLimitPerUser, default_thread_rate_limit_per_user: defaultThreadRateLimitPerUser, default_auto_archive_duration: defaultAutoArchiveDuration, template, rtc_region: rtcRegion, video_quality_mode: videoQualityMode, auto_archive_duration: autoArchiveDuration, locked, invitable };
    if (null != defaultReactionEmoji) {
      obj1 = {};
      let emojiId;
      if (null != defaultReactionEmoji) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      obj1.emoji_id = emojiId;
      let emojiName;
      if (null != defaultReactionEmoji) {
        emojiName = defaultReactionEmoji.emojiName;
      }
      obj1.emoji_name = emojiName;
      let tmp4 = obj1;
    } else if (null === defaultReactionEmoji) {
      tmp4 = null;
    }
    obj.default_reaction_emoji = tmp4;
    let mapped;
    if (null != availableTags) {
      mapped = availableTags.map((id) => ({ id: id.id, name: id.name, emoji_id: id.emojiId, emoji_name: id.emojiName, moderated: id.moderated }));
    }
    obj.available_tags = mapped;
    obj.default_sort_order = defaultSortOrder;
    obj.default_forum_layout = defaultForumLayout;
    obj.default_tag_setting = defaultTagSetting;
    if (null != iconEmoji) {
      ({ id: obj6.id, name: obj6.name } = iconEmoji);
      let tmp8 = {};
      const obj2 = {};
    } else if (null === iconEmoji) {
      tmp8 = null;
    }
    obj.icon_emoji = tmp8;
    obj.theme_color = themeColor;
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = outer2_0(outer2_2[7]).rejectWithMigratedError();
    const obj7 = outer2_0(outer2_2[7]);
    return HTTP.patch(obj).then((arg0) => {
      let obj = outer3_1(outer3_2[4]);
      obj = { type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: closure_0 };
      obj.dispatch(obj);
      let guildId;
      if (null != closure_1) {
        guildId = closure_1.getGuildId();
      }
      let tmp4 = null == guildId;
      if (!tmp4) {
        let isThreadResult = null != closure_1;
        if (isThreadResult) {
          isThreadResult = closure_1.isThread();
        }
        tmp4 = isThreadResult;
      }
      if (!tmp4) {
        const result = outer3_1(outer3_2[8]).checkGuildTemplateDirty(guildId);
        const obj3 = outer3_1(outer3_2[8]);
      }
      return arg0;
    }, (body) => {
      let obj = outer3_1(outer3_2[4]);
      obj = { type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      return body;
    });
  })();
  iter.next();
  return iter;
}
function deleteChannel() {
  return _deleteChannel(...arguments);
}
async function _deleteChannel(arg0, arg1) {
  const channel = outer2_5.getChannel(arg0);
  const HTTP = outer2_0(outer2_2[7]).HTTP;
  const obj = { url: outer2_6.CHANNEL(arg0), oldFormErrors: true, rejectWithError: true };
  yield HTTP.del(obj);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let tmp3 = null == guildId;
  if (!tmp3) {
    tmp3 = null != channel && channel.isThread();
    const tmp4 = null != channel && channel.isThread();
  }
  if (!tmp3) {
    const result = outer2_1(outer2_2[8]).checkGuildTemplateDirty(guildId);
    const obj3 = outer2_1(outer2_2[8]);
  }
  outer2_9();
}
function updateVoiceChannelStatus(arg0, status) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_6.UPDATE_VOICE_CHANNEL_STATUS(arg0), body: obj };
  obj = { status, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.put(obj);
}
function removeLinkedLobby(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.del({ url: closure_6.CHANNEL_LINKED_LOBBY(arg0), rejectWithError: true });
}
({ Endpoints: closure_6, Layers, ChannelSettingsSections: closure_7 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/ChannelSettingsActionCreators.tsx");

export default { init, open, close, setSection, selectPermissionOverwrite, updateChannel, saveChannel, deleteChannel, updateVoiceChannelStatus, removeLinkedLobby };
export { init };
export { open };
export { close };
export { setSection };
export { selectPermissionOverwrite };
export { updateChannel };
export { saveChannel };
export { deleteChannel };
export { updateVoiceChannelStatus };
export { removeLinkedLobby };
