// Module ID: 17259
// Function ID: 17260
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 12692, 12674, 17180, 2]
// Exports: default

// Module 17259 (SearchIndexingScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12692 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 17180 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    search_tracking_TrackingDefault.trackSearchIndexing({ searchContext });
  }, items);
  const text = searchContext(12674).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
};
