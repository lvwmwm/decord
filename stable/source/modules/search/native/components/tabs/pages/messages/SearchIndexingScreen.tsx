// Module ID: 16812
// Function ID: 16813
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 12491, 12473, 16747, 2]
// Exports: default

// Module 16812 (SearchIndexingScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12491 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 16747 */;
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
  const text = searchContext(12473).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
};
