// Module ID: 15633
// Function ID: 15634
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11616, 11596, 15576, 2]
// Exports: default

// Module 15633 (SearchIndexingScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11616").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11596).getIndexingErrorText(searchContext);
  return jsx(importDefault(15576), { text });
};
