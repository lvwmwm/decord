// Module ID: 10272
// Function ID: 79363
// Name: getMuteTimeOptions
// Dependencies: []
// Exports: filterOverrides, getMuteTimeOptions, shouldShowUseNewNotificationSystem, useShouldUseNewNotificationSystem

// Module 10272 (getMuteTimeOptions)
let closure_4 = importDefault(dependencyMap[0]);
const UserNotificationSettings = arg1(dependencyMap[1]).UserNotificationSettings;
({ MuteUntilSeconds: closure_6, ChannelNotificationSettingsFlags: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = { 1636040136: 500, -1585032278: 1000, 50375260: 60000 };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let obj = { id: "15-minutes" };
  const intl = arg1(dependencyMap[3]).intl;
  obj.label = intl.string(arg1(dependencyMap[3]).t.8ot6gv);
  obj.value = closure_6.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { id: "1-hour" };
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.label = intl2.string(arg1(dependencyMap[3]).t.UMWBZr);
  obj.value = closure_6.HOURS_1;
  items[1] = obj;
  obj = { id: "3-hours" };
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.label = intl3.string(arg1(dependencyMap[3]).t.QmYWtu);
  obj.value = closure_6.HOURS_3;
  items[2] = obj;
  const obj1 = { id: "8-hours" };
  const intl4 = arg1(dependencyMap[3]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[3]).t.EpAXPC);
  obj1.value = closure_6.HOURS_8;
  items[3] = obj1;
  const obj2 = { id: "24-hours" };
  const intl5 = arg1(dependencyMap[3]).intl;
  obj2.label = intl5.string(arg1(dependencyMap[3]).t.755t4q);
  obj2.value = closure_6.HOURS_24;
  items[4] = obj2;
  const obj3 = { id: "forever" };
  const intl6 = arg1(dependencyMap[3]).intl;
  obj3.label = intl6.string(arg1(dependencyMap[3]).t.r3LawO);
  obj3.value = closure_6.ALWAYS;
  items[5] = obj3;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  let tmp = arg1;
  arg1 = channelOverrides;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  const importDefault = tmp;
  const keys = importDefault(dependencyMap[4]).keys(channelOverrides);
  return keys.filter((arg0) => {
    const flags = arg0[arg0].flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    let hasFlagResult = callback(closure_3[5]).hasFlag(num, constants2.UNREADS_ALL_MESSAGES);
    if (!hasFlagResult) {
      const flags2 = arg0[arg0].flags;
      let num2 = 0;
      if (null != flags2) {
        num2 = flags2;
      }
      hasFlagResult = callback(closure_3[5]).hasFlag(num2, constants2.UNREADS_ONLY_MENTIONS);
      const obj2 = callback(closure_3[5]);
    }
    let tmp7 = !tmp.ignoreUnreadSetting && hasFlagResult;
    if (!tmp7) {
      tmp7 = !tmp.ignoreNotificationSetting && tmp;
      const tmp9 = !tmp.ignoreNotificationSetting && tmp;
    }
    if (!tmp7) {
      let isMuted = !tmp.ignoreMute;
      if (isMuted) {
        isMuted = arg0(closure_3[6]).computeIsMuted(arg0[arg0]);
        const obj3 = arg0(closure_3[6]);
      }
      tmp7 = isMuted;
    }
    return tmp7;
  });
};
export const useShouldUseNewNotificationSystem = function useShouldUseNewNotificationSystem(GuildUnreadAction) {
  const items = [closure_4];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => useNewNotifications.useNewNotifications);
};
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem(GuildPopoutMenu) {
  return useNewNotifications.useNewNotifications;
};
