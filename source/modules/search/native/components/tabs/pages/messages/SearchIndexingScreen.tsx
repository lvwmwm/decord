// Module ID: 15555
// Function ID: 15556
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 10114, 10116, 15498, 2]
// Exports: default

// Module 15555 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_10114").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(10116).getIndexingErrorText(searchContext);
  return jsx(importDefault(15498), { text });
};
