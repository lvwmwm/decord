// Module ID: 15400
// Function ID: 117463
// Dependencies: [31, 9061, 33, 15399, 15394, 1324, 9231, 1212, 6625, 13965, 2]

// Module 15400
import importAllResult from "result";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let obj = searchContext(15399);
  const validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((searchTokenType) => {
    const obj = { label: searchContext(15394).getSearchTokenLabel(outer1_0, searchTokenType) };
    const obj2 = searchContext(15394);
    obj.IconComponent = searchContext(15394).getSearchTokenIcon(searchTokenType);
    const obj3 = searchContext(15394);
    obj.action = searchContext(15394).getSearchTokenPressHandler(outer1_0, searchTokenType, outer2_4.CONTEXT_MENU);
    return obj;
  }), items);
  const dependencyMap = validOrderedFilterTokens(1324)("SearchFilterButton");
  obj = { items: memo, align: "below" };
  let intl = searchContext(1212).intl;
  obj.title = intl.string(searchContext(1212).t.oYEmhB);
  obj.keyboardShouldPersistTaps = "handled";
  obj.children = function children(ref) {
    let obj = Object.create(null);
    obj.ref = 0;
    const merged = Object.assign(ref, obj);
    obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj["variant"] = "tertiary";
    const intl = searchContext(1212).intl;
    obj["accessibilityLabel"] = intl.string(searchContext(1212).t.kP6oFy);
    let str = "sm";
    if (dependencyMap) {
      str = "md";
    }
    obj["size"] = str;
    obj["icon"] = outer1_5(searchContext(13965).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return outer1_5(searchContext(6625).IconButton, obj);
  };
  return jsx(searchContext(9231).ContextMenu, { items: memo, align: "below" });
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;
