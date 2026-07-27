// Module ID: 15460
// Function ID: 117965
// Name: SearchIndexingScreen
// Dependencies: [31, 33, 10040, 10042, 15403, 2]
// Exports: default

// Module 15460 (SearchIndexingScreen)
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
  const text = searchContext(10042).getIndexingErrorText(searchContext);
  return jsx(importDefault(15403), { text });
};
