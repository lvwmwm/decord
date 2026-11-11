// Module ID: 13653
// Function ID: 13654
// Name: ConjureTipInlineCallout
// Dependencies: [19, 17, 21, 5243, 575, 7922, 7483, 1113, 2]
// Exports: default

// Module 13653 (ConjureTipInlineCallout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import XSmallIcon from "XSmallIcon" /* 7483 */;
import IconButton2 from "IconButton" /* 7922 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { dismissible: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipInlineCallout.tsx");

export default function ConjureTipInlineCallout(arg0) {
  let children;
  let intl;
  let items;
  let onDismiss;
  ({ onDismiss, children } = arg0);
  let tmp2 = children;
  if (null != onDismiss) {
    const obj = { style: tmp.dismissible, children: items };
    items = [children, ];
    const obj2 = { variant: "tertiary", size: "sm", icon: _false(XSmallIcon.XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl.string(intl2.t.WAI6xu) };
    const IconButton = IconButton2.IconButton;
    intl = intl2.intl;
    items[1] = _false(IconButton, obj2);
    tmp2 = React3(View, obj);
  }
  return tmp2;
};
