// Module ID: 11550
// Function ID: 11551
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1111, 21, 6551, 7433, 7395, 1112, 7227, 8339, 7229, 2]
// Exports: default

// Module 11550 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1111 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8339 */;
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
  let obj = channel(6551);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(7433).ActionSheet;
  ({ title: intl.string(channel(1112).t.h850Ss) });
  const BottomSheetTitleHeader = channel(7395).BottomSheetTitleHeader;
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
  const TableRadioGroup = channel(7227).TableRadioGroup;
  intl2 = channel(1112).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
