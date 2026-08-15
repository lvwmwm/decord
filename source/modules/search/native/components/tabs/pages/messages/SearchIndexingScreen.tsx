// Module ID: 15919
// Function ID: 15920
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11531, 11511, 15862, 2]
// Exports: default

// Module 15919 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11531").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11511).getIndexingErrorText(searchContext);
  return jsx(importDefault(15862), { text });
};
