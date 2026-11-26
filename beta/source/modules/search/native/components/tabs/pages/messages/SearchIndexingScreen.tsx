// Module ID: 18826
// Function ID: 18827
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 13224, 13210, 18744, 2]
// Exports: default

// Module 18826 (SearchIndexingScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingDefault from "Tracking" /* 13224 */;
import ErrorScreenDefault from "ErrorScreen" /* 18744 */;
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
  let obj = searchContext(13210);
  const text = obj.getIndexingErrorText(searchContext);
  return jsx(ErrorScreenDefault, { text });
};
