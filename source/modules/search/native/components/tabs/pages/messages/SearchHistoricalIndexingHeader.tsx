// Module ID: 15389
// Function ID: 117461
// Name: HistoricalIndexingHeader
// Dependencies: [31, 1921, 9103, 33, 4130, 10076, 5167, 4126, 1212, 2]
// Exports: default

// Module 15389 (HistoricalIndexingHeader)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
const require = arg1;
const SearchTabs = SearchAutocompleteSelectAnalyticsActions.SearchTabs;
({ SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchAutocompleteSelectAnalyticsActions);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } });
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp = callback();
  const React = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = React.useMemo(() => Number(documentsIndexed).toLocaleString(outer1_4.locale), items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = React.useMemo(() => {
    if (tab === outer1_5.MESSAGES) {
      const headerMessages = tmp.headerMessages;
    }
    return headerMessages;
  }, items1);
  const effect = React.useEffect(() => {
    let obj = documentsIndexed(tab[5]);
    obj = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj);
  }, items2);
  let obj = { variant: "primary", border: "subtle" };
  const items3 = [tmp.header, memo1];
  obj.style = items3;
  obj = { variant: "heading-sm/normal", color: "interactive-text-default" };
  const intl = searchContext(tab[8]).intl;
  obj.children = intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo });
  obj.children = jsx(searchContext(tab[7]).Text, { variant: "heading-sm/normal", color: "interactive-text-default" });
  return jsx(searchContext(tab[6]).Card, { variant: "heading-sm/normal", color: "interactive-text-default" });
};
