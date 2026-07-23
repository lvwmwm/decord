// Module ID: 15390
// Function ID: 117466
// Name: SearchIndexingScreen
// Dependencies: [31, 33, 10076, 10078, 15333, 2]
// Exports: default

// Module 15390 (SearchIndexingScreen)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("toAnalyticsSearchFilterType").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(10078).getIndexingErrorText(searchContext);
  return jsx(importDefault(15333), { text });
};
