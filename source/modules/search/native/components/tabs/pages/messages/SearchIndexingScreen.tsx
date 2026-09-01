// Module ID: 16279
// Function ID: 16280
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11927, 11907, 16222, 2]
// Exports: default

// Module 16279 (SearchIndexingScreen)
import _modDef16222 from "module_16222" /* 16222 */;
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
  const text = searchContext(11907).getIndexingErrorText(searchContext);
  return jsx(_modDef16222, { text });
};
