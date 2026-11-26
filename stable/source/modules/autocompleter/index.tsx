// Module ID: 10247
// Function ID: 10248
// Dependencies: [2, 10248, 7071, 10257, 10258, 7074]

// Module 10247
import sortByMatchScoreDefault from "sortByMatchScore" /* 7074 */;
import AutocompleterDefault from "Autocompleter" /* 10248 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10257 */;
import _modDef10258 from "module_10258" /* 10258 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7071 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10258;
export const sortByMatchScore = sortByMatchScoreDefault;
