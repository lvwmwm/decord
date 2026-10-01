// Module ID: 6575
// Function ID: 6576
// Name: ActionSheetHeaderBar
// Dependencies: [19, 17, 21, 4836, 576, 1115, 1479, 4531, 5266, 2]
// Exports: ActionSheetHeaderBar

// Module 6575 (ActionSheetHeaderBar)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useToken from "useToken" /* 4531 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0, height, marginBottom) => {
  let obj6;
  let rect;
  let tmp4;
  const obj = { marginBottom };
  if ("floating" === arg0) {
    rect = { left: 0, right: 0, position: "absolute" };
  }
  const obj2 = { header: obj, indicator: size, accessibleDismiss: obj6 };
  const merged = Object.assign(rect);
  size = { alignSelf: "center", width: nativeDefault.modules.mobile.SHEET_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.sm, top: nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  if ("default" === arg0) {
    tmp4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
    const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  } else if ("floating" === arg0) {
    tmp4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
    const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  } else if ("overlay" === arg0) {
    const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
    const merged1 = Object.assign(tmp2(576).shadows.SHADOW_LOW);
    tmp4 = obj5;
  }
  const merged2 = Object.assign(tmp4);
  obj6 = { height, marginTop: -height + marginBottom };
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj2;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderBar.native.tsx");

export const ActionSheetHeaderBar = function ActionSheetHeaderBar(accessibilityLabel) {
  let items;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let onPress;
  let style;
  let tabStyle;
  let variant;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    const intl = intl2.intl;
    accessibilityLabel = intl.string(intl2.t.WAI6xu);
  }
  ({ onPress, variant, style, tabStyle } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  const height = useWindowDimensionsDefault().height;
  const obj = useToken;
  const tmp3 = closure_10(variant, height, obj.useToken(nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  const obj3 = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true, children: metroImportDefault(metroRequire, obj4) };
  obj4 = { style: items, children: metroImportDefault(metroRequire, obj5) };
  items = [tmp3.header, style];
  obj5 = { style: items1 };
  items1 = [tmp3.indicator, tabStyle];
  const obj2 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = metroImportDefault(hasOwnProperty, obj3);
  let tmp7 = tmp6;
  const tmp5 = metroImportDefault;
  if (isScreenReaderEnabled) {
    const obj6 = { children: items2 };
    const obj7 = { style: tmp3.accessibleDismiss, accessible: true, accessibilityLabel, accessibilityRole: "button", onPress };
    items2 = [tmp5(_false, obj7), tmp6];
    tmp7 = React4(metroImportAll, obj6);
  }
  return tmp7;
};
