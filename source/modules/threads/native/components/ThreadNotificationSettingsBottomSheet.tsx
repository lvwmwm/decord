// Module ID: 10347
// Function ID: 79861
// Name: ThreadNotificationsBottomSheet
// Dependencies: [1211, 33, 10228, 5500, 5186, 1212, 7519, 7007, 7518, 2]
// Exports: default

// Module 10347 (ThreadNotificationsBottomSheet)
import { getThreadNotificationOptions as closure_3 } from "AbortCodes";
import { jsx } from "jsxProd";

const result = require("computeThreadNotificationSetting").fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  let obj = channel(10228);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = {};
  obj = {};
  const intl = channel(1212).intl;
  obj.title = intl.string(channel(1212).t.h850Ss);
  obj.header = jsx(channel(5186).BottomSheetTitleHeader, {});
  const obj1 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = outer1_1(outer1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    }
  };
  const intl2 = channel(1212).intl;
  obj1.accessibilityLabel = intl2.string(channel(1212).t.h850Ss);
  obj1.children = callback().map((label) => {
    const setting = label.setting;
    return outer1_4(channel(outer1_2[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj.children = jsx(channel(7519).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = outer1_1(outer1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    }
  });
  return jsx(channel(5500).ActionSheet, {});
};
