// Module ID: 7513
// Function ID: 60196
// Name: OptionButton
// Dependencies: [31, 27, 653, 33, 4130, 689, 3848, 4660, 4126, 2]
// Exports: default

// Module 7513 (OptionButton)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let require = arg1;
function OptionButton(item) {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let selected;
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = item(onPress[6]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  const items = [item, onPress];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const callback = React.useCallback(() => {
    if (null != onPress) {
      onPress(item);
    }
  }, items);
  obj = { accessibilityRole, accessibilityState };
  let label = item.descriptiveLabel;
  if (null == label) {
    label = item.label;
  }
  obj.accessibilityLabel = label;
  const items1 = [tmp.button, ];
  let buttonSelected = null;
  if (selected) {
    buttonSelected = tmp.buttonSelected;
  }
  items1[1] = buttonSelected;
  obj.style = items1;
  obj.onPress = callback;
  obj = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: item.label.toUpperCase() };
  obj.children = closure_5(item(onPress[8]).Text, obj);
  return closure_5(item(onPress[7]).PressableOpacity, obj);
}
function extractKey(value) {
  return "" + value.value;
}
({ View: closure_3, FlatList: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.button = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.labelSelected = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_100 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj4 = { row: { paddingVertical: 12, paddingHorizontal: 16 } };
const obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_100 };
obj4.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
obj4.optionsWrapper = { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 };
obj4.optionsContainer = { paddingHorizontal: 12 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj4);
const obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const result = require("ME").fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
  let label;
  let onScrollBeginDrag;
  let options;
  let value;
  ({ label, value } = onChange);
  const require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  const tmp = callback2();
  let obj = { style: tmp.row };
  let tmp4 = null != label;
  if (tmp4) {
    obj = { style: tmp.label, variant: "heading-md/medium", accessibilityRole: "header", children: label.toUpperCase() };
    tmp4 = callback(require(onChange[8]).Text, obj);
  }
  const items = [tmp4, ];
  obj = {
    style: tmp.optionsWrapper,
    contentContainerStyle: tmp.optionsContainer,
    data: options,
    extraData: value,
    keyExtractor: extractKey,
    renderItem(item) {
      return outer1_5(outer1_9, {
        item: item.item,
        selected: item.item.value === closure_0,
        onPress(arg0) {
          let tmp2;
          if (null != outer1_1) {
            tmp2 = outer1_1(tmp);
          }
          return tmp2;
        }
      });
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    onScrollBeginDrag
  };
  items[1] = callback(closure_4, obj);
  obj.children = items;
  return closure_6(closure_3, obj);
};
