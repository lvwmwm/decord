// Module ID: 12584
// Function ID: 12585
// Name: ConjureTipInlineCallout
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 6991, 1125, 8014, 2]

// Module 12584 (ConjureTipInlineCallout)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import XSmallIcon from "XSmallIcon" /* 6991 */;
import IconButton2 from "IconButton" /* 8014 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { dismissible: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipInlineCallout(arg0) {
  let children;
  let items;
  let onDismiss;
  const obj = react2;
  const cResult = obj.c(8);
  ({ onDismiss, children } = arg0);
  const tmp4 = closure_5();
  if (null == onDismiss) {
    return children;
  } else {
    let first;
    let tmp8;
    let tmp10;
    const _Symbol2 = Symbol;
    const dismissible = tmp4.dismissible;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = _false(XSmallIcon.XSmallIcon, { size: "sm" });
      cResult[0] = tmp7;
      first = tmp7;
    } else {
      first = cResult[0];
    }
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(intl2.t.WAI6xu);
      cResult[1] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] !== onDismiss) {
      const obj2 = { variant: "tertiary", size: "sm", icon: first, onPress: onDismiss, accessibilityLabel: tmp8 };
      const tmp12 = _false(IconButton2.IconButton, obj2);
      cResult[2] = onDismiss;
      cResult[3] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === children) {
      if (cResult[5] === tmp4.dismissible) {
        let tmp13;
        if (cResult[6] === tmp10) {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
    }
    const obj3 = { style: dismissible, children: items };
    items = [children, tmp10];
    const tmp16 = React3(View, obj3);
    cResult[4] = children;
    cResult[5] = tmp4.dismissible;
    cResult[6] = tmp10;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
}) : (function ConjureTipInlineCallout(arg0) {
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
});
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipInlineCallout.tsx");

export default tmp4;
