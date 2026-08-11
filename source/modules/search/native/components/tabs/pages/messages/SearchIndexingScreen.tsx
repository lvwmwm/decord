// Module ID: 15795
// Function ID: 15796
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11735, 11715, 15738, 2]
// Exports: default

// Module 15795 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11735").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11715).getIndexingErrorText(searchContext);
  return jsx(importDefault(15738), { text });
};
