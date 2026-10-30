// Module ID: 17281
// Function ID: 17282
// Name: CustomTypingIndicatorAnimationPickerSheet
// Dependencies: [32, 19, 17, 21, 5009, 575, 6971, 5619, 1392, 1114, 3867, 7360, 13696, 6022, 2]
// Exports: default

// Module 17281 (CustomTypingIndicatorAnimationPickerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import Card_Card from "Card/Card" /* 6971 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp3;
const Text_Text = tmp3(5619);
function MotionOptionButton(isSelected) {
  let label;
  let onPress;
  let str;
  isSelected = isSelected.isSelected;
  ({ label, onPress } = isSelected);
  const tmp = closure_8();
  const items = [tmp.optionCard, ];
  let optionCardSelected = isSelected;
  const Card = Card_Card.Card;
  if (isSelected) {
    optionCardSelected = tmp.optionCardSelected;
  }
  items[1] = optionCardSelected;
  const obj = { style: items, onPress, border: str, accessibilityRole: "togglebutton", accessibilityState: { checked: isSelected }, children: metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: label }) };
  str = "faint";
  if (isSelected) {
    str = "none";
  }
  return metroRequire(Card, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, previewRow: obj3, optionCard: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" }, optionCardSelected: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
obj4 = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default function CustomTypingIndicatorAnimationPickerSheet(onChange) {
  let animation;
  let closure_2;
  let emojis;
  let initialAnimation;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj7;
  let obj8;
  let tmp4;
  onChange = onChange.onChange;
  animation = undefined;
  dependencyMap = undefined;
  ({ emojis, initialAnimation } = onChange);
  const tmp = closure_8();
  [animation, dependencyMap] = react.useState(initialAnimation);
  let obj = { value: onChange(1392).TypingIndicatorAnimation.UNSPECIFIED, label: intl.string(onChange(1114).t.PoWNfe) };
  intl = onChange(1114).intl;
  const items = [obj, , , ];
  const obj2 = { value: onChange(1392).TypingIndicatorAnimation.PULSE, label: intl2.string(animation(3867)["gyL/ce"]) };
  intl2 = onChange(1114).intl;
  items[1] = obj2;
  const obj3 = { value: onChange(1392).TypingIndicatorAnimation.RING, label: intl3.string(animation(3867).EgekTm) };
  intl3 = onChange(1114).intl;
  items[2] = obj3;
  const obj4 = { value: onChange(1392).TypingIndicatorAnimation.WAVE, label: intl4.string(animation(3867)["8t5EiI"]) };
  intl4 = onChange(1114).intl;
  items[3] = obj4;
  const obj5 = { contentStyles: tmp.content, dismissAccessibilityLabel: intl5.string(animation(3867)["q+qHax"]), children: items1 };
  const ActionSheet = onChange(7360).ActionSheet;
  intl5 = onChange(1114).intl;
  const obj6 = { style: tmp.previewRow, children: closure_6(tmp4, obj7) };
  obj7 = { config: obj8, size: 54 };
  obj8 = { emojis, animation, typingSuggestion: onChange(1392).TypingSuggestion.UNSPECIFIED };
  tmp4 = animation(13696);
  items1 = [closure_6(View, obj6), ];
  const obj9 = {
    spacing: 8,
    children: items2.map((arr, index) => {
      let obj = {
        direction: "horizontal",
        spacing: 8,
        children: arr.map((label) => {
          const obj = {
            label: label.label,
            isSelected: closure_1 === label.value,
            onPress() {
              const value = label.value;
              closure_2_2(value);
              onChange(value);
            }
          };
          return closure_1_6(closure_1_9, obj, label.label);
        })
      };
      const Stack = Stack_Stack.Stack;
      return metroRequire(Stack, obj, index);
    })
  };
  let Stack = onChange(6022).Stack;
  items2 = [items.slice(0, 2), items.slice(2, 4)];
  items1[1] = closure_6(Stack, obj9);
  return closure_7(ActionSheet, obj5);
};
