// Module ID: 15207
// Function ID: 114756
// Name: SearchFreezeContainer
// Dependencies: []

// Module 15207 (SearchFreezeContainer)
function SearchFreezeContainer(visible) {
  let children;
  let containerStyle;
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = callback3();
  let obj = { manualFreeze: !visible, placeholder: null };
  obj = { style: items, aria-hidden: !visible, children };
  const items = [containerStyle, visible ? tmp.visible : tmp.hidden];
  obj.children = callback(View, obj);
  return callback(importDefault(dependencyMap[5]), obj);
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((width) => {
  const searchContext = width.searchContext;
  const arg1 = searchContext;
  const containerStyle = width.containerStyle;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => autocompleteVisible.isAutocompleteVisible(searchContext), items1);
  obj = {};
  obj = { visible: !stateFromStores, containerStyle, children: callback(importDefault(dependencyMap[7]), { searchContext, width: width.width }) };
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(importDefault(dependencyMap[8]), { searchContext }) })];
  obj.children = items2;
  return callback2(closure_6, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;
