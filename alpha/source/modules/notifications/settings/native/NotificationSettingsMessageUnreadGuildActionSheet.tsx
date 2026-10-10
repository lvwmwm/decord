// Module ID: 12610
// Function ID: 12611
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: [19, 5966, 1085, 5967, 1095, 21, 558, 576, 12600, 1126, 6808, 10447, 6803, 12611, 2]

// Module 12610 (NotificationSettingsMessageUnreadGuildActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6808 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10447 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 12611 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp4;
const NotificationSettingsUtils = tmp4(6803);
const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.GuildNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  let notification;
  let tmp5;
  let tmp8;
  let unread;
  _require = guildId;
  let obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj2.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  if (cResult[0] !== notification) {
    let stringResult;
    if (notification === UserNotificationSettings.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
    cResult[0] = notification;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guildId.guildId) {
    const fn = function c(toggleExpandedHistory) {
      let UNREADS_ONLY_MENTIONS;
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      guildId = guildId.guildId;
      NotificationSettingsModalActionCreatorsDefault;
      const withGuildUnreadFlags = notificationSettingsFlagUtils.withGuildUnreadFlags;
      notificationSettingsFlagUtils;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const obj = { flags: withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
    };
    cResult[2] = guildId.guildId;
    cResult[3] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp8) {
      let tmp9;
      if (cResult[6] === unread) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const tmp10 = jsx(NotificationSettingsMessageUnreadActionSheetDefault, { disabledMentionOnlyWithReason: tmp5, value: unread, onChange: tmp8 });
  cResult[4] = tmp5;
  cResult[5] = tmp8;
  cResult[6] = unread;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : (function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  let notification;
  let unread;
  _require = guildId;
  let obj = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let tmp4 = jsx;
  let stringResult;
  const tmp5 = NotificationSettingsMessageUnreadActionSheetDefault;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.eP8yWU);
  }
  const obj2 = {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      let UNREADS_ONLY_MENTIONS;
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      guildId = guildId.guildId;
      NotificationSettingsModalActionCreatorsDefault;
      const withGuildUnreadFlags = notificationSettingsFlagUtils.withGuildUnreadFlags;
      notificationSettingsFlagUtils;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const obj = { flags: withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
    }
  };
  return tmp4(tmp5, obj2);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default tmp3;
