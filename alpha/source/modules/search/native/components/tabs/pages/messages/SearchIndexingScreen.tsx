// Module ID: 19059
// Function ID: 19060
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 14125, 14111, 18978, 2]
// Exports: default

// Module 19059 (SearchIndexingScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingDefault from "Tracking" /* 14125 */;
import ErrorScreenDefault from "ErrorScreen" /* 18978 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = react.useEffect(() => {
    const obj = TrackingDefault;
    const obj2 = { searchContext };
    obj.trackSearchIndexing(obj2);
  }, items);
  let obj = searchContext(14111);
  const text = obj.getIndexingErrorText(searchContext);
  return jsx(ErrorScreenDefault, { text });
};
