// Module ID: 10232
// Function ID: 10233
// Name: GIFPickerSearchSuggestions
// Dependencies: [19, 17, 10223, 21, 5009, 575, 504, 5619, 1114, 5629, 2]

// Module 10232 (GIFPickerSearchSuggestions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10223 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
    const obj3 = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: intl.string(onClickSuggestion(1114).t["3JGJo2"]) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
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
