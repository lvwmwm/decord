// Module ID: 16529
// Function ID: 16530
// Name: SearchHistoricalIndexingHeader
// Dependencies: [19, 2112, 7303, 21, 4836, 11841, 5919, 4832, 1115, 2]
// Exports: default

// Module 16529 (SearchHistoricalIndexingHeader)
import Fragment from "Fragment" /* 21 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let headerMessages;

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
let hasOwnProperty;
let react = react_mod;
({ SearchTabs: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const jsx = Fragment.jsx;
let obj = { header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  let intl;
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp = closure_7();
  react = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = react.useMemo(() => {
    const NumberResult = Number(documentsIndexed);
    return NumberResult.toLocaleString(LocaleStore.locale);
  }, items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = react.useMemo(() => {
    if (tab === hasOwnProperty.MESSAGES) {
      headerMessages = headerMessages.headerMessages;
    }
    return headerMessages;
  }, items1);
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj2);
  }, items2);
  const items3 = [tmp.header, memo1];
  const Card = searchContext(tab[6]).Card;
  let obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", children: intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo }) };
  const Text = searchContext(tab[7]).Text;
  intl = searchContext(tab[8]).intl;
  return <Card variant="primary" border="subtle" style={items3}>{null}</Card>;
};
