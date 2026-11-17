// Module ID: 12348
// Function ID: 12349
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1112, 21, 7074, 7961, 7923, 1113, 7755, 8875, 7757, 2]
// Exports: default

// Module 12348 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1112 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8875 */;
import size from "module_2" /* 2 */;

let setting;

let closure_3 = ThreadConstants.getThreadNotificationOptions;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  let arr;
  let intl;
  let intl2;
  channel = channel.channel;
  let obj = channel(7074);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(7961).ActionSheet;
  ({ title: intl.string(channel(1113).t.h850Ss) });
  const BottomSheetTitleHeader = channel(7923).BottomSheetTitleHeader;
  intl = channel(1113).intl;
  ({
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    },
    accessibilityLabel: intl2.string(channel(1113).t.h850Ss),
    children: arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    })
  });
  const TableRadioGroup = channel(7755).TableRadioGroup;
  intl2 = channel(1113).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
