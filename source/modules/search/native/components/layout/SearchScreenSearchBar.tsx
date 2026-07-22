// Module ID: 15204
// Function ID: 114705
// Dependencies: []

// Module 15204
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ header: { <string:4138288979>: null, <string:1685970655>: 16, <string:2493557563>: 8, <string:1407571810>: "heading-sm/normal" }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: { "Bool(true)": "<string:2491613185>", "Bool(true)": "<string:2941583362>" }, headerControlsRight: { accessibilityRole: "Array", rejectWithError: "isArray" }, suggestionsAnchor: { height: 0 }, suggestions: {}, suggestionsWithBackButton: { left: -28 } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(importAllResult.forwardRef((arg0, ref) => {
  let backButton;
  let onSuggestionsLayoutMesure;
  let searchContext;
  let setSuggestionsDismissed;
  let suggestionsDismissed;
  ({ searchContext, backButton } = arg0);
  ({ onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = arg0);
  const tmp = callback2();
  let obj = {};
  const items = [tmp.header, ];
  let headerWithBackButton = null != backButton;
  if (headerWithBackButton) {
    headerWithBackButton = tmp.headerWithBackButton;
  }
  items[1] = headerWithBackButton;
  obj.style = items;
  const items1 = [backButton, , ];
  obj = { style: tmp.headerSearch };
  obj = { ref, searchContext, setSuggestionsDismissed };
  const items2 = [callback(importDefault(dependencyMap[4]), obj), ];
  const obj1 = { style: tmp.suggestionsAnchor };
  const obj2 = { searchContext, onLayoutMeasure: onSuggestionsLayoutMesure, dismissed: suggestionsDismissed };
  const items3 = [tmp.suggestions, ];
  let suggestionsWithBackButton = null != backButton;
  if (suggestionsWithBackButton) {
    suggestionsWithBackButton = tmp.suggestionsWithBackButton;
  }
  items3[1] = suggestionsWithBackButton;
  obj2.containerStyle = items3;
  obj1.children = callback(importDefault(dependencyMap[5]), obj2);
  items2[1] = callback(View, obj1);
  obj.children = items2;
  items1[1] = closure_4(View, obj);
  const tmp2 = closure_4;
  const tmp3 = View;
  const tmp4 = closure_4;
  const tmp7 = importDefault(dependencyMap[5]);
  items1[2] = callback(View, { style: tmp.headerControlsRight, children: callback(importDefault(dependencyMap[6]), { searchContext }) });
  obj.children = items1;
  return tmp2(tmp3, obj);
}));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default memoResult;
