// Module ID: 5446
// Function ID: 46573
// Name: ActionSheetHeaderBar
// Dependencies: [31, 27, 33, 4130, 689, 1212, 1450, 3834, 4528, 2]
// Exports: ActionSheetHeaderBar

// Module 5446 (ActionSheetHeaderBar)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ Pressable: closure_3, StyleSheet: closure_4, TouchableWithoutFeedback: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, marginBottom) => {
  let obj = {};
  obj = { marginBottom };
  if ("floating" === arg0) {
    obj = { left: 0, right: 0, position: "absolute" };
  }
  const merged = Object.assign(obj);
  obj.header = obj;
  if ("default" === arg0) {
    const obj2 = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG };
    let tmp2 = obj2;
  } else if ("floating" === arg0) {
    const obj3 = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED };
    tmp2 = obj3;
  } else if ("overlay" === arg0) {
    const obj4 = { backgroundColor: importDefault(689).unsafe_rawColors.WHITE };
    const merged1 = Object.assign(importDefault(689).shadows.SHADOW_LOW);
    tmp2 = obj4;
  }
  const merged2 = Object.assign(tmp2);
  obj.indicator = { alignSelf: "center", width: importDefault(689).modules.mobile.SHEET_HANDLE_WIDTH, height: importDefault(689).modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: importDefault(689).radii.sm, top: importDefault(689).modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  const obj5 = {};
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj5["height"] = arg1;
  obj5["marginTop"] = -arg1 + marginBottom;
  obj.accessibleDismiss = obj5;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderBar.native.tsx");

export const ActionSheetHeaderBar = function ActionSheetHeaderBar(accessibilityLabel) {
  let onPress;
  let style;
  let tabStyle;
  let variant;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  }
  ({ onPress, variant, style, tabStyle } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  let obj = require(3834) /* map */;
  const tmp3 = callback3(variant, importDefault(1450)().height, obj.useToken(importDefault(689).modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  let obj1 = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  obj = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true };
  obj = { style: items };
  items = [tmp3.header, style];
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
