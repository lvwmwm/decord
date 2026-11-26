// Module ID: 8947
// Function ID: 8948
// Dependencies: [2, 8948, 6986, 8957, 8958, 6989]

// Module 8947
import sortByMatchScoreDefault from "sortByMatchScore" /* 6989 */;
import AutocompleterDefault from "Autocompleter" /* 8948 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8957 */;
import _modDef8958 from "module_8958" /* 8958 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6986 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8958;
export const sortByMatchScore = sortByMatchScoreDefault;
