// Module ID: 15375
// Function ID: 117337
// Dependencies: [31, 27, 9103, 33, 4130, 4126, 2]

// Module 15375
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: require("SearchAutocompleteSelectAnalyticsActions").SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ section: obj });
const memoResult = require("result").memo((arg0) => {
  let title;
  let trailing;
  ({ title, trailing } = arg0);
  let obj = { style: callback3().section };
  obj = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title };
  const items = [callback(require(4126) /* Text */.Text, obj), trailing];
  obj.children = items;
  return callback2(View, obj);
});
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;
