// Module ID: 16449
// Function ID: 16450
// Name: SearchFilterButton
// Dependencies: [19, 7302, 21, 16448, 16445, 7358, 1115, 7363, 14536, 2]

// Module 16449 (SearchFilterButton)
import Fragment from "Fragment" /* 21 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let searchContext;

const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const jsx = Fragment.jsx;
const memoResult = react.memo((searchContext) => {
  let onClose;
  let onOpen;
  searchContext = searchContext.searchContext;
  let validOrderedFilterTokens;
  ({ onOpen, onClose } = searchContext);
  let obj = searchContext(validOrderedFilterTokens[3]);
  validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = react.useMemo(() => validOrderedFilterTokens.map((item) => {
    let obj2;
    let obj3;
    let obj4;
    const obj = { label: obj2.getSearchTokenLabel(closure_1_0, item), IconComponent: obj3.getSearchTokenIcon(item), action: obj4.getSearchTokenPressHandler(closure_1_0, item, constants.CONTEXT_MENU) };
    obj2 = searchContext(validOrderedFilterTokens[4]);
    obj3 = searchContext(validOrderedFilterTokens[4]);
    obj4 = searchContext(validOrderedFilterTokens[4]);
    return obj;
  }), items);
  const ContextMenu = searchContext(validOrderedFilterTokens[5]).ContextMenu;
  let intl = searchContext(validOrderedFilterTokens[6]).intl;
  return <ContextMenu items={memo} align="below" title={intl.string(searchContext(validOrderedFilterTokens[6]).t.oYEmhB)} ignoreKeyboardHide onOpen={onOpen} onClose={onClose}>{function children(ref) {
    ref = ref.ref;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const IconButton = searchContext(validOrderedFilterTokens[7]).IconButton;
    const merged1 = Object.assign(merged);
    const intl = searchContext(validOrderedFilterTokens[6]).intl;
    return <IconButton ref={ref} variant="tertiary" accessibilityLabel={intl.string(searchContext(validOrderedFilterTokens[6]).t.kP6oFy)} size="md" icon={jsx(searchContext(validOrderedFilterTokens[8]).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" })} />;
  }}</ContextMenu>;
});
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;
