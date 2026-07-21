// Module ID: 7590
// Function ID: 60743
// Name: init
// Dependencies: []
// Exports: deleteChannel, open, removeLinkedLobby, saveChannel, selectPermissionOverwrite, setSection, updateChannel, updateVoiceChannelStatus

// Module 7590 (init)
let Layers;
function init(channelId, location, subsection) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
  obj.dispatch(obj);
}
function open(channelId) {
  let obj = arg1(dependencyMap[5]);
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
  importDefault(dependencyMap[4]).dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function setSection(section) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "CHANNEL_SETTINGS_SET_SECTION", section };
  obj.dispatch(obj);
}
function selectPermissionOverwrite(overwriteId) {
  let obj = importDefault(dependencyMap[4]);
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
  importDefault(dependencyMap[4]).dispatch({ type: "CHANNEL_SETTINGS_UPDATE", name, channelType: type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor });
}
function saveChannel(id, arg1) {
  return _saveChannel(...arguments);
}
async function _saveChannel(arg0, arg1, arg2) {
  const fn = function*(channelId) {
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
    ({ defaultReactionEmoji, availableTags, iconEmoji } = arg1);
    let callback;
    ({ name, type, position, topic, bitrate, userLimit, nsfw, flags, permissionOverwrites, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, defaultSortOrder, defaultForumLayout, defaultTagSetting, themeColor } = arg1);
    yield undefined;
    callback = channel.getChannel(channelId);
    let obj = callback(closure_2[4]);
    obj.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" });
    let obj1 = callback(closure_2[6]);
    yield obj1.unarchiveThreadIfNecessary(channelId);
    const HTTP = channelId(closure_2[7]).HTTP;
    obj = { url: closure_6.CHANNEL(channelId) };
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
    obj.rejectWithError = channelId(closure_2[7]).rejectWithMigratedError();
    const obj7 = channelId(closure_2[7]);
    return HTTP.patch(obj).then((arg0) => {
      let obj = lib(closure_2[4]);
      obj = { type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: arg0 };
      obj.dispatch(obj);
      let guildId;
      if (null != lib) {
        guildId = lib.getGuildId();
      }
      let tmp4 = null == guildId;
      if (!tmp4) {
        let isThreadResult = null != lib;
        if (isThreadResult) {
          isThreadResult = lib.isThread();
        }
        tmp4 = isThreadResult;
      }
      if (!tmp4) {
        const result = lib(closure_2[8]).checkGuildTemplateDirty(guildId);
        const obj3 = lib(closure_2[8]);
      }
      return arg0;
    }, (body) => {
      let obj = lib(closure_2[4]);
      obj = { type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      return body;
    });
  };
  fn.next();
  return fn;
}
function deleteChannel() {
  return _deleteChannel(...arguments);
}
async function _deleteChannel(channelId, arg1) {
  const channel = channel.getChannel(channelId);
  const HTTP = callback(closure_2[7]).HTTP;
  const obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: closure_6.CHANNEL(channelId) };
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
    const result = callback2(closure_2[8]).checkGuildTemplateDirty(guildId);
    const obj3 = callback2(closure_2[8]);
  }
  callback3();
}
function updateVoiceChannelStatus(arg0, status) {
  const HTTP = status(dependencyMap[7]).HTTP;
  let obj = { url: closure_6.UPDATE_VOICE_CHANNEL_STATUS(arg0), body: obj };
  obj = { status, rejectWithError: status(dependencyMap[7]).rejectWithMigratedError() };
  return HTTP.put(obj);
}
function removeLinkedLobby(arg0) {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  return HTTP.del({ url: closure_6.CHANNEL_LINKED_LOBBY(arg0), rejectWithError: true });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ Endpoints: closure_6, Layers, ChannelSettingsSections: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("actions/ChannelSettingsActionCreators.tsx");

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
