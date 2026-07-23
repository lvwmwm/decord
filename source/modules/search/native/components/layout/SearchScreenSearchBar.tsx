// Module ID: 15320
// Function ID: 116875
// Dependencies: [31, 27, 33, 4130, 15321, 15323, 15330, 2]

// Module 15320
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: { flex: 1, flexGrow: 1 }, headerControlsRight: { paddingRight: 16, paddingLeft: 12 }, suggestionsAnchor: { height: 0 }, suggestions: { position: "absolute", left: 0, right: -50, top: 8 }, suggestionsWithBackButton: { left: -28 } });
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
  const items2 = [callback(importDefault(15321), obj), ];
  const obj1 = { style: tmp.suggestionsAnchor };
  const obj2 = { searchContext, onLayoutMeasure: onSuggestionsLayoutMesure, dismissed: suggestionsDismissed };
  const items3 = [tmp.suggestions, ];
  let suggestionsWithBackButton = null != backButton;
  if (suggestionsWithBackButton) {
    suggestionsWithBackButton = tmp.suggestionsWithBackButton;
  }
  items3[1] = suggestionsWithBackButton;
  obj2.containerStyle = items3;
  obj1.children = callback(importDefault(15323), obj2);
  items2[1] = callback(View, obj1);
  obj.children = items2;
  items1[1] = closure_4(View, obj);
  const tmp2 = closure_4;
  const tmp3 = View;
  const tmp4 = closure_4;
  const tmp7 = importDefault(15323);
  items1[2] = callback(View, { style: tmp.headerControlsRight, children: callback(importDefault(15330), { searchContext }) });
  obj.children = items1;
  return tmp2(tmp3, obj);
}));
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default memoResult;
