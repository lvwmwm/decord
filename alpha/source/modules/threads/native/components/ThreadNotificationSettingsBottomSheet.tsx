// Module ID: 11123
// Function ID: 11124
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1113, 21, 6886, 7360, 7315, 1114, 7052, 8194, 7055, 2]
// Exports: default

// Module 11123 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8194 */;
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
  let obj = channel(6886);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(7360).ActionSheet;
  ({ title: intl.string(channel(1114).t.h850Ss) });
  const BottomSheetTitleHeader = channel(7315).BottomSheetTitleHeader;
  intl = channel(1114).intl;
  ({
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    },
    accessibilityLabel: intl2.string(channel(1114).t.h850Ss),
    children: arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    })
  });
  const TableRadioGroup = channel(7052).TableRadioGroup;
  intl2 = channel(1114).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
