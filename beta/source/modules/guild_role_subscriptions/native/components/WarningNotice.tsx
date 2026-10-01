// Module ID: 17511
// Function ID: 17512
// Name: WarningNotice
// Dependencies: [19, 17, 21, 4836, 576, 5899, 5909, 4832, 5281, 2]
// Exports: default

// Module 17511 (WarningNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 5909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp7;
const components_Button_Button = tmp7(5281);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, horizontalContainer: { flexDirection: "row", alignItems: "center" }, message: { flex: 1, marginStart: 10, textAlignVertical: "center" }, actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" }, containerYellow: obj3, textYellow: obj4, alertIcon: { alignSelf: "flex-start", width: 20, height: 20 } };
obj2 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  let ctaLabel;
  let disabled;
  let items;
  let items1;
  let items2;
  let items3;
  let notice;
  let obj6;
  let onClick;
  let style;
  let submitting;
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: items3 };
  items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  const obj2 = { style: tmp.horizontalContainer, children: items1 };
  const obj3 = { style: tmp.alertIcon, source: AssetRegistryDefault };
  const tmp6 = FastImageDefault;
  items1 = [React3(tmp6, obj3), ];
  const obj4 = { style: items2, variant: "text-sm/medium", color: "interactive-text-active", children: notice };
  items2 = [, ];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  items1[1] = React3(Text_Text.Text, obj4);
  items3 = [hasOwnProperty(View, obj2), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  const tmp2 = hasOwnProperty;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: React3(components_Button_Button.Button, obj6) };
    obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    tmp4Result = tmp4(tmp3, obj5);
  }
  items3[1] = tmp4Result;
  return tmp2(View, obj);
};
