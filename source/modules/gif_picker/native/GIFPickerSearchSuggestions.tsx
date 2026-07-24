// Module ID: 9622
// Function ID: 74895
// Dependencies: [31, 27, 9611, 33, 4130, 689, 566, 4126, 1212, 4543, 2]

// Module 9622
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.suggestionsContainer = obj;
_createForOfIteratorHelperLoose = { justifyContent: "flex-start", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.footerSuggestionsContainer = _createForOfIteratorHelperLoose;
obj.footerSuggestionsTitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
const memoResult = importAllResult.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = callback3();
  let obj = onClickSuggestion(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_4.getSuggestions());
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.footerSuggestionsContainer };
    obj = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default" };
    const intl = onClickSuggestion(1212).intl;
    obj.children = intl.string(onClickSuggestion(1212).t["3JGJo2"]);
    const items1 = [callback(onClickSuggestion(4126).Text, obj), ];
    const obj1 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
          let closure_0 = text;
          const obj = {
            size: "sm",
            variant: "secondary",
            hitSlop: outer1_1(outer1_2[5]).space.PX_8,
            text,
            onPress() {
              return text(text);
            }
          };
          return outer1_5(onClickSuggestion(outer1_2[9]).Button, obj, text);
        })
    };
    items1[1] = callback(View, obj1);
    obj.children = items1;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default memoResult;
