// Module ID: 12618
// Function ID: 12619
// Name: NotificationSettingsMessageNotificationGuildActionSheet
// Dependencies: [19, 5971, 1085, 5972, 1095, 21, 558, 576, 12613, 1126, 10425, 6798, 6793, 12619, 2]

// Module 12618 (NotificationSettingsMessageNotificationGuildActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ReadStateConstants from "ReadStateConstants" /* 5972 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6793 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6798 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10425 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.GuildNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  _require = guildId;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  let obj2 = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj2.useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  if (cResult[0] === notification) {
    let tmp5;
    if (cResult[1] === unread) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === guildId.guildId) {
      let tmp8;
      if (cResult[4] === unread) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === notification) {
        if (cResult[7] === tmp5) {
          let tmp9;
          if (cResult[8] === tmp8) {
            tmp9 = cResult[9];
          }
          return tmp9;
        }
      }
      const tmp12 = jsx(unread(12619), { context: "guild", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 });
      cResult[6] = notification;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
    const fn = function c(message_notifications) {
      const obj = { message_notifications };
      const tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
      if (tmp) {
        const obj2 = notificationSettingsFlagUtils;
        obj.flags = obj2.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId.guildId), constants.UNREADS_ALL_MESSAGES);
      }
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      guildId = guildId.guildId;
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.notifications(message_notifications));
    };
    cResult[3] = guildId.guildId;
    cResult[4] = unread;
    cResult[5] = fn;
    tmp8 = fn;
  }
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
  }
  cResult[0] = notification;
  cResult[1] = unread;
  cResult[2] = stringResult;
  tmp5 = stringResult;
}) : (function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  let stringResult;
  _require = guildId;
  let tmp = _require;
  let obj = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  let obj2 = {
    context: "guild",
    value: notification,
    allMessagesSubLabel: stringResult,
    onChange(message_notifications) {
      const obj = { message_notifications };
      const tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
      if (tmp) {
        const obj2 = notificationSettingsFlagUtils;
        obj.flags = obj2.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId.guildId), constants.UNREADS_ALL_MESSAGES);
      }
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      guildId = guildId.guildId;
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.notifications(message_notifications));
    }
  };
  stringResult = undefined;
  const tmp4 = jsx;
  const tmp5 = unread(12619);
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
  }
  return tmp4(tmp5, obj2);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default tmp3;
