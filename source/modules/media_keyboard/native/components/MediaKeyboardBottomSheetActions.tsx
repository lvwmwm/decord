// Module ID: 9695
// Function ID: 75452
// Dependencies: [31, 27, 33, 4130, 689, 477, 3941, 666, 3834, 1557, 1324, 4554, 4660, 4126, 2]

// Module 9695
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2, arg3) => {
  let PX_24 = arg0;
  let tmp = arg1;
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_4.absoluteFillObject);
  obj["alignItems"] = "center";
  obj["top"] = undefined;
  obj.wrap = obj;
  obj = { paddingVertical: importDefault(689).space.PX_8, marginHorizontal: importDefault(689).modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL };
  let obj3 = require(477) /* set */;
  if (obj3.isIOS()) {
    PX_24 = importDefault(689).space.PX_24;
  }
  obj.marginBottom = PX_24;
  obj.borderRadius = importDefault(689).modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (null != arg2) {
    tmp = arg2;
  }
  obj.backgroundColor = tmp;
  obj.paddingHorizontal = importDefault(689).modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj.borderWidth = importDefault(689).modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(importDefault(689).shadows.SHADOW_HIGH);
  const obj1 = {};
  const BORDER_MUTED = importDefault(689).colors.BORDER_MUTED;
  if (arg3) {
    obj1.borderColor = BORDER_MUTED;
    let tmp6 = obj1;
  } else {
    obj1.borderTopColor = BORDER_MUTED;
    tmp6 = obj1;
  }
  const merged2 = Object.assign(tmp6);
  obj.container = obj;
  const obj2 = { gap: importDefault(689).modules.mobile.MEDIA_KEYBOARD_BAR_GAP, alignItems: "stretch", flexDirection: "row", marginHorizontal: importDefault(689).modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  obj.buttonsContainer = obj2;
  obj3 = { flexBasis: 64, minHeight: 48, flexGrow: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", padding: importDefault(689).modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: importDefault(689).modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS, gap: 4 };
  obj.button = obj3;
  const obj4 = {};
  const merged3 = Object.assign(closure_4.absoluteFillObject);
  obj4["color"] = importDefault(689).colors.BACKGROUND_BASE_LOW;
  obj.gradient = obj4;
  return obj;
});
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetActions(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const overflowButtons = onHeightChange.overflowButtons;
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let closure_4;
  let obj = onHeightChange(3941);
  const gradientValue = obj.useGradientValue(onHeightChange(3941).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    let obj1 = importDefault(666)(gradientValue);
    hexResult = obj1.alpha(0.95).hex();
    let alphaResult = obj1.alpha(0.95);
  }
  const token = onHeightChange(3834).useToken(importDefault(689).colors.CARD_BACKGROUND_DEFAULT);
  let obj4 = onHeightChange(3834);
  const obj5 = importDefault(666)(token);
  let hexResult1 = importDefault(666)(token).alpha(0.95).hex();
  const alphaResult1 = importDefault(666)(token).alpha(0.95);
  const enabled = onHeightChange(1324).useMobileVisualRefreshConfig({ location: "MediaKeyboardBottomSheetActions" }).enabled;
  const obj7 = onHeightChange(1324);
  if (enabled) {
    hexResult1 = obj8.useToken(importDefault(689).colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
  }
  const tmp7Result = closure_8(importDefault(1557)().bottom, hexResult1, hexResult, enabled);
  importDefault = tmp7Result;
  obj8 = onHeightChange(3834);
  const tmp7 = closure_8;
  dependencyMap = onHeightChange(3834).useToken(importDefault(689).modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  const obj9 = onHeightChange(3834);
  importAllResult = onHeightChange(3834).useToken(importDefault(689).modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const obj10 = onHeightChange(3834);
  closure_4 = onHeightChange(3834).useToken(importDefault(689).modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
  let items = [tmp7Result.gradient.color];
  const memo = importAllResult.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
    const obj2 = _undefined(666)(_undefined.gradient.color);
    const items = [_undefined(666)(_undefined.gradient.color).alpha(0).hex(), ];
    const alphaResult = _undefined(666)(_undefined.gradient.color).alpha(0);
    const obj4 = _undefined(666)(_undefined.gradient.color);
    items[1] = _undefined(666)(_undefined.gradient.color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items);
  const items1 = [onHeightChange];
  obj = {
    style: tmp7Result.wrap,
    pointerEvents: "box-none",
    onLayout: importAllResult.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1)
  };
  obj = { style: tmp7Result.gradient };
  const obj11 = onHeightChange(3834);
  const merged = Object.assign(memo);
  obj["pointerEvents"] = "none";
  const items2 = [callback(importDefault(4554), obj), ];
  obj1 = { style: tmp7Result.container };
  const tmp10 = importDefault(4554);
  obj1.children = callback(closure_5, {
    style: tmp7Result.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel) => {
      obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: obj, disabled: accessibilityLabel.disabled, style: _undefined.button, onPress: accessibilityLabel.onPress };
      obj = { disabled: accessibilityLabel.disabled };
      obj = { size: "md" };
      let str = "text-muted";
      let str2 = "text-muted";
      if (!accessibilityLabel.disabled) {
        str2 = dependencyMap;
      }
      obj.color = str2;
      const items = [outer1_6(accessibilityLabel.IconComponent, obj), ];
      const obj1 = { lineClamp: 1, variant: closure_4 };
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      obj1.color = str;
      obj1.children = accessibilityLabel.text;
      items[1] = outer1_6(onHeightChange(4126).Text, obj1);
      obj.children = items;
      return outer1_7(onHeightChange(4660).PressableOpacity, obj, arg1);
    })
  });
  items2[1] = callback(closure_5, obj1);
  obj.children = items2;
  return callback2(closure_5, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx");

export default memoResult;
