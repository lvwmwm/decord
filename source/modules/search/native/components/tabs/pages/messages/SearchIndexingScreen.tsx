// Module ID: 15533
// Function ID: 15534
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 10101, 10103, 15476, 2]
// Exports: default

// Module 15533 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_10101").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(10103).getIndexingErrorText(searchContext);
  return jsx(importDefault(15476), { text });
};
