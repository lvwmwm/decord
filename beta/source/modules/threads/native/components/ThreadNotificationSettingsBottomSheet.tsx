// Module ID: 10855
// Function ID: 10856
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1114, 21, 9548, 6618, 6570, 1115, 5997, 7184, 6000, 2]
// Exports: default

// Module 10855 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7184 */;
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
  let obj = channel(9548);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(6618).ActionSheet;
  ({ title: intl.string(channel(1115).t.h850Ss) });
  const BottomSheetTitleHeader = channel(6570).BottomSheetTitleHeader;
  intl = channel(1115).intl;
  ({
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    },
    accessibilityLabel: intl2.string(channel(1115).t.h850Ss),
    children: arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    })
  });
  const TableRadioGroup = channel(5997).TableRadioGroup;
  intl2 = channel(1115).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
