// Module ID: 19814
// Function ID: 19815
// Name: WarningNotice
// Dependencies: [19, 17, 21, 5009, 575, 7080, 5619, 5629, 2]
// Exports: default

// Module 19814 (WarningNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7080 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp5;
const components_Button_Button = tmp5(5629);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, horizontalContainer: { flexDirection: "row", alignItems: "center" }, message: { flex: 1, marginStart: 10, textAlignVertical: "center" }, actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" }, containerYellow: obj3, alertIcon: { alignSelf: "flex-start", width: 20, height: 20 } };
obj2 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  let ctaLabel;
  let disabled;
  let items;
  let items1;
  let items2;
  let notice;
  let obj6;
  let onClick;
  let style;
  let submitting;
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: items2 };
  items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  const obj2 = { style: tmp.horizontalContainer, children: items1 };
  const obj3 = { style: tmp.alertIcon, size: "custom", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, secondaryColor: nativeDefault.colors.WHITE };
  const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
  items1 = [React3(CircleErrorIcon, obj3), ];
  const obj4 = { style: tmp.message, variant: "text-sm/medium", color: "text-feedback-warning", children: notice };
  items1[1] = React3(Text_Text.Text, obj4);
  items2 = [hasOwnProperty(View, obj2), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  const tmp2 = hasOwnProperty;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: React3(components_Button_Button.Button, obj6) };
    obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    tmp4Result = tmp4(tmp3, obj5);
  }
  items2[1] = tmp4Result;
  return tmp2(View, obj);
};
