// Module ID: 12986
// Function ID: 12987
// Name: notificationSettingsGuildFlagUtils
// Dependencies: [4939, 1078, 1088, 4942, 7366, 10421, 7361, 558, 568, 565, 2]
// Exports: updateGuildPreset

// Module 12986 (notificationSettingsGuildFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4942 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1078).UserNotificationSettings;
const constants = fn(1088).GuildNotificationSettingsFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    obj2.flags = tmp2(10421).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateGuildNotificationSettings(guildId, obj2, tmp2(7361).NotificationLabels.PresetAll);
    const tmp2Result = tmp2(10421);
  } else if (arg1 === tmp2(4942).Presets.MENTIONS) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = tmp2(10421).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj3, tmp2(7361).NotificationLabels.PresetMentions);
    const tmp2Result3 = tmp2(10421);
  } else if (arg1 === tmp2(4942).Presets.NOTHING) {
    const obj5 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = tmp2(10421).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj5, tmp2(7361).NotificationLabels.PresetNothing);
    const tmp2Result4 = tmp2(10421);
  }
};
export const useGuildPresetSettings = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return UserGuildSettingsStore.getGuildUnreadSetting(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function u() {
      return UserGuildSettingsStore.getMessageNotifications(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp8, tmp10);
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      let tmp12 = cResult[8];
    }
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp12) {
        if (cResult[11] === stateFromStores) {
          let tmp14 = cResult[12];
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
  const tmpResult3 = require("useStateFromStores");
  const presetFromSettingsResult = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = presetFromSettingsResult;
  tmp12 = presetFromSettingsResult;
}) : ((arg0) => {
  _require = arg0;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(closure_0));
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => UserGuildSettingsStore.getMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
});
