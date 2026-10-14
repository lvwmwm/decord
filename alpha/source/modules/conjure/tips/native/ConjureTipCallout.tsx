// Module ID: 11837
// Function ID: 11838
// Name: ConjureTipCallout
// Dependencies: [19, 17, 21, 587, 5096, 558, 576, 7580, 6212, 1126, 11838, 11831, 5092, 2]

// Module 11837 (ConjureTipCallout)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import XSmallIcon from "XSmallIcon" /* 6212 */;
import IconButton2 from "IconButton" /* 7580 */;
import ConjureTipGutterRowDefault from "ConjureTipGutterRow" /* 11831 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11838 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5096 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let rect;
let tmp;
const Text_Text = tmp(5092);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipCallout(arg0) {
  let IconButton;
  let children;
  let icon;
  let intl;
  let items;
  let obj5;
  let onDismiss;
  const obj = react2;
  const cResult = obj.c(10);
  ({ icon, onDismiss, children } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === onDismiss) {
    let tmp5;
    if (cResult[1] === tmp4.dismiss) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp4.card) {
        let tmp9;
        if (cResult[5] === tmp5) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === icon) {
          let tmp13;
          if (cResult[8] === tmp9) {
            tmp13 = cResult[9];
          }
          return tmp13;
        }
        const obj2 = { icon, tone: "brand", firstLine: "text-md/semibold", firstLineInset, children: tmp9 };
        const tmp17 = React3(ConjureTipGutterRowDefault, obj2);
        cResult[7] = icon;
        cResult[8] = tmp9;
        cResult[9] = tmp17;
        tmp13 = tmp17;
      }
    }
    const obj3 = { style: tmp4.card, children: items };
    items = [children, tmp5];
    const tmp12 = hasOwnProperty(ConjureNativeCardSurfaceDefault, obj3);
    cResult[3] = children;
    cResult[4] = tmp4.card;
    cResult[5] = tmp5;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  let tmp6 = null;
  if (null != onDismiss) {
    const obj4 = { style: tmp4.dismiss, children: React3(IconButton, obj5) };
    obj5 = { variant: "tertiary", size: "sm", icon: React3(XSmallIcon.XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl.string(intl2.t.WAI6xu) };
    IconButton = tmp(7580).IconButton;
    intl = tmp(1126).intl;
    tmp6 = React3(View, obj4);
  }
  cResult[0] = onDismiss;
  cResult[1] = tmp4.dismiss;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureTipCallout(onDismiss) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipTitle(children) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  children = children.children;
  const tmp4 = closure_7();
  if (cResult[0] !== children) {
    const obj2 = { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children };
    const tmp7 = React3(Text_Text.Text, obj2);
    cResult[0] = children;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.title) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.title, children: tmp5 };
  const tmp9 = React3(View, obj3);
  cResult[2] = tmp4.title;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureTipTitle(children) {
  children = children.children;
  const obj = { style: closure_7().title, children: React3(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children }) };
  return React3(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipBody(children) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    const obj2 = { variant: "text-sm/normal", color: "text-muted", children };
    const tmp6 = React3(Text_Text.Text, obj2);
    cResult[0] = children;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ConjureTipBody(children) {
  return React3(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipActions(children) {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp2 = closure_7();
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === tmp2.actions) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: tmp2.actions, children };
  const tmp4 = React3(View, obj2);
  cResult[0] = children;
  cResult[1] = tmp2.actions;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function ConjureTipActions(children) {
  const obj = { style: closure_7().actions, children: children.children };
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipCallout.tsx");

export default tmp5;
export const ConjureTipTitle = tmp6;
export const ConjureTipBody = tmp7;
export const ConjureTipActions = tmp8;
