// Module ID: 9648
// Function ID: 75158
// Dependencies: []

// Module 9648
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles((arg0, arg1, arg2, arg3) => {
  let PX_24 = arg0;
  let tmp = arg1;
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_4.absoluteFillObject);
  obj["alignItems"] = "center";
  obj["top"] = undefined;
  obj.wrap = obj;
  obj = { paddingVertical: importDefault(dependencyMap[4]).space.PX_8, marginHorizontal: importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL };
  let obj3 = arg1(dependencyMap[5]);
  if (obj3.isIOS()) {
    PX_24 = importDefault(dependencyMap[4]).space.PX_24;
  }
  obj.marginBottom = PX_24;
  obj.borderRadius = importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (null != arg2) {
    tmp = arg2;
  }
  obj.backgroundColor = tmp;
  obj.paddingHorizontal = importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj.borderWidth = importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_HIGH);
  const obj1 = {};
  const BORDER_MUTED = importDefault(dependencyMap[4]).colors.BORDER_MUTED;
  if (arg3) {
    obj1.borderColor = BORDER_MUTED;
    let tmp6 = obj1;
  } else {
    obj1.borderTopColor = BORDER_MUTED;
    tmp6 = obj1;
  }
  const merged2 = Object.assign(tmp6);
  obj.container = obj;
  const obj2 = { justifyContent: 653283940, alignItems: -799868975, icon: 287764516, gap: importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BAR_GAP, marginHorizontal: importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL };
  obj.buttonsContainer = obj2;
  obj3 = { padding: importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING, borderRadius: importDefault(dependencyMap[4]).modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS };
  obj.button = obj3;
  const obj4 = {};
  const merged3 = Object.assign(closure_4.absoluteFillObject);
  obj4["color"] = importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW;
  obj.gradient = obj4;
  return obj;
});
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetActions(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const arg1 = onHeightChange;
  const overflowButtons = onHeightChange.overflowButtons;
  let importDefault;
  let closure_2;
  let React;
  let closure_4;
  let obj = arg1(closure_2[6]);
  const gradientValue = obj.useGradientValue(arg1(closure_2[6]).GradientPercentage.END);
  let hexResult = null;
  if (null != gradientValue) {
    let obj1 = importDefault(closure_2[7])(gradientValue);
    hexResult = obj1.alpha(0.95).hex();
    const alphaResult = obj1.alpha(0.95);
  }
  const token = arg1(closure_2[8]).useToken(importDefault(closure_2[4]).colors.CARD_BACKGROUND_DEFAULT);
  const obj4 = arg1(closure_2[8]);
  const obj5 = importDefault(closure_2[7])(token);
  let hexResult1 = importDefault(closure_2[7])(token).alpha(0.95).hex();
  const alphaResult1 = importDefault(closure_2[7])(token).alpha(0.95);
  const enabled = arg1(closure_2[10]).useMobileVisualRefreshConfig({ location: "MediaKeyboardBottomSheetActions" }).enabled;
  const obj7 = arg1(closure_2[10]);
  if (enabled) {
    hexResult1 = obj8.useToken(importDefault(closure_2[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
  }
  const tmp7Result = closure_8(importDefault(closure_2[9])().bottom, hexResult1, hexResult, enabled);
  importDefault = tmp7Result;
  const obj8 = arg1(closure_2[8]);
  const tmp7 = closure_8;
  closure_2 = arg1(closure_2[8]).useToken(importDefault(closure_2[4]).modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
  const obj9 = arg1(closure_2[8]);
  React = arg1(closure_2[8]).useToken(importDefault(closure_2[4]).modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
  const obj10 = arg1(closure_2[8]);
  closure_4 = arg1(closure_2[8]).useToken(importDefault(closure_2[4]).modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
  const items = [tmp7Result.gradient.color];
  const memo = React.useMemo(() => {
    const obj = { start: { "Null": false, "Null": true }, end: { "Null": 131072.00314656927, "Null": 0.000000000000000000000000000000000000000000000000000000011294471302334573 } };
    const obj2 = tmp7Result(closure_2[7])(tmp7Result.gradient.color);
    const items = [tmp7Result(closure_2[7])(tmp7Result.gradient.color).alpha(0).hex(), ];
    const alphaResult = tmp7Result(closure_2[7])(tmp7Result.gradient.color).alpha(0);
    const obj4 = tmp7Result(closure_2[7])(tmp7Result.gradient.color);
    items[1] = tmp7Result(closure_2[7])(tmp7Result.gradient.color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items);
  const items1 = [onHeightChange];
  obj = {
    style: tmp7Result.wrap,
    pointerEvents: "box-none",
    onLayout: React.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items1)
  };
  obj = { style: tmp7Result.gradient };
  const obj11 = arg1(closure_2[8]);
  const merged = Object.assign(memo);
  obj["pointerEvents"] = "none";
  const items2 = [callback(importDefault(closure_2[11]), obj), ];
  obj1 = { style: tmp7Result.container };
  const tmp10 = importDefault(closure_2[11]);
  obj1.children = callback(closure_5, {
    style: tmp7Result.buttonsContainer,
    children: overflowButtons.map((accessibilityLabel) => {
      let obj = { accessibilityRole: "button", accessibilityLabel: accessibilityLabel.text, accessibilityState: obj, disabled: accessibilityLabel.disabled, style: tmp7Result.button, onPress: accessibilityLabel.onPress };
      obj = { disabled: accessibilityLabel.disabled };
      obj = { size: "md" };
      let str = "text-muted";
      let str2 = "text-muted";
      if (!accessibilityLabel.disabled) {
        str2 = closure_2;
      }
      obj.color = str2;
      const items = [closure_6(accessibilityLabel.IconComponent, obj), ];
      const obj1 = { lineClamp: 1, variant: closure_4 };
      if (!accessibilityLabel.disabled) {
        str = closure_3;
      }
      obj1.color = str;
      obj1.children = accessibilityLabel.text;
      items[1] = closure_6(onHeightChange(closure_2[13]).Text, obj1);
      obj.children = items;
      return closure_7(onHeightChange(closure_2[12]).PressableOpacity, obj, arg1);
    })
  });
  items2[1] = callback(closure_5, obj1);
  obj.children = items2;
  return callback2(closure_5, obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx");

export default memoResult;
