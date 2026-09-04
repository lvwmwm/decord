// Module ID: 11245
// Function ID: 11246
// Name: ThreadNotificationsBottomSheet
// Dependencies: [1232, 21, 10017, 7138, 7089, 1233, 5640, 7697, 5643, 2]
// Exports: default

// Module 11245 (ThreadNotificationsBottomSheet)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import AbortCodes from "AbortCodes" /* 1232 */;

let closure_3 = AbortCodes.getThreadNotificationOptions;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  let obj = channel(10017);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = channel(1233).intl;
  obj[0] = intl.string(channel(1233).t.h850Ss);
  obj[0] = jsx(channel(7089).BottomSheetTitleHeader, { title: null });
  obj1 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null
  };
  const intl2 = channel(1233).intl;
  obj1[3] = intl2.string(channel(1233).t.h850Ss);
  obj1[4] = callback().map((label) => {
    const setting = label.setting;
    return callback(channel(table[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj[1] = jsx(channel(5640).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null
  });
  return jsx(channel(7138).ActionSheet, { title: null });
};
