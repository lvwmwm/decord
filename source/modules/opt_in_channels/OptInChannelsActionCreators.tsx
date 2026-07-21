// Module ID: 5343
// Function ID: 45632
// Name: _persistOptInChannelUpdates2
// Dependencies: []
// Exports: bulkOptInChannels, clearGuildNotice, dimissFavoriteSuggestion, enableGuildNotice, setGuildOptIn, setIsFavorite, setMessagesFavorite, setOptInChannel, setRecentlyActiveCollapsed, updateOptInChannelsImmediate

// Module 5343 (_persistOptInChannelUpdates2)
async function _persistOptInChannelUpdates2(guildId, channel_overrides, arg2) {
  if (null != guildId) {
    if (!fullServerPreview.isFullServerPreview(guildId)) {
      let obj = callback(closure_2[9]);
      obj = {};
      obj = { channel_overrides };
      obj[guildId] = obj;
      yield obj.saveUserGuildSettingsBulk(obj);
      const obj1 = { type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId, updates: channel_overrides };
      callback(closure_2[10]).dispatch(obj1);
      const obj4 = callback(closure_2[10]);
    }
  }
}
function bulkOptOutChannels(guildId, items) {
  items = guildId;
  if (null != guildId) {
    if (closure_4.isFullServerPreview(guildId)) {
      const result = items(dependencyMap[6]).updateImpersonatedChannels(guildId, [], items);
      const obj6 = items(dependencyMap[6]);
    } else {
      let obj = {};
      const importDefault = obj;
      const item = items.forEach((arg0) => {
        const obj = {};
        const channelIdFlags = channelIdFlags.getChannelIdFlags(arg0, arg0);
        obj.flags = arg0(closure_2[7]).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
        obj[arg0] = obj;
      });
      const result1 = importDefault(dependencyMap[14]).updateChannelOverrideSettingsBulk(guildId, obj, items(dependencyMap[8]).NotificationLabels.OptedOut);
      const obj2 = importDefault(dependencyMap[14]);
      obj = {};
      const obj3 = importDefault(dependencyMap[11]);
      const merged = Object.assign(items(dependencyMap[12]).collectGuildAnalyticsMetadata(guildId));
      obj["action_type"] = "remove_many";
      obj["location"] = arg2;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj5 = items(dependencyMap[12]);
    }
  }
}
function dismissGuildNotice(guildId) {
  const result = arg1(dependencyMap[15]).updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    let hasFlagResult = callback(closure_2[7]).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    if (hasFlagResult) {
      hasFlagResult = !callback(closure_2[7]).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      const obj2 = callback(closure_2[7]);
    }
    let flag = !hasFlagResult;
    if (flag) {
      guildOnboardingProgress.guildOnboardingProgress = callback(closure_2[7]).addFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
      const obj3 = callback(closure_2[7]);
      guildOnboardingProgress.guildOnboardingProgress = callback(closure_2[7]).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
      flag = true;
      const obj4 = callback(closure_2[7]);
    }
    return flag;
  }, arg1(dependencyMap[15]).UserSettingsDelay.INFREQUENT_USER_ACTION);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
({ ChannelNotificationSettingsFlags: closure_8, GuildNotificationSettingsFlags: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const obj = arg1(dependencyMap[13]);
const debounceResult = arg1(dependencyMap[13]).debounce((arg0, arg1) => function _persistOptInChannelUpdates(arg0, arg1) {
  return callback(...arguments);
}(arg0, arg1), 1000);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/opt_in_channels/OptInChannelsActionCreators.tsx");

export const setOptInChannel = function setOptInChannel(guildId, id, optInEnabled, location) {
  if (null != guildId) {
    if (closure_4.isFullServerPreview(guildId)) {
      if (optInEnabled) {
        const items = [id];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (optInEnabled) {
        let items2 = [];
      } else {
        items2 = [id];
      }
      const result = id(dependencyMap[6]).updateImpersonatedChannels(guildId, items1, items2);
      const obj17 = id(dependencyMap[6]);
    } else {
      const channelIdFlags = store2.getChannelIdFlags(guildId, id);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        let obj = id(dependencyMap[7]);
        setFlagResult = obj.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj1 = id(dependencyMap[8]);
      obj = {};
      const currentChannelSettings = obj1.getCurrentChannelSettings(guildId, id);
      let obj3 = id(dependencyMap[7]);
      obj.flags = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      let obj4 = importDefault(dependencyMap[9]);
      obj = {};
      obj1 = {};
      const obj2 = {};
      obj2[id] = obj;
      obj1.channel_overrides = obj2;
      obj[guildId] = obj1;
      const result1 = obj4.saveUserGuildSettingsBulk(obj);
      obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: obj };
      importDefault(dependencyMap[10]).dispatch(obj3);
      const obj9 = importDefault(dependencyMap[10]);
      obj4 = { guildId, channelId: id, change: obj, previous: currentChannelSettings };
      const NotificationLabel = id(dependencyMap[8]).NotificationLabel;
      obj4.label = NotificationLabel.optedIn(optInEnabled);
      obj4.location = location;
      const result2 = id(dependencyMap[8]).trackChannelNotificationSettingsUpdate(obj4);
      dismissGuildNotice(guildId);
      const obj11 = id(dependencyMap[8]);
      const obj5 = {};
      const obj13 = importDefault(dependencyMap[11]);
      const merged = Object.assign(id(dependencyMap[12]).collectGuildAnalyticsMetadata(guildId));
      const obj15 = id(dependencyMap[12]);
      const merged1 = Object.assign(id(dependencyMap[12]).collectChannelAnalyticsMetadata(store.getChannel(id)));
      let str2 = "remove";
      if (optInEnabled) {
        str2 = "add";
      }
      obj5["action_type"] = str2;
      obj5["location"] = location;
      obj13.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj5);
      const obj16 = id(dependencyMap[12]);
    }
  }
};
export const updateOptInChannelsImmediate = function updateOptInChannelsImmediate(guildId, channelId, optInEnabled, location) {
  if (null != guildId) {
    if (closure_4.isFullServerPreview(guildId)) {
      if (optInEnabled) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (optInEnabled) {
        let items2 = [];
      } else {
        items2 = [channelId];
      }
      const result = channelId(dependencyMap[6]).updateImpersonatedChannels(guildId, items1, items2);
      const obj18 = channelId(dependencyMap[6]);
      let obj = { optInEnabled: true };
      const result1 = channelId(dependencyMap[6]).updateImpersonatedData(guildId, obj);
    } else {
      const channelIdFlags = store2.getChannelIdFlags(guildId, channelId);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        obj = channelId(dependencyMap[7]);
        setFlagResult = obj.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj1 = channelId(dependencyMap[8]);
      obj = {};
      const currentChannelSettings = obj1.getCurrentChannelSettings(guildId, channelId);
      let obj3 = channelId(dependencyMap[7]);
      obj.flags = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      if (!store2.isOptInEnabled(guildId)) {
        let obj4 = channelId(dependencyMap[7]);
        let obj5 = importDefault(dependencyMap[9]);
        obj1 = {};
        const obj2 = {};
        obj3 = {};
        obj3[channelId] = obj;
        obj2.channel_overrides = obj3;
        obj2.flags = obj4.setFlag(store2.getGuildFlags(guildId), constants2.OPT_IN_CHANNELS_ON, true);
        obj1[guildId] = obj2;
        const result2 = obj5.saveUserGuildSettingsBulk(obj1);
        const setFlagResult1 = obj4.setFlag(store2.getGuildFlags(guildId), constants2.OPT_IN_CHANNELS_ON, true);
      }
      obj4 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId, settings: obj };
      importDefault(dependencyMap[10]).dispatch(obj4);
      const obj10 = importDefault(dependencyMap[10]);
      obj5 = { guildId, channelId, change: obj, previous: currentChannelSettings };
      const NotificationLabel = channelId(dependencyMap[8]).NotificationLabel;
      obj5.label = NotificationLabel.optedIn(optInEnabled);
      obj5.location = location;
      const result3 = channelId(dependencyMap[8]).trackChannelNotificationSettingsUpdate(obj5);
      dismissGuildNotice(guildId);
      const obj12 = channelId(dependencyMap[8]);
      const obj6 = {};
      const obj14 = importDefault(dependencyMap[11]);
      const merged = Object.assign(channelId(dependencyMap[12]).collectGuildAnalyticsMetadata(guildId));
      const obj16 = channelId(dependencyMap[12]);
      const merged1 = Object.assign(channelId(dependencyMap[12]).collectChannelAnalyticsMetadata(store.getChannel(channelId)));
      let str2 = "remove";
      if (optInEnabled) {
        str2 = "add";
      }
      obj6["action_type"] = str2;
      obj6["location"] = location;
      obj14.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj6);
      const obj17 = channelId(dependencyMap[12]);
    }
  }
};
export const updateOptInChannelsBatched = debounceResult;
export const bulkOptInChannels = function bulkOptInChannels(id, arr, arg2, arg3) {
  let flag = arg2;
  arr = id;
  if (arg2 === undefined) {
    flag = false;
  }
  let importDefault;
  if (null != id) {
    if (closure_4.isFullServerPreview(id)) {
      const result = arr(dependencyMap[6]).updateImpersonatedChannels(id, arr, []);
      if (flag) {
        let obj = { optInEnabled: true };
        const result1 = arr(dependencyMap[6]).updateImpersonatedData(id, obj);
        const obj13 = arr(dependencyMap[6]);
      }
    } else {
      obj = {};
      importDefault = obj;
      const item = arr.forEach((arg0) => {
        const obj = {};
        const channelIdFlags = channelIdFlags.getChannelIdFlags(arg0, arg0);
        obj.flags = arg0(closure_2[7]).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
        obj[arg0] = obj;
      });
      if (flag) {
        const obj6 = arr(dependencyMap[7]);
        const setFlagResult = arr(dependencyMap[7]).setFlag(store2.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON, true);
        obj = { flags: setFlagResult };
        obj.channel_overrides = obj;
        const result2 = importDefault(dependencyMap[14]).updateGuildAndChannelNotificationSettings(id, obj, arr(dependencyMap[8]).NotificationLabels.OptedIn);
        const obj7 = importDefault(dependencyMap[14]);
        let obj1 = {};
        const obj9 = importDefault(dependencyMap[11]);
        const merged = Object.assign(arr(dependencyMap[12]).collectGuildAnalyticsMetadata(id));
        obj1["action_type"] = "add_many_and_enable_guild";
        obj1["location"] = arg3;
        obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
        const obj11 = arr(dependencyMap[12]);
      } else {
        obj1 = importDefault(dependencyMap[14]);
        const result3 = obj1.updateChannelOverrideSettingsBulk(id, obj, arr(dependencyMap[8]).NotificationLabels.OptedIn);
        let obj2 = importDefault(dependencyMap[11]);
        obj2 = {};
        const merged1 = Object.assign(arr(dependencyMap[12]).collectGuildAnalyticsMetadata(id));
        obj2["action_type"] = "add_many";
        obj2["location"] = arg3;
        obj2.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj2);
        const obj5 = arr(dependencyMap[12]);
      }
    }
  }
};
export { bulkOptOutChannels };
export const setGuildOptIn = function setGuildOptIn(id, optInEnabled) {
  if (closure_4.isFullServerPreview(id)) {
    let obj = { optInEnabled };
    const result = optInEnabled(dependencyMap[6]).updateImpersonatedData(id, obj);
    const obj7 = optInEnabled(dependencyMap[6]);
  } else {
    const guildFlags = store2.getGuildFlags(id);
    obj = importDefault(dependencyMap[14]);
    obj = { flags: optInEnabled(dependencyMap[7]).setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, optInEnabled) };
    const NotificationLabel = optInEnabled(dependencyMap[8]).NotificationLabel;
    const result1 = obj.updateGuildNotificationSettings(id, obj, NotificationLabel.optedIn(optInEnabled));
    const obj3 = optInEnabled(dependencyMap[7]);
    const obj1 = {};
    const obj4 = importDefault(dependencyMap[11]);
    const merged = Object.assign(optInEnabled(dependencyMap[12]).collectGuildAnalyticsMetadata(id));
    let str = "guild_disabled";
    if (optInEnabled) {
      str = "guild_enabled";
    }
    obj1["action_type"] = str;
    obj1["location"] = arg2;
    obj4.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
    const obj6 = optInEnabled(dependencyMap[12]);
  }
};
export const setIsFavorite = function setIsFavorite(guildId, id, arg2, arg3) {
  if (null != guildId) {
    if (!closure_4.isFullServerPreview(guildId)) {
      const channelIdFlags = store2.getChannelIdFlags(guildId, id);
      let obj = id(dependencyMap[7]);
      let setFlagResult = channelIdFlags;
      if (tmp6) {
        setFlagResult = id(dependencyMap[7]).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
        const obj2 = id(dependencyMap[7]);
      }
      const obj3 = importDefault(dependencyMap[14]);
      obj = {};
      const tmp6 = !obj.hasFlag(channelIdFlags, constants.OPT_IN_ENABLED) && arg2;
      obj.flags = id(dependencyMap[7]).setFlag(setFlagResult, constants.FAVORITED, arg2);
      const NotificationLabel = id(dependencyMap[8]).NotificationLabel;
      const result = obj3.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.favorited(arg2));
      const obj5 = id(dependencyMap[7]);
      obj = {};
      const obj6 = importDefault(dependencyMap[11]);
      const merged = Object.assign(id(dependencyMap[12]).collectGuildAnalyticsMetadata(guildId));
      let str = "unfavorited";
      if (arg2) {
        str = "favorited";
      }
      obj["action_type"] = str;
      obj["location"] = arg3;
      obj6.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj8 = id(dependencyMap[12]);
    }
  }
};
export const setMessagesFavorite = function setMessagesFavorite(id, arg1) {
  const channelIdFlags = store2.getChannelIdFlags(null, id);
  let obj = importDefault(dependencyMap[14]);
  obj = { flags: arg1(dependencyMap[7]).setFlag(channelIdFlags, constants.FAVORITED, arg1) };
  const NotificationLabel = arg1(dependencyMap[8]).NotificationLabel;
  const result = obj.updateChannelOverrideSettings(null, id, obj, NotificationLabel.favorited(arg1));
};
export const enableGuildNotice = function enableGuildNotice(arg0) {
  const result = arg1(dependencyMap[15]).updateUserGuildSettings(arg0, (guildOnboardingProgress) => {
    let flag = !callback(closure_2[7]).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    if (flag) {
      guildOnboardingProgress.guildOnboardingProgress = callback(closure_2[7]).addFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      flag = true;
      const obj2 = callback(closure_2[7]);
    }
    return flag;
  }, arg1(dependencyMap[15]).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { dismissGuildNotice };
export const clearGuildNotice = function clearGuildNotice(guildId) {
  const items = [...closure_6.getOptedInChannels(guildId)];
  bulkOptOutChannels(guildId, items);
  const result = arg1(dependencyMap[15]).updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    guildOnboardingProgress.guildOnboardingProgress = callback(closure_2[7]).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    const obj = callback(closure_2[7]);
    guildOnboardingProgress.guildOnboardingProgress = callback(closure_2[7]).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(closure_2[16]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED, false);
    return true;
  }, arg1(dependencyMap[15]).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId };
  obj.dispatch(obj);
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed };
  obj.dispatch(obj);
};
