// Module ID: 9834
// Function ID: 9835
// Name: GIFPickerSearchSuggestions
// Dependencies: [19, 17, 9826, 21, 4836, 576, 504, 4832, 1115, 5281, 2]

// Module 9834 (GIFPickerSearchSuggestions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 9826 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { suggestionsContainer: obj2, footerSuggestionsContainer: obj3, footerSuggestionsTitle: obj4 };
obj2 = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  let intl;
  let items1;
  let suggestions;
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = closure_7();
  let obj = onClickSuggestion(504);
  const items = [GIFPickerViewStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.footerSuggestionsContainer, children: items1 };
    const obj3 = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: intl.string(onClickSuggestion(1115).t["3JGJo2"]) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1 = [closure_5(Text, obj3), ];
    const obj4 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
          let closure_0 = text;
          const obj = {
            size: "sm",
            variant: "secondary",
            hitSlop: nativeDefault.space.PX_8,
            text,
            onPress() {
              return onClickSuggestion(closure_0);
            }
          };
          const Button = onClickSuggestion(dependencyMap[9]).Button;
          return closure_1_5(Button, obj, text);
        })
    };
    items1[1] = closure_5(View, obj4);
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default memoResult;
