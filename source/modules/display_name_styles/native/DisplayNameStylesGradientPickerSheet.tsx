// Module ID: 14111
// Function ID: 107132
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: []
// Exports: default

// Module 14111 (DisplayNameStylesColorPickerSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const getColorPresetsForEffect = arg1(dependencyMap[3]).getColorPresetsForEffect;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[7]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.body = obj;
const obj1 = { bottom: 0, left: 6, padding: 0, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
obj.gradientContainer = obj1;
const obj2 = { "Bool(false)": true, "Bool(false)": "/assets/../discord_common/js/shared/images/flags", "Bool(false)": 70, "Bool(false)": 47, "Bool(false)": null, left: importDefault(dependencyMap[7]).space.PX_24, right: importDefault(dependencyMap[7]).space.PX_24 };
obj.dropperContainer = obj2;
const tmp3 = arg1(dependencyMap[5]);
obj.dropper = { borderColor: "white", padding: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.round, borderWidth: 1 };
const obj4 = { <string:1632221346>: "<string:1107296676>", <string:2722977214>: "M168.783 62.4673C169.134 62.0216 169.338 61.4772 169.364 60.9102C169.391 60.3433 169.24 59.7821 168.933 59.3052C168.626 58.8282 168.177 58.4593 167.65 58.2501C167.123 58.0408 166.544 58.0016 165.993 58.138C159.553 59.7673 148.486 60.7682 136.884 53.5759C119.052 42.5199 99.1962 56.4156 103.753 73.1277C108.868 91.8415 142.836 99.4992 153.88 79.0863C153.88 79.0863 163.203 76.526 162.366 67.1923C164.881 66.2055 167.093 64.5764 168.783 62.4673Z", borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.gradient = obj4;
const obj5 = { 1925026477: null, -1346530010: null, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_4 };
obj.optionContainer = obj5;
obj.swatchWrapper = { "Bool(true)": 20, "Bool(true)": "enable_gdm_all_reaction_notifications" };
const obj6 = { 9223372036854775807: "de", 9223372036854775807: "png", 0: true, -9223372036854775808: "/assets/../discord_common/js/shared/images/flags", 9223372036854775807: 70, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.pressable = obj6;
const obj3 = { borderColor: "white", padding: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.round, borderWidth: 1 };
obj.selected = { borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
obj.option = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const obj7 = { borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedEffectId) {
  selectedEffectId = selectedEffectId.selectedEffectId;
  const arg1 = selectedEffectId;
  const onSelectColors = selectedEffectId.onSelectColors;
  const importDefault = onSelectColors;
  const tmp = callback4();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[8]);
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let callback = displayNameStylesEffectConfig;
  let obj1 = arg1(dependencyMap[9]);
  const items = [selectedEffectId];
  const effectColorCount = obj1.getEffectColorCount(selectedEffectId);
  const memo = React.useMemo(() => callback2(selectedEffectId), items);
  const React = memo;
  const tmp4 = callback(React.useState(selectedEffectId.selectedColors), 2);
  const first = tmp4[0];
  let closure_6 = tmp4[1];
  const items1 = [first, onSelectColors];
  const items2 = [memo, displayNameStylesEffectConfig.defaultColors];
  callback = React.useCallback(() => {
    let obj = selectedEffectId(tmp[10]);
    const result = obj.triggerHapticFeedback(selectedEffectId(tmp[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first);
    obj = { default: false, colors: first };
    onSelectColors(tmp[11]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(tmp[11]);
    onSelectColors(tmp[12]).hideActionSheet();
  }, items1);
  const items3 = [first];
  const callback1 = React.useCallback(() => {
    let defaultColors = memo[0];
    if (null == defaultColors) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...defaultColors];
    closure_6(items);
  }, items2);
  let closure_7 = React.useCallback((arg0) => {
    const selectedEffectId = arg0;
    const obj = {};
    let num = 0;
    const tmp = onSelectColors(tmp[13]);
    if (null != first[arg0]) {
      num = tmp2;
    }
    obj.color = num;
    obj.onSelect = function onSelect(arg0) {
      const result = arg0(closure_2[10]).triggerHapticFeedback(arg0(closure_2[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
      callback((arr) => arr.map((arg0, arg1) => {
        let tmp = arg0;
        if (arg1 === closure_0) {
          tmp = closure_0;
        }
        return tmp;
      }));
    };
    obj.actionButtonVariant = "primary";
    tmp(obj, "stack");
  }, items3);
  let closure_8 = React.useCallback((arg0) => {
    const items = [...arg0];
    callback(items);
  }, []);
  obj = {};
  obj = { title: displayNameStylesEffectConfig.name };
  obj1 = { 9223372036854775807: 32768000, -9223372036854775808: 30653696 };
  const intl = arg1(dependencyMap[17]).intl;
  obj1.text = intl.string(arg1(dependencyMap[17]).t.XqMe3N);
  obj1.onPress = callback;
  obj.trailing = callback2(arg1(dependencyMap[16]).Button, obj1);
  obj.header = callback2(arg1(dependencyMap[15]).BottomSheetTitleHeader, obj);
  const obj2 = { style: tmp.body };
  const obj3 = { style: tmp.gradientContainer };
  const obj4 = { style: tmp.gradient, colors: first.map((color) => selectedEffectId(tmp[19]).int2hex(color)), start: { max: -536870861, guildId: -299892737 }, end: {} };
  const items4 = [callback2(importDefault(dependencyMap[18]), obj4), ];
  const obj5 = { style: tmp.dropperContainer };
  const tmp7 = importDefault(dependencyMap[18]);
  obj5.children = Array.from({ length: effectColorCount }).map((arg0, arg1) => {
    const selectedEffectId = arg1;
    let obj = {
      style: tmp.dropper,
      onPress() {
        return callback(arg1);
      }
    };
    const intl = selectedEffectId(tmp[17]).intl;
    obj = { number: arg1 + 1 };
    obj.accessibilityLabel = intl.formatToPlainString(selectedEffectId(tmp[17]).t.n5Ve0L, obj);
    obj.accessibilityRole = "button";
    obj.children = callback3(selectedEffectId(tmp[20]).EyeDropperIcon, {});
    return callback3(closure_6, obj, arg1);
  });
  items4[1] = callback2(first, obj5);
  obj3.children = items4;
  const items5 = [callback3(first, obj3), , ];
  const arr = Array.from({ length: effectColorCount });
  items5[1] = callback2(first, {
    style: tmp.optionContainer,
    children: memo.map((arr) => {
      const selectedEffectId = arr;
      let obj = onSelectColors(tmp[21]);
      let selected = obj.isEqual(arr, first);
      obj = { style: tmp.swatchWrapper };
      obj = {};
      const items = [callback3.pressable, ];
      if (selected) {
        selected = tmp.selected;
      }
      items[1] = selected;
      obj.style = items;
      obj.onPress = function onPress() {
        return callback(arg0);
      };
      const obj1 = { style: callback3.option, colors: arr.map((color) => color(closure_2[19]).int2hex(color)), start: { max: -536870861, guildId: -299892737 }, end: {} };
      obj.children = callback3(onSelectColors(callback3[18]), obj1);
      obj.children = callback3(selectedEffectId(callback3[22]).PressableOpacity, obj);
      return callback3(first, obj, arg1);
    })
  });
  const obj7 = {};
  const intl2 = arg1(dependencyMap[17]).intl;
  obj7.text = intl2.string(arg1(dependencyMap[17]).t.yBZMsQ);
  obj7.onPress = callback1;
  obj7.variant = "secondary";
  items5[2] = callback2(arg1(dependencyMap[16]).Button, obj7);
  obj2.children = items5;
  obj.children = callback3(first, obj2);
  return callback2(arg1(dependencyMap[14]).BottomSheet, obj);
};
