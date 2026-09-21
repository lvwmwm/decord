// Module ID: 7366
// Function ID: 7367
// Name: NotificationSettingsModalActionCreators
// Dependencies: [5, 4939, 1078, 4412, 1088, 577, 7361, 7363, 11, 4610, 1119, 1389, 1275, 2]

// Module 7366 (NotificationSettingsModalActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import util from "util" /* 1119 */;
import shared from "shared" /* 4610 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7361 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7363 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

const require = globalThis.__r;

require = fn;
const Endpoints = fn(1078).Endpoints;
const constants = fn(4412).NotificationSettingsUpdateType;
let closure_7 = fn(1088).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId });
  },
  close() {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    const currentGuildSettings = NotificationSettingsUtils.getCurrentGuildSettings(guildId);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, muteSettings);
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings });
    const obj4 = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    const result1 = NotificationSettingsUtils.trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, location);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn, location) {
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedIn;
    const _location = location;
    const keys = SnowflakeUtilsDefault.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = require("NotificationSettingsUtils").getCurrentGuildSettings(guildId);
    const obj2 = require("NotificationSettingsUtils");
    const manyCurrentChannelSettings = require("NotificationSettingsUtils").getManyCurrentChannelSettings(guildId, keys);
    const obj3 = require("NotificationSettingsUtils");
    let result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, channel_overrides);
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides });
    const obj6 = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    const result1 = require("NotificationSettingsUtils").trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, location);
    const obj7 = require("NotificationSettingsUtils");
    const keys1 = SnowflakeUtilsDefault.keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      value = closure_4.get(channelId);
      const result = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate({ guildId, channelId, change: channel_overrides.channel_overrides[channelId], previous: value, label, location: _location });
    });
  },
  updateChannelOverrideSettings(guild_id, id, muteSettings, NotificationLabel, location) {
    const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guild_id, id);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guild_id, { channel_overrides: { [id]: muteSettings } });
    const obj3 = { channel_overrides: { [id]: muteSettings } };
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: guild_id, channelId: id, settings: muteSettings });
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.MlIsJ8));
    const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: guild_id, channelId: id, settings: muteSettings };
    const result1 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate({ guildId: guild_id, channelId: id, change: muteSettings, previous: currentChannelSettings, label: NotificationLabel, location });
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut, _location) {
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedOut;
    const keys = SnowflakeUtilsDefault.keys(channel_overrides);
    const manyCurrentChannelSettings = require("NotificationSettingsUtils").getManyCurrentChannelSettings(guildId, keys);
    const obj2 = require("NotificationSettingsUtils");
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, { channel_overrides });
    const obj4 = { channel_overrides };
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides });
    const obj6 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    const keys1 = SnowflakeUtilsDefault.keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      const obj = NotificationSettingsUtils;
      return obj.trackChannelNotificationSettingsUpdate({ guildId, channelId, change: closure_1[channelId], previous: closure_4.get(channelId), label, location: _location });
    });
  },
  updateAppDMOverrideSettings(guildId, id2, id, settings, NotificationLabel2) {
    const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guildId, id2);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, { channel_overrides: { [id2]: settings } });
    const obj3 = { channel_overrides: { [id2]: settings } };
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id2, settings });
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.MlIsJ8));
    const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id2, settings };
    const result1 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate({ updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id2, applicationId: id, change: settings, previous: currentChannelSettings, label: NotificationLabel2 });
  },
  setForumThreadsCreated(channel, arg1) {
    if (arg1) {
      let NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_ON;
      let tmp2 = tmp;
    } else {
      NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_OFF;
      tmp2 = tmp;
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = this.updateChannelOverrideSettings(channel.guild_id, channel.id, { flags: UserGuildSettingsStore.getChannelFlags(channel) & ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON) | NEW_FORUM_THREADS_OFF }, NotificationLabel.forumThreadsCreated(arg1));
  },
  setAccountFlag(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const setFlagResult = closure_0(1389).setFlag(UserGuildSettingsStore.accountNotificationSettings.flags, closure_0, tmp2);
              closure_128_0 = setFlagResult;
              const HTTP = closure_0(1275).HTTP;
              const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: null, rejectWithError: null };
              const obj5 = { flags: setFlagResult };
              request.body = obj5;
              const obj10 = closure_0(1389);
              request.rejectWithError = closure_0(1275).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: HTTP.patch(request), done: false };
              return obj6;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj8 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: null };
              const obj9 = { flags: closure_128_0 };
              obj8.settings = obj9;
              dependencyMap = 2;
              c3 = 1;
              const obj11 = { value: tmp2(577).dispatch(obj8), done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = tmp;
          throw tmp11;
        }
      }
    })();
  }
};
