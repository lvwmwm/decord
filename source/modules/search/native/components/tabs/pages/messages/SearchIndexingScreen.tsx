// Module ID: 15770
// Function ID: 15771
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11731, 11711, 15713, 2]
// Exports: default

// Module 15770 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11731").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11711).getIndexingErrorText(searchContext);
  return jsx(importDefault(15713), { text });
};
