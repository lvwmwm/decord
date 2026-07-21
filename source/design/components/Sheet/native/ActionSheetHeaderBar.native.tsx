// Module ID: 5223
// Function ID: 44177
// Name: ActionSheetHeaderBar
// Dependencies: []
// Exports: ActionSheetHeaderBar

// Module 5223 (ActionSheetHeaderBar)
importAll(dependencyMap[0]);
({ Pressable: closure_3, StyleSheet: closure_4, TouchableWithoutFeedback: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_10 = arg1(dependencyMap[3]).createStyles((arg0, arg1, marginBottom) => {
  let obj = {};
  obj = { marginBottom };
  if ("floating" === arg0) {
    obj = { <string:3798200520>: null, <string:391272364>: null, <string:1692895692>: null };
  }
  const merged = Object.assign(obj);
  obj.header = obj;
  if ("default" === arg0) {
    const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG };
    let tmp2 = obj2;
  } else if ("floating" === arg0) {
    const obj3 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED };
    tmp2 = obj3;
  } else if ("overlay" === arg0) {
    const obj4 = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE };
    const merged1 = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
    tmp2 = obj4;
  }
  const merged2 = Object.assign(tmp2);
  obj.indicator = { alignSelf: "center", width: importDefault(dependencyMap[4]).modules.mobile.SHEET_HANDLE_WIDTH, height: importDefault(dependencyMap[4]).modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: importDefault(dependencyMap[4]).radii.sm, top: importDefault(dependencyMap[4]).modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  const obj5 = {};
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj5["height"] = arg1;
  obj5["marginTop"] = -arg1 + marginBottom;
  obj.accessibleDismiss = obj5;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderBar.native.tsx");

export const ActionSheetHeaderBar = function ActionSheetHeaderBar(accessibilityLabel) {
  let onPress;
  let style;
  let tabStyle;
  let variant;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    const intl = arg1(dependencyMap[5]).intl;
    accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.WAI6xu);
  }
  ({ onPress, variant, style, tabStyle } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  let obj = arg1(dependencyMap[7]);
  const tmp3 = callback3(variant, importDefault(dependencyMap[6])().height, obj.useToken(importDefault(dependencyMap[4]).modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  let obj1 = arg1(dependencyMap[8]);
  obj = { onPress, onAccessibilityEscape: onPress, aria-hidden: true };
  obj = { style: items };
  const items = [tmp3.header, style];
  const items1 = [tmp3.indicator, tabStyle];
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj.children = callback(closure_6, { style: items1 });
  obj.children = callback(closure_6, obj);
  const tmp5 = callback(closure_5, obj);
  let tmp6 = tmp5;
  if (isScreenReaderEnabled) {
    obj1 = {};
    const obj2 = { style: tmp3.accessibleDismiss, accessible: true, accessibilityLabel, accessibilityRole: "button", onPress };
    const items2 = [callback(closure_3, obj2), tmp5];
    obj1.children = items2;
    tmp6 = callback2(closure_8, obj1);
  }
  return tmp6;
};
