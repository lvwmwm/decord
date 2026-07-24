// Module ID: 15377
// Function ID: 117286
// Dependencies: [31, 9169, 33, 15376, 15371, 1324, 9338, 1212, 7533, 13953, 2]

// Module 15377
import importAllResult from "result";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let obj = searchContext(15376);
  const validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((searchTokenType) => {
    const obj = { label: searchContext(15371).getSearchTokenLabel(outer1_0, searchTokenType) };
    const obj2 = searchContext(15371);
    obj.IconComponent = searchContext(15371).getSearchTokenIcon(searchTokenType);
    const obj3 = searchContext(15371);
    obj.action = searchContext(15371).getSearchTokenPressHandler(outer1_0, searchTokenType, outer2_4.CONTEXT_MENU);
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
    obj["icon"] = outer1_5(searchContext(13953).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return outer1_5(searchContext(7533).IconButton, obj);
  };
  return jsx(searchContext(9338).ContextMenu, { items: memo, align: "below" });
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;
