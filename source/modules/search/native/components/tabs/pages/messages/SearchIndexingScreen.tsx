// Module ID: 15695
// Function ID: 15696
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11665, 11645, 15638, 2]
// Exports: default

// Module 15695 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11665").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11645).getIndexingErrorText(searchContext);
  return jsx(importDefault(15638), { text });
};
