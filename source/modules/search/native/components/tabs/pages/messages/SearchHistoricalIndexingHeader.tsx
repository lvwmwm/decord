// Module ID: 15264
// Function ID: 115244
// Name: HistoricalIndexingHeader
// Dependencies: []
// Exports: default

// Module 15264 (HistoricalIndexingHeader)
let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const SearchTabs = tmp2.SearchTabs;
({ SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = tmp2);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const importDefault = documentsIndexed;
  const tab = searchContext.tab;
  const dependencyMap = tab;
  const tmp = callback();
  const React = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = React.useMemo(() => Number(documentsIndexed).toLocaleString(locale.locale), items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = React.useMemo(() => {
    if (tab === constants.MESSAGES) {
      const headerMessages = tmp.headerMessages;
    }
    return headerMessages;
  }, items1);
  const effect = React.useEffect(() => {
    let obj = documentsIndexed(tab[5]);
    obj = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj);
  }, items2);
  let obj = { style: items3 };
  const items3 = [tmp.header, memo1];
  obj = { hasMaxConnections: false, isBoostOnlySubscription: false };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.format(arg1(dependencyMap[8]).t.4Y3O+O, { count: memo });
  obj.children = jsx(arg1(dependencyMap[7]).Text, obj);
  return jsx(arg1(dependencyMap[6]).Card, obj);
};
