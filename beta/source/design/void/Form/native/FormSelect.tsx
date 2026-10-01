// Module ID: 8064
// Function ID: 8065
// Name: FormSelect
// Dependencies: [19, 17, 1074, 21, 4836, 576, 4548, 5435, 4832, 2]
// Exports: default

// Module 8064 (FormSelect)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import react_native from "react-native" /* 4548 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const Text_Text = tmp2(4832);
function OptionButton(item) {
  let Text;
  let accessibilityRole;
  let accessibilityState;
  let items1;
  let label;
  let obj3;
  let onPress;
  let selected;
  let str;
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = closure_7();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  const items = [item, onPress];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp(item);
    }
  }, items);
  const obj2 = { accessibilityRole, accessibilityState, accessibilityLabel: label, style: items1, onPress: callback, children: hasOwnProperty(Text, obj3) };
  label = item.descriptiveLabel;
  const PressableOpacity = Pressables.PressableOpacity;
  if (label == null) {
    label = item.label;
  }
  items1 = [tmp.button, ];
  let buttonSelected = null;
  if (selected) {
    buttonSelected = tmp.buttonSelected;
  }
  items1[1] = buttonSelected;
  obj3 = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: str.toUpperCase() };
  str = item.label;
  Text = Text_Text.Text;
  return hasOwnProperty(PressableOpacity, obj2);
}
function extractKey(value) {
  return "" + value.value;
}
({ View: c3, FlatList: closure_4, StyleSheet } = react_native2);
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonSelected: obj3, label: { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED }, labelSelected: { color: nativeDefault.unsafe_rawColors.BRAND_100 } };
obj2 = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
({ fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED });
({ color: nativeDefault.unsafe_rawColors.BRAND_100 });
let closure_7 = createStyles(obj);
createStyles = createStyles_mod;
const obj6 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED }, optionsWrapper: { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 }, optionsContainer: { paddingHorizontal: 12 } };
({ fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED });
let closure_9 = createStyles.createStyles(obj6);
const result = size.fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
  let items;
  let label;
  let onScrollBeginDrag;
  let options;
  let value;
  ({ label, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  let tmp = closure_9();
  let obj = { style: tmp.row, children: items };
  let tmp4 = null != label;
  const tmp2 = closure_6;
  const tmp3 = closure_3;
  if (tmp4) {
    const obj2 = { style: tmp.label, variant: "heading-md/medium", accessibilityRole: "header", children: label.toUpperCase() };
    const Text = require("Text/Text").Text;
    tmp4 = closure_5(Text, obj2);
  }
  items = [tmp4, ];
  const obj3 = {
    style: tmp.optionsWrapper,
    contentContainerStyle: tmp.optionsContainer,
    data: options,
    extraData: value,
    keyExtractor: extractKey,
    renderItem(item) {
      const obj = {
        item: item.item,
        selected: item.item.value === require,
        onPress(value) {
          let tmp;
          if (onChange != null) {
            tmp = onChange(value.value);
          }
          return tmp;
        }
      };
      return hasOwnProperty(OptionButton, obj);
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    onScrollBeginDrag
  };
  items[1] = closure_5(closure_4, obj3);
  return tmp2(tmp3, obj);
};
