// Module ID: 15622
// Function ID: 15623
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 10253, 10255, 15565, 2]
// Exports: default

// Module 15622 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_10253").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(10255).getIndexingErrorText(searchContext);
  return jsx(importDefault(15565), { text });
};
