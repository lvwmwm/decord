// Module ID: 9067
// Function ID: 9068
// Dependencies: [2, 9068, 6827, 9077, 9078, 6830]

// Module 9067
import sortByMatchScoreDefault from "sortByMatchScore" /* 6830 */;
import AutocompleterDefault from "Autocompleter" /* 9068 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9077 */;
import _modDef9078 from "module_9078" /* 9078 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6827 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9078;
export const sortByMatchScore = sortByMatchScoreDefault;
