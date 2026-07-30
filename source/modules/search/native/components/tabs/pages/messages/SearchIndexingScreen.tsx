// Module ID: 15527
// Function ID: 15528
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 10097, 10099, 15470, 2]
// Exports: default

// Module 15527 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_10097").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(10099).getIndexingErrorText(searchContext);
  return jsx(importDefault(15470), { text });
};
