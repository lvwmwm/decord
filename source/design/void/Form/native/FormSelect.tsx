// Module ID: 7507
// Function ID: 60139
// Name: OptionButton
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0]
// Exports: default

// Module 7507 (OptionButton)
import closure_2 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { Fonts } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function OptionButton(item) {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let selected;
  item = item.item;
  const arg1 = item;
  ({ selected, onPress } = item);
  const dependencyMap = onPress;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
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
  obj.children = closure_5(arg1(dependencyMap[8]).Text, obj);
  return closure_5(arg1(dependencyMap[7]).PressableOpacity, obj);
}
function extractKey(value) {
  return "" + value.value;
}
({ View: closure_3, FlatList: closure_4 } = __exportStarResult1);
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderWidth: __exportStarResult1.StyleSheet.hairlineWidth, shadowColor: require("__exportStarResult1").colors.BLACK, shadowOffset: { bhk: "0 0 4px 0 hsl(none 0% 0% / 0.08)", bic: "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))" }, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOWEST };
obj.button = obj;
obj.buttonSelected = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BRAND };
obj.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: require("__exportStarResult1").colors.TEXT_MUTED };
const obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: require("__exportStarResult1").colors.TEXT_MUTED };
obj.labelSelected = { color: require("__exportStarResult1").unsafe_rawColors.BRAND_100 };
let closure_7 = obj.createStyles(obj);
const obj3 = { color: require("__exportStarResult1").unsafe_rawColors.BRAND_100 };
const obj4 = { row: { flex: "<string:2236743682>", display: "<string:1941427526>" } };
const obj7 = arg1(dependencyMap[4]);
obj4.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("__exportStarResult1").colors.TEXT_MUTED };
obj4.optionsWrapper = {};
obj4.optionsContainer = { paddingHorizontal: 12 };
let closure_8 = obj7.createStyles(obj4);
const result = __exportStarResult1.fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
  let label;
  let onScrollBeginDrag;
  let options;
  let value;
  ({ label, value } = onChange);
  const arg1 = value;
  const dependencyMap = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  const tmp = callback3();
  let obj = { style: tmp.row };
  let tmp4 = null != label;
  if (tmp4) {
    obj = { style: tmp.label, children: label.toUpperCase() };
    tmp4 = callback(arg1(dependencyMap[8]).Text, obj);
  }
  const items = [tmp4, ];
  obj = {
    style: tmp.optionsWrapper,
    contentContainerStyle: tmp.optionsContainer,
    data: options,
    extraData: value,
    keyExtractor: extractKey,
    renderItem(item) {
      return callback(closure_9, {
        item: item.item,
        selected: item.item.value === value,
        onPress(arg0) {
          let tmp2;
          if (null != callback) {
            tmp2 = callback(tmp);
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
