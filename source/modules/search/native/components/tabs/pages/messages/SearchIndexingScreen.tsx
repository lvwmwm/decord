// Module ID: 15273
// Function ID: 115292
// Name: SearchIndexingScreen
// Dependencies: [0, 0, 0, 0, 4294967295, 0]
// Exports: default

// Module 15273 (SearchIndexingScreen)
import __exportStarResult1 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = arg1(dependencyMap[3]).getIndexingErrorText(searchContext);
  return jsx(importDefault(dependencyMap[4]), { text });
};
