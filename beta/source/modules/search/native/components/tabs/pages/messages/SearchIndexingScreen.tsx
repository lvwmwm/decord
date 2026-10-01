// Module ID: 16530
// Function ID: 16531
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11841, 11823, 16454, 2]
// Exports: default

// Module 16530 (SearchIndexingScreen)
import Fragment from "Fragment" /* 21 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import ErrorScreenDefault from "ErrorScreen" /* 16454 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext };
    obj.trackSearchIndexing(obj2);
  }, items);
  let obj = searchContext(11823);
  const text = obj.getIndexingErrorText(searchContext);
  return jsx(ErrorScreenDefault, { text });
};
