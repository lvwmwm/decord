// Module ID: 9290
// Function ID: 9291
// Dependencies: [2, 9291, 5827, 9297, 9298, 5830]

// Module 9290
import sortByMatchScoreDefault from "sortByMatchScore" /* 5830 */;
import AutocompleterDefault from "Autocompleter" /* 9291 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9297 */;
import _modDef9298 from "module_9298" /* 9298 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5827 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9298;
export const sortByMatchScore = sortByMatchScoreDefault;
