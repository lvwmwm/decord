// Module ID: 9943
// Function ID: 9944
// Dependencies: [2, 9944, 6556, 9947, 9948, 6559]

// Module 9943
import sortByMatchScoreDefault from "sortByMatchScore" /* 6559 */;
import AutocompleterDefault from "Autocompleter" /* 9944 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9947 */;
import _modDef9948 from "module_9948" /* 9948 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6556 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9948;
export const sortByMatchScore = sortByMatchScoreDefault;
