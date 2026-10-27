// Module ID: 10992
// Function ID: 10993
// Name: notficationSettingsChannelFlagUtils
// Dependencies: [6704, 1087, 6705, 1097, 558, 576, 573, 8299, 7215, 10993, 7210, 2]
// Exports: updateChannelNotificationSetting, updateChannelPreset, updateChannelToGuildDefault, updateChannelUnreadSetting

// Module 10992 (notficationSettingsChannelFlagUtils)
import Constants from "Constants" /* 1087 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import ReadStateConstants from "ReadStateConstants" /* 6705 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7210 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7215 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 8299 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10993 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6704 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelPresetSettings(arg0) {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return UserGuildSettingsStore.resolveUnreadSetting(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function u() {
      return UserGuildSettingsStore.resolvedMessageNotifications(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === stateFromStores1) {
    let tmp12;
    if (cResult[7] === stateFromStores) {
      tmp12 = cResult[8];
    }
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp12) {
        let tmp14;
        if (cResult[11] === stateFromStores) {
          tmp14 = cResult[12];
        }
        return tmp14;
      }
    }
    const obj2 = { unread: stateFromStores, notification: stateFromStores1, preset: tmp12 };
    cResult[9] = stateFromStores1;
    cResult[10] = tmp12;
    cResult[11] = stateFromStores;
    cResult[12] = obj2;
    tmp14 = obj2;
  }
  const tmpResult4 = require("notificationSettingsPresetUtils");
  const presetFromSettingsResult = tmpResult4.presetFromSettings(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = presetFromSettingsResult;
  tmp12 = presetFromSettingsResult;
}) : (function useChannelPresetSettings(arg0) {
  let closure_0;
  let obj4;
  _require = arg0;
  const items = [UserGuildSettingsStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(closure_0));
  const items1 = [UserGuildSettingsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.resolvedMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: obj4.presetFromSettings(stateFromStores, stateFromStores1) };
  obj4 = require("notificationSettingsPresetUtils");
  return obj3;
});
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = tmp2;
export const updateChannelPreset = function updateChannelPreset(guildId, channelId, arg2) {
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, channelId);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { guildId, channelId, settings: obj3, label: NotificationSettingsUtils.NotificationLabels.PresetAll };
    obj3 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateChannelOverrideSettings3 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result = notificationSettingsFlagUtils;
    const result = updateChannelOverrideSettings3(obj2);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj4 = { guildId, channelId, settings: obj5, label: NotificationSettingsUtils.NotificationLabels.PresetHybrid };
    obj5 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result4.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateChannelOverrideSettings2 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result4 = notificationSettingsFlagUtils;
    const result1 = updateChannelOverrideSettings2(obj4);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj = { guildId, channelId, settings: obj6, label: NotificationSettingsUtils.NotificationLabels.PresetMentions };
    obj6 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result5.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result5 = notificationSettingsFlagUtils;
    const result2 = updateChannelOverrideSettings(obj);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj7 = { guildId, channelId, settings: obj8, label: NotificationSettingsUtils.NotificationLabels.PresetNothing };
    obj8 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: tmp2Result6.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateChannelOverrideSettings4 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result6 = notificationSettingsFlagUtils;
    const result3 = updateChannelOverrideSettings4(obj7);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guildId, channelId) {
  let obj2;
  let obj3;
  const obj = { guildId, channelId, settings: obj2, label: NotificationSettingsUtils.NotificationLabels.PresetDefault };
  obj2 = { message_notifications: UserNotificationSettings.NULL, flags: obj3.resetChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guildId, channelId)) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  obj3 = notificationSettingsFlagUtils;
  const result = updateChannelOverrideSettings(obj);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  let NotificationLabel;
  let UNREADS_ONLY_MENTIONS;
  let withChannelUnreadFlags;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj = { guildId: guild_id, channelId: id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(ALL_MESSAGES) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
  notificationSettingsFlagUtils;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, channelId, message_notifications) {
  let NotificationLabel;
  const obj = { guildId, channelId, settings: { message_notifications }, label: NotificationLabel.notifications(message_notifications) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};
