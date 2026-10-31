// Module ID: 12620
// Function ID: 12621
// Name: ConjureTipHint
// Dependencies: [19, 17, 21, 5014, 575, 5624, 12621, 8028, 7054, 1113, 2]
// Exports: default

// Module 12620 (ConjureTipHint)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import ConjureTipGutterRowDefault from "ConjureTipGutterRow" /* 12621 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "text-sm/normal";
let createStyles = createStyles_mod;
let obj = { line: obj2, text: { flexShrink: 1 }, dismiss: obj3 };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { height: Text_Text.TextStyleSheet["text-sm/normal"].lineHeight, justifyContent: "center" };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipHint.tsx");

export default function ConjureTipHint(onDismiss) {
  let IconButton;
  let XSmallIcon;
  let children;
  let icon;
  let intl;
  let items;
  let obj2;
  let obj4;
  let obj6;
  let obj7;
  let tmp6;
  onDismiss = onDismiss.onDismiss;
  ({ icon, children } = onDismiss);
  const tmp = closure_7();
  const obj = { icon, tone: "muted", firstLine: textsmnormal, children: tmp6(View, obj2) };
  obj2 = { style: tmp.line, children: items };
  const obj3 = { style: tmp.text, children: React3(Text_Text.Text, obj4) };
  obj4 = { variant: textsmnormal, color: "text-muted", children };
  const tmp5 = ConjureTipGutterRowDefault;
  items = [React3(View, obj3), ];
  let tmp2Result = null;
  tmp6 = hasOwnProperty;
  if (null != onDismiss) {
    const obj5 = { style: tmp.dismiss, children: React3(IconButton, obj6) };
    obj6 = { variant: "tertiary", size: "sm", icon: React3(XSmallIcon, obj7), onPress: onDismiss, accessibilityLabel: intl.string(intl2.t.WAI6xu) };
    IconButton = tmp8(8028).IconButton;
    obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    XSmallIcon = tmp8(7054).XSmallIcon;
    intl = tmp8(1113).intl;
    tmp2Result = tmp2(tmp7, obj5);
  }
  items[1] = tmp2Result;
  return React3(tmp5, obj);
};
