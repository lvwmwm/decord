// Module ID: 16192
// Function ID: 16193
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 11844, 11824, 16135, 2]
// Exports: default

// Module 16192 (SearchIndexingScreen)
import _modDef16135 from "module_16135" /* 16135 */;
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
  const text = searchContext(11824).getIndexingErrorText(searchContext);
  return jsx(_modDef16135, { text });
};
