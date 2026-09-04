// Module ID: 16621
// Function ID: 16622
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 12290, 12272, 16561, 2]
// Exports: default

// Module 16621 (SearchIndexingScreen)
import _modDef16561 from "module_16561" /* 16561 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(12272).getIndexingErrorText(searchContext);
  return jsx(_modDef16561, { text });
};
