// Module ID: 9248
// Function ID: 9249
// Dependencies: [2, 9249, 6985, 9258, 9259, 6988]

// Module 9248
import sortByMatchScoreDefault from "sortByMatchScore" /* 6988 */;
import AutocompleterDefault from "Autocompleter" /* 9249 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9258 */;
import _modDef9259 from "module_9259" /* 9259 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6985 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9259;
export const sortByMatchScore = sortByMatchScoreDefault;
