// Module ID: 11007
// Function ID: 11008
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1127, 21, 558, 576, 6818, 7246, 1128, 8285, 6982, 7296, 6983, 2]

// Module 11007 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1127 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8285 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let setting;

let closure_3 = ThreadConstants.getThreadNotificationOptions;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadNotificationsBottomSheet(channel) {
  let first;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(8);
  channel = channel.channel;
  let obj2 = channel(6818);
  const threadNotificationSetting = obj2.useThreadNotificationSetting(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const BottomSheetTitleHeader = tmp(7246).BottomSheetTitleHeader;
    const intl = tmp(1128).intl;
    const tmp7 = <BottomSheetTitleHeader title={intl.string(channel(1128).t.h850Ss)} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function s(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult = intl2.string(channel(1128).t.h850Ss);
    const arr = closure_3();
    const mapped = arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    });
    cResult[3] = stringResult;
    cResult[4] = mapped;
  }
  if (cResult[5] === threadNotificationSetting) {
    let tmp14;
    if (cResult[6] === tmp8) {
      tmp14 = cResult[7];
    }
    return tmp14;
  }
  const ActionSheet = tmp(7296).ActionSheet;
  const tmp15 = <ActionSheet header={first}>{null}</ActionSheet>;
  cResult[5] = threadNotificationSetting;
  cResult[6] = tmp8;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : (function ThreadNotificationsBottomSheet(channel) {
  let arr;
  let intl;
  let intl2;
  channel = channel.channel;
  let obj = channel(6818);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(7296).ActionSheet;
  ({ title: intl.string(channel(1128).t.h850Ss) });
  const BottomSheetTitleHeader = channel(7246).BottomSheetTitleHeader;
  intl = channel(1128).intl;
  ({
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    },
    accessibilityLabel: intl2.string(channel(1128).t.h850Ss),
    children: arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    })
  });
  const TableRadioGroup = channel(6983).TableRadioGroup;
  intl2 = channel(1128).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default tmp2;
