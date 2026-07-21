// Module ID: 9578
// Function ID: 74619
// Dependencies: []

// Module 9578
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.suggestionsContainer = obj;
obj1 = { justifyContent: "flex-start", paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
obj.footerSuggestionsContainer = obj1;
const tmp2 = arg1(dependencyMap[3]);
obj.footerSuggestionsTitle = { marginBottom: importDefault(dependencyMap[5]).space.PX_16, textAlign: "center" };
let closure_7 = obj1.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[5]).space.PX_16, textAlign: "center" };
const memoResult = importAllResult.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  const arg1 = onClickSuggestion.onClickSuggestion;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.footerSuggestionsContainer };
    obj = { style: tmp.footerSuggestionsTitle };
    const intl = arg1(dependencyMap[8]).intl;
    obj.children = intl.string(arg1(dependencyMap[8]).t.3JGJo2);
    const items1 = [callback(arg1(dependencyMap[7]).Text, obj), ];
    const obj1 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
          const onClickSuggestion = text;
          const obj = {
            hitSlop: callback(closure_2[5]).space.PX_8,
            text,
            onPress() {
              return arg0(arg0);
            }
          };
          return callback2(onClickSuggestion(closure_2[9]).Button, obj, text);
        })
    };
    items1[1] = callback(View, obj1);
    obj.children = items1;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default memoResult;
