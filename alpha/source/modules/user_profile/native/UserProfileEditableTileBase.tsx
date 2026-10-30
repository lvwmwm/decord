// Module ID: 16504
// Function ID: 16505
// Name: UserProfileEditableTileBase
// Dependencies: [19, 17, 21, 5009, 575, 6974, 1114, 2]
// Exports: default

// Module 16504 (UserProfileEditableTileBase)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Pressables from "Pressables" /* 6974 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditableTileBase.tsx");

export default function UserProfileEditableTileBase(arg0) {
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
};
