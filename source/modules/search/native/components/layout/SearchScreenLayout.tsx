// Module ID: 15331
// Function ID: 116969
// Name: SearchFreezeContainer
// Dependencies: [31, 27, 10077, 33, 4130, 15249, 566, 15332, 15416, 2]

// Module 15331 (SearchFreezeContainer)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function SearchFreezeContainer(visible) {
  let children;
  let containerStyle;
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = callback3();
  let obj = { manualFreeze: !visible, placeholder: null };
  obj = { style: items, "aria-hidden": !visible, children };
  items = [containerStyle, visible ? tmp.visible : tmp.hidden];
  obj.children = callback(View, obj);
  return callback(importDefault(15249), obj);
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const memoResult = require("result").memo((width) => {
  const searchContext = width.searchContext;
  const containerStyle = width.containerStyle;
  let obj = searchContext(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.isAutocompleteVisible(searchContext), items1);
  obj = {};
  obj = { visible: !stateFromStores, containerStyle, children: callback(importDefault(15332), { searchContext, width: width.width }) };
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(importDefault(15416), { searchContext }) })];
  obj.children = items2;
  return callback2(closure_6, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;
