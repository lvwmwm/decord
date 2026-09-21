// Module ID: 17173
// Function ID: 17174
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 12612, 12594, 17108, 2]
// Exports: default

// Module 17173 (SearchIndexingScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12612 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 17108 */;
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
  const text = searchContext(12594).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
};
