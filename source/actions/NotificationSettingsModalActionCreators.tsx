// Module ID: 6798
// Function ID: 6799
// Dependencies: [5, 5043, 676, 4033, 685, 709, 6795, 6797, 11, 1363, 1236, 1403, 530, 2]

// Module 6798
import dispatcher from "dispatcher";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { Endpoints } from "ME";
import { NotificationSettingsUpdateType as closure_6 } from "AccountNotificationFlags";
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES";

const require = arg1;
let result = require("ME").fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    let obj = importDefault(709);
    obj = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj);
  },
  close() {
    importDefault(709).dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    let obj = require(6795) /* UserNotificationSettings */;
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const result = importDefault(6797).saveUserGuildSettings(guildId, muteSettings);
    const obj2 = importDefault(6797);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    importDefault(709).dispatch(obj);
    const obj3 = importDefault(709);
    const result1 = require(6795) /* UserNotificationSettings */.trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, location);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn, location) {
    const _require = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedIn;
    let dispatcher = location;
    let obj = importDefault(11);
    const keys = obj.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = _require(6795).getCurrentGuildSettings(guildId);
    const obj2 = _require(6795);
    const manyCurrentChannelSettings = _require(6795).getManyCurrentChannelSettings(guildId, keys);
    const obj3 = _require(6795);
    let result = importDefault(6797).saveUserGuildSettings(guildId, channel_overrides);
    const obj4 = importDefault(6797);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    importDefault(709).dispatch(obj);
    const obj5 = importDefault(709);
    const result1 = _require(6795).trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, location);
    const obj7 = _require(6795);
    const keys1 = importDefault(11).keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      const value = updateUserGuildSettingsInternal.get(channelId);
      let obj = guildId(OptedIn[6]);
      obj = { guildId, channelId, change: channel_overrides.channel_overrides[channelId], previous: value, label: OptedIn, location: dispatcher };
      const result = obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateChannelOverrideSettings(guildId, id, muteSettings, NotificationLabel, location) {
    let obj = require(6795) /* UserNotificationSettings */;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = importDefault(6797);
    obj = { [id]: muteSettings };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: muteSettings };
    importDefault(709).dispatch(obj);
    const AccessibilityAnnouncer = require(1363) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1236) /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require(1236) /* getSystemLocale */.t.MlIsJ8));
    const obj4 = importDefault(709);
    obj1 = { guildId, channelId: id, change: muteSettings, previous: currentChannelSettings, label: NotificationLabel, location };
    const result1 = require(6795) /* UserNotificationSettings */.trackChannelNotificationSettingsUpdate(obj1);
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut) {
    const _require = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedOut;
    let dispatcher = arg3;
    let obj = importDefault(11);
    const keys = obj.keys(channel_overrides);
    const manyCurrentChannelSettings = _require(6795).getManyCurrentChannelSettings(guildId, keys);
    const obj2 = _require(6795);
    obj = { channel_overrides };
    const result = importDefault(6797).saveUserGuildSettings(guildId, obj);
    const obj3 = importDefault(6797);
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    importDefault(709).dispatch(obj);
    const obj5 = importDefault(709);
    const keys1 = importDefault(11).keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      let obj = guildId(OptedOut[6]);
      obj = { guildId, channelId, change: table[channelId], previous: updateUserGuildSettingsInternal.get(channelId), label: OptedOut, location: dispatcher };
      return obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, change, NotificationLabel2) {
    let obj = require(6795) /* UserNotificationSettings */;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = importDefault(6797);
    obj = { [id]: change };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: change };
    importDefault(709).dispatch(obj);
    const AccessibilityAnnouncer = require(1363) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1236) /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require(1236) /* getSystemLocale */.t.MlIsJ8));
    const obj4 = importDefault(709);
    obj1 = { updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id, applicationId: id2, change, previous: currentChannelSettings, label: NotificationLabel2 };
    const result1 = require(6795) /* UserNotificationSettings */.trackChannelNotificationSettingsUpdate(obj1);
  },
  setForumThreadsCreated(channel, arg1) {
    if (arg1) {
      let NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_ON;
      let tmp2 = tmp;
    } else {
      NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_OFF;
      tmp2 = tmp;
    }
    const NotificationLabel = require(6795) /* UserNotificationSettings */.NotificationLabel;
    const result = this.updateChannelOverrideSettings(channel.guild_id, channel.id, { flags: channelFlags.getChannelFlags(channel) & ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON) | NEW_FORUM_THREADS_OFF }, NotificationLabel.forumThreadsCreated(arg1));
  },
  setAccountFlag(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let c0 = tmp5;
              c0 = undefined;
              const setFlagResult = outer1_0(1403).setFlag(outer1_4.accountNotificationSettings.flags, outer1_0, outer1_1);
              c0 = setFlagResult;
              const HTTP = outer1_0(530).HTTP;
              let obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_5.ACCOUNT_NOTIFICATION_SETTINGS;
              const obj2 = { flags: null };
              obj2[0] = setFlagResult;
              obj1[1] = obj2;
              const obj10 = outer1_0(1403);
              obj1[2] = outer1_0(530).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj1 = outer1_1(709);
              const obj5 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: null };
              const obj6 = { flags: null };
              obj6[0] = c0;
              obj5[1] = obj6;
              dependencyMap = 2;
              c3 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = obj1.dispatch(obj5);
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          c3 = tmp;
          throw tmp11;
        }
      }
    })();
  }
};
