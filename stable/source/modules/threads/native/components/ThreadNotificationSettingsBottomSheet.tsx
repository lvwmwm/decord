// Module ID: 11306
// Function ID: 11307
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1112, 21, 6980, 7459, 7415, 1113, 7157, 8304, 7160, 2]
// Exports: default

// Module 11306 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1112 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8304 */;
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
  let obj = channel(6980);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(7459).ActionSheet;
  ({ title: intl.string(channel(1113).t.h850Ss) });
  const BottomSheetTitleHeader = channel(7415).BottomSheetTitleHeader;
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
  const TableRadioGroup = channel(7157).TableRadioGroup;
  intl2 = channel(1113).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
