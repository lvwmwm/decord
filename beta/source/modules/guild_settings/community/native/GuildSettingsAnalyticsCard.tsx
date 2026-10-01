// Module ID: 17504
// Function ID: 17505
// Name: GuildSettingsAnalyticsCard
// Dependencies: [19, 17, 21, 4836, 576, 4528, 5919, 4832, 4787, 1115, 10959, 17505, 2]
// Exports: default

// Module 17504 (GuildSettingsAnalyticsCard)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, line: obj3 };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsAnalyticsCard.tsx");

export default function GuildSettingsAnalyticsCard(metricKey) {
  let CircleInformationIcon;
  let intl2;
  let intl3;
  let isTrendingDown;
  let isTrendingUp;
  let items1;
  let items2;
  let items3;
  let localizedNumber;
  let obj4;
  let subtext;
  let title;
  metricKey = metricKey.metricKey;
  const description = metricKey.description;
  ({ localizedNumber, subtext } = metricKey);
  ({ title, isTrendingUp, isTrendingDown } = metricKey);
  const tmp = closure_8();
  const items = [description, metricKey];
  const tmp4 = metricKey;
  const callback = react.useCallback(() => {
    if (null != description) {
      const _HermesInternal = HermesInternal;
      const obj = { key: "GUILD_ANALYTICS_METRIC_INFO_" + metricKey, content: tmp };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      open(obj);
    }
  }, items);
  let obj = { variant: "secondary", border: "subtle", style: tmp.card, children: items2 };
  const obj2 = { style: tmp.line, children: items1 };
  const Card = metricKey(5919).Card;
  items1 = [closure_6(metricKey(4832).Text, { variant: "text-md/medium", color: "text-subtle", children: title }), ];
  let tmp7Result = null;
  if (null != description) {
    const obj3 = { onPress: callback, hitSlop: 14, accessibilityRole: "button", accessibilityLabel: description, children: closure_6(CircleInformationIcon, obj4) };
    obj4 = { size: "xs", color: description(576).colors.INTERACTIVE_ICON_DEFAULT };
    CircleInformationIcon = tmp4(4787).CircleInformationIcon;
    tmp7Result = tmp7(closure_4, obj3);
  }
  items1[1] = tmp7Result;
  items2 = [tmp3(tmp6, obj2), , ];
  let str = "text-muted";
  const Text = tmp4(4832).Text;
  if (null != localizedNumber) {
    str = "text-strong";
  }
  const obj5 = { variant: "text-lg/semibold", color: str, children: localizedNumber };
  if (localizedNumber == null) {
    const intl = tmp4(1115).intl;
    localizedNumber = intl.string(tmp4(1115).t.jHpxwo);
  }
  items2[1] = closure_6(Text, obj5);
  let tmp3Result = null;
  if (null != subtext) {
    let tmp7Result3 = null;
    const obj6 = { style: tmp.line, children: items3 };
    if (isTrendingUp) {
      const obj7 = { size: "xxs", color: description(576).colors.TEXT_FEEDBACK_POSITIVE, accessible: true, accessibilityLabel: intl2.string(tmp4(1115).t["8mcccd"]) };
      const ArrowLargeUpIcon = tmp4(10959).ArrowLargeUpIcon;
      intl2 = tmp4(1115).intl;
      tmp7Result3 = tmp7(ArrowLargeUpIcon, obj7);
    }
    items3 = [tmp7Result3, , ];
    let tmp7Result4 = null;
    if (isTrendingDown) {
      const obj8 = { size: "xxs", color: description(576).colors.TEXT_FEEDBACK_CRITICAL, accessible: true, accessibilityLabel: intl3.string(tmp4(1115).t.NLl6Q3) };
      const ArrowLargeDownIcon = tmp4(17505).ArrowLargeDownIcon;
      intl3 = tmp4(1115).intl;
      tmp7Result4 = tmp7(ArrowLargeDownIcon, obj8);
    }
    items3[1] = tmp7Result4;
    const obj9 = { variant: "text-xs/normal", color: "text-subtle", children: subtext };
    items3[2] = closure_6(tmp4(4832).Text, obj9);
    tmp3Result = tmp3(tmp6, obj6);
  }
  items2[2] = tmp3Result;
  return closure_7(Card, obj);
};
