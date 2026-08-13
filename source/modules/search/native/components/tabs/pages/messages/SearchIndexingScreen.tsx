// Module ID: 15851
// Function ID: 15852
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11791, 11771, 15794, 2]
// Exports: default

// Module 15851 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11791").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11771).getIndexingErrorText(searchContext);
  return jsx(importDefault(15794), { text });
};
