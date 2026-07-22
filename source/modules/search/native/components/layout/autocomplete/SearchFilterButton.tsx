// Module ID: 15214
// Function ID: 114794
// Dependencies: []

// Module 15214
const importAllResult = importAll(dependencyMap[0]);
const SearchFilterAddLocations = arg1(dependencyMap[1]).SearchFilterAddLocations;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  let obj = arg1(closure_2[3]);
  const validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const importDefault = validOrderedFilterTokens;
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((searchTokenType) => {
    const obj = { label: callback(closure_2[4]).getSearchTokenLabel(callback, searchTokenType) };
    const obj2 = callback(closure_2[4]);
    obj.IconComponent = callback(closure_2[4]).getSearchTokenIcon(searchTokenType);
    const obj3 = callback(closure_2[4]);
    obj.action = callback(closure_2[4]).getSearchTokenPressHandler(callback, searchTokenType, constants.CONTEXT_MENU);
    return obj;
  }), items);
  closure_2 = importDefault(closure_2[5])("SearchFilterButton");
  obj = { items: memo, align: "below" };
  const intl = arg1(closure_2[7]).intl;
  obj.title = intl.string(arg1(closure_2[7]).t.oYEmhB);
  obj.keyboardShouldPersistTaps = "handled";
  obj.children = function children(ref) {
    let obj = Object.create(null);
    obj.ref = 0;
    const merged = Object.assign(ref, obj);
    obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj["variant"] = "tertiary";
    const intl = searchContext(closure_2[7]).intl;
    obj["accessibilityLabel"] = intl.string(searchContext(closure_2[7]).t.kP6oFy);
    let str = "sm";
    if (closure_2) {
      str = "md";
    }
    obj["size"] = str;
    obj["icon"] = callback(searchContext(closure_2[9]).FiltersHorizontalIcon, {});
    return callback(searchContext(closure_2[8]).IconButton, obj);
  };
  return jsx(arg1(closure_2[6]).ContextMenu, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;
