// Module ID: 14856
// Function ID: 14857
// Name: UserProfileEditableTileBase
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 1126, 6191, 2]

// Module 14856 (UserProfileEditableTileBase)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Pressables from "Pressables" /* 6191 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let rect;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { tile: obj2, borderOverlay: rect };
obj2 = { height: 100, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm };
let closure_5 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditableTileBase(arg0) {
  let accessibilityLabel;
  let accessibilityValue;
  let children;
  let items;
  let onPress;
  let style;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  ({ onPress, accessibilityLabel, accessibilityValue, children, style } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== accessibilityValue) {
    const obj2 = { text: accessibilityValue };
    cResult[0] = accessibilityValue;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["4lAcxv"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === style) {
    let tmp8;
    let tmp9;
    if (cResult[4] === tmp4.tile) {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4.borderOverlay) {
      const obj3 = { style: tmp4.borderOverlay, pointerEvents: "none" };
      const tmp12 = _false(View, obj3);
      cResult[6] = tmp4.borderOverlay;
      cResult[7] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === accessibilityLabel) {
      if (cResult[9] === children) {
        if (cResult[10] === onPress) {
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp8) {
              let tmp13;
              if (cResult[13] === tmp9) {
                tmp13 = cResult[14];
              }
              return tmp13;
            }
          }
        }
      }
    }
    const obj4 = { onPress, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp5, accessibilityHint: tmp6, style: tmp8, children: items };
    items = [children, tmp9];
    const tmp15 = React3(Pressables.PressableHighlight, obj4);
    cResult[8] = accessibilityLabel;
    cResult[9] = children;
    cResult[10] = onPress;
    cResult[11] = tmp5;
    cResult[12] = tmp8;
    cResult[13] = tmp9;
    cResult[14] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp4.tile, style];
  cResult[3] = style;
  cResult[4] = tmp4.tile;
  cResult[5] = items1;
  tmp8 = items1;
}) : (function UserProfileEditableTileBase(arg0) {
  let accessibilityLabel;
  let accessibilityValue;
  let children;
  let intl;
  let items;
  let items1;
  let onPress;
  let style;
  ({ onPress, accessibilityLabel, accessibilityValue, children, style } = arg0);
  const tmp = closure_5();
  const obj = { onPress, accessibilityRole: "button", accessibilityLabel, accessibilityValue: { text: accessibilityValue }, accessibilityHint: intl.string(intl2.t["4lAcxv"]), style: items, children: items1 };
  const PressableHighlight = Pressables.PressableHighlight;
  intl = intl2.intl;
  items = [tmp.tile, style];
  items1 = [children, ];
  const obj2 = { style: tmp.borderOverlay, pointerEvents: "none" };
  items1[1] = _false(View, obj2);
  return React3(PressableHighlight, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditableTileBase.tsx");

export default tmp5;
