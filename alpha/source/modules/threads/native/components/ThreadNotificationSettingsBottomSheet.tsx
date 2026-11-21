// Module ID: 11670
// Function ID: 11671
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1111, 21, 6670, 7553, 7515, 1112, 7347, 8459, 7349, 2]
// Exports: default

// Module 11670 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1111 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8459 */;
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
  let obj = channel(6670);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(7553).ActionSheet;
  ({ title: intl.string(channel(1112).t.h850Ss) });
  const BottomSheetTitleHeader = channel(7515).BottomSheetTitleHeader;
  intl = channel(1112).intl;
  ({
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    },
    accessibilityLabel: intl2.string(channel(1112).t.h850Ss),
    children: arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    })
  });
  const TableRadioGroup = channel(7347).TableRadioGroup;
  intl2 = channel(1112).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
