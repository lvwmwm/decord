// Module ID: 5072
// Function ID: 44068
// Name: _persistOptInChannelUpdates2
// Dependencies: [5, 1909, 1348, 4325, 653, 662, 5064, 1360, 5073, 5075, 686, 675, 4324, 22, 5079, 1331, 1282, 2]
// Exports: bulkOptInChannels, clearGuildNotice, dimissFavoriteSuggestion, enableGuildNotice, setGuildOptIn, setIsFavorite, setMessagesFavorite, setOptInChannel, setRecentlyActiveCollapsed, updateOptInChannelsImmediate

// Module 5072 (_persistOptInChannelUpdates2)
import closure_3 from "MAX_FAVORITES";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";
import apply from "apply";

let closure_8;
let closure_9;
const require = arg1;
async function _persistOptInChannelUpdates2(arg0, arg1, arg2) {
  if (null != arg0) {
    if (!outer2_4.isFullServerPreview(arg0)) {
      let obj = outer2_1(outer2_2[9]);
      obj = {};
      obj = { channel_overrides: arg1 };
      obj[arg0] = obj;
      yield obj.saveUserGuildSettingsBulk(obj);
      const obj1 = { type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: arg0, updates: arg1 };
      outer2_1(outer2_2[10]).dispatch(obj1);
      const obj4 = outer2_1(outer2_2[10]);
    }
  }
}
function bulkOptOutChannels(guildId, items) {
  const _require = guildId;
  if (null != guildId) {
    if (_isNativeReflectConstruct.isFullServerPreview(guildId)) {
      const result = _require(5064).updateImpersonatedChannels(guildId, [], items);
      const obj6 = _require(5064);
    } else {
      let obj = {};
      const item = items.forEach((arg0) => {
        const obj = {};
        const channelIdFlags = outer1_6.getChannelIdFlags(guildId, arg0);
        obj.flags = guildId(outer1_2[7]).setFlag(channelIdFlags, outer1_8.OPT_IN_ENABLED, false);
        obj[arg0] = obj;
      });
      const result1 = obj(5079).updateChannelOverrideSettingsBulk(guildId, obj, _require(5073).NotificationLabels.OptedOut);
      const obj2 = obj(5079);
      obj = {};
      const obj3 = obj(675);
      const merged = Object.assign(_require(4324).collectGuildAnalyticsMetadata(guildId));
      obj["action_type"] = "remove_many";
      obj["location"] = arg2;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj5 = _require(4324);
    }
  }
}
function dismissGuildNotice(guildId) {
  const result = require(1331) /* _createForOfIteratorHelperLoose */.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    let hasFlagResult = outer1_0(outer1_2[7]).hasFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    if (hasFlagResult) {
      hasFlagResult = !outer1_0(outer1_2[7]).hasFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      const obj2 = outer1_0(outer1_2[7]);
    }
    let flag = !hasFlagResult;
    if (flag) {
      guildOnboardingProgress.guildOnboardingProgress = outer1_0(outer1_2[7]).addFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
      const obj3 = outer1_0(outer1_2[7]);
      guildOnboardingProgress.guildOnboardingProgress = outer1_0(outer1_2[7]).setFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
      flag = true;
      const obj4 = outer1_0(outer1_2[7]);
    }
    return flag;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
({ ChannelNotificationSettingsFlags: closure_8, GuildNotificationSettingsFlags: closure_9 } = MAX_FAVORITES);
const debounceResult = apply.debounce((arg0, arg1) => (function _persistOptInChannelUpdates(arg0, arg1) {
  return outer1_10(...arguments);
})(arg0, arg1), 1000);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/opt_in_channels/OptInChannelsActionCreators.tsx");

export const setOptInChannel = function setOptInChannel(guildId, id, optInEnabled, location) {
  if (null != guildId) {
    if (_isNativeReflectConstruct.isFullServerPreview(guildId)) {
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
      const result = require(5064) /* _createForOfIteratorHelperLoose */.updateImpersonatedChannels(guildId, items1, items2);
      const obj17 = require(5064) /* _createForOfIteratorHelperLoose */;
    } else {
      const channelIdFlags = store2.getChannelIdFlags(guildId, id);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        let obj = require(1360) /* hasFlag */;
        setFlagResult = obj.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj1 = require(5073) /* differ */;
      obj = {};
      const currentChannelSettings = obj1.getCurrentChannelSettings(guildId, id);
      let obj3 = require(1360) /* hasFlag */;
      obj.flags = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      let obj4 = importDefault(5075);
      obj = {};
      obj1 = {};
      const obj2 = {};
      obj2[id] = obj;
      obj1.channel_overrides = obj2;
      obj[guildId] = obj1;
      const result1 = obj4.saveUserGuildSettingsBulk(obj);
      obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: obj };
      importDefault(686).dispatch(obj3);
      const obj9 = importDefault(686);
      obj4 = { guildId, channelId: id, change: obj, previous: currentChannelSettings };
      const NotificationLabel = require(5073) /* differ */.NotificationLabel;
      obj4.label = NotificationLabel.optedIn(optInEnabled);
      obj4.location = location;
      const result2 = require(5073) /* differ */.trackChannelNotificationSettingsUpdate(obj4);
      dismissGuildNotice(guildId);
      const obj11 = require(5073) /* differ */;
      const obj5 = {};
      const obj13 = importDefault(675);
      const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
      const obj15 = require(4324) /* _createForOfIteratorHelperLoose */;
      const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(store.getChannel(id)));
      let str2 = "remove";
      if (optInEnabled) {
        str2 = "add";
      }
      obj5["action_type"] = str2;
      obj5["location"] = location;
      obj13.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj5);
      const obj16 = require(4324) /* _createForOfIteratorHelperLoose */;
    }
  }
};
export const updateOptInChannelsImmediate = function updateOptInChannelsImmediate(guildId, channelId, optInEnabled, location) {
  if (null != guildId) {
    if (_isNativeReflectConstruct.isFullServerPreview(guildId)) {
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
      const result = require(5064) /* _createForOfIteratorHelperLoose */.updateImpersonatedChannels(guildId, items1, items2);
      const obj18 = require(5064) /* _createForOfIteratorHelperLoose */;
      let obj = { optInEnabled: true };
      const result1 = require(5064) /* _createForOfIteratorHelperLoose */.updateImpersonatedData(guildId, obj);
    } else {
      const channelIdFlags = store2.getChannelIdFlags(guildId, channelId);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        obj = require(1360) /* hasFlag */;
        setFlagResult = obj.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj1 = require(5073) /* differ */;
      obj = {};
      const currentChannelSettings = obj1.getCurrentChannelSettings(guildId, channelId);
      let obj3 = require(1360) /* hasFlag */;
      obj.flags = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      if (!store2.isOptInEnabled(guildId)) {
        let obj4 = require(1360) /* hasFlag */;
        let obj5 = importDefault(5075);
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
      importDefault(686).dispatch(obj4);
      const obj10 = importDefault(686);
      obj5 = { guildId, channelId, change: obj, previous: currentChannelSettings };
      const NotificationLabel = require(5073) /* differ */.NotificationLabel;
      obj5.label = NotificationLabel.optedIn(optInEnabled);
      obj5.location = location;
      const result3 = require(5073) /* differ */.trackChannelNotificationSettingsUpdate(obj5);
      dismissGuildNotice(guildId);
      const obj12 = require(5073) /* differ */;
      const obj6 = {};
      const obj14 = importDefault(675);
      const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
      const obj16 = require(4324) /* _createForOfIteratorHelperLoose */;
      const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(store.getChannel(channelId)));
      let str2 = "remove";
      if (optInEnabled) {
        str2 = "add";
      }
      obj6["action_type"] = str2;
      obj6["location"] = location;
      obj14.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj6);
      const obj17 = require(4324) /* _createForOfIteratorHelperLoose */;
    }
  }
};
export const updateOptInChannelsBatched = debounceResult;
export const bulkOptInChannels = function bulkOptInChannels(id, arr, arg2, arg3) {
  let flag = arg2;
  const _require = id;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj;
  if (null != id) {
    if (_isNativeReflectConstruct.isFullServerPreview(id)) {
      const result = _require(5064).updateImpersonatedChannels(id, arr, []);
      if (flag) {
        obj = { optInEnabled: true };
        const result1 = _require(5064).updateImpersonatedData(id, obj);
        const obj13 = _require(5064);
      }
    } else {
      obj = {};
      const item = arr.forEach((arg0) => {
        const obj = {};
        const channelIdFlags = outer1_6.getChannelIdFlags(id, arg0);
        obj.flags = id(outer1_2[7]).setFlag(channelIdFlags, outer1_8.OPT_IN_ENABLED, true);
        obj[arg0] = obj;
      });
      if (flag) {
        const obj6 = _require(1360);
        const setFlagResult = _require(1360).setFlag(store2.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON, true);
        obj = { flags: setFlagResult };
        obj.channel_overrides = obj;
        const result2 = obj(5079).updateGuildAndChannelNotificationSettings(id, obj, _require(5073).NotificationLabels.OptedIn);
        const obj7 = obj(5079);
        let obj1 = {};
        const obj9 = obj(675);
        const merged = Object.assign(_require(4324).collectGuildAnalyticsMetadata(id));
        obj1["action_type"] = "add_many_and_enable_guild";
        obj1["location"] = arg3;
        obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
        const obj11 = _require(4324);
      } else {
        obj1 = obj(5079);
        const result3 = obj1.updateChannelOverrideSettingsBulk(id, obj, _require(5073).NotificationLabels.OptedIn);
        let obj2 = obj(675);
        obj2 = {};
        const merged1 = Object.assign(_require(4324).collectGuildAnalyticsMetadata(id));
        obj2["action_type"] = "add_many";
        obj2["location"] = arg3;
        obj2.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj2);
        const obj5 = _require(4324);
      }
    }
  }
};
export { bulkOptOutChannels };
export const setGuildOptIn = function setGuildOptIn(id, optInEnabled) {
  if (_isNativeReflectConstruct.isFullServerPreview(id)) {
    let obj = { optInEnabled };
    const result = require(5064) /* _createForOfIteratorHelperLoose */.updateImpersonatedData(id, obj);
    const obj7 = require(5064) /* _createForOfIteratorHelperLoose */;
  } else {
    const guildFlags = store2.getGuildFlags(id);
    obj = importDefault(5079);
    obj = { flags: require(1360) /* hasFlag */.setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, optInEnabled) };
    const NotificationLabel = require(5073) /* differ */.NotificationLabel;
    const result1 = obj.updateGuildNotificationSettings(id, obj, NotificationLabel.optedIn(optInEnabled));
    const obj3 = require(1360) /* hasFlag */;
    const obj1 = {};
    const obj4 = importDefault(675);
    const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(id));
    let str = "guild_disabled";
    if (optInEnabled) {
      str = "guild_enabled";
    }
    obj1["action_type"] = str;
    obj1["location"] = arg2;
    obj4.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
    const obj6 = require(4324) /* _createForOfIteratorHelperLoose */;
  }
};
export const setIsFavorite = function setIsFavorite(guildId, id, arg2, arg3) {
  if (null != guildId) {
    if (!_isNativeReflectConstruct.isFullServerPreview(guildId)) {
      const channelIdFlags = store2.getChannelIdFlags(guildId, id);
      let obj = require(1360) /* hasFlag */;
      let setFlagResult = channelIdFlags;
      if (tmp6) {
        setFlagResult = require(1360) /* hasFlag */.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
        const obj2 = require(1360) /* hasFlag */;
      }
      const obj3 = importDefault(5079);
      obj = {};
      tmp6 = !obj.hasFlag(channelIdFlags, constants.OPT_IN_ENABLED) && arg2;
      obj.flags = require(1360) /* hasFlag */.setFlag(setFlagResult, constants.FAVORITED, arg2);
      const NotificationLabel = require(5073) /* differ */.NotificationLabel;
      const result = obj3.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.favorited(arg2));
      const obj5 = require(1360) /* hasFlag */;
      obj = {};
      const obj6 = importDefault(675);
      const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
      let str = "unfavorited";
      if (arg2) {
        str = "favorited";
      }
      obj["action_type"] = str;
      obj["location"] = arg3;
      obj6.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj8 = require(4324) /* _createForOfIteratorHelperLoose */;
    }
  }
};
export const setMessagesFavorite = function setMessagesFavorite(id, arg1) {
  const channelIdFlags = store2.getChannelIdFlags(null, id);
  let obj = importDefault(5079);
  obj = { flags: require(1360) /* hasFlag */.setFlag(channelIdFlags, constants.FAVORITED, arg1) };
  const NotificationLabel = require(5073) /* differ */.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(null, id, obj, NotificationLabel.favorited(arg1));
};
export const enableGuildNotice = function enableGuildNotice(arg0) {
  const result = require(1331) /* _createForOfIteratorHelperLoose */.updateUserGuildSettings(arg0, (guildOnboardingProgress) => {
    let flag = !outer1_0(outer1_2[7]).hasFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    if (flag) {
      guildOnboardingProgress.guildOnboardingProgress = outer1_0(outer1_2[7]).addFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      flag = true;
      const obj2 = outer1_0(outer1_2[7]);
    }
    return flag;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { dismissGuildNotice };
export const clearGuildNotice = function clearGuildNotice(guildId) {
  const items = [...closure_6.getOptedInChannels(guildId)];
  bulkOptOutChannels(guildId, items);
  const result = require(1331) /* _createForOfIteratorHelperLoose */.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    guildOnboardingProgress.guildOnboardingProgress = outer1_0(outer1_2[7]).setFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    const obj = outer1_0(outer1_2[7]);
    guildOnboardingProgress.guildOnboardingProgress = outer1_0(outer1_2[7]).setFlag(guildOnboardingProgress.guildOnboardingProgress, outer1_0(outer1_2[16]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED, false);
    return true;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  let obj = importDefault(686);
  obj = { type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId };
  obj.dispatch(obj);
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  let obj = importDefault(686);
  obj = { type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed };
  obj.dispatch(obj);
};
