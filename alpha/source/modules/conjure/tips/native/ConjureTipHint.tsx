// Module ID: 12195
// Function ID: 12196
// Name: ConjureTipHint
// Dependencies: [19, 17, 21, 4945, 587, 5195, 558, 576, 7907, 6882, 1128, 12196, 2]

// Module 12195 (ConjureTipHint)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5195 */;
import ConjureTipGutterRowDefault from "ConjureTipGutterRow" /* 12196 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipHint(arg0) {
  let IconButton;
  let XSmallIcon;
  let children;
  let icon;
  let intl;
  let items;
  let obj6;
  let obj7;
  let onDismiss;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(15);
  ({ icon, onDismiss, children } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== children) {
    const obj2 = { variant: textsmnormal, color: "text-muted", children };
    const tmp8 = React3(Text_Text.Text, obj2);
    cResult[0] = children;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.text) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === onDismiss) {
      let tmp11;
      if (cResult[6] === tmp4.dismiss) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.line) {
        if (cResult[9] === tmp9) {
          let tmp16;
          if (cResult[10] === tmp11) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === icon) {
            let tmp20;
            if (cResult[13] === tmp16) {
              tmp20 = cResult[14];
            }
            return tmp20;
          }
          const obj3 = { icon, tone: "muted", firstLine: textsmnormal, children: tmp16 };
          const tmp24 = React3(ConjureTipGutterRowDefault, obj3);
          cResult[12] = icon;
          cResult[13] = tmp16;
          cResult[14] = tmp24;
          tmp20 = tmp24;
        }
      }
      const obj4 = { style: tmp4.line, children: items };
      items = [tmp9, tmp11];
      const tmp19 = hasOwnProperty(View, obj4);
      cResult[8] = tmp4.line;
      cResult[9] = tmp9;
      cResult[10] = tmp11;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
    let tmp12 = null;
    if (null != onDismiss) {
      const obj5 = { style: tmp4.dismiss, children: React3(IconButton, obj6) };
      obj6 = { variant: "tertiary", size: "sm", icon: React3(XSmallIcon, obj7), onPress: onDismiss, accessibilityLabel: intl.string(intl2.t.WAI6xu) };
      IconButton = tmp(7907).IconButton;
      obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      XSmallIcon = tmp(6882).XSmallIcon;
      intl = tmp(1128).intl;
      tmp12 = React3(View, obj5);
    }
    cResult[5] = onDismiss;
    cResult[6] = tmp4.dismiss;
    cResult[7] = tmp12;
    tmp11 = tmp12;
  }
  const obj8 = { style: tmp4.text, children: tmp5 };
  const tmp10 = React3(View, obj8);
  cResult[2] = tmp4.text;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function ConjureTipHint(onDismiss) {
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
    IconButton = tmp8(7907).IconButton;
    obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    XSmallIcon = tmp8(6882).XSmallIcon;
    intl = tmp8(1128).intl;
    tmp2Result = tmp2(tmp7, obj5);
  }
  items[1] = tmp2Result;
  return React3(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipHint.tsx");

export default tmp5;
