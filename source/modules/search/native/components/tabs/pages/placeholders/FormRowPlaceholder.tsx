// Module ID: 15367
// Function ID: 117294
// Name: FormRowPlaceholderItem
// Dependencies: [31, 27, 9103, 33, 4130, 689, 15340, 3991, 2]
// Exports: default

// Module 15367 (FormRowPlaceholderItem)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { itemContainer: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { flexDirection: "row", paddingHorizontal: 16, overflow: "hidden", height: 64, paddingVertical: require("SearchAutocompleteSelectAnalyticsActions").SEARCH_ROW_TAP_STATE_PADDING, alignItems: "center" };
let obj1 = { height: 48, width: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, marginRight: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.avatar = obj1;
_createForOfIteratorHelperLoose.innerContainer = { justifyContent: "center", flex: 1 };
const obj2 = { width: "50%", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: 16, marginBottom: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.upperText = obj2;
const obj3 = { justifyContent: "center", width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.lowerText = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx");

export default function FormRowPlaceholderItem(style) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(15340) /* useFullscreenPlaceholderCount */;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: items, pointerEvents: "none" };
  items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
  obj = { style: tmp.avatar };
  const items1 = [callback(View, obj), ];
  const obj1 = { style: tmp.innerContainer };
  const items2 = [callback(View, { style: tmp.upperText }), callback(View, { style: tmp.lowerText })];
  obj1.children = items2;
  items1[1] = callback2(View, obj1);
  obj.children = items1;
  return callback2(importDefault(3991).View, obj);
};
