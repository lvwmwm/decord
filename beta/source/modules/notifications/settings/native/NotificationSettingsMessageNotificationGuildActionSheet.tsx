// Module ID: 13027
// Function ID: 13028
// Name: NotificationSettingsMessageNotificationGuildActionSheet
// Dependencies: [19, 4971, 1078, 4972, 1088, 21, 558, 568, 13022, 1119, 10460, 7398, 7393, 13028, 2]

// Module 13027 (NotificationSettingsMessageNotificationGuildActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7393 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7398 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10460 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1078).UserNotificationSettings;
const UnreadSetting = fn(4972).UnreadSetting;
let closure_6 = fn(1088).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(10);
  let obj = require("c");
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  if (cResult[0] === notification) {
    if (cResult[1] === unread) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === guildId.guildId) {
      if (cResult[4] === unread) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === notification) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp8) {
            let tmp9 = cResult[9];
          }
          return tmp9;
        }
      }
      const obj3 = { context: "guild", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 };
      const tmp12 = jsx(unread(13028), { context: "guild", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 });
      cResult[6] = notification;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
    const fn = function c(message_notifications) {
      const obj = { message_notifications };
      let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
      if (tmp) {
        tmp = unread !== UnreadSetting.ALL_MESSAGES;
      }
      if (tmp) {
        obj.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId.guildId), constants.UNREADS_ALL_MESSAGES);
      }
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
    };
    cResult[3] = guildId.guildId;
    cResult[4] = unread;
    cResult[5] = fn;
    tmp8 = fn;
  }
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.eP8yWU);
    }
  }
  cResult[0] = notification;
  cResult[1] = unread;
  cResult[2] = stringResult;
  tmp5 = stringResult;
}) : ((guildId) => {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  let obj2 = { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  const tmp4 = jsx;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.eP8yWU);
    }
  }
  obj2.allMessagesSubLabel = stringResult;
  obj2.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId.guildId), constants.UNREADS_ALL_MESSAGES);
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return tmp4(unread(13028), obj2);
});
