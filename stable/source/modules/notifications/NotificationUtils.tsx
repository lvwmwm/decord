// Module ID: 11075
// Function ID: 11076
// Name: notifications/NotificationUtils
// Dependencies: [6775, 1072, 1082, 1113, 11, 1396, 4949, 504, 2]
// Exports: filterOverrides, getMuteTimeOptions, useShouldUseNewNotificationSystem

// Module 11075 (notifications/NotificationUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl7 from "intl" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1396 */;
import MuteTimers from "MuteTimers" /* 4949 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ MuteUntilSeconds: metroRequire, ChannelNotificationSettingsFlags: metroImportDefault } = UserSettingsConstants);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const result = size.fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export function getMuteTimeOptions() {
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
}
export function filterOverrides(channelOverrides, arg1) {
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
      const hasFlag2 = tmp2(1396).hasFlag;
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
}
export function useShouldUseNewNotificationSystem() {
  let useNewNotifications;
  const items = [UserGuildSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => useNewNotifications.useNewNotifications);
}
