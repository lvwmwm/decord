// Module ID: 16559
// Function ID: 16560
// Name: SearchFreezeContainer
// Dependencies: [19, 17, 12271, 21, 4481, 16446, 586, 16560, 16647, 2]

// Module 16559 (SearchFreezeContainer)
import jsxDefault from "jsx" /* 16446 */;
import NoSearchResultsScreenDefault from "NoSearchResultsScreen" /* 16560 */;
import _modDef16647 from "module_16647" /* 16647 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "prototype" /* 12271 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
function SearchFreezeContainer(visible) {
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = callback3();
  let obj = { manualFreeze: !visible, placeholder: null, children: null };
  const items = [containerStyle, ];
  obj = { style: items, "aria-hidden": !visible, children };
  items[1] = visible ? tmp.visible : tmp.hidden;
  obj[2] = closure_5(View, obj);
  return closure_5(jsxDefault, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const memoResult = importAllResult.memo((width) => {
  const searchContext = width.searchContext;
  const containerStyle = width.containerStyle;
  let obj = searchContext(586);
  const items = [closure_4];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.isAutocompleteVisible(searchContext), items1);
  obj = { children: null };
  obj = { visible: !stateFromStores, containerStyle, children: callback(NoSearchResultsScreenDefault, { searchContext, width: width.width }) };
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(_modDef16647, { searchContext }) })];
  obj[0] = items2;
  return callback2(closure_6, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;
