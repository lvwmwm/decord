// Module ID: 10350
// Function ID: 79840
// Name: ThreadNotificationsBottomSheet
// Dependencies: [1211, 33, 10231, 5533, 5220, 1212, 7632, 6058, 7631, 2]
// Exports: default

// Module 10350 (ThreadNotificationsBottomSheet)
import { getThreadNotificationOptions as closure_3 } from "AbortCodes";
import { jsx } from "jsxProd";

const result = require("computeThreadNotificationSetting").fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  let obj = channel(10231);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = {};
  obj = {};
  const intl = channel(1212).intl;
  obj.title = intl.string(channel(1212).t.h850Ss);
  obj.header = jsx(channel(5220).BottomSheetTitleHeader, {});
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
  obj.children = jsx(channel(7632).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = outer1_1(outer1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    }
  });
  return jsx(channel(5533).ActionSheet, {});
};
