// Module ID: 15193
// Function ID: 114628
// Dependencies: []

// Module 15193
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ header: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002275081962419046, "Null": 14169551476378310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000169759663356, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004602156230832967 }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: {}, headerControlsRight: { "Bool(false)": true, "Bool(false)": null }, suggestionsAnchor: { height: 0 }, suggestions: {}, suggestionsWithBackButton: { left: -28 } });
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
