// Module ID: 10286
// Function ID: 79449
// Name: getMuteTimeOptions
// Dependencies: [4325, 653, 662, 1212, 21, 1360, 3761, 566, 2]
// Exports: filterOverrides, getMuteTimeOptions, shouldShowUseNewNotificationSystem, useShouldUseNewNotificationSystem

// Module 10286 (getMuteTimeOptions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";

let closure_6;
let closure_7;
const require = arg1;
({ MuteUntilSeconds: closure_6, ChannelNotificationSettingsFlags: closure_7 } = MAX_FAVORITES);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let obj = { id: "15-minutes" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["8ot6gv"]);
  obj.value = closure_6.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { id: "1-hour" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.UMWBZr);
  obj.value = closure_6.HOURS_1;
  items[1] = obj;
  obj = { id: "3-hours" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.QmYWtu);
  obj.value = closure_6.HOURS_3;
  items[2] = obj;
  const obj1 = { id: "8-hours" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl4.string(require(1212) /* getSystemLocale */.t.EpAXPC);
  obj1.value = closure_6.HOURS_8;
  items[3] = obj1;
  const obj2 = { id: "24-hours" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl5.string(require(1212) /* getSystemLocale */.t["755t4q"]);
  obj2.value = closure_6.HOURS_24;
  items[4] = obj2;
  const obj3 = { id: "forever" };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl6.string(require(1212) /* getSystemLocale */.t.r3LawO);
  obj3.value = closure_6.ALWAYS;
  items[5] = obj3;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  let tmp = arg1;
  let closure_0 = channelOverrides;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  const importDefault = tmp;
  const keys = importDefault(21).keys(channelOverrides);
  return keys.filter((arg0) => {
    const flags = dependencyMap[arg0].flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    let hasFlagResult = outer1_2(outer1_3[5]).hasFlag(num, outer1_7.UNREADS_ALL_MESSAGES);
    if (!hasFlagResult) {
      const flags2 = dependencyMap[arg0].flags;
      let num2 = 0;
      if (null != flags2) {
        num2 = flags2;
      }
      hasFlagResult = outer1_2(outer1_3[5]).hasFlag(num2, outer1_7.UNREADS_ONLY_MENTIONS);
      const obj2 = outer1_2(outer1_3[5]);
    }
    let tmp7 = !tmp.ignoreUnreadSetting && hasFlagResult;
    if (!tmp7) {
      tmp7 = !tmp.ignoreNotificationSetting && tmp;
      const tmp9 = !tmp.ignoreNotificationSetting && tmp;
    }
    if (!tmp7) {
      let isMuted = !tmp.ignoreMute;
      if (isMuted) {
        isMuted = dependencyMap(outer1_3[6]).computeIsMuted(dependencyMap[arg0]);
        const obj3 = dependencyMap(outer1_3[6]);
      }
      tmp7 = isMuted;
    }
    return tmp7;
  });
};
export const useShouldUseNewNotificationSystem = function useShouldUseNewNotificationSystem(GuildUnreadAction) {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_4.useNewNotifications);
};
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem(GuildPopoutMenu) {
  return useNewNotifications.useNewNotifications;
};
