// Module ID: 8988
// Function ID: 8989
// Dependencies: [2, 8989, 6773, 8998, 8999, 6776]

// Module 8988
import sortByMatchScoreDefault from "sortByMatchScore" /* 6776 */;
import AutocompleterDefault from "Autocompleter" /* 8989 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8998 */;
import _modDef8999 from "module_8999" /* 8999 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6773 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8999;
export const sortByMatchScore = sortByMatchScoreDefault;
