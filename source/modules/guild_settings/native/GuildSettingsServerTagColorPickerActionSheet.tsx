// Module ID: 16138
// Function ID: 124412
// Name: GuildSettingsServerTagColorPickerActionSheet
// Dependencies: []
// Exports: default

// Module 16138 (GuildSettingsServerTagColorPickerActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS: closure_7, GuildTagBadgeSize: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const PX_16 = importDefault(dependencyMap[5]).space.PX_16;
let closure_12 = { "Bool(false)": null, "Bool(false)": null };
const tmp3 = arg1(dependencyMap[4]);
let closure_13 = arg1(dependencyMap[6]).createStyles((width) => {
  let obj = {};
  obj = { paddingHorizontal: PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
  obj.container = obj;
  obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24, paddingVertical: importDefault(dependencyMap[5]).space.PX_12, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_MUTED, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE };
  obj.preview = obj;
  obj.previewChiplet = { columnGap: importDefault(dependencyMap[5]).space.PX_8 };
  obj.colorTabs = { alignSelf: "center", width };
  obj.saturationValuePicker = { alignSelf: "center" };
  const obj1 = { columnGap: importDefault(dependencyMap[5]).space.PX_8 };
  obj.saturationValueColorBox = { borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
  obj.saturationValueColorBoxInner = { width, minWidth: width, height: 160, minHeight: 160 };
  const obj4 = { aze: "<string:16777479>", azj: "<string:36295491>", borderRadius: importDefault(dependencyMap[5]).radii.round, borderColor: importDefault(dependencyMap[5]).unsafe_rawColors.WHITE };
  obj.selector = obj4;
  obj.huePicker = { alignSelf: "center" };
  obj.hueColorBarInner = { width, minWidth: width, height: 24 };
  const obj6 = { "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(false)": 24, "Bool(false)": 24, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderColor: importDefault(dependencyMap[5]).colors.INPUT_BORDER_DEFAULT, backgroundColor: importDefault(dependencyMap[5]).colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12, textAlign: "center" };
  obj.hexInput = obj6;
  const obj2 = { borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
  const obj3 = { width, minWidth: width, height: 160, minHeight: 160 };
  const obj5 = { width, minWidth: width, height: 24 };
  obj.buttonGroup = { marginTop: importDefault(dependencyMap[5]).space.PX_24 };
  return obj;
});
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx");

export default function GuildSettingsServerTagColorPickerActionSheet(secondaryColor) {
  let badge;
  let primaryColor;
  let tag;
  ({ tag, badge, primaryColor } = secondaryColor);
  const arg1 = primaryColor;
  secondaryColor = secondaryColor.secondaryColor;
  const importDefault = secondaryColor;
  const onSelectColor = secondaryColor.onSelectColor;
  const dependencyMap = onSelectColor;
  let first2;
  let closure_8;
  let first3;
  let callback2;
  let closure_11;
  let closure_12;
  let callback3;
  let sharedValue2;
  let first4;
  let closure_16;
  let primary2;
  let tmp23;
  let callback;
  let callback1;
  callback2 = undefined;
  callback3 = undefined;
  let callback4;
  let throttledFunction;
  let callback5;
  const bound = Math.max(240, Math.min(importDefault(dependencyMap[9])().width - 2 * closure_11, 358));
  const tmp2 = callback3(bound);
  callback = tmp3;
  const first = first2[0];
  const React = first;
  const tmp6 = callback(React.useState(primaryColor), 2);
  const first1 = tmp6[0];
  const View = first1;
  let closure_6 = tmp6[1];
  let tmp8 = null;
  if (closure_6[badge] >= 2) {
    tmp8 = secondaryColor;
  }
  const tmp9 = callback(React.useState(tmp8), 2);
  first2 = tmp9[0];
  closure_8 = tmp9[1];
  const tmp11 = callback(React.useState("primary"), 2);
  first3 = tmp11[0];
  callback2 = tmp11[1];
  closure_11 = React.useRef(false);
  let obj = arg1(dependencyMap[8]);
  let primary = first1;
  if (null == first1) {
    primary = first.primary;
  }
  const hex2rgb2hsvResult = obj.hex2rgb2hsv(primary);
  let obj1 = arg1(dependencyMap[10]);
  let h;
  if (null != hex2rgb2hsvResult) {
    h = hex2rgb2hsvResult.h;
  }
  let num = 0;
  if (null != h) {
    num = h;
  }
  const sharedValue = obj1.useSharedValue(num);
  closure_12 = sharedValue;
  let obj2 = arg1(dependencyMap[10]);
  let s;
  if (null != hex2rgb2hsvResult) {
    s = hex2rgb2hsvResult.s;
  }
  let num2 = 100;
  if (null != s) {
    num2 = s;
  }
  const sharedValue1 = obj2.useSharedValue(num2 / 100);
  callback3 = sharedValue1;
  let obj3 = arg1(dependencyMap[10]);
  let v;
  if (null != hex2rgb2hsvResult) {
    v = hex2rgb2hsvResult.v;
  }
  let num3 = 100;
  if (null != v) {
    num3 = v;
  }
  sharedValue2 = obj3.useSharedValue(num3 / 100);
  let str = first1;
  if (null == first1) {
    str = first.primary;
  }
  const tmp21 = callback(React.useState(str.toUpperCase()), 2);
  first4 = tmp21[0];
  closure_16 = tmp21[1];
  primary2 = first1;
  if (null == first1) {
    primary2 = first.primary;
  }
  tmp23 = null;
  if (closure_6[badge] >= 2) {
    let secondary = first2;
    if (null == first2) {
      secondary = first.secondary;
    }
    tmp23 = secondary;
  }
  const items = [primary2, tmp23];
  callback = React.useCallback((arg0) => {
    if ("primary" === arg0) {
      let tmp3 = primary2;
    } else {
      tmp3 = null != tmp23 ? tmp23 : primary2;
    }
    return tmp3;
  }, items);
  const items1 = [primaryColor, secondaryColor];
  callback1 = React.useCallback((arg0) => "primary" === arg0 ? primaryColor : secondaryColor, items1);
  callback2 = React.useCallback((arg0, str) => {
    let formatted;
    if (null != str) {
      formatted = str.toUpperCase();
    }
    let tmp2 = null;
    if (null != formatted) {
      tmp2 = formatted;
    }
    if ("primary" === arg0) {
      callback(tmp2);
    } else {
      callback2(tmp2);
    }
  }, []);
  const items2 = [sharedValue, sharedValue1, sharedValue2];
  callback3 = React.useCallback((first4) => {
    const hex2rgb2hsvResult = primaryColor(onSelectColor[8]).hex2rgb2hsv(first4);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  }, items2);
  const items3 = [sharedValue, sharedValue1, callback2, sharedValue2];
  callback4 = React.useCallback((colorChannel) => {
    let h;
    let s;
    let v;
    let obj = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
    ({ h, s, v } = obj);
    const hsvToRgbWorkletResult = primaryColor(onSelectColor[7]).hsvToRgbWorklet({ h, s, v });
    const obj2 = primaryColor(onSelectColor[7]);
    const obj3 = primaryColor(onSelectColor[8]);
    const formatted = primaryColor(onSelectColor[8]).rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]).toUpperCase();
    callback4(formatted);
    callback2(colorChannel, formatted);
    obj = { colorChannel, hex: formatted };
    return obj;
  }, items3);
  let obj4 = arg1(dependencyMap[11]);
  const items4 = [callback4];
  throttledFunction = obj4.useThrottledFunction(callback4, 32, items4, closure_12);
  const items5 = [throttledFunction];
  callback5 = React.useCallback(() => {
    if (ref.current) {
      const flushResult = throttledFunction.flush();
      let tmp3 = null;
      if (null != flushResult) {
        tmp3 = flushResult;
      }
      if (null != tmp3) {
        ref.current = false;
      }
      return tmp3;
    } else {
      return null;
    }
  }, items5);
  const items6 = [first3, throttledFunction];
  const items7 = [throttledFunction];
  const callback6 = React.useCallback(() => {
    closure_11.current = true;
    throttledFunction(first3);
  }, items6);
  const effect = React.useEffect(() => () => closure_24.cancel(), items7);
  const items8 = [first3, throttledFunction, callback4];
  const items9 = [first3, callback2, throttledFunction, callback3];
  const callback7 = React.useCallback(() => {
    throttledFunction.cancel();
    closure_11.current = false;
    callback4(first3);
  }, items8);
  const items10 = [first3, first, callback1, callback2, throttledFunction, callback3];
  const callback8 = React.useCallback((first4) => {
    if (first4.length > 0) {
      if ("#" !== first4.charAt(0)) {
        const _HermesInternal = HermesInternal;
        let combined = "#" + first4.toUpperCase();
      }
      closure_11.current = false;
      throttledFunction.cancel();
      callback4(combined);
      if (null != obj.hex2rgb2hsv(combined)) {
        callback2(first3, combined);
        callback3(combined);
      }
    }
    combined = first4.toUpperCase();
  }, items9);
  const items11 = [first3, callback5, callback, throttledFunction, callback3];
  const callback9 = React.useCallback(() => {
    const tmp = callback1(first3);
    if ("primary" === first3) {
      let str = first.primary;
    } else {
      str = first.secondary;
    }
    if (null != tmp) {
      str = tmp;
    }
    closure_11.current = false;
    throttledFunction.cancel();
    callback4(str.toUpperCase());
    callback2(first3, tmp);
    callback3(str);
  }, items10);
  const callback10 = React.useCallback((arg0) => {
    let str = "secondary";
    if (0 === arg0) {
      str = "primary";
    }
    if (str !== first3) {
      callback5();
      throttledFunction.cancel();
      callback3(str);
      const formatted = callback(str).toUpperCase();
      callback4(formatted);
      callback3(formatted);
      const str2 = callback(str);
    }
  }, items11);
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = primaryColor(onSelectColor[12]).intl;
    obj.label = intl.string(primaryColor(onSelectColor[12]).t.PHT1N2);
    const items = [obj, ];
    obj = {};
    const intl2 = primaryColor(onSelectColor[12]).intl;
    obj.label = intl2.string(primaryColor(onSelectColor[12]).t.9/wzjF);
    items[1] = obj;
    return items;
  }, []);
  let obj5 = arg1(dependencyMap[13]);
  const items12 = [first1, first2, callback5, closure_6[badge] >= 2, first4, onSelectColor];
  const segmentedControlState = obj5.useSegmentedControlState({ items: memo, pageWidth: bound, onSetActiveIndex: callback10 });
  let str2 = "WUMP";
  const callback11 = React.useCallback(() => {
    if (null != obj.hex2rgb2hsv(first4)) {
      const tmp14 = callback5();
      let colorChannel;
      if (null != tmp14) {
        colorChannel = tmp14.colorChannel;
      }
      const str2 = "primary" === colorChannel ? tmp14.hex : first1;
      let colorChannel1;
      if (null != tmp14) {
        colorChannel1 = tmp14.colorChannel;
      }
      const str4 = "secondary" === colorChannel1 ? tmp14.hex : first2;
      let formatted;
      if (null != str2) {
        formatted = str2.toLowerCase();
      }
      let tmp5 = null;
      if (null != formatted) {
        tmp5 = formatted;
      }
      let tmp7 = null;
      if (onSelectColor) {
        let formatted1;
        if (null != str4) {
          formatted1 = str4.toLowerCase();
        }
        tmp7 = null;
        if (null != formatted1) {
          tmp7 = formatted1;
        }
      }
      onSelectColor(tmp5, tmp7);
      secondaryColor(onSelectColor[14]).hideActionSheet();
      const obj2 = secondaryColor(onSelectColor[14]);
    }
  }, items12);
  if ("" !== tag) {
    str2 = tag;
  }
  let obj6 = arg1(dependencyMap[8]);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.title = intl.string(arg1(dependencyMap[12]).t.T1IxYH);
  obj.header = first3(arg1(dependencyMap[16]).BottomSheetTitleHeader, obj);
  obj1 = { spacing: importDefault(dependencyMap[5]).space.PX_8, style: tmp2.container };
  obj2 = { accessible: true };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj3 = { tag: str2 };
  obj2.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[12]).t.R1AXap, obj3);
  obj2.style = tmp2.preview;
  obj4 = { guildTag: str2 };
  obj5 = { badge, width: closure_8.SIZE_36, height: closure_8.SIZE_36 };
  let tmp44;
  if (null != first1) {
    tmp44 = first1;
  }
  obj5.primaryTintColor = tmp44;
  let tmp45;
  if (closure_6[badge] >= 2) {
    if (null != first2) {
      tmp45 = first2;
    }
  }
  obj5.secondaryTintColor = tmp45;
  obj4.guildBadge = first3(arg1(dependencyMap[19]).GuildBadge, obj5);
  obj4.textVariant = "heading-xxl/semibold";
  obj4.textStyle = arg1(dependencyMap[20]).TextStyleSheet.heading-xxl/semibold;
  obj4.badgeSize = closure_8.SIZE_36;
  obj4.containerStyles = tmp2.previewChiplet;
  obj2.children = first3(arg1(dependencyMap[18]).BaseGuildTagChiplet, obj4);
  const items13 = [first3(View, obj2), , , , ];
  let tmp46 = null;
  if (closure_6[badge] >= 2) {
    obj6 = { style: tmp2.colorTabs };
    const obj7 = { state: segmentedControlState };
    obj6.children = first3(arg1(dependencyMap[21]).SegmentedControl, obj7);
    tmp46 = first3(View, obj6);
  }
  items13[1] = tmp46;
  items13[2] = first3(importDefault(dependencyMap[22]), { hue: sharedValue, saturation: sharedValue1, value: sharedValue2, saturationValuePickerStyle: tmp2.saturationValuePicker, saturationValueColorBoxStyle: tmp2.saturationValueColorBox, saturationValueColorBoxInnerStyle: tmp2.saturationValueColorBoxInner, saturationValueSelectorStyle: tmp2.selector, huePickerStyle: tmp2.huePicker, hueColorBarInnerStyle: tmp2.hueColorBarInner, hueSliderStyle: tmp2.selector, onPanUpdate: callback6, onPanFinalize: callback7 });
  const obj9 = { width: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022864589665961543, marginTop: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016590198330517403, paddingHorizontal: 203603270663150140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, justifyContent: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012562328943715765, backgroundColor: 282966.56772735715, alignItems: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000358774316436651 };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj9.accessibilityLabel = intl3.string(arg1(dependencyMap[12]).t.ozfa/h);
  obj9.value = first4;
  obj9.onChangeText = callback8;
  obj9.style = tmp2.hexInput;
  items13[3] = first3(arg1(dependencyMap[23]).BottomSheetTextInput, obj9);
  const obj10 = { spacing: importDefault(dependencyMap[5]).space.PX_8, style: tmp2.buttonGroup };
  const obj11 = { grow: true };
  const intl4 = arg1(dependencyMap[12]).intl;
  obj11.text = intl4.string(arg1(dependencyMap[12]).t.R3BPH+);
  obj11.onPress = callback11;
  obj11.disabled = null == obj6.hex2rgb2hsv(first4);
  const items14 = [first3(arg1(dependencyMap[24]).Button, obj11), ];
  const obj12 = {};
  const intl5 = arg1(dependencyMap[12]).intl;
  obj12.text = intl5.string(arg1(dependencyMap[12]).t.yBZMsQ);
  obj12.onPress = callback9;
  items14[1] = first3(arg1(dependencyMap[24]).Button, obj12);
  obj10.children = items14;
  items13[4] = callback2(arg1(dependencyMap[17]).Stack, obj10);
  obj1.children = items13;
  obj.children = callback2(arg1(dependencyMap[17]).Stack, obj1);
  return first3(arg1(dependencyMap[15]).BottomSheet, obj);
};
