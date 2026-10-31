// Module ID: 12628
// Function ID: 12629
// Name: ConjureTipCallout
// Dependencies: [19, 17, 21, 575, 5014, 12621, 12477, 8028, 7054, 1113, 5624, 2]
// Exports: ConjureTipActions, ConjureTipBody, ConjureTipTitle, default

// Module 12628 (ConjureTipCallout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import XSmallIcon from "XSmallIcon" /* 7054 */;
import IconButton2 from "IconButton" /* 8028 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12477 */;
import ConjureTipGutterRowDefault from "ConjureTipGutterRow" /* 12621 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let rect;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const firstLineInset = nativeDefault.space.PX_12 + 1;
let createStyles = createStyles_mod;
let obj = { card: obj2, title: obj3, actions: obj4, dismiss: rect };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_32 };
obj4 = { flexDirection: "row", marginTop: nativeDefault.space.PX_8 };
rect = { position: "absolute", top: nativeDefault.space.PX_4, right: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipCallout.tsx");

export default function ConjureTipCallout(onDismiss) {
  let IconButton;
  let children;
  let icon;
  let intl;
  let items;
  let obj2;
  let obj4;
  let tmp5;
  let tmp6;
  onDismiss = onDismiss.onDismiss;
  ({ icon, children } = onDismiss);
  const tmp = closure_7();
  const obj = { icon, tone: "brand", firstLine: "text-md/semibold", firstLineInset, children: tmp5(tmp6, obj2) };
  obj2 = { style: tmp.card, children: items };
  items = [children, ];
  let tmp2Result = null;
  const tmp4 = ConjureTipGutterRowDefault;
  tmp5 = hasOwnProperty;
  tmp6 = ConjureNativeCardSurfaceDefault;
  if (null != onDismiss) {
    const obj3 = { style: tmp.dismiss, children: React3(IconButton, obj4) };
    obj4 = { variant: "tertiary", size: "sm", icon: React3(XSmallIcon.XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl.string(intl2.t.WAI6xu) };
    IconButton = IconButton2.IconButton;
    intl = intl2.intl;
    tmp2Result = tmp2(View, obj3);
  }
  items[1] = tmp2Result;
  return React3(tmp4, obj);
};
export function ConjureTipTitle(children) {
  children = children.children;
  const obj = { style: closure_7().title, children: React3(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children }) };
  return React3(View, obj);
}
export function ConjureTipBody(children) {
  return React3(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
}
export function ConjureTipActions(children) {
  const obj = { style: closure_7().actions, children: children.children };
  return React3(View, obj);
}
