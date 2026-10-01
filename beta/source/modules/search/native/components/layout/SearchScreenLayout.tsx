// Module ID: 16450
// Function ID: 16451
// Name: SearchScreenLayout
// Dependencies: [19, 17, 11822, 21, 4836, 16161, 504, 16451, 16551, 2]

// Module 16450 (SearchScreenLayout)
import react_native from "react-native" /* 17 */;
import AppFreezerDefault from "AppFreezer" /* 16161 */;
import SearchTabsLayoutDefault from "SearchTabsLayout" /* 16451 */;
import AutocompleteScreenDefault from "AutocompleteScreen" /* 16551 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let searchContext;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function SearchFreezeContainer(visible) {
  let children;
  let containerStyle;
  let obj2;
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = closure_8();
  const items = [containerStyle, ];
  const obj = { manualFreeze: !visible, placeholder: null, children: hasOwnProperty(View, obj2) };
  obj2 = { style: items, "aria-hidden": !visible, children };
  items[1] = visible ? tmp.visible : tmp.hidden;
  const tmp3 = AppFreezerDefault;
  return hasOwnProperty(tmp3, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const memoResult = react.memo((searchContext) => {
  let items2;
  searchContext = searchContext.searchContext;
  const containerStyle = searchContext.containerStyle;
  const width = searchContext.width;
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const obj = searchContext(504);
  const stateFromStores = obj.useStateFromStores(items, () => SearchQueryStore.isAutocompleteVisible(searchContext), items1);
  const obj2 = { children: items2 };
  items2 = [, ];
  const obj3 = { visible: !stateFromStores, containerStyle, children: closure_5(SearchTabsLayoutDefault, { searchContext, width }) };
  items2[0] = closure_5(SearchFreezeContainer, obj3);
  const obj4 = { visible: stateFromStores, containerStyle, children: closure_5(AutocompleteScreenDefault, { searchContext }) };
  items2[1] = closure_5(SearchFreezeContainer, obj4);
  return closure_7(closure_6, obj2);
});
const result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;
