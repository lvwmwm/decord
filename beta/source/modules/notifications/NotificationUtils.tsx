// Module ID: 9605
// Function ID: 9606
// Name: notifications/NotificationUtils
// Dependencies: [5017, 1074, 1084, 1115, 11, 1385, 4472, 504, 2]
// Exports: filterOverrides, getMuteTimeOptions, shouldShowUseNewNotificationSystem, useShouldUseNewNotificationSystem

// Module 9605 (notifications/NotificationUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import intl7 from "intl" /* 1115 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import MuteTimers from "MuteTimers" /* 4472 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ MuteUntilSeconds: metroRequire, ChannelNotificationSettingsFlags: metroImportDefault } = UserSettingsConstants);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const result = size.fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { id: "15-minutes", label: intl.string(intl7.t["8ot6gv"]), value: metroRequire.MINUTES_15 };
  intl = intl7.intl;
  const items = [obj, , , , , ];
  const obj2 = { id: "1-hour", label: intl2.string(intl7.t.UMWBZr), value: metroRequire.HOURS_1 };
  intl2 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "3-hours", label: intl3.string(intl7.t.QmYWtu), value: metroRequire.HOURS_3 };
  intl3 = intl7.intl;
  items[2] = obj3;
  const obj4 = { id: "8-hours", label: intl4.string(intl7.t.EpAXPC), value: metroRequire.HOURS_8 };
  intl4 = intl7.intl;
  items[3] = obj4;
  const obj5 = { id: "24-hours", label: intl5.string(intl7.t["755t4q"]), value: metroRequire.HOURS_24 };
  intl5 = intl7.intl;
  items[4] = obj5;
  const obj6 = { id: "forever", label: intl6.string(intl7.t.r3LawO), value: metroRequire.ALWAYS };
  intl6 = intl7.intl;
  items[5] = obj6;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  let ignoreUnreadSetting;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  importDefault = tmp;
  let obj = SnowflakeUtilsDefault;
  const keys = obj.keys(channelOverrides);
  return keys.filter((item) => {
    const message_notifications = channelOverrides[item].message_notifications;
    const NULL = UserNotificationSettings.NULL;
    let num = channelOverrides[item].flags;
    const hasFlag = FlagUtilsAll.hasFlag;
    FlagUtilsAll;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = hasFlag(num, metroImportDefault.UNREADS_ALL_MESSAGES);
    const tmp5 = metroImportDefault;
    if (!hasFlagResult) {
      let num2 = tmp[item].flags;
      const hasFlag2 = tmp2(1385).hasFlag;
      FlagUtilsAll;
      if (num2 == null) {
        num2 = 0;
      }
      hasFlagResult = hasFlag2(num2, tmp5.UNREADS_ONLY_MENTIONS);
    }
    let tmp9 = !ignoreUnreadSetting.ignoreUnreadSetting && hasFlagResult;
    if (!tmp9) {
      tmp9 = !ignoreUnreadSetting.ignoreNotificationSetting && message_notifications !== NULL;
    }
    if (!tmp9) {
      let isMuted = !tmp8.ignoreMute;
      if (isMuted) {
        const obj = MuteTimers;
        isMuted = obj.computeIsMuted(tmp[item]);
      }
      tmp9 = isMuted;
    }
    return tmp9;
  });
};
export const useShouldUseNewNotificationSystem = function useShouldUseNewNotificationSystem() {
  let useNewNotifications;
  const items = [UserGuildSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => useNewNotifications.useNewNotifications);
};
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem() {
  return UserGuildSettingsStore.useNewNotifications;
};
